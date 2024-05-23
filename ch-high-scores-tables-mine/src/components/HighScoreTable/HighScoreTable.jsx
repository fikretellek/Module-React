import PlayerScore from "../PlayerScore/PlayerScore";
import "../../functions/sortScores";
import { useState } from "react";
import handleToggle from "../../functions/handleToggle";

const HighScoreTable = ({ country }) => {
  const [sortRuleASC, toggleSortRule] = useState(true);

  return (
    <>
      <div className="country">
        <h3>{country.name}</h3>
        <button onClick={() => handleToggle(toggleSortRule)}>{sortRuleASC ? "ASC" : "DESC"}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="text_align_right">Score</th>
          </tr>
        </thead>
        <tbody>
          {country.scores.sortScores(sortRuleASC).map((athlete, i) => {
            return <PlayerScore athlete={athlete} key={i} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default HighScoreTable;
