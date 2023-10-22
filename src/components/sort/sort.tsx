import React, { useContext } from 'react';
import { SortOption } from '../../types/sort';
import { SortContext } from '../../context/sort-context';
import { SortButton } from '../sort-button/sort-button';

export const Sort = () => {
    const { sortOptions, setSortOptions } = useContext(SortContext);

    const handleSort = (value: string) => {
        setSortOptions(
            sortOptions.map((option: SortOption) => ({
                ...option,
                checked: option.value === value,
            }))
        );
    };

    return (
        <div>
            {sortOptions.map((option: SortOption) => (
                <SortButton
                    key={option.value}
                    {...option}
                    onSelect={() => {
                        handleSort(option.value);
                    }}
                />
            ))}
        </div>
    );
};
