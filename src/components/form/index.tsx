// Form.jsx
import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import Loading from '../cards/loading';
import Card from '../cards/card';
import { CardData } from '../../models';
import { Link } from 'react-router-dom';


interface InputField {
  label: string;
  placeholder: string;
}

const inputFields: InputField[] = [
  { label: 'Ərzaq', placeholder: '' },
  { label: 'Nəqliyyat', placeholder: '' },
  { label: 'Sağlamlıq və Qulluq', placeholder: '' },
  { label: 'Əyləncə və Həvəskarlıq', placeholder: '' },
];


export default function Form() {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState<CardData | null>(null);

  const handleInputChange = (label: string, value: string) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [label]: value,
    }));
  };
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      const apiUrl = `${process.env.REACT_APP_BASE_URL_API}/api/recommendSingleCard`;
  
      const response = await axios.post(apiUrl, inputValues);
  
      if (!response.data) {
        throw new Error('No data received from the API');
      }
  
      const data: CardData = response.data;
      console.log('API Response:', response); 
      console.log('API-dan gələn məlumat:', data);
  
      setApiData(data);
  
    } catch (error) {
      console.error('Sorğu zamanı səhv baş verdi:', error);
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <form className='w-full h-screen flex justify-center items-center bg-[#FFC628]'>
      <div className='w-[560px] h-auto bg-[#000] rounded-2xl p-6'>
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
            <button
              className='w-36 px-8 py-2 rounded-lg bg-[#FFC628] text-[#333333]'
              onClick={handleFormSubmit}
              disabled={loading} 
            >
              {loading ? <Loading /> : 'Submit'}
              {apiData && (
                <Link to="/card">
                  <Card cardData={apiData} />
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
