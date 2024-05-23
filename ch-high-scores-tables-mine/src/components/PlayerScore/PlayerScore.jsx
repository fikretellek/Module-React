const PlayerScore = ({ athlete }) => {
  return (
    <tr>
      <th>
        <p>{athlete.n}</p>
      </th>
      <td className="text_align_right">{athlete.s}</td>
    </tr>
  );
};

export default PlayerScore;
