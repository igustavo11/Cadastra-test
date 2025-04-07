"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useClientContext } from "@/lib/ClientContext";

export default function Clientes() {
  const { clients } = useClientContext();

  // funcao para fazer a busca
  const [search, setSearch] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const lowerSearch = search.trim().toLowerCase();
  const upperSearch = search.trim().toUpperCase();

  const filteredClients = clients.filter((client) => {
    if (lowerSearch === "") {
      return true;
    }
    const initials = client.name.substring(0, 2).toUpperCase();
    return (
      client.name.toLowerCase().includes(lowerSearch) ||
      initials.includes(upperSearch)
    );
  });

  return (
    <div className="p-6 mx-auto w-[1160px] mt-8 ">
      <div className="max-w-[948px]">
        <div className="flex items-center justify-between mb-8 ">
          <h1 className="text-2xl font-semibold ml-7 ">Clientes</h1>
          <div className="flex items-center gap-4">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar"
                className="pl-10 h-10 "
                value={search}
                onChange={handleSearchChange}
              />
            </div>
            <Link href="/clientes/newclient">
              <Button className="bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full px-5 py-2 mr-6">
                Novo Cliente <Plus className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        {filteredClients.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 ">
            {filteredClients.map((client) => (
              <div
                key={client.name}
                className="max-w-[180px] max-h-[110px] rounded-[12px] shadow p-6 flex flex-col items-start border border-border bg-white"
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
        ) : (
          <div className="p-6 text-center">
            <p className="text-textcard font-medium">
              Nenhum cliente encontrado para esta pesquisa.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
