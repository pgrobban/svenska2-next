import React from "react";
import Layout from "../components/Layout";

interface Props {}

const FourOhFour: React.FC<Props> = () => {
  return (
    <Layout location="about" title="About">
      <div className="main-centered">
        <h2 className="theme-swe-blue">About the site</h2>

        <p>
          This site was created and developed by Robert Sebescen, AKA Robban. If
          you want to reach me directly regarding technical problems or other
          matters involving me personally, contact me at
          admin[at]robbansswedishcorner[dot]com.
        </p>
        <p>
          However, if you have any questions or comments regarding lessons,
          please use the feedback section on those pages. If you want to have
          longer discussions regarding a topic, please use the forums instead.
        </p>

        <h3>Copyright - the boring stuff</h3>
        <p>
          All of the lessons on the page I wrote myself unless otherwise noted.
          If you wish to use the material for your own website, please contact
          me on the email address above.
        </p>

        <p>Site layout was based on a template from W3</p>
        
        <h4>Image credits</h4>

        <ul>
          <li>Pitch accent graphs by Chang Liu</li>
          <li>Stock images by <a href="http://pexels.com">pexels.com</a></li> 
        </ul>
      </div>
    </Layout>
  );
};

export default FourOhFour;
