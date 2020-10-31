import React from 'react';
import Globalstats from './globalstats'
import AllCountries from './AllCountries'
  



export default function FullWidthGrid({currentScreen}) {
  
  if(currentScreen=== 0)
    return <Globalstats />
  else if(currentScreen=== 1)
    return <AllCountries />
  
  
  
  
}
