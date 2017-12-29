import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './config/key';
import SearchBar from './components/SearchBar';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

    YTSerach({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  };
  render (){
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
