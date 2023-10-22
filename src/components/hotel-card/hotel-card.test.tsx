import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HotelCard } from './hotel-card';
import { act } from 'react-dom/test-utils';

const hotel = {
    id: '1',
    name: 'Hotel Name',
    location: 'Hotel Location',
    rating: 5,
    occupants: {
        adults: 2,
        children: 2,
        infants: 1,
    },
    dateOfArrival: '2024-07-03',
    dateOfDeparture: '2024-07-10',
    centAmount: 50000,
    image: 'https://images.unsplash.com/photo-1522708323590-71a2a9a1fae4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjB3b3JsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    departureAirport: 'East Midlands',
    info: 'Hotel Info',
};

describe('HotelCard', () => {
    describe('Hotel card is rendered correctly', () => {
        it('renders hotel name', () => {
            render(<HotelCard {...hotel} />);
            expect(screen.getByText('Hotel Name')).toBeInTheDocument();
        });

        it('renders hotel location', () => {
            render(<HotelCard {...hotel} />);
            expect(screen.getByText('Hotel Location')).toBeInTheDocument();
        });

        it('renders hotel price', () => {
            render(<HotelCard {...hotel} />);
            expect(screen.getByText('£500')).toBeInTheDocument();
        });

        it("renders departure airport's name", () => {
            render(<HotelCard {...hotel} />);
            expect(screen.getByText('East Midlands')).toBeInTheDocument();
        });
    });

    describe('when read more is clicked', () => {
        it('renders hotel info', async () => {
            render(<HotelCard {...hotel} />);

            const button = screen.getByText('Read more');

            act(() => {
                button.click();
            });
            await waitFor(() => {
                expect(screen.getByText('Hotel Info')).toBeInTheDocument();
            });
        });

        it('changes text to read less', async () => {
            render(<HotelCard {...hotel} />);
            const button = screen.getByText('Read more');

            act(() => {
                button.click();
            });

            await waitFor(() => {
                expect(screen.getByText('Read less')).toBeInTheDocument();
            });
        });

        it('when read less is clicked hotel info is hidden', async () => {
            render(<HotelCard {...hotel} />);

            act(() => {
                screen.getByText('Read more').click();
            });

            await waitFor(() => {
                expect(screen.getByText('Hotel Info')).toBeInTheDocument();
            });

            act(() => {
                screen.getByText('Read less').click();
            });

            await waitFor(() => {
                expect(
                    screen.queryByText('Hotel Info')
                ).not.toBeInTheDocument();
            });
        });
    });
});
