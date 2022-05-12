import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ModalRecipe from "./Modal"

// import {Card , Button} from 'react-bootstrap'



export default function CardRecipe(props) {
    const [show, setShow] = useState(false);
    const [chosenRecipe, setChosenRecipes] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (recipe) => {
        setChosenRecipes(recipe);
        setShow(true);

    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.recipe.image} />
                <Card.Body>
                    <Card.Title>{props.recipe.title}</Card.Title>
                    <Card.Text>
                        {props.recipe.instructions}
                    </Card.Text>
                    <Card.Text>
                        {props.recipe.readyInMinutes} Minutes
                    </Card.Text>
                  
                    
                </Card.Body>
            </Card>
            {
                chosenRecipe && <ModalRecipe show={show} handleClose={handleClose} chosenRecipe={chosenRecipe} />
            }
          
        </>
    )
}