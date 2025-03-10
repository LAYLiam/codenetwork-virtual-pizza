import { useNavigate } from "react-router-dom";
import './statusbar.css'

export default function StatusBar(props) {
    const navigate_home = useNavigate();
  const handleClick_home = () => {
    navigate_home("/pizza", { state: {id: props.name} })
  }

  const navigate_drink = useNavigate();
  const handleClick_drink = () => {
    navigate_drink("/other", { state: {id: props.name} })
  }

  const navigate_leaderboard = useNavigate();
  const handleClick_leaderboard = () => {
    navigate_leaderboard("/leaderboard", { state: {id: props.name} })
  }

  const navigate_receipt = useNavigate();
  const handleClick_receipt = () => {
    navigate_receipt("/receipt", { state: {id: props.name} })
  }
  //        <button className='tile' onClick={handleClick_leaderboard}>🏆 You rank #</button>
  return (
    <>
      <div className="bar">
        <p1 className="hello-name" onClick={handleClick_home}>Hello {props.name == null ? "coder" : props.name}!</p1>
        <button className='tile' onClick={handleClick_drink}>🍺 Drinks</button>
        <button className='tile' onClick={handleClick_receipt}>📃 Receipt</button>
      </div>
    </>
  );
};