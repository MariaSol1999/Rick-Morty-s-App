import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = (e) => {
      const { value } = e.target;
      console.log(value)
      setCharacter(value)
   }

   return (
      <div className="input">
         <input type='search' placeholder='Buscar'  onChange={handleChange} />
      <button onClick={() => props.onSearch(character)}>Agregar</button> 
      </div>
   );
}





// import { useState } from "react"
// import styled from "styled-components"


// const DivSearch = styled.div`
// padding: 1em;
// display: flex;
// justify-content: center;
// `;

// const Btn = styled.button`
// border-radius: 0.5em;
// margin-left: 0.5em;
// padding: 0.5em;
// border: solid #06d6a0;
// color: #370617;
// font-weight: 700;
// font-size: 1em;
// &:hover {
//    background-color: #ffd60a;
// }
// `;

// const Input = styled.input`
// border-radius: 0.5em;
// margin-left: 0.5em;
// padding: 0.5em;
// border: solid #06d6a0;
// color: #370617;
// font-weight: 700;
// font-size: 1em;
// &:hover {
//    background-color: #ffd60a;
// }
// `;

// export default function SearchBar(props) {
//    const { onSearch } = props;
//    const [character, setCharacter] =
//    useState("");

//    const handleChange = (evento) => {
//       setCharacter(evento.target.value)
//    }

//    return (
//       <DivSearch>
//          <Input type="search" value=
//          {character} onChange={handleChange} />
//          <Btn onClick={() => onSearch
//          (character)}>Agregar</Btn>
//          </DivSearch>
//    );
// }
