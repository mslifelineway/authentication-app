import { Box } from "@material-ui/core";
import React from "react";
import { Layout } from "../components";

const Dashboard = () => {
  return (
    <Layout>
      <Box
        padding="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Welcome alien! You're authenticated successfully.
      </Box>
    </Layout>
  );
};

export default Dashboard;
