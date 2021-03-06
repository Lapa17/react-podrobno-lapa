import { useState } from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
    onOff:boolean
    setOnOff:(onOff:boolean)=> void
}

const OnOff = ({onOff,setOnOff,...props}:OnOffPropsType) => {

    let onOnHandler = () => {
        setOnOff(true)
    }
    let onOffHandler = ()=> {
        setOnOff(false)
    }

    let onClass = onOff ? `${s.span} ${s.on}`: s.span
    let offClass = !onOff ? `${s.span} ${s.off}`: s.span
    let indicatorClass = onOff ? `${s.indicator} ${s.on}`: `${s.indicator} ${s.off}`

    return (
        <div className={s.wrapper}>
            <span className={onClass} onClick={onOnHandler}>On</span>
            <span className={offClass} onClick={onOffHandler}>Off</span>
            <span className={indicatorClass}></span>
        </div>
    )
}

export default OnOff;