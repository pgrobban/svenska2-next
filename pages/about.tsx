import React from "react";
import Layout from "../components/Layout";

interface Props {}

const FourOhFour: React.FC<Props> = () => {
  return (
    <Layout location="about" title="About">
      <div>This is the about page.</div>
    </Layout>
  );
};

export default FourOhFour;
