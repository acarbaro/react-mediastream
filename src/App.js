import React, { Component } from 'react';
import './App.css';
import ActionButton from './components/ActionButton';

const myConstraints = {
  audio: true,
  video: true
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaStream: {}
    }

    this.fullBleedVideo = React.createRef();

    this.getAudioTracks = this.getAudioTracks.bind(this);
    this.getAudioTrackById = this.getAudioTrackById.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.getVideoTracks = this.getVideoTracks.bind(this);
    this.removeAudioTrack = this.removeAudioTrack.bind(this);
    this.removeVideoTrack = this.removeVideoTrack.bind(this);
  };

  componentDidMount(){
    this.getMediaStram();
  }

  async getMediaStram(){
    const mediaStream = await navigator.mediaDevices.getUserMedia(myConstraints);
    if(mediaStream.active) {
      this.setState({
        mediaStream
      }, () => this.fullBleedVideo.current.srcObject = mediaStream)
      
    }
  }

  getAudioTracks(){
    console.log("getAudioTracks"); 
    console.log(this.state.mediaStream.getAudioTracks()); 
  }

  getAudioTrackById(){
    console.log("getTrackById"); 
    console.log(this.state.mediaStream.getTrackById(
        this.state.mediaStream.getAudioTracks()[0].id)
    ); 
  }

  getTracks() {
    console.log("getTracks()"); 
    console.log(this.state.mediaStream.getTracks()); 
  }

  getVideoTracks(){
    console.log("getTracks()"); 
    console.log(this.state.mediaStream.getTracks()); 
  }

  removeAudioTrack(){
    console.log("removeAudioTrack()"); 
    this.state.mediaStream.removeTrack(this.state.mediaStream.getAudioTracks()[0]); 
  }

  removeVideoTrack(){
    console.log("removeVideoTrack()"); 
    this.state.mediaStream.removeTrack(this.state.mediaStream.getVideoTracks()[0]); 
  }
  

  render() {
    return (
      <div>
        <video autoPlay ref={this.fullBleedVideo} />
        <ActionButton 
          buttonText="getAudioTracks()" 
          dynamicFunction={this.getAudioTracks}
        />
        <ActionButton 
          buttonText="getTrackById()" 
          dynamicFunction={this.getAudioTrackById}
        />
        <ActionButton 
          buttonText="getTracks()" 
          dynamicFunction={this.getTracks}
        />
        <ActionButton 
          buttonText="getVideoTracks()" 
          dynamicFunction={this.getVideoTracks}
        />
        <ActionButton 
          buttonText="removeTrack() - audio" 
          dynamicFunction={this.removeAudioTrack}
        />
        <ActionButton 
          buttonText="removeTrack() - video" 
          dynamicFunction={this.removeVideoTrack}
        />
      </div>
    );
  }
}

export default App;
