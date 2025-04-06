"use client";

import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { ChevronLeft, Save } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useClientContext } from "@/lib/ClientContext";
import { toast } from "react-toastify";

export default function NewClient() {
  const { addClient } = useClientContext();

  const [brandName, setBrandName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [tiktokUrl, setTiktokUrl] = useState("");

  const handleSave = () => {
    if (brandName === "") {
      return toast.error("O nome da marca é obrigatório.");
    }

    const newClient = {
      name: brandName,
      website: websiteUrl,
      linkedin: linkedinUrl,
      instagram: instagramUrl,
      facebook: facebookUrl,
      tiktok: tiktokUrl,
    };

    addClient(newClient);
    toast.success("Cliente adicionado com sucesso!");
  };

  return (
    <div className="p-16 mx-auto w-[1160px]  mt-8 text-left bg-gray-50">
      <div className="max-w-[948px] ml-4">
        <div className="flex items-center mb-10">
          <Link href="/">
            <ChevronLeft className="w-6 h-8 mr-2" />
          </Link>

          <h1 className="text-2xl font-semibold">Novo Cliente</h1>
        </div>

        <div className="mb-6 mt-4">
          <h2 className="text-xl font-semibold">Informações da Marca</h2>
          <div className="mt-2 flex items-center">
            <label className="w-1/4 text-sm font-medium text-textcard mr-8">
              Nome da Marca
            </label>
            <Input
              type="text"
              placeholder="Nome da Marca"
              className="block w-[512px] h-[44px] mt-1"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="w-full border-t border-gray-100 my-6"></div>
          <h2 className="text-lg font-semibold">Redes da Marca</h2>
          <div className="mt-2 space-y-4">
            <div className="flex items-center">
              <label className="w-1/4 text-sm font-medium text-textcard mr-8">
                URL do Site
              </label>
              <Input
                type="text"
                placeholder="URL do site"
                className="mt-1 block w-[512px] h-[44px]"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/4 text-sm font-medium text-textcard mr-8">
                URL do LinkedIn
              </label>
              <Input
                type="text"
                placeholder="URL do LinkedIn"
                className="mt-1 block w-[512px] h-[44px]"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/4 text-sm font-medium text-textcard mr-8">
                URL ou @ do Instagram
              </label>
              <Input
                type="text"
                placeholder="URL ou @ do Instagram"
                className="mt-1 block w-[512px] h-[44px]"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/4 text-sm font-medium text-textcard mr-8">
                URL do Facebook
              </label>
              <Input
                type="text"
                placeholder="URL do Facebook"
                className="mt-1 block w-[512px] h-[44px]"
                value={facebookUrl}
                onChange={(e) => setFacebookUrl(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/4 text-sm font-medium text-textcard mr-8">
                URL do Tiktok
              </label>
              <Input
                type="text"
                placeholder="URL do Tiktok"
                className="mt-1 block w-[512px] h-[44px]"
                value={tiktokUrl}
                onChange={(e) => setTiktokUrl(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            className="bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full  min-w-[103px] min-h-[40px] px-5 py-2"
            onClick={handleSave}
          >
            Salvar <Save className="w-4 h-4 " />
          </Button>
        </div>
      </div>
    </div>
  );
}
