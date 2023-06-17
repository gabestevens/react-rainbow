import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // stoppes the refresh
        e.preventDefault()
        props.addColor(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm