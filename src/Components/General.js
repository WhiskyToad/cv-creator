import React, {useState, useRef} from "react";
import Editable from "./hooks/Editable";

const General = (props) => {
    const inputRef = useRef();
    const [addOneValue, setAddOneValue] = useState("");
    const [addTwoValue, setAddTwoValue] = useState("");
    const [postCodeValue, setPostCodeValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [emailValue, setEmailValue] = useState("");

return (
    <div id = "general-container">
        <span className = "address">
        <Editable
        text={addOneValue}
        placeholder= "Address line 1"
        type="input"
        childRef={inputRef}
      >
        <input
        ref={inputRef}
          type = "text"
          name="address-one"
          placeholder="Address line 1"
          value={addOneValue}
          onChange={e => setAddOneValue(e.target.value)}
        />
      </Editable>
        </span>
        <span className = "address">
        <Editable
        text={addTwoValue}
        placeholder= "Address line 2"
        type="input"
        childRef={inputRef}
      >
        <input
        ref={inputRef}
          type = "text"
          name="address-two"
          placeholder="Address line 2"
          value={addTwoValue}
          onChange={e => setAddTwoValue(e.target.value)}
        />
      </Editable>
        </span>
        <span className = "address">
        <Editable
        text={postCodeValue}
        placeholder= "PO57 CDE"
        type="input"
        childRef={inputRef}
      >
        <input
        ref={inputRef}
          type = "text"
          name="post-code"
          placeholder="PO57 CDE"
          value={postCodeValue}
          onChange={e => setPostCodeValue(e.target.value)}
        />
      </Editable>
        </span>
        <span className = "address">
        <Editable
        text={phoneValue}
        placeholder= "Phone"
        type="input"
        childRef={inputRef}
      >
        <input
        ref={inputRef}
          type = "text"
          name="phone"
          placeholder="Phone"
          value={phoneValue}
          onChange={e => setPhoneValue(e.target.value)}
        />
      </Editable>
        </span>
        <span className = "address">
        <Editable
        text={emailValue}
        placeholder= "Email"
        type="input"
        childRef={inputRef}
      >
        <input
        ref={inputRef}
          type = "text"
          name="email"
          placeholder="Address line 1"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
        />
      </Editable>
        </span>
    </div>
)};

export default General;