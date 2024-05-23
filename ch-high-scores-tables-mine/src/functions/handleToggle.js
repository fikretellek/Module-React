function handleToggle(setter) {
  setter((prevState) => !prevState);
}

export default handleToggle;
