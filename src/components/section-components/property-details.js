import React from 'react';
import { Link,useLocation } from 'react-router-dom';


function PropertyDetails() {

  const [searchData,setSearchData] = React.useState([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const searchQueryData = useQuery();
  

    const callBackendAPI = async () => {
    const response = await fetch(`/api/properties/find?id=${searchQueryData.get('id')}`);
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

    return (
      <div>
        {searchData.map((item) =>
        <div>
        <div key={item._source.id} className="property-details-area">
      <div className="bg-gray pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row ">
            <div className="col-xl-9 col-lg-8">
              <div className="property-details-slider">
                <div data-interval="false" id="carouselExampleIndicators" className="carousel slide">

  <div className="carousel-inner" data-interval="false" >
    <div className="carousel-item active">
      <img style={{'width':'100%','height':'50vw'}} className="d-block w-100" src={item._source.images[0]} alt="Slide 1"/>
    </div>
    {item._source.images.slice(1).map((img,i) => 
                    <div key={i} className="carousel-item">
      <img style={{'width':'100%','height':'50vw'}} className="d-block w-100" src={img} alt={`Slide ${i}`}/>
    </div>
                )}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
              </div>
              <div className="property-details-slider-info">
                <h3><span>€{item._source.price} {item._source.rentPeriod}</span><br/> {item._source.fullAddress}, Co.{item._source.county}</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="widget widget-owner-info mt-lg-0 mt-5">
                <div className="owner-info text-center">
                  <div className="thumb">
                    <img width='60' height='60' src={publicUrl + `assets/img/icons/${item._source.listedBy.toLowerCase().split(' ').join('')}.png`} alt={ imagealt } />
                  </div>
                  <div className="details">
                    <h6>{item._source.listedBy}</h6>
                    {/* <span className="designation">Building Owner</span> */}
                    <p className="reviews"><i className="fa fa-star" /><span>4.8</span> 70 Review</p>
                  </div>
                </div>
                <div className="contact">
                  <h6>Contact Us</h6>
                  <div className="rld-single-input">
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="rld-single-input">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="rld-single-input">
                    <input type="text" placeholder="Messages" />
                  </div>
                  <div>
                  <div >
                    <a className=" w-100 btn btn-yellow btn btn-yellow" href="#">Send Messages</a>
                </div>
                  </div>
                </div>
                <div className="contact-info">
                  <h6 className="mb-3">Contact Info</h6>
                  <div className="media">
                    <div className="media-left">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="media-body">
                      <p>Address</p>
                      <span>{item._source.contactInfo.listerAddress}</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="media-body">
                      <p>Phone</p>
                      <span>{item._source.contactInfo.phoneNumber}</span>
                    </div>
                  </div>
                  <div className="media mb-0">
                    <div className="media-left">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="media-body">
                      <p>Email</p>
                      <span>i{item._source.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        {/* justify-content-center */}
        <div className="row pd-top-90 ">
          <div className="col-lg-9">
            <div className="property-info mb-5">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="single-property-info">
                    <h5>Bedrooms</h5>
                    <p><i className="fa fa-bed" />{item._source.numBedrooms}</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-property-info">
                    <h5>Bathrooms</h5>
                    <p ><i className="fa fa-bath" />{item._source.numBathrooms}</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="singleproperty-info">
                    <h5>Area</h5>
                    <p style={{"paddingBottom":"10%"}}><i style={{'color':'var(--main-color-one)'}} className="fa fa-cube"></i> {item._source.squareFeet} ft²</p>
                  </div>
                </div>
                <br></br>
                <p></p>
                <div className="col-md-4 col-sm-6">
                  <div className="single-property-info">
                    <h5>Energy Rating</h5>
                    <p><i className="fa fa-battery" />{item._source.energyRating}</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-property-info">
                    <h5>Home Type</h5>
                    <p><i className="fa fa-home" />{item._source.propertyType}</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-property-info">
                    <h5>Category</h5>
                    <p><i className="fa fa-compass" />{item._source.propertyCategory[0]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="property-news-single-card style-two border-bottom-yellow">
              <h4>Description</h4>
              <p>{item._source.description} </p>
            </div>
            <div className="property-news-single-card style-two border-bottom-yellow">
              <h4>Base Floor Plan</h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5621.1629504770535!2d-122.43633647504856!3d37.748515859182696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1578304196576!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen />
            </div>
            <div className="property-news-single-card border-bottom-yellow">
              <h4>Amenities</h4>
              <div className="row">
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Attic</li>
                    <li><i className="fa fa-check" /> Poll</li>
                    <li><i className="fa fa-check" /> Concierge</li>
                    <li><i className="fa fa-check" /> Basketball Cout</li>
                    <li><i className="fa fa-check" /> Sprinklers</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Recreation</li>
                    <li><i className="fa fa-check" /> Front Yard</li>
                    <li><i className="fa fa-check" /> Wine Cellar</li>
                    <li><i className="fa fa-check" /> Basketball Cout</li>
                    <li><i className="fa fa-check" /> Fireplace</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Balcony</li>
                    <li><i className="fa fa-check" /> Pound</li>
                    <li><i className="fa fa-check" /> Deck</li>
                    <li><i className="fa fa-check" /> 24x7 Security</li>
                    <li><i className="fa fa-check" /> Indoor Game</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="property-news-single-card border-bottom-yellow">
              <h4>Floor Plan</h4>
              <div className="thumb">
                <img src={ publicUrl+"/assets/img/others/10.png"} alt={imagealt} />
              </div>
            </div>
            <div className="property-news-single-card border-bottom-yellow pb-3">
              <h4>Facts and Features</h4>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-bed" />
                    </div>
                    <div className="media-body">
                      <h6>Living Room</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-car" />
                    </div>
                    <div className="media-body">
                      <h6>Garage</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <img src={ publicUrl+"/assets/img/icons/7.png"} alt={imagealt} />
                    </div>
                    <div className="media-body">
                      <h6>Dining Area</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                       <img src={ publicUrl+"/assets/img/icons/7.png"} alt={imagealt} />
                    </div>
                    <div className="media-body">
                      <h6>Dining Area</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-bed" />
                    </div>
                    <div className="media-body">
                      <h6>Bedroom</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-bath" />
                    </div>
                    <div className="media-body">
                      <h6>Bathroom</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                       <img src={ publicUrl+"/assets/img/icons/17.png"} alt={imagealt} />
                    </div>
                    <div className="media-body">
                      <h6>Gym Area</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <img src={ publicUrl+"/assets/img/icons/17.png"} alt={imagealt} />
                    </div>
                    <div className="media-body">
                      <h6>Gym Area</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {(() => {
              if (item._source.type === 'For Sale'){
                  return (
                  <div className="property-news-single-card mb-0">
             
              <h4>Mortgage Calculator</h4>
              <iframe title='calc' style={{border:'0',height: '700px'}} src={`https://bsite.net/Vagif/?price=${item._source.price}`}></iframe>
            </div>
                  )
              }
              
              return null;
            })()}
          </div>
        </div>
      </div>
    </div>


      </div>
        
        )}
      </div>
    )



}

export default PropertyDetails