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
            <Card style={{ width: '18rem', textAlign: "center", marginTop: "3rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <Card.Img variant="top" src={props.recipe.image} />
                <Card.Body className='cardBody'>
                    <Card.Title>{props.recipe.title}</Card.Title>
                    <Card.Text className="scrollBar">
                        {props.recipe.instructions}
                    </Card.Text>
                    <Card.Text>
                        {props.recipe.readyInMinutes} Minutes
                    </Card.Text>

                    <Button variant="primary" onClick={() => { handleShow(props.recipe) }}>Show Modal</Button>
                </Card.Body>
            </Card>
            {
                chosenRecipe && <ModalRecipe show={show} handleClose={handleClose} chosenRecipe={chosenRecipe} updateRecipe={props.updateRecipe}/>
            }

        </>
    )
}