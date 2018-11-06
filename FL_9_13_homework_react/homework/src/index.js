import React, {Component} from 'react';
import {render} from 'react-dom';
import './scss/index.scss';
const rootNode = document.querySelector('#root');

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audio: [],
      isLoading: false,
      play: false,
      pause: true,
    };
  }

  play() {
    this.setState({
      play: true,
      pause: false,
    });
    this.refs.player.play();
  }

  pause() {
    this.setState({ play: false, pause: true, });
    this.refs.player.pause();
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(response => response.json())
      .then(data => this.setState({ audio: data, isLoading: false }));
  }

  render() {
    const { audio } = this.state;

    return (
      <div className="container">
        <div>
          {audio.map(track =>
            <div className="player" key={track.id}>
              <i onClick={this.play.bind(this)} class="material-icons">
                <audio ref="player"><source src={track.mp3} /></audio> 
                play_arrow </i>
              <i onClick={this.pause.bind(this)} class="material-icons"> pause </i>
              <div>
                {track.title}
                {track.author}
              </div>
            </div>)}
        </div>
      </div>
    );
  }
}

render(
  <Music />,
  rootNode,
);
