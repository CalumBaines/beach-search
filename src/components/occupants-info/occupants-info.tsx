import React from 'react';
import { Occupants } from '../../types/hotel';

export const OccupantsInfo = ({ adults, children, infants }: Occupants) => {
    const formatChildrenText = (children: number) => {
        return children > 1 ? 'Children' : 'Child';
    };

    const formatAdultsText = (adults: number) => {
        return adults > 1 ? 'Adults' : 'Adult';
    };

    const formatInfantsText = (infants: number) => {
        return infants > 1 ? 'Infants' : 'Infant';
    };

    return (
        <p>
            <strong>{adults}</strong> {formatAdultsText(adults)}
            {children && (
                <>
                    , <strong>{children}</strong> {formatChildrenText(children)}
                </>
            )}
            {infants && (
                <>
                    , <strong>{infants}</strong> {formatInfantsText(infants)}
                </>
            )}
        </p>
    );
};
