import { useState } from "react";
import "./App.css";
import HighScoreTable from "./components/HighScoreTable/HighScoreTable";
import allCountryScores from "./data/scores";
import "./functions/sortCountryNames";
import handleToggle from "./functions/handleToggle";
import WorldWideTable from "./components/WorldWideTable/WorldWideTable";

function App() {
  const [sortRuleA_Z, toggleSortRule] = useState(true);

  return (
    <>
      <header>
        <h1>High Scores Tables</h1>
      </header>
      <main>
        <WorldWideTable allCountryScores={[...allCountryScores]} />
        <section>
          <div>
            <h2>Score Table by Country</h2>
            <button onClick={() => handleToggle(toggleSortRule)}>
              {sortRuleA_Z ? "A-Z" : "Z-A"}
            </button>
          </div>
          {allCountryScores.sortCountryNames(sortRuleA_Z ? "A-Z" : "Z-A").map((country, i) => {
            return <HighScoreTable country={country} key={i} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
