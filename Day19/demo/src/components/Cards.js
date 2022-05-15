import CardRecipe from "./Card"
import { Button, Row, Container } from 'react-bootstrap';
import "./cards.css"
// import {Card , Button} from 'react-bootstrap'



export default function Cards(props) {
    console.log("2, inside cards ", props)
    return (
        <>
            <Container fluid className="main-container" >
                <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
                    {
                        props.recipes.map((recipe) => {
                            return (
                                <CardRecipe key={recipe.id} recipe={recipe} updateRecipe={props.updateRecipe}/>
                            )
                        }

                        )
                    }
                </div>
            </Container>
        </>
    )
}