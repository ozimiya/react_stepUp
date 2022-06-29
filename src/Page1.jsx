import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(10).keys()];
  const navigate = useNavigate();
  const onClickDatail = () => {
    //onイベントなどJS側で画面遷移させたいーーuseNavigate
    navigate("/Page1/Page1DatailA");
  };
  return (
    <>
      <h1>Page1</h1>
      <Link to="/Page1/Page1DatailA" state={arr}>
        Detail A
      </Link>
      <br />
      <Link to="/Page1/Page1DatailB" state={arr}>
        Detail B
      </Link>
      <br />
      <button onClick={onClickDatail}>DTAIL_A</button>
    </>
  );
};
