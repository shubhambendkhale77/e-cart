import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const EleProdDetails = () => {
  const { eleId } = useParams();
  console.log(eleId);
  const [proDetail, setproDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          `https://fakestoreapi.in/api/products/${eleId}`
        );
        setproDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(proDetail);
  return (
    <div>
      <h1>Welcome to Detail page {eleId}</h1>
    </div>
  );
};

export default EleProdDetails;
