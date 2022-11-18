import React from "react";
import { Typography } from "@mui/material";
import Homepage from "../src/components/homepage";

export default function Home() {
  const [apiData, setApiData] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a089872b64mshcff3f2d99c49448p142e93jsn98719ce23edc",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      };
      return await fetch("https://covid-193.p.rapidapi.com/statistics", options)
        .then((res) => res.json())
        .then((data) => {
          setLoading((prev: boolean) => (prev = false));
          return setApiData(() => data.response);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getData();
  }, [setApiData]);

  return loading ? <Typography>loading</Typography> : <Homepage data ={apiData} />;
}
