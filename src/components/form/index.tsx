import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Popover } from '@headlessui/react';
import React, { useState, ChangeEvent } from 'react';

interface InputField {
  label: string;
  placeholder: string;
}

const inputFields: InputField[] = [
  { label: 'Ərzaq', placeholder: '' },
  { label: 'Nəqliyyat', placeholder: '' },
  { label: 'Sağlamlıq və Qulluq', placeholder: '' },
  { label: 'Əyləncə və Həvəskarlıq', placeholder: '' },
  { label: 'Paltar', placeholder: '' },
  { label: 'Maliyyə Xidmətləri', placeholder: '' },
];

export default function Form() {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (label: string, value: string) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [label]: value,
    }));
  };

  return (
    <form className='w-full h-screen flex justify-center items-center bg-[#6bff70]'>
      <div className='w-[560px] h-auto bg-[#CD853F] rounded-2xl p-6'>
        <Popover className='flex justify-end'>
          <Popover.Button className='absolute text-xl text-[#312c2c] flex justify-end cursor-pointer z-20 p-1'>
            <FontAwesomeIcon icon={faCircleInfo} />
          </Popover.Button>
          <Popover.Panel className="absolute w-56 p-3  bg-white rounded-md text-sm shadow-lg z-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias, nihil, dolorum est assumenda? Illo dolore doloribus maiores, laudantium rem assumenda!</p>
          </Popover.Panel>
        </Popover>
        <div className='flex justify-center items-center mb-6'>
          <h1 className='text-3xl font-bold text-[#fff]'>Hansi Kart Size uygundur?</h1>
        </div>
        <h1 className='flex justify-center items-center mb-4 text-gray-100'>Ayliq odenislerinizi qeyd edin</h1>
        <div className='flex flex-col'>
          <div className='flex flex-wrap justify-around'>
            {inputFields.map((field, index) => (
              <div key={index} className="input-effect w-[200px]">
                <input
                  className={`effect ${inputValues[field.label] ? 'has-content' : ''}`}
                  type="number"
                  placeholder={field.placeholder}
                  value={inputValues[field.label] || ''}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(field.label, e.target.value)}
                />
                <label>{field.label}</label>
                <span className="focus-border"></span>
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center mt-6'>
            <button className='w-36 px-8 py-2 rounded-lg bg-[#fde74c] text-[#333333]'>Bir Kart</button>
            <button className='w-36 ml-4 px-8 py-2 rounded-lg bg-[#fde74c] text-[#333333]'>Coxlu Kart</button>
          </div>
        </div>
      </div>
    </form>
  );
}
