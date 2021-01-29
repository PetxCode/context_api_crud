import { Button } from "antd";
import React from "react";
import "./Home.css";

const HomeScreen = () => {
  const [good, setGood] = React.useState(true);

  const on = () => {
    setGood(!good);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("gamePlay")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };

  const off = () => {
    setGood(!good);
    let video = document.getElementsByClassName("gamePlay")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div>
      <center>This is the Home Screen</center>

      <center>
        <div className="home">
          <video
            height="70%"
            width="100%"
            muted
            autoPlay
            className="gamePlay"
          />

          {good ? (
            <Button onClick={on}>Start</Button>
          ) : (
            <Button onClick={off}>Stop</Button>
          )}
        </div>
      </center>
    </div>
  );
};

export default HomeScreen;
