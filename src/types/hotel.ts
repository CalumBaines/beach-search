export interface Hotel {
    id: string;
    name: string;
    location: string;
    rating: number;
    occupants: Occupants;
    dateOfArrival: string;
    dateOfDeparture: string;
    centAmount: number;
    image: string;
    departureAirport: string;
    info: string;
}

export interface Occupants {
    adults: number;
    children?: number;
    infants?: number;
}
