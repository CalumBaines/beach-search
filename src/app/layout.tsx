'use client';
import './globals.css';
import { SortProvider } from '../context/sort-context';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <SortProvider>{children}</SortProvider>
            </body>
        </html>
    );
}
