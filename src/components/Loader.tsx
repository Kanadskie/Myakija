import React from 'react';
import logo from "../images/logo.png"

export const Loader: React.FC = () => {
    return (
        <div className="text-gray-400 text-center">
            <img src={logo} alt="loading" className="animate-pulse max-h-[80px]"></img>
            <p className="text-lg font-light">Загрузка...</p>
        </div>
    )
}