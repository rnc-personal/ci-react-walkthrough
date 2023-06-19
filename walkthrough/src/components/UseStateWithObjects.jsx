import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        ...name,
                        firstName: e.target.value
                    })}
                    />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        ...name,
                        lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects

// Each input field uses the spread opeator to "remember" the the current value of the input field.
// The setname function updates each property of the object in the state and the spread operator is
// on both input fields to get 'whatever the current value in the state is'.

// The name object is copied into the new object and the current value of the input field is updated.