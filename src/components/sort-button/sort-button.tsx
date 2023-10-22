import React from 'react';

export interface SortButtonProps {
    icon: React.ReactNode;
    checked: boolean;
    label: string;
    labelPrefix: string;
    value: string;
    onSelect: (value: string) => void;
}

export const SortButton = ({
    icon,
    checked,
    label,
    labelPrefix,
    value,
    onSelect,
}: SortButtonProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelect(event.target.value);
    };

    const labelClasses = checked
        ? 'bg-blue-900 text-white'
        : 'bg-white text-blue-800';

    return (
        <div className="flex items-center bg-white last:border-none border-b border-b-blue-900">
            <input
                id={value}
                type="radio"
                value={value}
                checked={checked}
                aria-checked={checked}
                onChange={handleInputChange}
                name="list-radio"
                className="appearance-none"
                data-testid={`${value}-sort-button`}
            />
            <label
                htmlFor={value}
                className={`cursor-pointer w-full p-4 text-sm font-medium flex ${labelClasses}`}
            >
                <span>
                    {labelPrefix}
                    <strong>{label}</strong>
                </span>
                <span
                    className={`ml-auto ${
                        checked ? 'text-white' : 'text-gray-300'
                    }`}
                >
                    {icon}
                </span>
            </label>
        </div>
    );
};
