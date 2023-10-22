import React from 'react';

export interface ButtonWithPriceProps {
    centAmount: number;
    children: React.ReactNode;
}

export const ButtonWithPrice = ({
    centAmount,
    children,
}: ButtonWithPriceProps) => {
    const formatPrice = (centAmount: number) => {
        const pounds = Math.floor(centAmount / 100);
        const pence = centAmount % 100;
        const formattedPence = pence.toString().padStart(2, '0');
        const formattedPrice =
            pounds.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
                maximumFractionDigits: 0,
            }) + `.${formattedPence}`;

        return pence === 0 ? formattedPrice.replace('.00', '') : formattedPrice;
    };

    return (
        <button className="rounded text-sm bg-yellow-300 py-2 px-4 text-blue-900 w-full">
            <b>{children}</b>
            <span className="block text-2xl font-bold">
                {formatPrice(centAmount)}
            </span>
        </button>
    );
};
