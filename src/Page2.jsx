import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <>
      <h1>Page2</h1>
      <Link to="/page2/100">UrlParameter</Link>
      <br />
      <Link to="/page2/100?name=hogehoge">query Prameter</Link>
    </>
  );
};
