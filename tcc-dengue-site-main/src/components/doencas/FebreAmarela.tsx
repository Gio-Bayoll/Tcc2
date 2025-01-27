import React from "react";
import febreAmarela from "@/assets/febre-amarela.jpg";
import sintomasfebre from "@/assets/sintomas-febre.jpeg";
import complicacoes from "@/assets/febre-amarela-sintomas-sintomas-da-febre-amarela-sintomas-febre-amarela.jpg";
import prevencao from "@/assets/febre-amarela-info.png";

const FebreAmarela: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-500">
          O que é a Febre Amarela?
        </h1>
      </header>

      <section className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-6">
          A febre amarela é uma doença viral transmitida por mosquitos,
          incluindo o Aedes aegypti em áreas urbanas e outros mosquitos em áreas
          de floresta. A infecção pode ser leve ou causar febre alta, dor
          muscular, e em casos graves, danos ao fígado que resultam em icterícia
          (coloração amarelada da pele), o que dá nome à doença.
        </p>

        <div className="mb-6">
          <img
            src={febreAmarela}
            alt="Mosquito transmissor da Febre Amarela"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Mosquito transmissor da Febre Amarela
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Sintomas da Febre Amarela
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700 mb-6">
          <li>Febre alta</li>
          <li>Calafrios</li>
          <li>Dor de cabeça intensa</li>
          <li>Dor muscular, especialmente nas costas</li>
          <li>Náusea e vômitos</li>
          <li>Fadiga e fraqueza</li>
          <li>Icterícia (amarelamento da pele e dos olhos)</li>
        </ul>

        <div className="mb-6">
          <img
            src={sintomasfebre}
            alt="Sintomas da Febre Amarela"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Sintomas da Febre Amarela
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Complicações Graves
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Em casos graves, a febre amarela pode causar danos ao fígado e outros
          órgãos, levando a sangramentos internos, insuficiência hepática e
          renal. Uma característica grave da doença é a icterícia, que causa a
          coloração amarelada da pele. Sem tratamento adequado, pode levar à
          morte.
        </p>

        <div className="mb-6">
          <img
            src={complicacoes}
            alt="Complicações da Febre Amarela"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Complicações graves da Febre Amarela
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Prevenção da Febre Amarela
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A principal forma de prevenir a febre amarela é por meio da vacinação.
          A vacina é eficaz e segura, sendo recomendada para pessoas que vivem
          ou viajam para áreas de risco. Além disso, é importante evitar picadas
          de mosquito com o uso de repelentes e roupas adequadas, e eliminar
          criadouros de mosquitos, como recipientes com água parada.
        </p>

        <div className="mb-6">
          <img
            src={prevencao}
            alt="Prevenção da Febre Amarela"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Medidas preventivas contra a Febre Amarela
          </p>
        </div>
      </section>
    </div>
  );
};

export default FebreAmarela;
