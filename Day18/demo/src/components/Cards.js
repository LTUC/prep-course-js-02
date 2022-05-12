import CardRecipe from "./Card"

// import {Card , Button} from 'react-bootstrap'



export default function Cards(props) {
    console.log("2, inside cards ",props)
    return (
        <>
            {
                props.recipes.map((recipe) => {
                    return (
                        <>
                            <CardRecipe recipe={recipe} />
                        </>
                    )
                }

                )
            }
        </>
    )
}