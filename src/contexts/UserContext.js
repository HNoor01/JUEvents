import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
    const [studentId, setStudentId] = useState(null); // Store studentId globally

    return (
        <UserContext.Provider value={{ studentId, setStudentId }}>
            {children}
        </UserContext.Provider>
    );
};
