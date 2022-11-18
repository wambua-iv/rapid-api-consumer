import { Container } from "@mui/system";
import React from "react";
import Chart from "./Chart";
import DataTable from "./DataTable";
import SearchBar from "./SearchBar";

interface Props {
    data: any
}

function Homepage({data}: Props) {
  return (
    <Container maxWidth="lg">
      <Chart />
      <SearchBar />
      <DataTable data={data}/>
    </Container>
  );
}

export default Homepage;
