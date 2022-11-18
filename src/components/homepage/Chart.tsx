import React from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

const data = [
  { name: "Page A", death: 400, pv: 200, lives: 70, amt: 2400 },
  { name: "Page b", death: 500, pv: 20, lives: 900, amt: 2400 },
  { name: "Page c", death: 300, pv: 200, lives: 700, amt: 2400 },
  { name: "Page d", death: 600, pv: 2400, lives: 600, amt: 2400 },
];

function Chart() {
  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
     <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    ></LineChart>
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#fff" />
      <Line type="monotone" dataKey="death" stroke="#ffa300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      <Line type="monotone" dataKey="lives" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
}

export default Chart;
