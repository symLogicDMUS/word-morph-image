/**
 * AUTHORS: 37 contributors from https://github.com/TeamWertarbyte/material-ui-chip-input/blob/master/src/ChipInput.js
 *
 * Author's Notice: Some code was adapted from Material-UI's text field.
 *         Copyright (c) 2014 Call-Em-All (https://github.com/callemall/material-ui)
 */

import React from "react";
import cx from "classnames";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { keyCodes } from "./keyCodes";
import { copy } from "../../helpers/copy";
import wordPattern from "../../regex/wordPattern";
import InputLabel from "@material-ui/core/InputLabel";
import { variantComponent } from "./variantComponent";
import FormControl from "@material-ui/core/FormControl";
import { defaultChipRenderer } from "./defaultChipRenderer";
import withStyles from "@material-ui/core/styles/withStyles";
import FormHelperText from "@material-ui/core/FormHelperText";
import { styles } from "./ChipInput.jss";
import { ClearAll } from "./ClearAll";

class ChipInput extends React.Component {
    state = {
        chips: [],
        errorText: undefined,
        focusedChip: null,
        inputValue: "",
        isClean: true,
        isFocused: false,
        chipsUpdated: false,
        prevPropsValue: [],
        numChars: 0,
    };

    constructor(props) {
        super(props);
        if (props.defaultValue) {
            this.state.chips = props.defaultValue;
        }
        this.labelRef = React.createRef();
        this.input = React.createRef();
        this.blur = this.blur.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.updateChipAtIndex = this.updateChipAtIndex.bind(this);
    }

    componentDidMount() {
        if (this.props.variant === "outlined") {
            this.labelNode = ReactDOM.findDOMNode(this.labelRef.current);
            this.forceUpdate();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.inputBlurTimeout);
    }

    static getDerivedStateFromProps(props, state) {
        let newState = null;

        if (props.value && props.value.length !== state.prevPropsValue.length) {
            newState = { prevPropsValue: props.value };
            if (props.clearInputValueOnChange) {
                newState.inputValue = "";
            }
        }

        // if change detection is only needed for clearInputValueOnChange
        if (
            props.clearInputValueOnChange &&
            props.value &&
            props.value.length !== state.prevPropsValue.length
        ) {
            newState = { prevPropsValue: props.value, inputValue: "" };
        }

        if (props.disabled) {
            newState = { ...newState, focusedChip: null };
        }

        if (!state.chipsUpdated && props.defaultValue) {
            newState = { ...newState, chips: props.defaultValue };
        }

        return newState;
    }

    /**
     * Blurs this component.
     * @public
     */
    blur() {
        if (this.input) this.actualInput.blur();
    }

    /**
     * Focuses this component.
     * @public
     */
    focus = () => {
        this.actualInput.focus();
        if (this.state.focusedChip != null) {
            this.setState({ focusedChip: null });
        }
    };

    handlePaste = (event) => {
        event.preventDefault();
        const text = event.clipboardData.getData("Text");
        const chips = text.match(wordPattern);
        if (!!chips) this.updateChips([...this.state.chips, ...chips]);
        else this.updateChips([]);
    };

    handleKeyDown = (event) => {
        const { focusedChip } = this.state;
        this._keyPressed = false;
        this._preventChipCreation = false;
        if (this.props.onKeyDown) {
            // Needed for arrow controls on menu in autocomplete scenario
            this.props.onKeyDown(event);
            // Check if the callback marked the event as isDefaultPrevented() and skip further actions
            // enter key for example should not always add the current value of the inputField
            if (event.isDefaultPrevented()) {
                return;
            }
        }
        const chips = this.props.value || this.state.chips;
        if (
            this.props.newChipKeyCodes.indexOf(event.keyCode) >= 0 ||
            this.props.newChipKeys.indexOf(event.key) >= 0
        ) {
            const result = this.handleAddChip(event.target.value);
            if (result !== false) {
                event.preventDefault();
            }
            return;
        }

        switch (event.keyCode) {
            case keyCodes.BACKSPACE:
                if (event.target.value === "") {
                    if (focusedChip != null) {
                        this.handleDeleteChip(chips[focusedChip], focusedChip);
                        if (focusedChip > 0) {
                            this.setState({ focusedChip: focusedChip - 1 });
                        }
                    } else {
                        this.setState({ focusedChip: chips.length - 1 });
                    }
                }
                break;
            case keyCodes.DELETE:
                if (event.target.value === "" && focusedChip != null) {
                    this.handleDeleteChip(chips[focusedChip], focusedChip);
                    if (focusedChip <= chips.length - 1) {
                        this.setState({ focusedChip });
                    }
                }
                break;
            case keyCodes.LEFT_ARROW:
                if (
                    focusedChip == null &&
                    event.target.value === "" &&
                    chips.length
                ) {
                    this.setState({ focusedChip: chips.length - 1 });
                } else if (focusedChip != null && focusedChip > 0) {
                    this.setState({ focusedChip: focusedChip - 1 });
                }
                break;
            case keyCodes.RIGHT_ARROW:
                if (focusedChip != null && focusedChip < chips.length - 1) {
                    this.setState({ focusedChip: focusedChip + 1 });
                } else {
                    this.setState({ focusedChip: null });
                }
                break;
            default:
                this.setState({ focusedChip: null });
                break;
        }
    };

    handleKeyUp = (event) => {
        if (
            !this._preventChipCreation &&
            (this.props.newChipKeyCodes.indexOf(event.keyCode) >= 0 ||
                this.props.newChipKeys.indexOf(event.key) >= 0) &&
            this._keyPressed
        ) {
            this.clearInput();
        } else {
            this.updateInput(event.target.value);
        }
        if (this.props.onKeyUp) {
            this.props.onKeyUp(event);
        }
    };

    handleKeyPress = (event) => {
        this._keyPressed = true;
        if (this.props.onKeyPress) {
            this.props.onKeyPress(event);
        }
    };

    handleUpdateInput = (e) => {
        if (this.props.inputValue == null) {
            this.updateInput(e.target.value);
        }

        if (this.props.onUpdateInput) {
            this.props.onUpdateInput(e);
        }
    };

    /**
     * Handles adding a chip.
     * @param {string|object} chip Value of the chip, either a string or an object (if dataSourceConfig is set)
     * @param {object=} options Additional options
     * @param {boolean=} options.clearInputOnFail If `true`, and `onBeforeAdd` returns `false`, clear the input
     * @returns True if the chip was added (or at least `onAdd` was called), false if adding the chip was prevented
     */
    handleAddChip(chip, options) {
        if (this.props.onBeforeAdd && !this.props.onBeforeAdd(chip)) {
            this._preventChipCreation = true;
            if (options != null && options.clearInputOnFail) {
                this.clearInput();
            }
            return false;
        }
        this.clearInput();
        const chips = this.props.value || this.state.chips;

        if (this.props.dataSourceConfig) {
            if (typeof chip === "string") {
                chip = {
                    [this.props.dataSourceConfig.text]: chip,
                    [this.props.dataSourceConfig.value]: chip,
                };
            }

            if (
                this.props.allowDuplicates ||
                !chips.some(
                    (c) =>
                        c[this.props.dataSourceConfig.value] ===
                        chip[this.props.dataSourceConfig.value]
                )
            ) {
                if (this.props.value && this.props.onAdd) {
                    this.props.onAdd(chip);
                } else {
                    this.updateChips([...this.state.chips, chip]);
                }
            }
            return true;
        }

        if (chip.trim().length > 0) {
            if (this.props.allowDuplicates || chips.indexOf(chip) === -1) {
                if (this.props.value && this.props.onAdd) {
                    this.props.onAdd(chip);
                } else {
                    this.updateChips([...this.state.chips, chip]);
                }
            }
            return true;
        }
        return false;
    }

    handleDeleteChip(chip, i) {
        if (!this.props.value) {
            const chips = this.state.chips.slice();
            const changed = chips.splice(i, 1); // remove the chip at index i
            if (changed) {
                let focusedChip = this.state.focusedChip;
                if (this.state.focusedChip === i) {
                    focusedChip = null;
                } else if (this.state.focusedChip > i) {
                    focusedChip = this.state.focusedChip - 1;
                }
                this.updateChips(chips, { focusedChip });
            }
        } else if (this.props.onDelete) {
            this.props.onDelete(chip, i);
        }
    }

    updateChips(chips, additionalUpdates = {}) {
        this.setState({ chips, chipsUpdated: true, ...additionalUpdates });
        if (!!this.props.onChange) {
            this.props.onChange(chips);
        }
    }

    /**
     * Clears the text field for adding new chips.
     * This only works in uncontrolled input mode, i.e. if the inputValue prop is not used.
     * @public
     */
    clearInput() {
        this.updateInput("");
    }

    clearAll() {
        this.updateInput("");
        this.updateChips([]);
    }

    updateInput(value) {
        this.setState({ inputValue: value, numChars: value.length });
    }

    /**
     * Set the reference to the actual input, that is the input of the Input.
     * @param {object} ref - The reference
     */
    setActualInputRef = (ref) => {
        this.actualInput = ref;
        if (this.props.inputRef) {
            this.props.inputRef(ref);
        }
    };

    updateChipAtIndex = (i, value) => {
        let chips = copy(this.state.chips);
        chips[i] = value;
        this.setState({ chips: chips });
    };

    render() {
        const {
            clearAll,
            isFocused,
            updateFocus,
            allowDuplicates,
            alwaysShowPlaceholder,
            blurBehavior,
            children,
            chipRenderer = defaultChipRenderer,
            classes,
            className,
            clearInputValueOnChange,
            dataSource,
            dataSourceConfig,
            defaultValue,
            delayBeforeAdd,
            disabled,
            error,
            filter,
            FormHelperTextProps,
            fullWidth,
            fullWidthInput,
            helperText,
            id,
            inputRef,
            InputLabelProps = {},
            inputValue,
            label,
            newChipKeyCodes,
            newChipKeys,
            onBeforeAdd,
            onAdd,
            onBlur,
            onDelete,
            onChange,
            onFocus,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            onUpdateInput,
            placeholder,
            readOnly,
            required,
            rootRef,
            value,
            variant,
            chipProps,
            ...other
        } = this.props;

        const chips = value || this.state.chips;
        const actualInputValue =
            inputValue != null ? inputValue : this.state.inputValue;

        const hasInput =
            (this.props.value || actualInputValue).length > 0 ||
            actualInputValue.length > 0;
        const shrinkFloatingLabel =
            InputLabelProps.shrink != null
                ? InputLabelProps.shrink
                : label != null &&
                  (hasInput || this.state.isFocused || chips.length > 0);

        const chipComponents = chips.map((chip, i) => {
            const value = dataSourceConfig
                ? chip[dataSourceConfig.value]
                : chip;
            return chipRenderer(
                {
                    value,
                    text: dataSourceConfig ? chip[dataSourceConfig.text] : chip,
                    chip,
                    handleDelete: () => this.handleDeleteChip(chip, i),
                    handleClick: () => this.setState({ focusedChip: i }),
                    updateChipAtIndex: this.updateChipAtIndex,
                    refocusParent: () => {
                        this.input.current.focus();
                        this.actualInput.focus();
                    },
                    className: classes.chip,
                    chipProps,
                },
                i
            );
        });

        const InputMore = {};
        if (variant === "outlined") {
            InputMore.notched = shrinkFloatingLabel;
            InputMore.labelWidth =
                (shrinkFloatingLabel &&
                    this.labelNode &&
                    this.labelNode.offsetWidth) ||
                0;
        }

        if (variant !== "standard") {
            InputMore.startAdornment = (
                <React.Fragment>{chipComponents}</React.Fragment>
            );
        }

        const InputProps = {
            disableUnderline: true,
            endAdornment: <ClearAll clearAll={this.clearAll} />,
        };

        const InputComponent = variantComponent[variant];

        return (
            <>
                <FormControl
                    ref={rootRef}
                    fullWidth={fullWidth}
                    className={cx(className, classes.root, {
                        [classes.marginDense]: other.margin === "dense",
                    })}
                    error={error}
                    required={chips.length > 0 ? undefined : required}
                    disabled={disabled}
                    variant={variant}
                    {...other}
                >
                    {label && (
                        <InputLabel
                            htmlFor={id}
                            classes={{
                                root: cx(classes[variant], classes.label),
                                shrink: classes.labelShrink,
                            }}
                            shrink={shrinkFloatingLabel}
                            focused={this.state.isFocused}
                            variant={variant}
                            ref={this.labelRef}
                            required={required}
                            {...InputLabelProps}
                        >
                            {label}
                        </InputLabel>
                    )}
                    <div
                        className={cx(classes[variant], classes.chipContainer, {
                            [classes.focused]: this.state.isFocused,
                            [classes.disabled]: disabled,
                            [classes.labeled]: label != null,
                            [classes.error]: error,
                        })}
                    >
                        {variant === "standard" && chipComponents}
                        <InputComponent
                            ref={this.input}
                            classes={{
                                input: cx(classes.input, classes[variant]),
                                root: cx(classes.inputRoot, classes[variant]),
                            }}
                            id={id}
                            value={actualInputValue}
                            onPaste={this.handlePaste}
                            onKeyUp={this.handleKeyUp}
                            onKeyDown={this.handleKeyDown}
                            onChange={this.handleUpdateInput}
                            onKeyPress={this.handleKeyPress}
                            inputRef={this.setActualInputRef}
                            onFocus={() => updateFocus(true)}
                            onBlur={() => updateFocus(false)}
                            disabled={disabled}
                            fullWidth={fullWidthInput}
                            placeholder={
                                (!hasInput &&
                                    (shrinkFloatingLabel || label == null)) ||
                                alwaysShowPlaceholder
                                    ? placeholder
                                    : null
                            }
                            readOnly={readOnly}
                            {...InputProps}
                            {...InputMore}
                        />
                    </div>
                    {helperText && (
                        <FormHelperText
                            {...FormHelperTextProps}
                            className={
                                FormHelperTextProps
                                    ? cx(
                                          FormHelperTextProps.className,
                                          classes.helperText
                                      )
                                    : classes.helperText
                            }
                        >
                            {helperText}
                        </FormHelperText>
                    )}
                </FormControl>
            </>
        );
    }
}
ChipInput.propTypes = {
    /** Allows duplicate chips if set to true. */
    allowDuplicates: PropTypes.bool,
    /** If true, the placeholder will always be visible. */
    alwaysShowPlaceholder: PropTypes.bool,
    /** Behavior when the chip input is blurred: `'clear'` clears the input, `'add'` creates a chip and `'ignore'` keeps the input. */
    blurBehavior: PropTypes.oneOf(["clear", "add", "add-or-clear", "ignore"]),
    /** A function of the type `({ value, text, chip, isFocused, isDisabled, isReadOnly, handleClick, handleDelete, className }, key) => node` that returns a chip based on the given properties. This can be used to customize chip styles.  Each item in the `dataSource` array will be passed to `chipRenderer` as arguments `chip`, `value` and `text`. If `dataSource` is an array of objects and `dataSourceConfig` is present, then `value` and `text` will instead correspond to the object values defined in `dataSourceConfig`. If `dataSourceConfig` is not set and `dataSource` is an array of objects, then a custom `chipRenderer` must be set. `chip` is always the raw value from `dataSource`, either an object or a string. */
    chipRenderer: PropTypes.func,
    /** Whether the input value should be cleared if the `value` prop is changed. */
    clearInputValueOnChange: PropTypes.bool,
    /** Data source for auto complete. This should be an array of strings or objects. */
    dataSource: PropTypes.array,
    /** Config for objects list dataSource, e.g. `{ text: 'text', value: 'value' }`. If not specified, the `dataSource` must be a flat array of strings or a custom `chipRenderer` must be set to handle the objects. */
    dataSourceConfig: PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
    /** The chips to display by default (for uncontrolled mode). */
    defaultValue: PropTypes.array,
    /** Whether to use `setTimeout` to delay adding chips in case other input events like `onSelection` need to fire first */
    delayBeforeAdd: PropTypes.bool,
    /** Disables the chip input if set to true. */
    disabled: PropTypes.bool,
    /** Disable the input underline. Only valid for 'standard' variant */
    disableUnderline: PropTypes.bool,
    /** Props to pass through to the `FormHelperText` component. */
    FormHelperTextProps: PropTypes.object,
    /** If true, the chip input will fill the available width. */
    fullWidth: PropTypes.bool,
    /** If true, the input field will always be below the chips and fill the available space. By default, it will try to be beside the chips. */
    fullWidthInput: PropTypes.bool,
    /** Helper text that is displayed below the input. */
    helperText: PropTypes.node,
    /** Props to pass through to the `InputLabel`. */
    InputLabelProps: PropTypes.object,
    /** Use this property to pass a ref callback to the native input component. */
    inputRef: PropTypes.func,
    /** The input value (enables controlled mode for the text input if set). */
    inputValue: PropTypes.string,
    /* The content of the floating label. */
    label: PropTypes.node,
    /** The key codes (`KeyboardEvent.keyCode`) used to determine when to create a new chip. */
    newChipKeyCodes: PropTypes.arrayOf(PropTypes.number),
    /** The keys (`KeyboardEvent.key`) used to determine when to create a new chip. */
    newChipKeys: PropTypes.arrayOf(PropTypes.string),
    /** Callback function that is called when a new chip was added (in controlled mode). */
    onAdd: PropTypes.func,
    /** Callback function that is called with the chip to be added and should return true to add the chip or false to prevent the chip from being added without clearing the text input. */
    onBeforeAdd: PropTypes.func,
    /** Callback function that is called when the chips change (in uncontrolled mode). */
    onChange: PropTypes.func,
    /** Callback function that is called when a new chip was removed (in controlled mode). */
    onDelete: PropTypes.func,
    /** Callback function that is called when the input changes. */
    onUpdateInput: PropTypes.func,
    /** A placeholder that is displayed if the input has no values. */
    placeholder: PropTypes.string,
    /** Makes the chip input read-only if set to true. */
    readOnly: PropTypes.bool,
    /** The chips to display (enables controlled mode if set). */
    value: PropTypes.array,
    /** The variant of the Input component */
    variant: PropTypes.oneOf(["outlined", "standard", "filled"]),
};
ChipInput.defaultProps = {
    allowDuplicates: false,
    // blurBehavior: "clear",
    clearInputValueOnChange: false,
    delayBeforeAdd: false,
    disableUnderline: true,
    newChipKeyCodes: [13],
    newChipKeys: ["Enter"],
    variant: "standard",
};

export default withStyles(styles, { name: "WAMuiChipInput" })(ChipInput);
