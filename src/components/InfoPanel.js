import React from 'react';
import Globalstats from './globalstats'
import AllCountries from './AllCountries'
import DropDown from './DropDown'  



export default function FullWidthGrid({currentScreen}) {
  
  if(currentScreen=== 0)
    return <Globalstats />
  else if(currentScreen=== 1)
    return <AllCountries />
  
  
  
  
}
