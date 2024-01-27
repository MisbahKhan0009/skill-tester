import React from "react";
import { useLoaderData } from "react-router-dom";
import Chart from "../Chart/Chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

import './Statistics.css'


const Statistics = () => {
  const id = useLoaderData();
  const { data } = id;
  console.log(data);

  return (
    <div className="chart-container">
      <h1>Statistics of our collection of question based on Topic</h1>

      <div className="chart">
        <BarChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <Bar dataKey="total" fill="#514D46" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </BarChart>
      </div>
      {/* <div>
        {data.map((chart) => (
          <Chart key={chart.id} data={chart}></Chart>
        ))}
      </div> */}
    </div>
  );
};

export default Statistics;
