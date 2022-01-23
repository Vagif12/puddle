import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import { Link } from 'react-router-dom';

class Explore extends Component {


  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let data = sectiondata.explore

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
                  <img src={publicUrl + item.image} alt="explore" />
                  {/* <a href="/"><i className="fa fa-paper-plane" /></a> */}
                </div>
                <div className="details readeal-top">
                  <h4 className="d-flex justify-content-center"><Link to="/properties-by-city">{item.city}</Link></h4>
                  <p className="d-flex justify-content-center" style={{"marginBottom":"10%","textAlign":"center"}}>{item.description}</p>
                  {/* <ul className="list"> */}
                    {/* <li><i className="fa fa-map-marker"></i>Listings: {item.lisgintnumber}</li> */}
                    {/* <li><i className="fa fa-euro" />Price: ${item.price}</li> */}
                  {/* </ul> */}
                    <li className="readeal-top no-bullet d-flex justify-content-center"><Link className="btn btn-yellow" to={`/search-list?query=&country=Ireland&type=${item.type}&county=County&propertyCategory=Properties`}>{item.btnText}</Link></li>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>


  }
}

export default Explore