// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
// import { useState, useEffect } from "react";


// const AdvancedSearchForm = () => {
//   const { register, control, handleSubmit } = useForm();
//   const [recipes, setRecipes] = useState("");


//   useEffect(() => {
//     console.log("Recipes:", recipes);
//   }, [recipes]);

//   const onSubmit = async (data,event) => {
//     event.preventDefault()
//     console.log("Form data: ", data);
//     const includeIngredients = data.includeIngredients;
//     const maxCal = data.maxCal;
//     const minProtein = data.minProtein;

//     const valuesObject = {
//       includeIngredients: includeIngredients,
//       maxCal: maxCal,
//       minProtein: minProtein,
//     };
//     console.log("Values list:", valuesObject);
//     console.log(valuesObject.includeIngredients);

//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&maxCal=${valuesObject.maxCal}&includeIngredients=${includeIngredients}&minProtein=${minProtein}`
//       );

//       if (!response.ok) {
//         throw new Error("API request failed");
//       }

//       const responseData = await response.json();
//       setRecipes(responseData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }

    
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="includeIngredients"> Include Ingredients: </label>
//           <input
//             type="text"
//             id="includeIngredients"
//             {...register("includeIngredients", { pattern: /^[A-Za-z]+$/i })}
//           />
//         </div>

//         <div>
//           <label htmlFor="maxCal"> Maximum Calorie: </label>
//           <input type="number" id="maxCal" {...register("maxCal", { min: 1 })} />
//         </div>

//         <div>
//           <label htmlFor="minProtein"> Minimum Protein: </label>
//           <input type="number" id="minProtein" {...register("minProtein")} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <DevTool control={control} />
//     </>
//   );
// };

// export default AdvancedSearchForm;

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const AdvancedSearchForm = () => {
  const { register, control, handleSubmit } = useForm();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("Recipes:", recipes);
  }, [recipes]);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log("Form data: ", data);
    const includeIngredients = data.includeIngredients;
    const maxCal = data.maxCal;
    const minProtein = data.minProtein;

    const valuesObject = {
      includeIngredients: includeIngredients,
      maxCal: maxCal,
      minProtein: minProtein,
    };
    console.log("Values list:", valuesObject);
    console.log(valuesObject.includeIngredients);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&maxCal=${valuesObject.maxCal}&includeIngredients=${includeIngredients}&minProtein=${minProtein}`
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const responseData = await response.json();
      setRecipes(responseData.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Move the return statement outside the onSubmit function
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="includeIngredients"> Include Ingredients: </label>
          <input
            type="text"
            id="includeIngredients"
            {...register("includeIngredients", { pattern: /^[A-Za-z]+$/i })}
          />
        </div>

        <div>
          <label htmlFor="maxCal"> Maximum Calorie: </label>
          <input type="number" id="maxCal" {...register("maxCal", { min: 1 })} />
        </div>

        <div>
          <label htmlFor="minProtein"> Minimum Protein: </label>
          <input type="number" id="minProtein" {...register("minProtein")} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <Grid>
        {recipes.map((item) => (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4> {item.title}</h4>
            </Link>
          </Card>
        ))}
      </Grid>

      <DevTool control={control} />
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default AdvancedSearchForm;
