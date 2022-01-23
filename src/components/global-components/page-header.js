import React, { Component } from 'react';

class Page_header extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    const inlineStyle = {
      backgroundImage: 'url(' + publicUrl + 'assets/img/banner/1.png)'
    }
    return (
      <div className="breadcrumb-area jarallax" style={inlineStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Page_header