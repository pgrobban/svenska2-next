import React from "react";
import Layout from "../components/layout/Layout";

interface Props {}

const FourOhFour: React.FC<Props> = () => {
  return (
    <Layout location="" title="Oh no!">
      <div>This page does not exist yet. Or does it...?</div>
    </Layout>
  );
};

export default FourOhFour;
