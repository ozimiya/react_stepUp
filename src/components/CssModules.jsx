import csses from "./cssModules.modules.scss";

export const CssModules = () => {
  return (
    <div className={csses.container}>
      <p>- CssModules -</p>
      <button>fight!</button>
    </div>
  );
};
