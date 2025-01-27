import React from "react";
import { Link } from "react-router-dom";

const AcompanharCasos: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      <h1 className="font-semibold my-4 text-3xl">
        Acompanhe os casos das doenças
      </h1>
      <div className="flex gap-6">
        <Link to="Dengue" className="px-12 py-4 bg-cyan-900 text-white rounded-md">
          <p>Dengue</p>
        </Link>
        <Link to="Zika" className="px-12 py-4 bg-cyan-900 text-white rounded-md">
          <p>Zika-Virus</p>
        </Link>
        <Link to="Chikungunya" className="px-12 py-4 bg-cyan-900 text-white rounded-md">
          <p>Chikungunya</p>
        </Link>
      </div>
    </div>
  );
};

export default AcompanharCasos;
