import * as React from 'react';
import {Search} from "./Search";
import {StyledInputBase} from "./StyledInputBase";
import SearchIcon from '@mui/icons-material/Search';
import {SearchIconWrapper} from "./SearchIconWrapper";

function PrimarySearch({handleChange}) {

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                onChange={handleChange}
                placeholder="Search…"
            />
        </Search>
    );
}

export default PrimarySearch;