import { useNavigate } from "react-router-dom";
import './statusbar.css'
import { useState } from "react";

export default function StatusBar() {
  const username = localStorage.getItem('username');

  const navigate_home = useNavigate();
  const handleClick_home = () => {
    navigate_home("/pizza")
  }

  const navigate_drink = useNavigate();
  const handleClick_drink = () => {
    navigate_drink("/other")
  }

  const navigate_leaderboard = useNavigate();
  const handleClick_leaderboard = () => {
    navigate_leaderboard("/leaderboard")
  }

  const navigate_receipt = useNavigate();
  const handleClick_receipt = () => {
    navigate_receipt("/receipt")
  }

  return (
    <>
      <div className="bar">
        <p1 className="hello-name" onClick={handleClick_home}>Hello{(username == null || username == "null")? "" : " " + username}!</p1>
        <button className='tile' onClick={handleClick_leaderboard}>🏆 Rank</button>
        <button className='tile' onClick={handleClick_drink}>🍺 Drinks</button>
        <button className='tile' onClick={handleClick_receipt}>📃 Receipt</button>
      </div>
    </>
  );
};