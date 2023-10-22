import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortButton } from './sort-button';

const icon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
        />
    </svg>
);

describe('SortButton', () => {
    const sortButton = {
        label: 'Price',
        labelPrefix: 'Sort by ',
        value: 'price',
        checked: false,
        onSelect: () => jest.fn(),
        icon: icon,
    };

    it('renders the sort button with the correct text', () => {
        render(<SortButton {...sortButton} />);

        const labelText = screen.getByText('Sort by', {
            exact: false,
        });
        expect(labelText.textContent).toEqual('Sort by Price');
    });

    it("when clicked the button's onSelect function is called", () => {
        const onSelect = jest.fn();
        render(<SortButton {...sortButton} onSelect={onSelect} />);

        const button = screen.getByText('Sort by', {
            exact: false,
        });

        act(() => {
            button.click();
        });

        expect(onSelect).toHaveBeenCalled();
    });

    it("When clicked the button's icon changes color", () => {
        render(<SortButton {...sortButton} checked={true} />);

        const labelText = screen.getByText('Sort by', {
            exact: false,
        });

        act(() => {
            labelText.click();
        });

        expect(labelText.closest('label')).toHaveClass(
            'bg-blue-900 text-white'
        );
    });
});
