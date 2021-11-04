import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    // console.log(term);
    // test this below under the first '});' as console.log(response)
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // console.log(response);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* {this.state.videos.length} videos. */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
