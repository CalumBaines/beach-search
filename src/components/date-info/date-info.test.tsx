import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DateInfo } from './date-info';

describe('DateInfo', () => {
    it('renders correct date of arrival', () => {
        render(
            <DateInfo
                {...{
                    dateOfArrival: '2023-10-22T00:00:00+0000',
                    dateOfDeparture: '2023-10-29T00:00:00+0000',
                }}
            />
        );

        expect(screen.getByText('22nd October 2023')).toBeInTheDocument();
    });

    it('renders correct number of days', () => {
        render(
            <DateInfo
                {...{
                    dateOfArrival: '2023-10-22T00:00:00+0000',
                    dateOfDeparture: '2023-10-29T00:00:00+0000',
                }}
            />
        );

        expect(screen.getByText('7 days')).toBeInTheDocument();
    });
});
