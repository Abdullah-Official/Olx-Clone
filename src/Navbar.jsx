import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import './Navbar.css'
import {NavLink, useHistory} from 'react-router-dom'
import './Login.css'
import {auth,provider} from './firebase'
function Navbar() {
  const Nxt = <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-22SD7" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
const prv = <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-22SD7" d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"></path></svg>
const fbIcon = <svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-367TP rui-27W37" d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"></path></svg>
const google = <svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-367TP rui-27W37" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM515.772 325.594c47.061-2.176 91.221 17.92 127.189 45.995-15.403 17.109-31.275 33.621-48.341 49.024-43.221-29.312-104.747-37.717-147.968-3.797-61.867 41.899-64.768 140.971-5.205 186.155 57.856 51.541 167.296 25.941 183.381-52.864-36.309-0.555-72.661 0-108.885-1.152-0.171-21.291-0.213-42.453-0.171-63.659 60.587-0.213 121.259-0.299 181.973 0.171 3.627 49.92-3.157 102.955-34.347 144.256-47.317 65.28-142.379 84.352-216.576 56.32-74.411-27.691-127.232-104.789-120.917-183.424 1.664-96.128 91.861-180.309 189.867-177.024z"></path></svg>
    const logo = <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
   
      const options = ['Mirpur', 'Muzaffarabad','Bhimber','Kotli'];
      let history = useHistory()
      const signIn = () =>{
        // Do Google Login Here ..
          auth.signInWithPopup(provider)
          .catch((error) => alert(error.message));
          history.push('/')
      }
    return (
      <>
        <div className="bg-light mainTopNav">
            <nav className="navbar nav  navbar-expand-lg navbar-light bg-light ">
    <NavLink className="navbar-brand ml-5"  to="/">{logo}</NavLink>
  <button className="navbar-toggler iconNav" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navbar-collapse1" id="navbarSupportedContent">


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


  <div className="logIn pl-5">
        <a href="#" className="navbar__login "  data-toggle="modal" data-target="#staticBackdrop">Login</a>
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog " style={{width:'auto',heigh:'auto'}} >
    <div class="modal-content">
        <div className="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
      <div class="modal-body">
      
   
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="container-fluid ">
          <div className="row">
              <div className="col-md-10 offset-1">
                    <div className="carouselLogin ">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp"  alt=""/>
                        <p className='ml-5  p1' >Help make OLX safer place to buy and sell</p>
                    </div>
              </div>
          </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="container">
          <div className="row">
              <div className="col-md-10 offset-1">
              <div className="carouselLogin">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp"  alt=""/>
                        <p className='p2'>Contact and close deals faster</p>
                    </div>
              </div>
          </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="container">
          <div className="row">
              <div className="col-md-10 offset-1">
              <div className="carouselLogin">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp"  alt=""/>
                        <p className='lastp'>Save all your favorite items in one place</p>
                    </div>
              </div>    
          </div>
      </div>
    </div> 
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon " aria-hidden="true">{prv}</span>
    <span class="sr-only prev__icon">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true">{Nxt}</span>
    <span class="sr-only nxt__icon">{Nxt}</span>
  </a>
  
</div> <br/>

      
            <div className="btnLogin container-fluid">
            <div className="buttonLoad2 my-3">
                <button> Continues with Phone</button>
            
           
            </div>
            
            <div className="buttonLoad2 my-3">
            <button><span>{fbIcon} </span> Continue with Facebook</button>
            </div>
           
           
            
            <div className="buttonLoad2 my-3">
            <button onClick={signIn}><span>{google}</span> Continue with Google</button>
            </div>
           
            
            
            <div className="buttonLoad2 my-3">
                <button>Continue with Email</button>
            </div>
           
            </div>

            <div className="container footerM">
            <div className="t1">
                <p className='text-center'>We won't share your personal details with anyone</p>
            </div>
            <div className="t2">
                <span className='sub'>If you continue, you are accepting </span>
                <a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" class="_24rr9" data-aut-id=""><span>OLX Terms and Conditions and Privacy Policy</span></a>
            </div>
            </div>
            
      </div>
     
    </div>
  </div>
</div>
      
  </div>
  <div className="sellBtn pl-4">
  <a href="#0" class="button "  data-toggle="modal" data-target="#staticBackdrop">
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
