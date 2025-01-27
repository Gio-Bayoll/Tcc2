// src/pages/HomePage.tsx
import { Questions } from "@/components/Questions";
import React from "react";

const Sintomas: React.FC = () => {
  return (
    <div className="flex w-screen flex-col h-full justify-center items-center my-6">
      <h1 className="text-4xl font-semibold mb-2">Teste de Sintomas</h1>
      <h3 className="text-xl mb-6">
        Faça seu teste de sintomas para entender caso esteja com alguma doença
        do aedes
      </h3>
      <h5 className="font-light text-sm mb-6">
        Apenas selecionando a resposta já passara para a proxima questão do
        teste
      </h5>
      <Questions />
    </div>
  );
};

export default Sintomas;
