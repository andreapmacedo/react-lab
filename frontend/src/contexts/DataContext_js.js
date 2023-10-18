import React, { createContext, useContext, useState } from 'react';

// Criar o contexto
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        clients: [
            {
                cliente: "pedro",
                email: "pedro@gmail.com"
            },
            {
                cliente: "andre",
                email: "aa.andremacedo@gmail.com"
            }
        ],
        projects: []
    });

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}

// Hook personalizado para usar os dados
export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData deve ser usado dentro de um DataProvider");
    }
    return context;
};
