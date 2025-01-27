import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-6xl text-gray-800">Erro 404</h1>
            <p className="text-2xl text-gray-600 mt-4">O link que você acessou está incorreto.</p>
            <Link 
                to={'/'} 
                className="mt-6 px-6 py-3 text-lg"
            >
                Voltar para a página inicial
            </Link>
        </div>
    );
};

export default ErrorPage;
