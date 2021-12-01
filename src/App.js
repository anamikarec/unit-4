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
// const postData = () => {
//   // payload:{
//   //   name: "name",
//   // }
//   const config = {
//     url: "db.json",
//     method: "post"
//     // data:payload
//   };
//   return axios(config);
// };

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
      setLoading(false);
    });
  }, []);
  const carsAbove = () => {
    setRes(res.filter((item, i) => item.price > 100000));
  };
  const carsBelow = () => {
    setRes(res.filter((item, i) => item.price <= 100000));
  };
  const beforeYear = () => {
    setRes(res.filter((item, i) => item.year <= 2001));
  };
  const afterYear = () => {
    setRes(res.filter((item, i) => item.year > 2001));
  };
  const filterBySUV = () => {
    setRes(res.filter((item, i) => item.type === "SUV"));
  };
  const filterByHATCHBACK = () => {
    setRes(res.filter((item, i) => item.type === "HATCHBACK"));
  };
  const filterByCROSSOVER = () => {
    setRes(res.filter((item, i) => item.type === "CROSSOVER"));
  };

  return (
    <div className="App">
      <span>Filter By Year</span>
      <button
        onClick={beforeYear}
        style={{
          width: "160px",
          height: "40px",
          color: "white",
          background: "black",
          margin: "3px"
        }}
      >
        Filter by year before 2001
      </button>
      <button
        onClick={afterYear}
        style={{
          width: "160px",
          height: "40px",
          color: "white",
          background: "black",
          margin: "3px"
        }}
      >
        Filter by year After 2001
      </button>
      <br />
      <span>Filter By Type</span>
      <button
        onClick={filterBySUV}
        style={{
          width: "160px",
          height: "40px",
          color: "white",
          background: "black",
          margin: "3px"
        }}
      >
        Filter by SUV
      </button>
      <button
        onClick={filterByCROSSOVER}
        style={{
          width: "160px",
          height: "40px",
          color: "white",
          background: "black",
          margin: "3px"
        }}
      >
        Filter by CROSSOVER
      </button>
      <button
        onClick={filterByHATCHBACK}
        style={{
          width: "160px",
          height: "40px",
          color: "white",
          background: "black",
          margin: "3px"
        }}
      >
        Filter by HATCHBACK
      </button>
      <br />
      <span>Filter by price</span>
      <button
        onClick={carsAbove}
        style={{
          width: "160px",
          height: "40px",
          color: "white",
          background: "black",
          margin: "3px"
        }}
      >
        Cars above 1 Lakh
      </button>
      <button
        onClick={carsBelow}
        style={{
          width: "160px",
          height: "40px",
          color: "white",
          background: "black",
          margin: "3px"
        }}
      >
        Cars below 1 Lakh
      </button>
      {loading ? (
        <h3>...loading</h3>
      ) : (
        res.map((cars) => {
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
              <img
                src={cars.image}
                alt="image"
                width="200"
                className="imgTag"
              />
              <div>
                <h3 style={{ padding: "0 1rem 0 0" }}>Car : {cars.name}</h3>
                <h3>Car Type : {cars.type}</h3>
                <h3>Car Year : {cars.year}</h3>
                <h3>Price of Car : {cars.price}</h3>
                <button
                  style={{
                    width: "160px",
                    height: "40px",
                    color: "white",
                    background: "black",
                    margin: "3px"
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
