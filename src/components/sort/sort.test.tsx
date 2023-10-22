import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortProvider } from '../../context/sort-context';
import { Sort } from './sort';
import { act } from 'react-dom/test-utils';

describe('Sort', () => {
    beforeEach(() => {
        render(
            <SortProvider>
                <Sort />
            </SortProvider>
        );
    });

    it('renders the price sort option', () => {
        expect(
            screen.getByText('Price', {
                exact: false,
            })
        ).toBeInTheDocument();
    });

    it('renders the alphabetically sort option', () => {
        expect(
            screen.getByText('Alphabetically', {
                exact: false,
            })
        ).toBeInTheDocument();
    });

    it('renders the rating sort option', () => {
        expect(
            screen.getByText('Rating', {
                exact: false,
            })
        ).toBeInTheDocument();
    });

    describe('when the when the sort options are clicked', () => {
        it('renders the price sort option as checked', () => {
            const priceSortOption = screen.getByTestId('price-sort-button');

            act(() => {
                priceSortOption.click();
            });

            expect(priceSortOption).toHaveAttribute('aria-checked', 'true');
        });

        it('renders the rating sort option as checked', () => {
            const priceSortOption = screen.getByTestId('rating-sort-button');

            act(() => {
                priceSortOption.click();
            });

            expect(priceSortOption).toHaveAttribute('aria-checked', 'true');
        });

        it('renders the alphabetically sort option as checked', () => {
            const priceSortOption = screen.getByTestId(
                'alphabetically-sort-button'
            );

            act(() => {
                priceSortOption.click();
            });

            expect(priceSortOption).toHaveAttribute('aria-checked', 'true');
        });
    });
});
