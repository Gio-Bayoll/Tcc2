import React from "react";
import mosquito from "@/assets/images.jpeg";
import transmite from "@/assets/infografico_aedes_ciclozika.jpg";
import prevencao from "@/assets/prevenc3a7c3a3o-da-dengue.jpg";
const DengueInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-500">O que é Dengue?</h1>
      </header>

      <section className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-6">
          A dengue é uma doença viral transmitida pelo mosquito Aedes aegypti.
          Os sintomas incluem febre alta, dor de cabeça, dor atrás dos olhos,
          dores musculares e articulares, além de erupções cutâneas. Em casos
          graves, pode evoluir para a dengue hemorrágica, que pode ser fatal.
        </p>

        <div className="mb-6">
          <img
            src={mosquito}
            alt="Mosquito Aedes aegypti"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Mosquito Aedes aegypti, transmissor da dengue
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Sintomas da Dengue
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700 mb-6">
          <li>Febre alta (acima de 39°C)</li>
          <li>Dor de cabeça intensa</li>
          <li>Dor atrás dos olhos</li>
          <li>Dores musculares e nas articulações</li>
          <li>Náuseas e vômitos</li>
          <li>Manchas vermelhas na pele</li>
        </ul>

        <div className="mb-6">
          <img
            src={transmite}
            alt="Sintomas da Dengue"
            className="w-full flex justify-center h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Sintomas comuns da dengue
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Prevenção da Dengue
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A melhor forma de prevenir a dengue é evitar o acúmulo de água em
          recipientes que possam servir de criadouros para o mosquito, como
          pneus velhos, vasos de plantas e garrafas. Além disso, o uso de
          repelentes e telas nas janelas pode ajudar a evitar picadas.
        </p>

        <div className="mb-6">
          <img
            src={prevencao}
            alt="Prevenção da Dengue"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Práticas de prevenção contra a dengue
          </p>
        </div>
      </section>
    </div>
  );
};

export default DengueInfo;
