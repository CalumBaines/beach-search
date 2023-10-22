import React, { useContext, useEffect, useState } from 'react';
import { HotelCard } from '../hotel-card/hotel-card';
import resultsData from '../../api/results.json';
import { Hotel } from '../../types/hotel';
import { Sort } from '../sort/sort';
import { SortContext } from '../../context/sort-context';

export const SearchResults = () => {
    const [results, setResults] = useState<Hotel[]>([]);
    const { sortOptions } = useContext(SortContext);

    useEffect(() => {
        handleSort();
    }, [sortOptions]);

    const handleSort = () => {
        const selectedSortOption = sortOptions.find((option) => option.checked)
            ?.value;

        if (!selectedSortOption) return;

        const sortFunctions: Record<string, () => void> = {
            price: sortByPrice,
            rating: sortByRating,
            alphabetically: sortAlphabetically,
        };

        const sortingFunction = sortFunctions[selectedSortOption];
        sortingFunction();
    };

    const sortByPrice: () => void = () => {
        sort((a, b) => a.centAmount - b.centAmount);
    };

    const sortByRating: () => void = () => {
        sort((a, b) => b.rating - a.rating);
    };

    const sortAlphabetically: () => void = () => {
        sort((a, b) => a.name.localeCompare(b.name));
    };

    const sort = (sortingFunction: (a: Hotel, b: Hotel) => number) => {
        const sortedHotels = [...resultsData.hotels].sort(sortingFunction);
        setResults(sortedHotels);
    };

    return (
        <div className="p-20 grid lg:grid-cols-4 lg:gap-12">
            <div className="mb-4 lg:mb-0">
                <Sort />
            </div>
            <ul className="lg:col-span-3">
                {results.map((result) => (
                    <li key={result.id} className="mb-4">
                        <HotelCard {...result} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
