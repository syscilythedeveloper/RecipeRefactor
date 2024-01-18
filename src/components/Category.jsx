import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';




const Category = () => {
  return (
    <List activeClassName="activeClass">


      <SLink to={'/cuisine/Caribbean'}>
        <FaHamburger />
        <h4>Caribbean</h4>
      </SLink>

      <SLink to={'/cuisine/Mexican'}>
        <FaHamburger />
        <h4>Mexican</h4>
      </SLink>

      <SLink to={'/cuisine/African'}>
        <GiNoodles />
        <h4>African</h4>
      </SLink>

      <SLink to={'/cuisine/Indian'} >
        <GiChopsticks/>
        <h4>Indian</h4>
      </SLink>

      <SLink to={'/cuisine/American'} >
        <GiChopsticks/>
        <h4>American</h4>
      </SLink>

      <SLink to={'/cuisine/Thai'} >
        <GiChopsticks/>
        <h4>Thai</h4>
      </SLink>


    </List>
  )
}

const List = styled.div`
display:flex;
justify-content: center;
margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height:6rem;
transform: scale(0.8);

h4{
    color: white;
    font-size: 0.8rem;
}


svg{
    color: white;
    font-size: 1.5rem;
}


&.active, &.activeClass {
    background: #FFD68A;
    box-shadow: 0px 0px 10px 5px #482908;



    svg {
        color: #482908;
        
    }
    h4 {
        color: #482908;
    }

  }

&:hover {
    box-shadow: 0px 0px 15px 5px black; /* Adjusted box shadow on hover */
    transform: scale(1.05); /* Added scale transformation on hover */
  } 
`;

export default Category
