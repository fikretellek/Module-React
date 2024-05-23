import "./App.css";
import HighScoreTable from "./components/HighScoreTable/HighScoreTable";
import allCountryScores from "./data/scores";
import "./functions/sortCountryNames";

function App() {
  return (
    <>
      <h1>High Scores Tables</h1>
      {allCountryScores.sortCountryNames().map((country, i) => {
        return <HighScoreTable country={country} key={i} />;
      })}
    </>
  );
}

export default App;
