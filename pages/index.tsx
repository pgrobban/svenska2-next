import React from "react";
import { Button } from "@material-ui/core";
import Icon from "../components/Icon";
import Link from "next/link";
import Layout from "../components/Layout";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout location="home" title="">
      <div className="blackboard">
        <h2>
          Swedish,
          <br />
          Made easy.
        </h2>
        <h3>Welcome to Robban's Swedish Language Corner</h3>
      </div>
      <h2 className="theme-swe-blue" style={{ marginTop: 20 }}>
        Hej!
      </h2>
      <p>
        Have you ever wanted to travel to Sweden, or maybe even live and work
        here? Do you want to meet and talk to friends in Sweden in their native
        language? Do you find conventional classroom lessons dull and boring,
        and perhaps even textbooks difficult to understand or too expensive?
        <br />
        If your answer to any of the questions above is "yes", then why not try
        a new way of learning? Say goodbye to boring books and unmotivated
        classmates. At Robban's Swedish corner, we offer:
      </p>

      <div
        className="w3-row-padding"
        style={{ display: "flex", flexWrap: "wrap", marginBottom: 10 }}
      >
        <div className="w3-col s6 m3" style={{ marginBottom: 10 }}>
          <Icon
            type="book"
            className="theme-swe-blue theme-swe-center"
            size="xl"
          />
          <span>
            <strong>Free</strong> textbook with easy-to-understand conversations
            and grammar
          </span>
        </div>
        <div className="w3-col s6 m3">
          <Icon
            type="exercise"
            className="theme-swe-blue theme-swe-center"
            size="xl"
          />
          <span>Interactive exercises and games - get scored instantly!</span>
        </div>
        <div className="w3-col s6 m3">
          <Icon
            type="achievement"
            className="theme-swe-blue theme-swe-center"
            size="xl"
          />
          <span>Become a member and earn achievements as you learn</span>
        </div>
        <div className="w3-col s6 m3">
          <Icon
            type="chat"
            className="theme-swe-blue theme-swe-center"
            size="xl"
          />
          <span>
            Ask for help and chat with native speakers in our friendly forums
          </span>
        </div>
      </div>

      <div className="w3-clear" />

      <div className="w3-col m6">
        <Button
          variant="contained"
          color="primary"
          style={{ width: "calc(100% - 10px)", marginBottom: 10 }}
        >
          <Link href="/lessons">
            <a>Open the textbook</a>
          </Link>
        </Button>
      </div>

      <div className="w3-col m6">
        <Button
          variant="contained"
          color="primary"
          style={{ width: "calc(100% - 10px)", marginBottom: 10 }}
        >
          <span>Become a member</span>
        </Button>
      </div>

      <div>
        Are you an advanced learner? Check out our section called "Language
        bites". Here you will find more advanced reading materials, answers to
        frequently asked questions and how to sound more like a native speaker
        with correct word choices.
      </div>
    </Layout>
  );
};

export default Home;
