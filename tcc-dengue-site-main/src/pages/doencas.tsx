"use client"
import ChikungunyaInfo from "@/components/doencas/Chikungunya";
import DengueInfo from "@/components/doencas/Dengue";
import FebreAmarela from "@/components/doencas/FebreAmarela";
import ZikaInfo from "@/components/doencas/Zika";
import React from "react";
import { useParams, Navigate } from "react-router-dom";

const Doencas: React.FC = () => {
  const { tipo } = useParams<Record<string, string | undefined>>();
  console.log(tipo);
  const renderContent = () => {
    switch (tipo) {
      case "Dengue":
        return (
          <DengueInfo />
        );
      case "ZikaVirus":
        return (
          <ZikaInfo />
        );
      case "Chikungunya":
        return (
          <ChikungunyaInfo />
        );
      case "FebreAmarela":
        return (
          <FebreAmarela />
        );
      default:
        return <Navigate to="/erro" />
    }
  };

  return (
    <div>
      <h1 className="w-full text-center mt-4 text-6xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">Informações sobre Doenças</h1>
      {renderContent()}
    </div>
  );
};

export default Doencas;
