export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>- styledJsx -</p>
        <button>fight!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #ccc;
          border-radius: 10px;
          padding: 8px;
        }
      `}</style>
    </>
  );
};
