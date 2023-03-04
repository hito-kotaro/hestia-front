import axios from "axios";
import type { AxiosResponse } from "axios";
import { useState } from "react";

const useApi = () => {
  // ステートでレシピ名を持つ
  const [recipe, setRecipe] = useState("何かな...?");
  const [thxMsg, setThxMsg] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [select, setSelect] = useState<string[]>([]);
  // apiアクセスを行いステートを更新する

  const sleep = (msec: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, msec);
    });
  };

  const random = async (url: string) => {
    const params = select.join(",");

    setRecipe("抽選中...");
    setThxMsg("");
    await sleep(1000);

    const { data } = await axios.get(`${url}/${params}`);
    setRecipe(data.title ?? "メニューがありません。。。");
    console.log(data.title);
    setThxMsg("いつもありがとう！！");
  };

  const fetchTags = async (url: string) => {
    const res: AxiosResponse = await axios.get("http://192.168.0.12:3000/tags");
    console.log(res.data);
    setTags(res.data);
  };
  return { random, fetchTags, setSelect, tags, recipe, thxMsg };
};

export default useApi;
