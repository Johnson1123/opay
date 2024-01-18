import axios from "axios";
import React, { useEffect, useState } from "react";
// import data from "../../data/script";
import { Link } from "react-router-dom";

// import Button from "./Button";
// import Logout from "./Logout";

const Main = () => {
  let [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  const dataProduct = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  // const handleCount = () => {
  //   setCount(() => count + 1);
  //   console.log(count);
  // };

  useEffect(() => {
    dataProduct();
  }, []);

  console.log(products);
  return (
    // <div>
    //   Categories
    //   <Featurescontainer />
    //   {true && <Button />}
    //   {false && <Button />}
    //   {login ? <Logout /> : <Button />}
    //   <p>{count}</p>
    //   {login ? <Logout /> : <Login />}
    //   <button onClick={handle}>Change</button>
    // </div>

    <div
      className=""
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px 20px",
        margin: "auto",
        width: "100%",
      }}
    >
      {products.length > 0 &&
        products.slice(0, 20).map((item, i) => {
          return (
            <div
              className=""
              style={{
                padding: "5px",
                borderRadius: "10px",
                background: "#f3f3f3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.images[0]}
                width={"250px"}
                height={"150px"}
                style={{ objectFit: "cover" }}
              />
              <div className="" style={{ overflow: "hidden", width: "100%" }}>
                <p
                  className=""
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  {item.description.slice(0, 20)}
                </p>
                <Link
                  to={`/book/${item.title.replaceAll(" ", "-")}`}
                  style={{
                    padding: "10px 15px",
                    border: "none",
                    background: "green",
                    color: "#fefefe",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                >
                  View Book
                </Link>
                <button onClick={() => setCount(2 + 1)}>Update</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Main;
