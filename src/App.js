import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

const getData = () => {
  const config = {
    url: "db.json",
    method: "get"
  };
  return axios(config);
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      // console.log(res.data);
      data = data.data.cars;
      // console.log(res)
      console.log(data);
      setRes(data);
    });
  }, []);

  return (
    <div className="App">
      {res.map((cars) => {
        return (
          <div
            key={cars.id}
            style={{
              display: "flex",
              border: "1px solid black",
              padding: "2rem",
              margin: "2rem"
            }}
          >
            <img src={cars.image} alt="image" width="200" />
            <div>
              <h3 style={{ padding: "0 1rem 0 0" }}>Car : {cars.name}</h3>
              <h3>Car Type : {cars.type}</h3>
              <h3>Car Year : {cars.year}</h3>
              <h3>Price of Car : {cars.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
