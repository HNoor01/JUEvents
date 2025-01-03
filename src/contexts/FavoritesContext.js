import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [interestedEvents, setInterestedEvents] = useState([]);

    const toggleInterestedEvent = (event) => {
        setInterestedEvents((prevEvents) => {
            const isAlreadyInterested = prevEvents.some(
                (e) => e.id === event.id
            );
            if (isAlreadyInterested) {
                // Remove the event
                return prevEvents.filter((e) => e.id !== event.id);
            } else {
                // Add the event
                return [...prevEvents, event];
            }
        });
    };

    return (
        <FavoritesContext.Provider
            value={{ interestedEvents, toggleInterestedEvent }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
