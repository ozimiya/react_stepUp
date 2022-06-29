import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  //クエリを引数に設定することで、クエリを簡単に扱えるメソッドが使える

  return (
    <>
      <div>
        <h1>UrlParameter</h1>
        <p>idは{id}です</p>
        <p>クエリは{query.get("name")}です</p>
      </div>
    </>
  );
};
