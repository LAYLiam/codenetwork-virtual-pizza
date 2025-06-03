import StatusBar from "../statusbar";
import TitleBar from "../titlebar";
import './../styles/leaderboard.css'

function RunnerUps() {
  const place = "4th Place"
  return (
    <>
      <div className="runnerups">
        <h3>{place} - Name</h3>
        <p>Consumed 10 pizza slices.</p>
      </div>
    </>
  )
}

export default function Leaderboard() {
  return (
    <>
      <TitleBar/>
      <div className="status"><StatusBar/></div>
      <div className="stage">
        <div className="runnerups">
          <h3>Current Session</h3>
          <RunnerUps/>
          <RunnerUps/>
        </div>
      </div>
    </>
    );
};  