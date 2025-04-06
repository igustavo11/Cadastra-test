"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Client = {
  name: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
};

type ClientContextType = {
  clients: Client[];
  addClient: (client: Client) => void;
};

const ClientContext = createContext<ClientContextType | null>(null);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<Client[]>([
    { name: "Samsung" },
    { name: "Angeloni" },
    { name: "Decathlon" },
    { name: "Farmácias Raia" },
    { name: "Estácio" },
    { name: "Uber" },
    { name: "Kopenhagen" },
    { name: "Brasil Cacau" },
    { name: "Bridgestone" },
    { name: "Vivara" },
    { name: "Unilever" },
    { name: "Carrefour" },
  ]);

  const addClient = (client: Client) => setClients([...clients, client]);

  return (
    <ClientContext.Provider value={{ clients, addClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => {
  const context = useContext(ClientContext);
  if (!context) throw new Error("erro");
  return context;
};
