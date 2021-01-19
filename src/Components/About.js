import React, {useState, useRef} from "react";
import Editable from "./hooks/Editable";

const About = (props) => {
    const inputRef = useRef();
    const [aboutValue, setAboutValue] = useState("");

return (
    <div id = "about-container">
        <h2>About me:</h2>
        <Editable
    text={aboutValue}
    placeholder="Describe yourself here!"
    type="textarea"
    childRef={inputRef}
    >
    <textarea
        ref={inputRef}
        name="description"
        placeholder="Describe yourself here!"
        rows="5"
        value={aboutValue}
        onChange={e => setAboutValue(e.target.value)}
    />
    </Editable>
    </div>
)
}

export default About