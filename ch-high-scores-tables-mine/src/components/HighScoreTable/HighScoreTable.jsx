import PlayerScore from "../PlayerScore/PlayerScore";
import "../../functions/sortScores";

const HighScoreTable = ({ country }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{country.name}</th>
        </tr>
      </thead>
      <tbody>
        {country.scores.sortScores().map((athlete, i) => {
          return <PlayerScore athlete={athlete} key={i} />;
        })}
      </tbody>
    </table>
  );
};

export default HighScoreTable;
