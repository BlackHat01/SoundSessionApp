import { useRef, useState } from 'react';
import "./mailList.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const MailList = () => {
  const [title, setTitle] = useState('You are subscribed!');
  const [message, setMessage] = useState('We will send yu newsletter and updates on all that is audio!');
  const [hasAtSymbol, setHasAtSymbol] = useState(false);
  const [title2, setTitle2] = useState('Oops');
  const [message2, setMessage2] = useState('This doesn\'t look like a correct email address');

  const submit = () => {
    confirmAlert({
      title,
      message,
      buttons: [
        {
          label: 'Okay',
          //onClick: () => alert('Click Yes')
        },
        // {
        //   label: 'No',
        //   //onClick: () => alert('Click No')
        // }
      ]
    });
    inputRef.current.value = '';
  };
  const oops = () => {
    confirmAlert({
      title: title2,
      message: message2,
      buttons: [
        {
          label: 'Okay',
          //onClick: () => alert('Click Yes')
        },
        // {
        //   label: 'No',
        //   //onClick: () => alert('Click No')
        // }
      ]
    });

  };

  const inputRef = useRef(null);

  const handleSubscribe = () => {
    // Clear the input field
    inputRef.current.value = '';
    // Handle subscription logic here
    console.log('Subscribed!');
  };

  const handleInputChange = (event) => {
    if (event.target.value.includes('@')) {
      setHasAtSymbol(true);
    } else {
      setHasAtSymbol(false);
    }
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Looking to fix or record your audio? We got you!</h1>
      <span className="mailDesc">Sign up and we'll recommend the best audio engineers to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" ref={inputRef} onChange={handleInputChange} />
        <button onClick={!hasAtSymbol ? oops : submit}>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList;
