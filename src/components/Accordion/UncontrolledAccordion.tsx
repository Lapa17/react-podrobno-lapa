import { useState } from "react"

type UncAccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    onclick:()=>void
}

function UncontrolledAccordion(props: UncAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)
    let onToggleHandler = () =>{
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} onclick={onToggleHandler}/>
            {!collapsed && <AccordionBody />}
        </div>

    )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.onclick}>{props.title}</h3>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;