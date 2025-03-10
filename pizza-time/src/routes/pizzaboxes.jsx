import { useState } from 'react'
import TitleBar from '../titlebar'
import './../styles/pizzaboxes.css'
import StatusBar from '../statusbar'
import Consume from '../routes/consume' 
import { useLocation, useNavigate } from 'react-router-dom';

function PizzaBox(props) {  
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/consume", { state: {id: props.id} });
  };

  function pizzaClicked() {
    return (
      handleSubmit()
    );
  };

  return (
    <>
      <div className="pizza" onClick={pizzaClicked}></div>
    </>
  );
};

function PizzaBox_GF(props) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/consume", { state: {id: props.id} });
  };

  function pizzaClicked() {
    return (
      handleSubmit()
    );
  };

  return (
    <>
      <div className="pizza-gf" onClick={pizzaClicked}></div>
    </>
  );
};

function PizzaRow(props) {
  return (
    <>
      <div className='pizza-row'>
        <PizzaBox id={props.id*6 + 1}/>
        <PizzaBox id={props.id*6 + 2}/>
        <PizzaBox id={props.id*6 + 3}/>
        <PizzaBox id={props.id*6 + 4}/>
        <PizzaBox id={props.id*6 + 5}/>
        <PizzaBox id={props.id*6 + 6}/>
      </div>
    </>
  );
};

function PizzaRow_GF(props) {
  return (
    <>
      <div className='pizza-row'>
      <PizzaBox id={props.id*6 + 1}/>
        <PizzaBox id={props.id*6 + 2}/>
        <PizzaBox id={props.id*6 + 3}/>
        <PizzaBox_GF id={props.id*6 + 4}/>
        <PizzaBox_GF id={props.id*6 + 5}/>
        <PizzaBox_GF id={props.id*6 + 6}/>
      </div>
    </>
  );
};

export default function PizzaPage() {
  const location = useLocation();
  const name = location.state && location.state.id;

  return (
    <>
      <div className='stage'>
        <TitleBar/>
        <StatusBar/>
        <div pizza-many>
          <PizzaRow id={0}/>
          <PizzaRow id={1}/>
          <PizzaRow id={2}/>
          <PizzaRow_GF id={3}/>
        </div>
      </div>
    </>
  );
};
  
  