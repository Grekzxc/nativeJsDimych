import React, { ChangeEvent } from "react"

export const User = () => {

    const deliteUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }
    const onNameChanget = () => {
        console.log('name changet');
    }
    const onAgeChanget = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changet' + e.currentTarget.value);
    }
    const focusLostHandler = () => {
        console.log('focus lost');
    }
    return <div>
        <textarea onChange={onNameChanget} onBlur={focusLostHandler} >Dimych</textarea>
        <input onChange={onAgeChanget} type={'number'} />
        <button name="delite" onClick={deliteUser}>delite</button>

    </div>
}