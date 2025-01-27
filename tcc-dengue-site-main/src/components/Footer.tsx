import React from "react";

interface FooterProps {
  systemName: string;
  version: string;
  siteOwner: string;
  participants: string[];
}

const Footer: React.FC<FooterProps> = ({ systemName, version, siteOwner, participants }) => {
  return (
    <footer className="bg-cyan-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Informações do Sistema */}
          <div>
            <h3 className="text-lg font-semibold">
              Sistema: <span className="font-normal">{systemName}</span>
            </h3>
            <h3 className="text-lg font-semibold">
              Versão: <span className="font-normal">{version}</span>
            </h3>
            <h3 className="text-lg font-semibold">
              Dono do Site: <span className="font-normal">{siteOwner}</span>
            </h3>
          </div>

          {/* Lista de Participantes */}
          <div>
            <h3 className="text-lg font-semibold">Participantes:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {participants.map((participant, index) => (
                <li key={index}>{participant}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} {siteOwner}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
