import Card from '../Card/Card.jsx';
import React from 'react';
import styled from 'styled-components' 

const StyledCard = styled(Card)`
&:hover {
   transform: scale(1.05);
   transition: transform 0.5s;
   transition-delay: 0.5s;
}
`;

export default function Cards(props) {
   const { characters } = props;
   return (
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {characters.map(character => (
          <StyledCard
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={props.onClose}
          />
        ))}
      </div>
    );
    
}




// import Card from '../Card/Card.jsx';
// import React from 'react';
// import styled from 'styled-components' 

// const StyledCard = styled(Card)`
// &:hover {
//    transform: scale(1.05);
//    transition: transform 0.5s;
//    transition-delay: 0.5s;
// }
// `;


// export default function Cards(props) {
//    const { characters } = props;
//    return (
//       <div style={{display: 'flex', justifyContent: 'space-around'}}>
//         {characters.map(character => (
//           <StyledCard
//             key={character.name}
//             name={character.name}
//             species={character.species}
//             gender={character.gender}
//             image={character.image}
//             id={character.id}
//             onClose={props.onClose}
//           />
//         ))}
//       </div>
//     );
    
// }


// export default function Cards(props) {
//    const { characters, onClose } = props;
//    return (
//       <div className={StyleSheet.container}>
//          {characters.map((character) => 
//          <Card 
//             key={character.name}
//             name={character.name}
//             species={character.species}
//             gender={character.gender}
//             image={character.image}
//             onClose={() => onClose(character.id)} />
//           )}
//       </div>
//    );
// }