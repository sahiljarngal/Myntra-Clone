const Loadingbar = () => {
  return (
    <center className="loader">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};
export default Loadingbar;
