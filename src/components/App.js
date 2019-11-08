import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import youtube from '../apis/youtube';

class App extends Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    const responce  = await youtube.get('/search',{
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: responce.data.items, 
      selectedVideo: responce.data.items[0]
    });
  }

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  }

  componentDidMount() {
    this.onTermSubmit('nude fuck');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div>
            <div className="five wide column" ><VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;