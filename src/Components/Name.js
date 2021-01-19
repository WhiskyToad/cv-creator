import React, {useState, useRef} from "react";
import Editable from "./hooks/Editable";

const Name = (props) => {
    const inputRef = useRef();
    const [nameValue, setNameValue] = useState("");
    const [PositionValue, setPositionValue] = useState("");
    return(
        <div id = "name-container">
            <h1>  
            <Editable
            text={nameValue}
            placeholder="Your Name"
            type="input"
            childRef={inputRef}
        >
            <input
            ref={inputRef}
            type = "text"
            name="name"
            placeholder="Your Name"
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
            />
            </Editable>
        </h1>
        <h2>  
            <Editable
            text={PositionValue}
            placeholder="Your Position"
            type="input"
            childRef={inputRef}
        >
            <input
            ref={inputRef}
            type = "text"
            name="position"
            placeholder="Your Position"
            value={PositionValue}
            onChange={e => setPositionValue(e.target.value)}
            />
            </Editable>
        </h2>
    </div>
    )
}

export default Name