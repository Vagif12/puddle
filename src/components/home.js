import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Explore from './section-components/explore';
import Popular from './section-components/popular';


import Footer from './global-components/footer';
import { Component } from 'react';

class Home extends Component {
    componentDidMount() {
    this.callBackendAPI()
      .then(res => {
          this.setState({ data: res.express });
          console.log(this.state.data);
      })
      .catch(err => console.error(err));
  };

    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/health');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
      return (
        <div>
        <Navbar />
        <Banner />
        <Explore />
        <Popular />
        <Footer />
    </div>
      )
  }
}

export default Home

