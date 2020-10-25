import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import './Navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
    const logo = <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
   
      const options = ['Mirpur', 'Muzaffarabad','Bhimber','Kotli'];
    return (
      <>
        <div className="bg-light ">
            <nav className="navbar nav  navbar-expand-lg navbar-light bg-light ">
    <NavLink className="navbar-brand ml-5"  to="/">{logo}</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">


  <div className="navbar__autocomplete mr-1">
      <SearchIcon className="auto_ICON" fontSize="large"/>
  <Autocomplete
      id="custom-input-demo"
      className="autoCmplt_search"
      options={options}
      renderInput={(params) => (
        <div style={{borderColor: 'none'}} ref={params.InputProps.ref}>
          <input style={{borderColor: 'none',color:'#ccc'}} placeholder="Search city,area or loc..."  type="text" {...params.inputProps}  />
        </div>
      )}
    />
    <ExpandMoreIcon className="auto_ICON" fontSize="large"/>
  </div>

  <div className="navbar__searchField ml-3 ">
  <div class="input-group navbar__search mb-3 mt-3">
  <input type="text" class="form-control bigSearch" placeholder="Find Cars, Mobile Phones and more.." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <span class="input-group-text seachFieldIcon" id="basic-addon2"><SearchIcon fontSize='large'/></span>
  </div>
</div>
  </div>
  <div className="logIn ml-4">
        <a href="#" className="navbar__login">Login</a>
  </div>
  <div className="sellBtn ml-4">
  <a href="#0" class="button">
  <span className='sell'><AddIcon  style={{fontSize:'30px'}}/>Sell</span>
</a>
  </div>
  
  
  </div>
  
</nav>
        </div>
        </>
    )
}

export default Navbar
