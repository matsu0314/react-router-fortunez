import { VFC } from "react";
import { useHistory } from "react-router-dom";

export const Page404: VFC = () => {
  const history = useHistory();

  return (
    <div className="error">
      <h1>ページが見つかりませんでした</h1>
      <button onClick={() => history.push("/")}>戻る</button>
    </div>
  );
};
