//import React from 'react';
import { useNavigate } from 'react-router-dom';
import BuyServicesModal from './components/PopUps/BuyServicesModal';

import "./EzkaroForm.css";
export const EzKaroForm = () => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate('/main');
   }

   return (
      <>
         <div className='formbox'>
            {/* <button className='closebtn' onClick={handleClick} >X</button> */}
            <div >
               <BuyServicesModal onClose={handleClick} />
            </div>
         </div>
      </>
   )
}

export default EzKaroForm;