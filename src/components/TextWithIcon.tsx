import React from 'react';

type Props = { icon: React.ReactNode, headerText: string, text: string, imagePath: string, imageAlt: string }

export const TextWithIcon: React.FC<Props> = ({ icon, headerText, text, imagePath, imageAlt }) => {
    return (
    <div>
        <h2 className="text-2xl font-normal text-[#252422] tracking-wide mb-4">{headerText}</h2>
        <p className="text-justify font-light text-[#252422] tracking-wide leading-relaxed p-2 md:p-4 bg-[#f8f9f7] rounded-t-lg shadow-md">
            {icon}{text}
        </p>
        <img src={imagePath} alt={imageAlt} className="rounded-b-lg shadow-md"/>
    </div>
    )
}