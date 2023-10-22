import React from 'react';
import { format, intervalToDuration } from 'date-fns';

export interface DateInfoProps {
    dateOfArrival: string;
    dateOfDeparture: string;
}

export const DateInfo = ({ dateOfArrival, dateOfDeparture }: DateInfoProps) => {
    const formatDate = (date: string) => {
        return format(new Date(date), 'do MMMM yyyy');
    };

    const getNumberOfDays = (
        dateOfArrival: string,
        dateOfDeparture: string
    ) => {
        const arrival = new Date(dateOfArrival);
        const departure = new Date(dateOfDeparture);
        const duration = intervalToDuration({
            start: arrival,
            end: departure,
        });

        return duration.days && duration.days > 1
            ? `${duration.days} days`
            : `${duration.days} day`;
    };

    return (
        <p>
            <strong>{formatDate(dateOfArrival)}</strong> for{' '}
            <strong>{getNumberOfDays(dateOfArrival, dateOfDeparture)}</strong>
        </p>
    );
};
