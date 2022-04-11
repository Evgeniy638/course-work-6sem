import React, { useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import { useDebounce } from 'react-use';
import { useUrlSearchParams } from '../../hooks/useUrlSearchParams';
import SearchInput from '../../molecules/SearchInput';
import { selectors, useActions } from '../../store';

let isFirst = true;

const SEARCH_QUERY_PARAMETR = 'search';

const SearchThings = () => {
    const loading = useSelector(selectors.selectThingsLoading);
    const suggest = useSelector(selectors.selectThingsSuggest);

    const { changeSuggestThings, changeLoadingThings } = useActions();
    
    const params = useUrlSearchParams();
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState<string>(params.get(SEARCH_QUERY_PARAMETR) || '');

    useDebounce(
        () => {
            if (isFirst) {
                isFirst = false;
                return;
            }

            changeLoadingThings(true);
            setTimeout(() => {
                changeSuggestThings(['аааааааааавтор'])
                changeLoadingThings(false);
            }, 1000);
        },
        300,
        [inputValue, changeSuggestThings],
    );

    const handleChange = useCallback((value: string) => {
        const search = createSearchParams({
            [SEARCH_QUERY_PARAMETR]: value || '',
        }).toString();

        navigate({ search });
    }, [navigate]);

    return (
        <SearchInput
            loading={loading}
            inputValue={inputValue}
            onInputChange={setInputValue}
            options={suggest} 
            onChange={handleChange}
        />
    )
};

export default SearchThings;
