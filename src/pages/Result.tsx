import { VFC } from "react";
import { useParams, useHistory } from "react-router-dom";

const fortuneItem: FortuneItemType[] = [
  { id: 1, content: "大吉" },
  { id: 2, content: "中吉" },
  { id: 3, content: "小吉" },
  { id: 4, content: "凶" }
];

type FortuneItemType = {
  id: number;
  content: string;
};

export const Result: VFC = () => {
  const { foutuneresult } = useParams<{ foutuneresult: string }>();
  const history = useHistory();
  const targetObj = fortuneItem.find((f) => f.id === Number(foutuneresult));

  return (
    <div className="seach">
      <h1>あなたの今日の運勢は...</h1>
      <p className="result_txt">
        {targetObj ? (
          targetObj.content
        ) : (
          <span className="result_error">エラーが発生しました。</span>
        )}
      </p>
      <button onClick={() => history.push("/")}>戻る</button>
    </div>
  );
};
