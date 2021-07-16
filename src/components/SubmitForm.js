import { useState } from 'react';

function SubmitForm({ onCharSubmit }) {
    const [inputChar, setInputChar] = useState();

    const handleInputChange = (event) => {
        setInputChar(event.target.value);
    }

    const handleButtonClick = () => {
        onCharSubmit(inputChar);
    }

    return (
        <div>
            <input type='text' placeholder='character, e.g. "a"' required onChange={e => handleInputChange(e)} />
            <button onClick={handleButtonClick}>Submit</button>
        </div>
    )
}

export default SubmitForm;