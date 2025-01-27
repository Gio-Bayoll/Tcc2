import React from "react";
import mosquito from "@/assets/images.jpeg";
import sintomas from "@/assets/sintomas-zika.jpg";
import transmite from "@/assets/infografico_aedes_ciclozika.jpg";
import prevencao from "@/assets/prevencao-zika.png";

const ZikaInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-500">
          O que é o Zika Vírus?
        </h1>
      </header>

      <section className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-6">
          O Zika Vírus é uma doença causada por um vírus transmitido pelo
          mosquito Aedes aegypti, o mesmo que transmite a dengue e a
          chikungunya. Ele pode causar sintomas leves em muitos casos, mas
          também pode estar associado a complicações graves, como microcefalia
          em bebês nascidos de mães infectadas durante a gravidez.
        </p>

        <div className="mb-6">
          <img
            src={mosquito}
            alt="Mosquito Aedes aegypti"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Mosquito Aedes aegypti, transmissor do Zika Vírus
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Sintomas do Zika Vírus
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700 mb-6">
          <li>Febre baixa</li>
          <li>Dor nas articulações</li>
          <li>Erupções cutâneas (exantema)</li>
          <li>Conjuntivite</li>
          <li>Dor muscular</li>
          <li>Dor de cabeça</li>
          <li>Mal-estar geral</li>
        </ul>

        <div className="mb-6">
          <img
            src={sintomas}
            alt="Sintomas do Zika Vírus"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Sintomas típicos do Zika Vírus
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Complicações Graves
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Uma das complicações mais graves do Zika Vírus é a relação com a
          microcefalia, um defeito congênito em que o bebê nasce com a cabeça
          menor que o esperado. A infecção durante a gravidez também pode causar
          outras malformações graves.
        </p>

        <div className="mb-6">
          <img
            src={transmite}
            alt="Complicações do Zika Vírus"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Microcefalia relacionada ao Zika Vírus
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Prevenção do Zika Vírus
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A prevenção do Zika Vírus é semelhante à prevenção da dengue: evitar o
          acúmulo de água parada, onde o mosquito pode se reproduzir. Mulheres
          grávidas devem tomar cuidados extras, como o uso de repelente e roupas
          de manga longa para evitar picadas de mosquito.
        </p>

        <div className="mb-6">
          <img
            src={prevencao}
            alt="Prevenção do Zika Vírus"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Medidas preventivas contra o Zika Vírus
          </p>
        </div>
      </section>
    </div>
  );
};

export default ZikaInfo;
