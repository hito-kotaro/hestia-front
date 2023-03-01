import axios from "axios";
import { useState } from "react";

const useApi = () => {
  // ステートでレシピ名を持つ
  const [recipe, setRecipe] = useState("何かな...?");
  const [thxMsg, setThxMsg] = useState("");
  const [loading, setLoading] = useState(false);
  // apiアクセスを行いステートを更新する

  const sleep = (msec: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, msec);
    });
  };

  const random = async (url: string) => {
    setRecipe("抽選中...");
    setThxMsg("");
    await sleep(1000);
    const { data } = await axios.get(url);
    setRecipe(data.title);
    setThxMsg("いつもありがとう！！");
  };
  return { random, recipe, thxMsg };
};

export default useApi;
