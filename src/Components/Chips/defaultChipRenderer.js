import React from "react";
import Chip from "@mui/material/Chip";
import { ChipTextField } from "./ChipTextField";
import ImgUploadAvatar from "./ImgUploadAvatar";

export const defaultChipRenderer = (
    {
        text,
        src,
        handleClick,
        handleDelete,
        updateChipAtIndex,
        refocusParent,
        className,
        updatePair,
        removePair,
        chipProps,
    },
    key
) => (
    <Chip
        key={key}
        className={className}
        onClick={handleClick}
        onDelete={() => {
            removePair(key);
            handleDelete();
        }}
        label={
            <ChipTextField
                index={key}
                value={text}
                refocusParent={refocusParent}
                updateChipAtIndex={updateChipAtIndex}
            />
        }
        avatar={
            <ImgUploadAvatar
                key={key}
                word={text}
                src={src}
                index={key}
                updatePair={updatePair}
            />
        }
        {...chipProps}
    />
);
