import { useNavigate } from 'react-router-dom';
import './../styles/popupwindow.css'
import { useState } from 'react'

const slice_paths = new Map([
     ['Cheesy Garlic', './slice/cheesy-garlic-slice.png'],
     ['Chicken Supreme', './slice/chicken-supreme-slice.png'],
     ['Ham and Cheese', './slice/ham-and-cheese-slice.png'],
     ['Margarita', './slice/margarita-slice.png'],
     ['Pepperoni', './slice/pepperoni-slice.png'],
     ['Spicy Lovers', './slice/spicy-slice.png'],
     ['crumbs', './slice/crumbs.png']
]);

export default function PopupWindow(props) {  
    const [clicks, setClicks] = useState(0);
    const [imagePath, setPath] = useState(props.count > 0 ? slice_paths.get(props.type) : slice_paths.get('crumbs'));
    const text = "Spam click the " + (props.count > 0 ? "slice" : "finished pizza. There are still crumbs") + " to eat!";

    function handleClicks() {
        setClicks(clicks => clicks + 1);
        if (clicks == 10) {
            setPath(slice_paths.get('crumbs'));
            const response = fetch('https://cn-pizza-worker.llay.workers.dev/decrement/' + props.id);
        };
    }

    const navigate = useNavigate();
    const dismiss = () => {
      navigate("/pizza")
    }
    
    return (
      <div className="popup" id='popup-slice-window'>
        <button className='dismiss-button' onClick={dismiss}>⨉</button>
        <h2>{text}</h2>
        <div className='popup-canvas'>
            <img src={imagePath} className="pizza-slice" onClick={handleClicks} 
              alt='There is a pizza image in the middle of the screen. It takes about 12 clicks to turn to digitally consume.'/>
        </div>
      </div>
    );
  };