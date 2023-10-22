import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortProvider } from '../../context/sort-context';
import { SearchResults } from './search-results';
import { act } from 'react-dom/test-utils';

describe('Sort', () => {
    beforeEach(() => {
        render(
            <SortProvider>
                <SearchResults />
            </SortProvider>
        );
    });

    it('renders all three results cards', () => {
        expect(screen.getAllByTestId('hotel-card')).toHaveLength(3);
    });

    describe('when the price option is clicked', () => {
        it(' the first result is the lowest price', () => {
            const priceSortOption = screen.getByTestId('price-sort-button');

            act(() => {
                priceSortOption.click();
            });

            const results = screen.getAllByTestId('hotel-card');
            expect(results[0]).toHaveTextContent('£499.99');
        });

        it(' the last result is the highest price', () => {
            const priceSortOption = screen.getByTestId('price-sort-button');

            act(() => {
                priceSortOption.click();
            });

            const results = screen.getAllByTestId('hotel-card');
            expect(results[2]).toHaveTextContent('£1,136.50');
        });
    });

    describe('when the rating option is clicked', () => {
        it(' the first result is the highest rated', () => {
            const ratingSortOption = screen.getByTestId('rating-sort-button');

            act(() => {
                ratingSortOption.click();
            });

            const results = screen.getAllByTestId('hotel-card');
            const result = results[0];

            expect(within(result).getAllByTestId('star').length).toEqual(5);
        });

        it(' the last result is the lowest rated', () => {
            const ratingSortOption = screen.getByTestId('rating-sort-button');

            act(() => {
                ratingSortOption.click();
            });

            const results = screen.getAllByTestId('hotel-card');
            const result = results[2];

            expect(within(result).getAllByTestId('star').length).toEqual(3);
        });
    });

    describe('when the alphabetically option is clicked', () => {
        it(' the first result is the alphabetically first', () => {
            const alphabeticallySortOption = screen.getByTestId(
                'alphabetically-sort-button'
            );

            act(() => {
                alphabeticallySortOption.click();
            });

            const results = screen.getAllByTestId('hotel-card');
            expect(results[0]).toHaveTextContent('Aguamarina Golf Hotel');
        });

        it(' the last result is the alphabetically last', () => {
            const alphabeticallySortOption = screen.getByTestId(
                'alphabetically-sort-button'
            );

            act(() => {
                alphabeticallySortOption.click();
            });

            const results = screen.getAllByTestId('hotel-card');
            expect(results[2]).toHaveTextContent('Las Piramides Resort');
        });
    });
});
