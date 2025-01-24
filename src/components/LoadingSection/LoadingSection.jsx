import './LoadingSection.css'
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';

function LoadingSection({ isLoading }) {
    return (
    <>
      { isLoading ?
        <div className='loading'>
            <Preloader />
        </div> 
        : ''
      }
    </>
    )
};

export default LoadingSection;