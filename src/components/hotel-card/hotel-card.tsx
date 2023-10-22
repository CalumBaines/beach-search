import React, { useState } from 'react';
import { ButtonWithPrice } from '../button-with-price/button-with-price';
import { Hotel } from '../../types/hotel';
import Image from 'next/image';
import { StarRating } from '../star-rating/star-rating';
import { OccupantsInfo } from '../occupants-info/occupants-info';
import { DateInfo } from '../date-info/date-info';

export const HotelCard = ({
    name,
    location,
    rating,
    occupants,
    dateOfArrival,
    dateOfDeparture,
    centAmount,
    image,
    departureAirport,
    info,
}: Hotel) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <section data-testid="hotel-card" className="bg-white">
            <div className="md:flex">
                <div className="overflow-hidden md:w-4/6 relative">
                    <Image
                        className="object-cover h-full w-full"
                        width={900}
                        height={400}
                        src={image}
                        alt={name}
                    />
                    <button
                        onClick={handleShowInfo}
                        className="cursor-pointer absolute bottom-0 z-10 bg-white py-2 px-4 text-blue-800 flex"
                    >
                        <span>
                            <strong>Read {showInfo ? 'less' : 'more'}</strong>{' '}
                            about this hotel
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={`w-6 h-6 ml-8 font-bold ${
                                showInfo ? 'rotate-180' : ''
                            }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="p-4 md:w-2/6">
                    <div className="pb-2">
                        <h2 className=" text-lg font-bold text-blue-700">
                            {name}
                        </h2>
                        <p className="text-gray-400 text-sm">{location}</p>
                    </div>
                    <div className="pb-4">
                        <StarRating rating={rating} />
                    </div>
                    <div className="text-gray-700 text-sm pb-4">
                        <OccupantsInfo {...occupants} />
                        <DateInfo
                            dateOfArrival={dateOfArrival}
                            dateOfDeparture={dateOfDeparture}
                        />
                        <p>
                            Departing from <strong>{departureAirport}</strong>
                        </p>
                    </div>
                    <ButtonWithPrice centAmount={centAmount}>
                        Book now
                    </ButtonWithPrice>
                </div>
            </div>
            {showInfo && (
                <div className="p-4">
                    <h3 className="text-blue-800 pb-4">
                        <strong>Overview</strong>
                    </h3>
                    <p>{info}</p>
                </div>
            )}
        </section>
    );
};
