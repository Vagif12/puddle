import React from 'react';
// import sectiondata from '../../data/sections.json';
import { Link,useLocation } from 'react-router-dom';


function SearchList() {

  const [searchData,setSearchData] = React.useState([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const searchQueryData = useQuery();
  

    const callBackendAPI = async () => {
    const response = await fetch(`/api/properties/search?fullAddress=${searchQueryData.get('query')}&country=${searchQueryData.get('country')}&type=${searchQueryData.get('type')}&county=${searchQueryData.get('county')}&propertyCategory=${searchQueryData.get('propertyCategory')}`);
    const res = await response.json();

    if (response.status !== 200) {
      // console.error(res.message);
      throw Error(res.message) 
    }
    return res;
    

  };

  React.useEffect(() => {

  callBackendAPI().then(res => {
    setSearchData(res.body.hits.hits);
  })

  },[])


    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    // let data = sectiondata.searchlist

    return <div className="search-page-wrap pd-top-70 pd-bottom-70">

      <div className="search-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 sitebar">
              <form className="widget widget-sidebar-search-wrap">
                <div className="widget-sidebar-search">
                  <div className="widget-sidebar-item-wrap btn-area">
                    <h3 className="d-flex filter-title mb-4 justify-content-center"><i className="fa fa-filter" style={{ color: "var(--main-color-one)"}}></i> Filter</h3>
                  </div>
                  <div className="widget-sidebar-item-wrap rld-single-input">
                    <input type="text" placeholder="Search in Ireland" />
                  </div>
                  <div className="widget-sidebar-item-wrap rld-single-select">
                    <select className="select single-select">
                      <option value={1}>All Properties</option>
                      <option value={2}>New Homes</option>
                      <option value={3}>Rooms</option>
                      <option value={4}>Garages</option>
                      <option value={5}>Storage Rooms</option>
                      <option value={6}>Offices</option>
                      <option value={7}>Commerical</option>
                      <option value={8}>Apartments</option>
                    </select>
                  </div>
                  <div className="widget-sidebar-item-wrap rld-price-slider-wrap">
                    <div className="title">Price</div>
                    <div className="price">
                      <span>€750.00</span>
                      <span className="float-right">€3500.00</span>
                    </div>
                    <div className="rld-price-slider">
                      <div className="ui-slider-handle-price ui-slider-handle" />
                    </div>
                  </div>
                  <div className="widget-sidebar-item-wrap rld-price-slider-wrap">
                    <div className="title">Size</div>
                    <div className="price">
                      <span>600</span>
                      <span className="float-right">6500m²</span>
                    </div>
                    <div className="rld-size-slider">
                      <div className="ui-slider-handle-size ui-slider-handle" />
                    </div>
                  </div>
                  <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                    <div className="title d-inline-block float-left mb-0 pt-2">Beds </div>
                    <div className="rld-single-select d-inline-block float-right">
                      <select className="select single-select">
                        <option value={1}>2-4</option>
                        <option value={2}>3-4</option>
                        <option value={3}>1-3</option>
                        <option value={3}>2-4</option>
                      </select>
                    </div>
                  </div>
                  <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                    <div className="title d-inline-block float-left mb-0 pt-2">Baths </div>
                    <div className="rld-single-select d-inline-block float-right">
                      <select className="select single-select">
                        <option value={1}>2-4</option>
                        <option value={2}>3-4</option>
                        <option value={3}>1-3</option>
                        <option value={3}>2-4</option>
                      </select>
                    </div>
                  </div>
                  <div className="widget-sidebar-item-wrap rld-single-select-wrap mb-0">
                    <div className="title d-inline-block float-left mb-0 pt-2">Parking</div>
                    <div className="rld-single-select d-inline-block float-right">
                      <select className="select single-select">
                        <option value={1}>2-4</option>
                        <option value={2}>3-4</option>
                        <option value={3}>1-3</option>
                        <option value={3}>2-4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap text-center">
                  <button className="btn btn-yellow"><span className="left"><i className="fa fa-search" /></span>Find Property</button>
                </div>
              </form>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="row mb-3">
                <div className="col-md-9 col-sm-8">
                  <h6 className="filter-title mt-3 mb-lg-0" style={{"fontWeight":"normal"}}>{searchQueryData.get('propertyCategory')} {searchQueryData.get('type')} in {searchQueryData.get('query') !== '' ? `${searchQueryData.get('query')},` : ''} {searchQueryData.get('county') !== 'County' ? `Co.${searchQueryData.get('county')}, ${searchQueryData.get('country')}` : searchQueryData.get('country')} - {searchData.length} Results</h6>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="rld-single-select">
                    <select className="select single-select">
                      <option value={1}>Best Match</option>
                      <option value={2}>Most Recent</option>
                      <option value={3}>Price Low to High </option>
                      <option value={3}>Price High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              {searchData.map((item) =>
                <div key={item._source.id} className="single-feature style-two">
                  <div className="thumb">
                    <img src={item._source.images[0]} alt="img" />
                  </div>
                  <div className="details">
                    <div className="details-wrap">
                      <a href="/" className="feature-logo">
                        <img style={{marginBottom: '9%',borderRadius: '50%',width: 'auto'}} src={publicUrl + `assets/img/icons/${item._source.listedBy.toLowerCase().split(' ').join('')}.png`} alt={imagealt} />
                      </a>
                      <p className="author"><i className="fa fa-user" /> {item._source.listedBy}</p>
                      <h6 className="title readeal-top"><Link to='/'>{item._source.fullAddress}</Link></h6>
                      <h6 className="price">€{item._source.price} {item._source.rentPeriod}</h6>
                      <ul className="info-list">
                        <li><i className='fa fa-bed'/> {item._source.numBedrooms}</li>
                        <li><i className='fa fa-bath'/> {item._source.numBathrooms}</li>
                        <li> <i className="fa fa-area-chart"></i> {item._source.squareFeet} ft²  </li>
                      </ul>
                      <ul className="contact-list">
                        <li><a className="phone" href="/"><i className="fa fa-phone" /></a></li>
                        <li><a className="message" href="/"><i className="fa fa-comments"></i></a></li>
                        <li><Link className="btn btn-yellow" to={`/property-details?id=${item._source.id}`} style={{ color: "white" }}>View Details</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
        <div>
  </div>
  
      </div>
    </div>
  
}

export default SearchList