import React from 'react';

export  type  ButtonTypes = {
    name: string
    callBack: ()=>void,
    className: string,
    buttonStatus?: boolean
}