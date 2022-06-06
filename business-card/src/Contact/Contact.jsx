import React, { useContext, useEffect, useRef, useState } from "react";
import { ShowContext } from "../Context/ShowContext";
import "./Contact.css";

const Contact = () => {
  const { show, setShow } = useContext(ShowContext);

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const resultRef = useRef(null);

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [action, setAction] = useState(null);
  const [result, setResult] = useState(null);


  useEffect(() => {
    // 0 +    1 -    2 *    3 /
    if (num1 !== null && num2 != null && action !== null) {
      switch (action) {
        case 0:
          setResult(num1 + num2);
          break;

        case 1:
          setResult(num1 - num2);
          break;

        case 2:
          setResult(num1 * num2);
          break;

        case 3:
          setResult(num1 / num2);
          break;
      
        default:
          break;
      }
    }
  }, [num1])

  const handleRandom = () => {

    setNum1(Math.floor(Math.random() * 11));
    setNum2(Math.floor(Math.random() * 11));
    setAction(Math.floor(Math.random() * 3));
  }

  const handleSubmit = () => {
    if (nameRef.current.value.length > 0 && surnameRef.current.value.length > 0 && emailRef.current.value.length > 0 && phoneRef.current.value.length > 0 && messageRef.current.value.length > 0) {

      // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
      if (emailRef.current.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
       
        // https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
        if (phoneRef.current.value.match(/\d/g) !== null) {

          if (phoneRef.current.value.match(/\d/g).length === 9) {

              console.log("input res: " + resultRef.current.value);
              console.log("res: " + result);

            if (result == resultRef.current.value) {
              console.log("sent message: ", messageRef.current.value);
              document.getElementById("contact-name").value = "";
              document.getElementById("contact-surname").value = "";
              document.getElementById("contact-email").value = "";
              document.getElementById("contact-phone").value = "";
              document.getElementById("contact-message").value = "";
              document.getElementById("contact-result").value = "";

              setShow(false);
              alert("Message sent!");
            }
            else {
              alert("Wrong answer!");
              handleRandom();
            }
          }
          else {
            alert("Wrong phone number!");
          }
        }  
        else {
          alert("Wrong phone number!");
        }
      }
      else {
        alert("Wrong email!");
      }
    }
    else {
      alert("Empty fields!");
    }
  };

  return (
    <div className={show ? "show slide-form" : "hide slide-form"}>
      <p className="contact-p">Contact manager</p>

      <input
        id="contact-name"
        className="input"
        type="text"
        ref={nameRef}
        spellCheck="false"
        placeholder="type name..."
      />

      <input
        id="contact-surname"
        className="input"
        type="text"
        ref={surnameRef}
        spellCheck="false"
        placeholder="type surname..."
      />

      <input
        id="contact-email"
        className="input"
        type="text"
        ref={emailRef}
        spellCheck="false"
        placeholder="type email..."
      />

      <input
        id="contact-phone"
        className="input"
        type="text"
        ref={phoneRef}
        spellCheck="false"
        placeholder="type phone number..."
      />

      <textarea
        id="contact-message"
        className="input textarea"
        type="text"
        ref={messageRef}
        spellCheck="false"
        placeholder="type message..."
      ></textarea>

      <button
        name="randomButton"
        className="button"
        onClick={() => handleRandom()}
      >
        Random question
      </button>

      <div className="contact-res">
        {num1}  
        {action === 0 &&
          <>+</>
        }  
        {action === 1 &&
          <>-</>
        } 
        {action === 2 &&
          <>*</>
        } 
        {action === 3 &&
          <>/</>
        } 
        {num2}
      </div>
      

      <input
        id="contact-result"
        className="input"
        type="number"
        ref={resultRef}
        spellCheck="false"
        placeholder="enter result..."
      />

      <button
        name="submitButton"
        className="button"
        onClick={() => handleSubmit()}
      >
        Send
      </button>
    </div>
  );
};

export default Contact;
