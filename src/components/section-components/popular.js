import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import { Link } from 'react-router-dom';

class Popular extends Component {


  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let data = sectiondata.discover

    return <div className="explore-area pd-top-85">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title"> {data.title} </h2>
        </div>
        <div className="row">
          {data.items.map((item, i) =>
            <div key={i} className="col-lg-4 col-sm-6">
              <div className="single-explore popup-card">
                <div className="thumb">
                  <img height="200" width="400" src={publicUrl + item.image} alt="explore" />
                  {/* <a href="/"><i className="fa fa-paper-plane" /></a> */}
                </div>
                <div className="details readeal-top">
                  <h4 className="d-flex justify-content-center"><Link to="/properties-by-city">{item.city}</Link></h4>

                  <ul className="list d-flex justify-content-center" style={{"marginBottom":"10%"}}>
                    <li><i className="fa fa-map-marker"></i>Listings: {item.lisgintnumber}</li>
                    <li><i className="fa fa-euro" />Mean Sale Price: €{item.price}</li>
                  </ul>
                    <li className="readeal-top no-bullet d-flex justify-content-center"><Link className="btn btn-yellow" to={`/search-list?county=${item.city}&country=Ireland&type=For Sale&query=&propertyCategory=Properties`}>{item.btnText}</Link></li>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>


  }
}

export default Popular