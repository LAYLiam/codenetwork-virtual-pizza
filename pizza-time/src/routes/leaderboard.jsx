import StatusBar from "../statusbar";
import TitleBar from "../titlebar";
import './../styles/leaderboard.css'

export default function Leaderboard() {
  return (
    <>
      <TitleBar/>
      <div className="status"><StatusBar/></div>
      <div className="stage">
        <p>Leaderboard</p>
      </div>
    </>
    );
};  