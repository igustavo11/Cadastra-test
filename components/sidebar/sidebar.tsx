"use client";

import * as React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import home from "../../public/images/home-line.svg";
import iconavatar from "../../public/images/avatar.png";
import logo from "../../public/images/logoCadastra.svg";
import Image from "next/image";
import clientes from "../../public/images/clientes.svg";

export default function Sidebar() {
  return (
    <div className="h-screen min-w-[280px] flex flex-col justify-between bg-white p-4 shadow-md">
      <div className="space-y-6 ml-1 font-semibold ">
        <div className="flex h-16 items-center justify-center">
          <Image src={logo} alt="Logo" />
        </div>

        <div className="space-y-2 ">
          <div className="flex items-center gap-3  rounded-md px-3 py-2 text-base text-gray-500 font-semibold hover:bg-card-background hover:text-primary">
            <Image src={home} alt="home" />
            <span>Home</span>
          </div>

          <div className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-semibold bg-card-background text-primary">
            <Image src={clientes} alt="clientes" />
            <span>Clientes</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar>
            <AvatarImage src={iconavatar.src} alt="Avatar do usuário" />
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">Fernanda de Souza</p>
            <p className="text-gray-500">fernanda.souza</p>
          </div>
        </div>
      </div>
    </div>
  );
}
