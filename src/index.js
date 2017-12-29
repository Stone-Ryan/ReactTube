import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import { API_KEY } from './config/key';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  };
  render (){
    const { videos } = this.state;

    return(
      <div>
        <SearchBar />
        <VideoList videos={videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
