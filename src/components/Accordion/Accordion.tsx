type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {

    
    return (
        <div>
            <AccordionTitle title={props.titleValue} />
            {!props.collapsed && <AccordionBody />}
        </div>

    )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3>{props.title}</h3>
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

export default Accordion;