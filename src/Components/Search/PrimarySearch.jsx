import * as React from "react";
import { Search } from "./Search.jss";
import { StyledInputBase } from "./StyledInputBase.jss";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper } from "./SearchIconWrapper.jss";

function PrimarySearch(props) {
    const { handleChange, ...other } = props;

    return (
        <Search {...other}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onChange={handleChange} placeholder="Search…" />
        </Search>
    );
}

export default PrimarySearch;
