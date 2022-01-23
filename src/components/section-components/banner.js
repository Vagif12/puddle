import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import LinkButton from '../global-components/LinkButton';
import Select from 'react-select'

const options = [
  { value: 'Dublin', label: 'Dublin' },
  { value: 'Wicklow', label: 'Wicklow' },
  { value: 'Limerick', label: 'Limerick' },
  { value: 'Wexford', label: 'Wexford' },
  { value: 'Cork', label: 'Cork' },
  { value: 'Waterford', label: 'Waterford' },
  { value: 'Offaly', label: 'Offaly' },
  { value: 'Carlow', label: 'Carlow' },
  { value: 'Cavan', label: 'Cavan' },
  { value: 'Clare', label: 'Clare' },
  { value: 'Donegal', label: 'Donegal' },
  { value: 'Galway', label: 'Galway' },
  { value: 'Kerry', label: 'Kerry' },
  { value: 'Kildare', label: 'Kildare' },
  { value: 'Kilkenny', label: 'Kilkenny' },
  { value: 'Laois', label: 'Laois' },
  { value: 'Leitrim', label: 'Leitrim' },
  { value: 'Longford', label: 'Longford' },
  { value: 'Louth', label: 'Louth' },
  { value: 'Mayo', label: 'Mayo' },
  { value: 'Sligo', label: 'Sligo' },
  { value: 'Monoghan', label: 'Monoghan' },
  { value: 'Roscommon', label: 'Roscommon' },
  { value: 'Meath', label: 'Meath' },
  { value: 'Tipperary', label: 'Tipperary' },
]

const propertyCategoryOptions = [
    { value: 'Properties', label: 'All Property' },
    { value: 'Homes', label: 'Homes' },
    { value: 'Rooms', label: 'Rooms' },
    { value: 'Garages', label: 'Garages' },
    { value: 'Storage', label: 'Storage' },
    { value: 'Offices', label: 'Offices' },
    { value: 'Commercial', label: 'Commercial' },
    { value: 'Apartments', label: 'Apartments' },
    

]

const styleFn =  {
  dropdownIndicator: base => ({
    ...base,
    color: "var(--main-color-one)",
    "&:hover": {
        color: "var(--main-color-one)"
      }
  }),
  control: base => ({
      ...base,
      height: '3.8vw',
      
      
    }),
  option: (provided, state) => ({
    ...provided,
    
    // backgroundColor: state.isSelected ? 'var(--main-color-one)' : 'white',
    color: state.isSelected ? 'white' : 'var(--main-color-one)',
  }),

  


  singleValue: (provided, state) => ({
    opacity: state.isDisabled ? 1 : 1,
    display: state.selectProps.menuIsOpen ? 'none' : 'block',
    
}),

}



class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {fullAdress: '',type: 'For Sale',county: 'County',propertyCategory: 'Properties'};
    this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleType = this.handleType.bind(this);
  this.handleCounty = this.handleCounty.bind(this);
  this.handlePropertyCategory = this.handlePropertyCategory.bind(this);
  }


  componentDidMount() {



    const $ = window.$;

    if ($('.single-select').length) {
      $('.single-select').niceSelect();
    }
  }

  handleChange(event) {
        this.setState({fullAdress: event.target.value});
        
    }

  handlePropertyCategory(value) {
    this.setState({propertyCategory: value})
  }

  handleCounty(value) {
    // event.persist();
    this.setState({county: value});
  
    }

  handleType(event) {
    if (event.target.textContent == 'Buy') {
      this.setState({type: 'For Sale'});

    } else {
      this.setState({type: 'For Rent'});

    }
        
    }

  handleSubmit(event) {
        // Pass the input value to the parent component.
        
    }


  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let data = sectiondata.banner

    const inlineStyle = {
      backgroundImage: 'url(' + publicUrl + 'assets/img/banner/main.webp)'
    }

    return <div className="banner-area jarallax" style={inlineStyle}>
      <div className="container">
        <div className="banner-inner-wrap">
          <div className="row">
            <div className="col-12">
              <div className="banner-inner">
                <h5 className="sub-title">{data.subtitle}</h5>
                <h1 className="title cwhite">{data.title1} <br /> {data.title2}</h1>
              </div>
            </div>
            
            <div className="col-12">
              <div className="banner-search-wrap">
                  <ul className="nav nav-tabs rld-banner-tab">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="" onClick={this.handleType}>Buy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="" onClick={this.handleType}>Rent</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs_1">
                    <div className="rld-main-search">
                      <form onSubmit={this.handleSubmit} autoComplete="off">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="rld-single-input left-icon">
                            <input style={{textDecoration: 'capitalize'}} value={this.state.fullAdress} onChange={this.handleChange} id="header-search" name="header-search" type="text" placeholder="Search in Ireland"/>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6">
                          <Select styles={styleFn} placeholder='All Property' defaultValue='Properties' options={propertyCategoryOptions} onChange={(val) => {
                            this.handlePropertyCategory(val.value);
                          }}/>
                          
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-6">
                        <div className="rld-single-select">
                          <Select styles={styleFn} placeholder='County' defaultValue='County' options={options} onChange={(val) => {
                            this.handleCounty(val.value);
                          }}/>
                        
                        
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                           <LinkButton className="btn btn-yellow" role="button" type='submit' to={`/search-list?query=${this.state.fullAdress}&country=Ireland&type=${this.state.type}&county=${this.state.county}&propertyCategory=${this.state.propertyCategory}`}>SEARCH</LinkButton>
          
                        </div>
                          
                      </div>
                      </form>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  }
}

export default Banner