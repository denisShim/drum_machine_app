import React, { Component } from "react";
import "./App.css";

const sounds = [
  {
    key: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
];

const App = () => (
  <div id="display" className="display">
    {sounds.map((sound, idx) => (
      <Box text={sound.key} key={idx} audio={sound.mp3} />
    ))}
  </div>
);

class Box extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.addEventListener("ended", (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove("active");
    });
  }

  playSound = () => {
    this.audio.current.play();
    const parent = this.audio.current.parentNode;
    parent.classList.add("active");
  };

  render() {
    const { text, audio } = this.props;
    return (
      <div
        className="box drum-pad"
        onClick={this.playSound}
        id={`drum-${text}`}
      >
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    );
  }
}

document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    audio.pause();
    const parent = audio.parentNode;
    parent.classList.add("active");
    audio.play();
  }
});

export default App;
