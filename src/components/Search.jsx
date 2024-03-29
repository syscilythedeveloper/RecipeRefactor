import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';





const Search = () => {

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
    setInput(" ")
    
  }
  
  return (
    <>
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input onChange= {(e) => setInput(e.target.value)}
        type="text" value = {input} placeholder="chicken, tomatoes, garlic"/> 
      </div>

    </FormStyle>
   
    </>
  )
}

const FormStyle =styled.form`
margin: 0rem 2rem; 

@media screen and (max-width: 450px) {
  div{
    justify-content: center;
    align-items: center;
  }
}
 
div{
  width: 100%;
  position: relative; 
  justify-content: center;
  align-content: center;
  margin: 0 auto;
}

  input{
  border: none; 
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem; 
  color: white;
  padding: 1rem 3rem;
  border: none; 
  border-radius: 1rem;
  outline: none;
  width: 100%;
  
  
}


svg{
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
  color: white; 
  
}


`

export default Search
