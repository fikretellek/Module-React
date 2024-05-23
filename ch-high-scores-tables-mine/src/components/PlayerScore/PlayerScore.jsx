const PlayerScore = ({ athlete }) => {
  return (
    <tr>
      <th>
        <p>{athlete.n}</p>
      </th>
      <td>{athlete.s}</td>
    </tr>
  );
};

export default PlayerScore;
