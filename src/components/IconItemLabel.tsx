import React from 'react';

type Props = { icon: React.ReactNode, text: string, className: string }

export const IconItemLabel: React.FC<Props> = ({ icon, text, className }) => {
    return (
    <div className="flex justify-start items-center mb-4">
        <div className="w-9 h-9 md:w-12 md:h-12 bg-[#b3c1a7] rounded-full flex items-center justify-center mr-4">
            {icon}
        </div>
        <div className={className}>
            {text}
        </div>
    </div>
    )
}