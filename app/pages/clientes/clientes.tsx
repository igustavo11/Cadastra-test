"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface Client {
  id: string;
  name: string;
}

const allClients: Client[] = [
  { id: "1", name: "Samsung" },
  { id: "2", name: "Angeloni" },
  { id: "3", name: "Decathlon" },
  { id: "4", name: "Farmácias Raia" },
  { id: "5", name: "Estácio" },
  { id: "6", name: "Uber" },
  { id: "7", name: "Kopenhagen" },
  { id: "8", name: "Brasil Cacau" },
  { id: "9", name: "Bridgestone" },
  { id: "10", name: "Vivara" },
  { id: "11", name: "Unilever" },
  { id: "12", name: "Carrefour" },
];

export default function Clientes() {
  // funcao para fazer a busca
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();
  const upperCaseSearchTerm = searchTerm.trim().toUpperCase();

  const notNumbers = /^[0-9]+$/.test(searchTerm);

  const filteredClients = allClients.filter((client) => {
    if (lowerCaseSearchTerm === "" || notNumbers) {
      return true;
    }
    const initials = client.name.substring(0, 2).toUpperCase();
    return (
      client.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      initials.includes(upperCaseSearchTerm)
    );
  });

  return (
    <div className="p-8 mx-auto max-w-[1120px] mt-8 ">
      <div className="flex items-center justify-between mb-8 ">
        <h1 className="text-2xl font-semibold ml-7 ">Clientes</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar"
              className="pl-10 h-10 "
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <Link href="/pages/newclient">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full px-5 py-2 mr-6">
              Novo Cliente <Plus className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 ">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className=" rounded-[12px] shadow p-6 flex flex-col items-start border border-border bg-white"
          >
            <Avatar className="mb-3">
              <AvatarFallback className="bg-iconcard text-textcard font-semibold">
                {client.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm text-foreground">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
