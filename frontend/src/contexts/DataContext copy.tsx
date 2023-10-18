import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Data, Client, Project } from '../types';

const defaultData: Data = {
  clients: [],
  projects: [],
};

const DataContext = createContext<{
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}>({
  data: defaultData,
  setData: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data>({
    clients: [
      {
        cliente: "pedro",
        email: "pedro@gmail.com",
      },
      {
        cliente: "andre",
        email: "aa.andremacedo@gmail.com",
      },
    ],
    projects: [],
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData deve ser usado dentro de um DataProvider");
  }
  return context;
};
