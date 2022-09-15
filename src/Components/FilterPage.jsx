import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

export function FilterPage({settingcategory}){

  return (

    <>

    {/*  ----------------------------------- FILTERS BY CATEGORY ------------------------------------------- */}

    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">CATEGORY</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel onClick={()=>settingcategory("Clothing")} value="Clothing" control={<Radio />} label="Clothing" />
        <FormControlLabel onClick={()=>settingcategory("Electronics")} value="Electronics" control={<Radio />} label="Electronics" />
        <FormControlLabel onClick={()=>settingcategory("Furniture")} value="Furniture" control={<Radio />} label="Furniture" />
        <FormControlLabel onClick={()=>settingcategory("Hobby")} value="Hobby" control={<Radio />} label="Hobby" />
        <FormControlLabel onClick={()=>settingcategory("Accessories")} value="Accessories" control={<Radio />} label="Accessories" />
        <FormControlLabel onClick={()=>settingcategory("iPhone")} value="iPhone" control={<Radio />} label="iPhone" />
    
      </RadioGroup>
    </FormControl><br /><br /><br />


     

    
  
   </>
  );
}
