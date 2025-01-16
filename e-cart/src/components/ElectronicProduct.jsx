import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ElectronicProduct = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://fakestoreapi.in/api/products");
        setdata(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((ele) => (
        <div key={ele.id}>
          <h1>{ele.title}</h1>
          <img style={{ width: "200px" }} src={ele.image} alt={ele.brand} />

          {/* <button> */}
            <Link to={`${ele.id}`}>View Details</Link>
          {/* </button> */}
        </div>
      ))}
    </>
  );
};

export default ElectronicProduct;
