import React from "react";
import Chikungunya from '@/assets/chikungu.jpg';
import infoChiku from "@/assets/info-chikun.jpg"
import complicacoes from '@/assets/zika-dengue-chikungunya.jpg';

const ChikungunyaInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-500">
          O que é Chikungunya?
        </h1>
      </header>

      <section className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-6">
          A Chikungunya é uma doença viral transmitida principalmente pelo
          mosquito Aedes aegypti, o mesmo que transmite a dengue e o Zika vírus.
          Ela provoca febre alta e dores intensas nas articulações, sendo essa
          uma de suas principais características. O nome "Chikungunya" vem de
          uma palavra africana que significa "se contorcer de dor".
        </p>

        <div className="mb-6">
          <img
            src={Chikungunya}
            alt="Mosquito Aedes aegypti, transmissor da Chikungunya"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Mosquito Aedes aegypti, transmissor da Chikungunya
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Sintomas da Chikungunya
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700 mb-6">
          <li>Febre alta repentina</li>
          <li>Dores intensas nas articulações (mãos, pés, joelhos, etc.)</li>
          <li>Dor muscular</li>
          <li>Erupções cutâneas</li>
          <li>Dor de cabeça</li>
          <li>Fadiga extrema</li>
        </ul>

        <div className="mb-6">
          <img
            src={infoChiku}
            alt="Sintomas da Chikungunya"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Sintomas comuns da Chikungunya
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Complicações da Chikungunya
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Embora a maioria dos casos de Chikungunya não seja fatal, a doença
          pode deixar sequelas duradouras, como dores articulares crônicas que
          podem persistir por meses ou até anos. Em alguns casos, essas dores
          podem ser debilitantes, afetando a qualidade de vida das pessoas
          infectadas.
        </p>

        <div className="mb-6">
          <img
            src={complicacoes}
            alt="Complicações da Chikungunya"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            Dores articulares persistentes após infecção por Chikungunya
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Prevenção da Chikungunya
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A prevenção da Chikungunya envolve principalmente o controle dos
          mosquitos transmissores. Isso inclui eliminar os focos de água parada,
          onde o Aedes aegypti se reproduz, e usar repelentes e roupas
          protetoras para evitar picadas. Como não há vacina para Chikungunya,
          essas medidas são essenciais para prevenir a doença.
        </p>
      </section>
    </div>
  );
};

export default ChikungunyaInfo;
