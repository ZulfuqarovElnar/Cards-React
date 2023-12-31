import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import Language from './language';
import { setLanguage } from '../../store/language/actions';
import { RootState } from '../../store/language/reducers';

export default function Navbar() {
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);
  const dispatch = useDispatch();

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language));
  };

  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  
  const closePopover = () => {
    setPopoverOpen(false);
  };

  return (
    <div className='w-full flex px-6 justify-between items-center gap-5 bg-[#000]'>
      <div className='py-7 text-[#fff]'>
        <h1 className='text-2xl font-bold'>Kart10</h1>
      </div>
      <div className='flex justify-center items-center gap-5 font-medium text-[#fff] text-lg'>
        <div>
          <Link to="/about">About Us</Link>
        </div>
        <Popover>
          <Popover.Button onClick={togglePopover} className='flex rounded-full text-[#fff] hover:bg-[#ffc628] hover:text-black transition-colors cursor-pointer focus:outline-none'>
            {selectedLanguage ? (
              <img className='w-8 my-2 mx-1' src={`images/${selectedLanguage}.png`} alt={selectedLanguage} />
            ) : (
              <FontAwesomeIcon className='text-xl m-2' icon={faGlobe} />
            )}
          </Popover.Button>
          {popoverOpen && (
            <div
              className="absolute top-20 right-2 bg-white text-black rounded-lg"
              onClick={closePopover}
            >
              <Language onSelect={handleLanguageChange} onClose={closePopover}/>
            </div>
          )}
        </Popover>
      </div>
    </div>
  );
}
