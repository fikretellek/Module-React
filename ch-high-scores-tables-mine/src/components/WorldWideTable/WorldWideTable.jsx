import PlayerScore from "../PlayerScore/PlayerScore";
import "../../functions/sortScores";

const WorldWideTable = ({ allCountryScores }) => {
  const worldWideScores = allCountryScores.flatMap((country) => country.scores);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>World Wide Scores Table</th>
          </tr>
        </thead>
        <tbody>
          {worldWideScores.sortScores("DESC").map((athlete, i) => (
            <PlayerScore athlete={athlete} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WorldWideTable;
