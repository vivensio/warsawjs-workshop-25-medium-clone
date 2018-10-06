import React from 'react';
import Banner from './Banner';
import Main from './Main';
import Tags from './Tags';

class Home extends React.Component {
  state = {
    tags: [
      'react',
      'vue',
      'angular',
      'preact',
      'inferno',
    ]
  };
  render() {
    return (
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <Main />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <Tags tags={this.state.tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
