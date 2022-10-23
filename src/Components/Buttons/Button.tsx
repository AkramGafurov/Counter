import React from 'react';
import {ButtonTypes} from "../types/types";

export const Button = (props: ButtonTypes) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button disabled={props.buttonStatus}  className={props.className} onClick = {()=>{onClickHandler()}}>{props.name}</button>
    )
}