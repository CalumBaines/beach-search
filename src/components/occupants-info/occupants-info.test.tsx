import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OccupantsInfo } from './occupants-info';

describe('OccupantsInfo', () => {
    it('renders multiple occupants correctly', () => {
        render(
            <OccupantsInfo
                {...{
                    adults: 2,
                    children: 2,
                    infants: 2,
                }}
            />
        );

        const occupants = screen.getByText('Adults', {
            exact: false,
        });
        expect(occupants.textContent).toEqual(
            '2 Adults, 2 Children, 2 Infants'
        );
    });

    it('renders single occupant correctly', () => {
        render(
            <OccupantsInfo
                {...{
                    adults: 1,
                    children: 1,
                    infants: 1,
                }}
            />
        );
        const occupants = screen.getByText('Adult', {
            exact: false,
        });
        expect(occupants.textContent).toEqual('1 Adult, 1 Child, 1 Infant');
    });

    it('renders adults only', () => {
        render(
            <OccupantsInfo
                {...{
                    adults: 1,
                }}
            />
        );
        const occupants = screen.getByText('Adult', {
            exact: false,
        });
        expect(occupants.textContent).toEqual('1 Adult');
    });

    it('renders adults and children only', () => {
        render(
            <OccupantsInfo
                {...{
                    adults: 1,
                    children: 1,
                }}
            />
        );
        const occupants = screen.getByText('Adult', {
            exact: false,
        });
        expect(occupants.textContent).toEqual('1 Adult, 1 Child');
    });

    it('renders adults and infant only', () => {
        render(
            <OccupantsInfo
                {...{
                    adults: 1,
                    infants: 1,
                }}
            />
        );
        const occupants = screen.getByText('Adult', {
            exact: false,
        });
        expect(occupants.textContent).toEqual('1 Adult, 1 Infant');
    });
});
