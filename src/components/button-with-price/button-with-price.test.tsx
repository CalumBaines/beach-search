import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonWithPrice } from './button-with-price';

describe('ButtonWithPrice', () => {
    it('renders a button with a price', () => {
        render(<ButtonWithPrice centAmount={50055}>Book Now</ButtonWithPrice>);
        expect(screen.getByText('Book Now')).toBeInTheDocument();
        expect(screen.getByText('£500.55')).toBeInTheDocument();
    });

    describe('formats price correctly', () => {
        it('adds two trailing digits', () => {
            render(
                <ButtonWithPrice centAmount={50050}>Book Now</ButtonWithPrice>
            );
            expect(screen.getByText('£500.50')).toBeInTheDocument();
        });

        it('removes trailing .00 when whole number', () => {
            render(
                <ButtonWithPrice centAmount={50000}>Book Now</ButtonWithPrice>
            );
            expect(screen.getByText('£500')).toBeInTheDocument();
        });

        it('formats thousand correctly', () => {
            render(
                <ButtonWithPrice centAmount={5879000}>Book Now</ButtonWithPrice>
            );
            expect(screen.getByText('£58,790')).toBeInTheDocument();
        });
    });
});
