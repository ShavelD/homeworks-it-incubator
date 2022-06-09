import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "../h4/HW4.module.css";


// types
export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
}

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'Anime', priority: 'low'},
    {id: 3, name: 'Games', priority: 'low'},
    {id: 4, name: 'Work', priority: 'high'},
    {id: 5, name: 'Html & Css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === 'low') return affairs.filter(a => a.priority === 'low')
    else if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    else if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    else {
    }
    return []
}

export const deleteAffair = (affairs: AffairType[], id: number): AffairType[] => { // need to fix any
    return affairs.filter(a => a.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState <Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            <h1 className={s.homeworks}>homeworks 2</h1>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW2
