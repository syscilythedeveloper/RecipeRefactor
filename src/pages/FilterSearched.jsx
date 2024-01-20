import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilterSearched = () => {

  const [includeIngredients, setIncludeIngredients] = useState("");
  
  const [maxCals, setMaxCals] = useState("");
  const [minProtein, setMinProtein] = useState("");
  const params = useParams();

  useEffect(() => {
    // Destructure the properties from params.search
    let input1 = params.search
    
    const removeQuotationMarks = async (input) => {
        // Parse the JSON string
        const jsonObject = JSON.parse(input)
        console.log("here it is", jsonObject)


        setIncludeIngredients(jsonObject.includeIngredients)
        setMaxCals(jsonObject.maxCal)
        setMinProtein(jsonObject.minProtein)


        ;}     
    removeQuotationMarks(input1)


  }, [params.search]);

  useEffect(()=>{
    console.log("api use effect")
    console.log("ingredients: ", includeIngredients)
    console.log("maxcal:", maxCals)
    console.log("minProtein ", minProtein)

  }, [includeIngredients, maxCals,minProtein])




  return (
    <h1> {params.search}</h1>
  );
};

export default FilterSearched;
