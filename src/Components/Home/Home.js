import React from "react";
import Topics from "../Topics/Topics";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const topics = useLoaderData();
  const { data } = topics;
  
  return (
    <div>
      <Topics key={data.id} data={data}></Topics>
    </div>
  );
};

export default Home;
