import React, { useEffect } from "react";
import Cookies from 'js-cookie';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import regularPizzaOrder from './../assets/pizza/typical-pizza-order.png'
import TitleBar from '../titlebar'
import './../styles/home.css'

export default function Home() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/pizza", { state: {id: {name}} });
  };

  const getUsernameCookie = () => {
    return Cookies.get("username");
  };

  const setUsernameCookie = (username) => {
    Cookies.set("username", username);
    console.log("Cookie set for " + username);
  }

  const handleSubmit = () => {
    setUsernameCookie(name);
    handleNavigate();
  };


  useEffect(() => {
    // force next page if cookie is already set.
    const username = getUsernameCookie;
    if (!(username === null)) {
      console.log("Cookie exists as " + username);
      handleNavigate;
    }
  }, []);

  return (
    <>
      <div className='stage'>
        <TitleBar/>
        <div className='content'>
          <div className='name-fetch'>
            <h2>✨ Hey, welcome to Virtual Pizza! ✨</h2>
            <p>Create a username! (press enter to submit)</p>
            <form className="form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your username here..." 
                     className="name-input" value={name} required 
                     onChange={handleChange}/>
            </form>
          </div>
        <div>
          <img src={regularPizzaOrder} className="pizza-order-all" 
               alt="It's an image of about 24 pizzas, which is equivalent to how much food we've been getting each week." />
        </div>
        </div>
      </div>
        </>
    );
};