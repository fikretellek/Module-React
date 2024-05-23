import "./App.css";
import HighScoreTable from "./components/HighScoreTable/HighScoreTable";
import allCountryScores from "./data/scores";

function App() {
  return (
    <>
      <h1>High Scores Tables</h1>
      {allCountryScores.map((country, i) => {
        return <HighScoreTable country={country} key={i} />;
      })}
    </>
  );
}

export default App;
