import React from "react";
import Chip from "@material-ui/core/Chip";
import { ChipTextField } from "./ChipTextField";
import ImgUploadAvatar from "./ImgUploadAvatar";

export const defaultChipRenderer = (
    {
        value,
        text,
        handleClick,
        handleDelete,
        updateChipAtIndex,
        refocusParent,
        className,
        chipProps,
    },
    key
) => (
    <Chip
        key={key}
        className={className}
        onClick={handleClick}
        onDelete={handleDelete}
        label={
            <ChipTextField
                index={key}
                defaultValue={text}
                refocusParent={refocusParent}
                updateChipAtIndex={updateChipAtIndex}
            />
        }
        avatar={<ImgUploadAvatar key={key} word={text} index={key} />}
        {...chipProps}
    />
);
