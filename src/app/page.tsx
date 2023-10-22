'use client';
import { SearchResults } from '../components/search-results/search-results';

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-cyan-400 via-sky-300 to-cyan-50 min-h-screen">
            <div className="container mx-auto">
                <SearchResults />
            </div>
        </div>
    );
}
