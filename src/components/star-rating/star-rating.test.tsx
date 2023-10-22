import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StarRating } from './star-rating';

describe('StarRating', () => {
    it.each([[1], [2], [3], [4], [5]])(
        'renders correct number of stars',
        (rating) => {
            render(<StarRating rating={rating} />);
            expect(screen.getAllByTestId('star').length).toBe(rating);
        }
    );
});
