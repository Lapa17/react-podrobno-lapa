import { useState } from "react"

type RatingPropsType = {
}

function UncontrolledRating(props: RatingPropsType) {

        let [value, setValue] = useState(0)
        

        return (
            <div>
                <Star selected={value > 0} onClick={setValue} number={1}/>
                <Star selected={value > 1} onClick={setValue} number={2}/>
                <Star selected={value > 2} onClick={setValue} number={3}/>
                <Star selected={value > 3} onClick={setValue} number={4}/>
                <Star selected={value > 4} onClick={setValue} number={5}/>
            </div>
        )
    }

type StarPropsType = {
    selected: boolean
    onClick:(value:number) => void
    number:number
}

function Star(props: StarPropsType) {

    let onStarClickHandler = () => {
        props.onClick(props.number)
    }

    return (
        <span onClick={onStarClickHandler}>{props.selected ? <b>star </b> : 'star '}</span>
    )
}

export default UncontrolledRating;