import React, { useContext } from "react";

import Layout from "../components/Layout";

import { GlobalContext } from "../context/global-context";

const ResultPage = () => {
  const { context } = useContext(GlobalContext);
  return (
    <Layout>
      <div className="result">
        <h1>Name: {context.name}</h1>
        <h1>Mission: {context.mission}</h1>
      </div>
    </Layout>
  );
};

export default ResultPage;