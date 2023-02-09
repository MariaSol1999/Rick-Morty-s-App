import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module..css"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../Redux/actions";




const Title = styled.h1`
   color: beige;
   font-weight: bold;
   display: flex;
   justify-content: center;
`;

const Text = styled.h2`
   color: #efe;
   font-size: 1.2rem;
   font-weight: 400;
   display: flex;
   justify-content: center;
`;

const Favorites = (props) => {
    const { myFavorites } = useSelector (state => state);

    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onChange={handlerOrder} >
                    <option value="order" disabled= 'disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendent</option>
                </select>
                <select onChange={handlerFilter} >
                    <option value="filter" disabled= 'disabled'>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                    </select>
            </div>
            {
                    myFavorites.map((character) => {
                        return (
                            <div>
                            <div className={styles.container}>
                            <div className={styles.buttonContainer}>
                                <img src={character.image} alt = {character.name} />
                                </div>

                                </div>
                                <div>
                                <Link to={`/detail/${character.id}`} style={{textDecoration: 'none'}}><Title>{props.name}</Title></Link>
                                </div>

                                <div className={styles.textContainer}>
                                    <Text>{props.species}</Text>
                                    <Text>{props.gender}</Text>
                                </div>
                                </div>
                                

                        )
                        
                    })
            }
            </div>
    )}

export default Favorites;