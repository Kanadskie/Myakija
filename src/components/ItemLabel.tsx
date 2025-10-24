import React from 'react';

type Props = { icon: React.ReactNode, property: string }

export const ItemLabel: React.FC<Props> = ({ icon, property }) => {
    return (
    // <div className="flex justify-center bg-[#e6b483] px-1 py-1.5 rounded border border-[#252422] tracking-wide backdrop-blur-sm">
    <div className="flex justify-center items-center px-1 py-1.5 rounded border border-[#252422] tracking-wide backdrop-blur-sm">
        <div className="mr-[5px]">{icon}</div>
        <span className="text-sm font-light text-[#252422]">
            {property}
        </span>
    </div>
    )
}