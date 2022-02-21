import React from 'react'

function NameList() {
    const persons = [
        {
            name: "Abhinav",
            age: 24,
            skill: "React"
        },
        {
            name: "Kumar",
            age: 19,
            skill: "Vuejs"
        },
        {
            name: "Chris",
            age: 34,
            skill: "Angular"
        },
        {
            name: "Phris",
            age: 26,
            skill: "EmberJs"
        }
    ]
    const personList = persons.map(({ name, age, skill }) => <h1 key={name}>I am {name}, i am {age} and i know {skill}</h1>)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList