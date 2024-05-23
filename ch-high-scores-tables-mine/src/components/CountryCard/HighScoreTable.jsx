import AthleteRow from "../PlayerScore/AthleteRow";

const CountryCard = ({ country }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{country.name}</th>
        </tr>
      </thead>
      <tbody>
        {country.scores.map((athlete, i) => {
          return <AthleteRow athlete={athlete} key={i} />;
        })}
      </tbody>
    </table>
  );
};

export default CountryCard;
