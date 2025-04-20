const Navigation = ({
  current,
  total,
  goNext,
  goPrev,
  handleSubmit,
  clearAnswer,
}) => {
  return (
    <div className="d-flex justify-content-end gap-2 mt-3">
      <button className="btn btn-outline-warning me-auto" onClick={clearAnswer}>
        Clear
      </button>

      <button
        className="btn btn-secondary"
        onClick={goPrev}
        disabled={current === 0}
      >
        Previous
      </button>

      {current < total - 1 ? (
        <button className="btn btn-primary" onClick={goNext}>
          Save & Next
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};
export default Navigation;
