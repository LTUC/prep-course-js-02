import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';



export default function ModalRecipe(props) {
    let commentRef = useRef();

    function handleComment(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;
        console.log({ userComment });
        let newRecipe = { ...props.chosenRecipe, userComment };
        // let newRecipe = { ...props.chosenRecipe, comment: userComment}
        props.updateRecipe(newRecipe, props.chosenRecipe.id);

    }

    async function handleAddFav(e, /* The recipe that is being added to the favorites. */
        recipe) {
        e.preventDefault();
        console.log("recipe", recipe);
        let url = `${process.env.REACT_APP_SERVER}/addFavRecipe`;
        let data = {
            title: recipe.title,
            readyInMinutes: recipe.readyInMinutes,
            summary: recipe.summary,
            image: recipe.image,
            comment: recipe.comment,
        }
        console.log("data", data)
        // [recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.comment];
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        let addedRecipe = await response.json();
        console.log("addedRecipe", addedRecipe);
    }


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenRecipe.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <img src={props.chosenRecipe.image} alt="recipe image" style={{ width: "100%" }} />
                    {props.chosenRecipe.summary.substring(0, 200)}
                    <br />
                    {props.chosenRecipe.comment ? props.chosenRecipe.comment : "No comment is added"}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Entre you comment" />
                            <Form.Text className="text-muted">
                                Add your own comment to make recipes unique
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => handleComment(e)}>
                            Submit Comment
                        </Button>
                        <Button variant="primary" type="submit" onClick={(e) => { handleAddFav(e, props.chosenRecipe) }}>
                            Add to favorites
                        </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}



