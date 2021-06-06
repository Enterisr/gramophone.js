import React, { Component } from "react";
import autoBind from "react-autobind";
import classNames from "classnames";
export interface IHomeProps {}
export interface IHomeState {
  isListening?: Boolean;
  stream?: MediaStream | null;
}

class Home extends Component<IHomeProps, IHomeState> {
  fileInputRef: React.RefObject<HTMLAudioElement>;
  constructor(props: IHomeProps) {
    super(props);
    this.state = { isListening: false, stream: null };
    this.fileInputRef = React.createRef();
    autoBind(this);
  }
  async StartRecord() {
    const getUserMedia: any = (
      navigator.mediaDevices?.getUserMedia ||
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia
    ).bind(navigator);
    if (getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        if (this.fileInputRef.current)
          this.fileInputRef.current.srcObject = stream;
        this.setState({ stream });
      } catch (ex) {
        console.error(ex);
      }
    } else alert("your browser doesn't support audio recording :( ");
  }
  StopRecord() {
    if (this.state.stream)
      this.state.stream.getTracks().forEach(function (track) {
        track.stop();
      });
  }
  render() {
    const buttonStyle = classNames({
      "bg-blue-600 hover:bg-blue-700 w-3/12 shadow text-white font-bold px-1 py-3 rounded-2xl  focus:outline-none outline-none border-black":
        this.state.isListening,
      "bg-red-600 hover:bg-blue-700 w-3/12 shadow text-white border-black font-bold px-1 py-3 rounded-2xl focus:outline-none outline-none border-black":
        !this.state.isListening,
    });
    return (
      <div className="flex flex-grow flex-col items-center  rounded-md overflow-auto  focus:outline-none justify-between align-middle  p-20 bg-blue-50 border-4 border-blue-300 shadow-2xl">
        <button
          onClick={() => {
            this.setState({ isListening: !this.state.isListening }, () => {
              this.state.isListening ? this.StopRecord() : this.StartRecord();
            });
          }}
          className={buttonStyle}
        >
          <span className="text-red-800 border-black">🎤</span> record
        </button>
        <audio ref={this.fileInputRef} controls />
      </div>
    );
  }
}

export { Home };
