import { useLocation, useNavigate } from "react-router-dom";

export const Page1DatailA = () => {
  const lpcation = useLocation();
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div>
        <h1>Page1 Datail A</h1>
      </div>
      <button onClick={onClickBack}>BACK</button>
    </>
  );
};
