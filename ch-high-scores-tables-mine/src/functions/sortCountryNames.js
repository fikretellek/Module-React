const sortCountryNames = function () {
  return this.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
};

Array.prototype.sortCountryNames = sortCountryNames;

export default sortCountryNames;
