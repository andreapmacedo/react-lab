// DataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Data } from '../types';
import { downloadFile, processUploadedFile } from '../services/blobService';

const defaultData: Data = {
  clients: [],
  projects: [],
  setups: [],
  projetcTipes: [
    'Alvará', 'Habite-se', 'Regularização', 'Outros'
  ],
  records: [
    'Cliente', 'Projeto'
  ],
};

const DataContext = createContext<{
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  downloadData: () => void;
  uploadData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  data: defaultData,
  setData: () => {},
  downloadData: () => {},
  uploadData: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data>(defaultData);

  const downloadData = () => {
    downloadFile(data);
  };

  const uploadData = (e: React.ChangeEvent<HTMLInputElement>) => {
    processUploadedFile(e, newData => {
      setData(prevData => ({
        ...prevData,
        ...newData
      }));
    });
  };

  return (
    <DataContext.Provider value={{ data, setData, downloadData, uploadData }}>
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