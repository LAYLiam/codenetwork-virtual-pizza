import TitleBar from '../titlebar'
import StatusBar from '../statusbar'
import { useLocation, useNavigate } from 'react-router-dom';
import './../styles/pizzaboxes.css'

function PizzaBox(props) {  
  const name = props.id < 22 ? "pizza" : "pizza-gf";
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/consume", { state: {id: props.id} });
  };

  function pizzaClicked() {
    return (
      handleSubmit()
    );
  };

  return ( <> <div className={name} onClick={pizzaClicked}></div> </> );
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
          <PizzaRow id={3}/>
        </div>
      </div>
    </>
  );
};
  
  