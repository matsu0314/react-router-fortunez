import { VFC } from "react";
import { useHistory } from "react-router-dom";

export const FortunePage: VFC = () => {
  const history = useHistory();
  const randomNum = (): number => {
    return Math.floor(Math.random() * 4) + 1;
  };
  return (
    <div className="search">
      <h1>今日の運勢を占います</h1>
      <button
        className="fortune_btn"
        onClick={() => history.push(`/result/${randomNum()}`)}
      >
        今日の運勢を見る
      </button>
    </div>
  );
};
