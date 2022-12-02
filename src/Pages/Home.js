
import React,{useState} from 'react'
import { Component } from 'react'
import './ptest.css'
import flute_forest from './data/flute_forest.mp3'
import harp from './data/harp.mp3'
import rain from './data/rain.mp3'
import beach from './data/beach.mp3'
import riverflow from './data/riverflow.mp3'
import {Howl} from "howler"
//const loggeduser = JSON.parse(localStorage.getItem("user"));
  class Home extends Component{
    // Create state
  state = {

    // Get audio file in a variable
    audio: new Audio(harp),
    audio1: new Audio(riverflow),
    audio2: new Audio(rain),
    audio3: new Audio(flute_forest),
    audio4: new Audio(beach),
  

    // Set initial state of song
    isPlaying: false,
  };
    
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  playPause1 = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio1.pause();
    } else {

      // Play the song if it is paused
      this.state.audio1.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  playPause2 = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio2.pause();
    } else {

      // Play the song if it is paused
      this.state.audio2.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  playPause3 = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio3.pause();
    } else {

      // Play the song if it is paused
      this.state.audio3.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  playPause4 = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio4.pause();
    } else {

      // Play the song if it is paused
      this.state.audio4.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  
 
  render(){
  return (
    <div className='parallax'>
      <p>
        <div className='App'>
        <h3>
        <p>User Email ID : {JSON.parse(localStorage.getItem("user")).email}</p>
        </h3>
        </div>
        <h1>
          <div className='App1'><br /><br /><br /><br />HOME PAGE<br /><br /><br />Choose any of the following tracks and Happy Sleeping...zzz</div>
        </h1>
      </p>
      <div className='parallax'></div>
      {/* <div onClick={()=>callMySound(soundSrc)}>Click for sound</div> */}
      <div className='box1'>
      <div className='playbutton'>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause}>
          Play | Pause
        </button>
      </div>
      
      {/* <button onClick={()=>callMySound(soundSrc)}>Click for sound</button> */}

      </div>
      <div className='parallax'></div>
      <div className='box2'>
      <div className='playbutton'>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause1}>
          Play | Pause
        </button>
      </div>

      </div>
      <div className='parallax'></div>
      <div className='box3'>
      <div className='playbutton'>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause2}>
          Play | Pause
        </button>
      </div>

      </div>
      <div className='parallax'></div>
      <div className='box4'>
      <div className='playbutton'>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause3}>
          Play | Pause
        </button>
      </div>

      </div>
      <div className='parallax'></div>
      <div className='box5'>
      <div className='playbutton'>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause4}>
          Play | Pause
        </button>
      </div>

      </div>
      <div className='parallax'></div>

    </div>
  )
  }
  
}

export default Home