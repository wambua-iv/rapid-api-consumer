import React from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

function Chart() {
  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#fff" />
      <Line type="monotone" dataKey="uv" stroke="#ffa300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
}

export default Chart;
