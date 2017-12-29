import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { API_KEY } from './config/key';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('overwatch')
  };

  videoSearch (term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render (){
    const { videos, selectedVideo } = this.state;

    return(
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
