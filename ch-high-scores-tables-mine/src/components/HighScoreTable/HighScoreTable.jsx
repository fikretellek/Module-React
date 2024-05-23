import PlayerScore from "../PlayerScore/PlayerScore";

const HighScoreTable = ({ country }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{country.name}</th>
        </tr>
      </thead>
      <tbody>
        {country.scores.map((athlete, i) => {
          return <PlayerScore athlete={athlete} key={i} />;
        })}
      </tbody>
    </table>
  );
};

export default HighScoreTable;
