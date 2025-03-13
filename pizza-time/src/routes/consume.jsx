import TitleBar from './../titlebar'
import StatusBar from './../statusbar'
import PopUp from './../routes/popupwindow'
import GF from './../assets/pizza/gf-tag.png'
import { useState, useEffect } from 'react'
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import './../styles/consume.css'

const pizza_index = new Map([
    [1, 'Ham and Cheese'],
    [7, 'Ham and Cheese'],
    [13, 'Ham and Cheese'],
    [19, 'Ham and Cheese'],
    [2, 'Spicy Lovers'],
    [8, 'Spicy Lovers'],
    [14, 'Spicy Lovers'],
    [20, 'Spicy Lovers'],
    [3, 'Cheesy Garlic'],
    [9, 'Cheesy Garlic'],
    [15, 'Margarita'],
    [21, 'Margarita'],
    [4, 'Chicken Supreme'],
    [10, 'Chicken Supreme'],
    [16, 'Chicken Supreme'],
    [5, 'Pepperoni'],
    [6, 'Pepperoni'],
    [11, 'Pepperoni'],
    [12, 'Pepperoni'],
    [17, 'Pepperoni'],
    [18, 'Pepperoni'],
    [22, 'Pepperoni'],
    [23, 'Margarita'],
    [24, 'Chicken Supreme']
])

const pizza_box_paths = new Map([
    ['Cheesy Garlic', './pizzas/cheesy-garlic/cheesy-garlic-'],
    ['Chicken Supreme', './pizzas/chicken-supreme/chicken-supreme-'],
    ['Ham and Cheese', './pizzas/ham-and-cheese/ham-and-cheese-'],
    ['Margarita', './pizzas/margarita/margarita-'],
    ['Pepperoni', './pizzas/pepperoni/pepperoni-'],
    ['Spicy Lovers', './pizzas/spicy/spicy-'],
    ['empty', '/public/pizzas/pizza-0.png'],
    ['blur', '/public/pizzas/pizza-0-blur.png']
]);

const pizza_nutrition = new Map([
    ['Cheesy Garlic', './nutrition/cheesy-garlic.png'],
    ['Chicken Supreme', './nutrition/chicken-supreme.png'],
    ['Ham and Cheese', './nutrition/ham-and-cheese.png'],
    ['Margarita', './nutrition/margarita.png'],
    ['Pepperoni', './nutrition/pepperoni.png'],
    ['Spicy Lovers', './nutrition/spicy.png']
]);

export default function Consume() {
  const location = useLocation();
  const pizza_id = location && location.state.id;
  const type = pizza_index.get(pizza_id);
  const nutrition_path = pizza_nutrition.get(type);
  const gf_pizzas = [24, 23, 22];
  
  const [value, setValue] = useState(0);
  const [popUpActive, activatePopUp] = useState(0);
  const [pizzaImgPath, setPizzaImgPath] = useState(pizza_box_paths.get("blur"));

  useEffect(() => {
    const response = fetch('https://cn-pizza-worker.llay.workers.dev/get/' + pizza_id)
      .then((response) => response.json())
      .then((data) => {
        setValue(data.value);
        setPizzaImgPath(data.value== 0 ? pizza_box_paths.get("empty") : pizza_box_paths.get(type) + data.value+ ".png");
      })
  }, []);

  function buttonClicked() {
    activatePopUp(1);
  }

  return (
    <>
      <TitleBar/>
      <StatusBar/> 
      <div className='pizza-info'>
      <div className='nutrition-tile'>
            <h1 className="pizza-title">{type}</h1>
            <img src={nutrition_path} className="pizza-nutrition" alt='Pizza nutriton image. I stole it from Dominos website.'/>
            {gf_pizzas.includes(pizza_id) ? <img src={GF} className='GF-tag'/> : null}
        </div>
        <div className='pizza-tile'>
            <h1>{type} Pizza</h1>
            <img src={pizzaImgPath} onClick={buttonClicked} className="pizza-box" alt='Opened pizza box visually showing quantity of pizzas.'/>
            <button onClick={buttonClicked} className='consume'>Click To Eat</button>
        </div>

      </div>        
      {popUpActive ? <PopUp type={type} count={value} id={pizza_id}/> : null}
    </>      
  );
};
