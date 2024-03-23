import styles from "./BeautifulWrapper.module.css";
function BeautifulWrapper(props) {
  // beauty prop DEVELOPER IS GIVING
  // children props REACT PEOPLE IS GIVING.

  const { children, beauty } = props;

  return (
    <>
      <div>Beutiful wrapper {beauty} </div>
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default BeautifulWrapper;

// children: inside props it is a deualt value.
