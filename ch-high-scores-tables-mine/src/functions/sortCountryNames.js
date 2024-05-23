const sortCountryNames = function (rule) {
  if (rule === "A-Z") {
    return this.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
  } else if (rule === "Z-A") {
    return this.sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 11 : 0));
  }
};

Array.prototype.sortCountryNames = sortCountryNames;

export default sortCountryNames;
