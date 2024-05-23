const sortScores = function (ruleASC) {
  if (ruleASC) {
    return this.sort((a, b) =>
      parseInt(a.s) > parseInt(b.s) ? -1 : parseInt(a.s) < parseInt(b.s) ? 1 : 0
    );
  } else {
    return this.sort((a, b) =>
      parseInt(a.s) > parseInt(b.s) ? 1 : parseInt(a.s) < parseInt(b.s) ? -1 : 0
    );
  }
};

Array.prototype.sortScores = sortScores;

export default sortScores;
