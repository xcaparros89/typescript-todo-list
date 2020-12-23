import React,{useContext} from 'react';
import {ThemeContext} from './Context';
 
const DashBoard = () => {
  const themeMode = useContext(ThemeContext); //dark
 
  return (
    <div>
        {themeMode}
    </div>
  );
};

export default DashBoard