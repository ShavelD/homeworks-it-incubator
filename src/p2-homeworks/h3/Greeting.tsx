import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.nowError // need to fix with (?:)

    return (
        <div className={s.flex_container}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    // onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>
                <button onClick={addUser} className={s.add}>add</button>
                <div className={s.totalUsers}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
