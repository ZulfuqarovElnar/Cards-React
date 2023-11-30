import React from 'react';

interface LanguageProps {
    onSelect: (language: string) => void;
    onClose: () => void;
}

export default function Language({ onSelect, onClose }: LanguageProps) {
    const handleLanguageClick = (language: string) => {
        onSelect(language);
        onClose();
    };

    return (
        <div className='p-2'>
            <div
                className='flex justify-center items-center gap-1 py-1 pr-2 hover:bg-gray-200 cursor-pointer transition-colors'
                onClick={() => handleLanguageClick('azerbaijan')}
            >
                <img className='w-9' src="images/azerbaijan.png" alt="" />
                Az
            </div>
            <div
                className='flex justify-center items-center gap-1 py-1 pr-2 hover:bg-gray-200 cursor-pointer transition-colors'
                onClick={() => handleLanguageClick('england')}
            >
                <img className='w-9' src="images/england.png" alt="" />
                En
            </div>
            <div
                className='flex justify-center items-center gap-1 py-1 pr-2 hover:bg-gray-200 cursor-pointer transition-colors'
                onClick={() => handleLanguageClick('turkey')}
            >
                <img className='w-9' src="images/turkey.png" alt="" />
                Tr
            </div>
        </div>
    );
}

