import PlayerScore from "../PlayerScore/PlayerScore";
import "../../functions/sortScores";
import { useState } from "react";
import handleToggle from "../../functions/handleToggle";

const WorldWideTable = ({ allCountryScores }) => {
  const [worldWideScores, setWorldWideScores] = useState(
    allCountryScores.flatMap((country) => country.scores).sortScores("DESC")
  );

  const [asc, setAsc] = useState(true);
  const [a_z, setA_z] = useState(true);

  function sortA_z() {
    handleToggle(setA_z);
    if (a_z) {
      setWorldWideScores((prev) => [...prev.sort((a, b) => (a.n > b.n ? 1 : a.n < b.n ? -1 : 0))]);
    } else {
      setWorldWideScores((prev) => [...prev.sort((a, b) => (a.n < b.n ? 1 : a.n > b.n ? -1 : 0))]);
    }
  }
  function setScoresRule() {
    handleToggle(setAsc);
    setWorldWideScores((prev) => [...prev.sortScores(asc)]);
  }

  return (
    <>
      <div>
        <h2>World Wide Scores</h2>
        <button onClick={sortA_z}>{a_z ? "A-Z" : "Z-A"}</button>
        <button onClick={setScoresRule}>{asc ? "ASC" : "DESC"}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="text_align_right">Score</th>
          </tr>
        </thead>
        <tbody>
          {worldWideScores.map((athlete, i) => (
            <PlayerScore athlete={athlete} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WorldWideTable;
