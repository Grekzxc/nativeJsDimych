import React, { useState } from "react"

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    addreas: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: { model: string }
}

function useAlexState(m: string) {
    return [m, function () { }]
}
function useAlexState2(m: string) {
    return {
        message: m,
        setMessage: function () { }
    }
}


const ManComponent: React.FC<PropsType> = ({ title, man, ...props }) => {


    const { message, setMessage } = useAlexState2('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}