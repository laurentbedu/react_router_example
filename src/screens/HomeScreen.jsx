import { useEffect, useState } from "react";
import {Gender}  from "../models/gender.model";

const HomeScreen = () => {

  const [genders, setGenders] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const data = 
        await (await fetch("http://localhost:5000/product/10")).text()
      return data;
      
      //setGenders(genders);
    };
    fetchData().then(console.log).catch(console.error);
  },[])

  return (
    <>
      <h1>HomeScreen</h1>
    </>
  );
};

export default HomeScreen;
