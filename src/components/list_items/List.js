import React from 'react'
import Person from './Person'

function List() {
    // const names=['sana','saba','sabiqa']
    // const nameList =  names.map( x => <h1>{x}</h1>)
       
        const persons=[


            {   id:1,
                name:'sanasarwat',
                age:28,
                skill:'react'
            },
            {
                id:2,
                name:'Aasad',
                age:22,
                skill:'graphics'
            }

        ]

        const nameList =  persons.map( x => <Person x={x} />)
    return (
        <div>
            {/* <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1> */}
            {nameList}
        </div>
    )
        }

export default List
