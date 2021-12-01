import "./styles.css";
import axios from "axios";
import { useState } from "react";

const getData = () => {
  const config = {
    url: "db.json",
    method: "get"
  };
  return axios(config);
};

getData().then((res) => {
  console.log(res);
});

export default function App() {
  const [loading, setLoading] = useState(true);
  return <div className="App"></div>;
}
