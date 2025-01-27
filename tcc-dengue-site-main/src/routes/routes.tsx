// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "@/pages/error";
import Doencas from "@/pages/doencas";
import AcompanharCasos from "@/pages/acompanharCasos";
import EncontrarPostos from "@/pages/encontrarPostos";
import Sintomas from "@/pages/verificarSintomar";
import Dengue from "@/pages/Casos/Dengue";
import Zika from "@/pages/Casos/zika";
import Chikungunya from "@/pages/Casos/chikungunya";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/" element={<Home />} />
      <Route path="Doencas/:tipo" element={<Doencas />} />
      <Route path="AcompanharCasos" element={<AcompanharCasos />} />
      <Route path="EncontrarPostos" element={<EncontrarPostos />} />
      <Route path="Sintomas" element={<Sintomas />} />

      <Route path="AcompanharCasos/Dengue" element={<Dengue />} />
      <Route path="AcompanharCasos/Zika" element={<Zika />} />
      <Route path="AcompanharCasos/Chikungunya" element={<Chikungunya />} />
      {/* Rota de erro */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;

