import React, { useState, useRef } from "react";
import Editable from "./hooks/Editable";

const KeyPoints = () => {
    const inputRef = useRef();
    const [oneValue, setOneValue] = useState("");
    const [twoValue, setTwoValue] = useState("");
    const [threeValue, setThreeValue] = useState("");
    const [fourValue, setFourValue] = useState("");
    const [fiveValue, setFiveValue] = useState("");

    return (
        <div id = "keypoints-container">
            <h3>Five Key Points:</h3>
            <span className = "keypoint">
                <Editable
                text= {oneValue}
                placeholder="First Point"
                type="input"
                childRef={inputRef}
            >
                <input
                ref={inputRef}
                type = "text"
                name="name"
                placeholder="First Point"
                value= {oneValue}
                onChange={e => setOneValue(e.target.value)}
                />
                </Editable>
            </span>
            <span className = "keypoint">
                <Editable
                text= {twoValue}
                placeholder="Second Point"
                type="input"
                childRef={inputRef}
            >
                <input
                ref={inputRef}
                type = "text"
                name="name"
                placeholder="Second Point"
                value= {twoValue}
                onChange={e => setTwoValue(e.target.value)}
                />
                </Editable>
            </span>
            <span className = "keypoint">
                <Editable
                text= {threeValue}
                placeholder="Third Point"
                type="input"
                childRef={inputRef}
            >
                <input
                ref={inputRef}
                type = "text"
                name="name"
                placeholder="Third Point"
                value= {threeValue}
                onChange={e => setThreeValue(e.target.value)}
                />
                </Editable>
            </span>
            <span className = "keypoint">
                <Editable
                text= {fourValue}
                placeholder="Fourth Point"
                type="input"
                childRef={inputRef}
            >
                <input
                ref={inputRef}
                type = "text"
                name="name"
                placeholder="Fourth Point"
                value= {fourValue}
                onChange={e => setFourValue(e.target.value)}
                />
                </Editable>
            </span>
            <span className = "keypoint">
                <Editable
                text= {fiveValue}
                placeholder="Fifth Point"
                type="input"
                childRef={inputRef}
            >
                <input
                ref={inputRef}
                type = "text"
                name="name"
                placeholder="fifth Point"
                value= {fiveValue}
                onChange={e => setFiveValue(e.target.value)}
                />
                </Editable>
            </span>
        </div>


    )
}

export default KeyPoints;