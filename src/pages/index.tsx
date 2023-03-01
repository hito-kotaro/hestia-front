import { useState } from "react";
import styles from "../styles/Home.module.css";
import useApi from "@/hooks/useApi";

export default function Home() {
  const { random, recipe, thxMsg } = useApi();
  const url = "http://192.168.0.12:3000/recipe/random";
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "5px",
          backgroundColor: "#282624",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "65px",
        }}
      >
        <h1>ReciPicker</h1>
      </div>
      <div
        style={{
          padding: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#fbfff9",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            type="button"
            className={styles.btn}
            onClick={() => random(url)}
          >
            <h1>Pick</h1>
          </button>
          <div
            style={{
              marginTop: "2rem",
              color: "#282624",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            <p>今日のご飯は</p>
            <h2 style={{ marginTop: "30px", color: "#FA9821" }}>{recipe}</h2>
            <p>{thxMsg}</p>
          </div>
        </div>
      </div>
    </>
  );
}
