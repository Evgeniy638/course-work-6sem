import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { FC, useCallback } from 'react';

import './index.css';

interface SearchInputProps {
    loading?: boolean;
    options: string[];
    inputValue: string;
    onInputChange: (value: string) => void;
    onChange: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({
    options,
    inputValue,
    loading,
    onInputChange,
    onChange
}) => {
    const handleInput = useCallback((event, value) => onInputChange(value), [onInputChange]);
    const handleChange = useCallback((event, value) => onChange(value || ''), [onChange]);

    return (
        <Autocomplete
            className="SearchInput"
            freeSolo
            loading={loading}
            inputValue={inputValue}
            options={options}
            onInputChange={handleInput}
            onChange={handleChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Поиск"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

export default SearchInput;
