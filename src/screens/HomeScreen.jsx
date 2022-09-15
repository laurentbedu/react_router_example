import { useEffect } from "react";

const HomeScreen = () => {

  useEffect(()=>{
    const fetchData = async () => {
      const tests = 
        await (await fetch("http://localhost:5000/test/1")).json()
      console.log(tests);
    }
    fetchData().catch(console.error);

  })

  return (
    <>
      <h1>HomeScreen</h1>
    </>
  );
};

export default HomeScreen;
