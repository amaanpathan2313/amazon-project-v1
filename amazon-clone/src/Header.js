import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

  const [{cart,user}, dispatch] = useStateValue();

  const handelAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

    return (
        <div className='header'>
        <Link to="/">
          <img className="header--logo" src="  https://i.ytimg.com/vi/Gbnv42rJq5g/maxresdefault.jpg" alt="amazon"/>  
        </Link>   
        
          
              <LocationOnOutlinedIcon className="header--locationicon "/>
               
              <div className="header--location header--option ">   
                <span className="header--optionLineOne ">Hello</span>
                <span className="header--optionLineTwo ">Select your Address</span>     
                 
          </div>

          
          <div className="header--search">
             <input className="header--searchInput" type="text" />
              {/* Material UI */}
              <SearchIcon className="header--searchIcon"/>
          </div>

                  <img  className="flag"   src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png"   alt="indianflag"/>
              <ArrowDropDownIcon className="downicon"/>
 

          <div className="header--nav" >  
            <Link to = {!user && "/login"}>
             <div onClick={handelAuthentication}
             className="header--option"> 
                <span className="header--optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                <span className="header--optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>   
              </div> 
              </Link>

              <div className="header--option"> 
                <span className="header--optionLineOne">Returns</span>
                <span className="header--optionLineTwo">& Orders</span> 
              </div>  


              <div className="header--option"> 
                 <span className="header--optionLineOne">Your</span>
                 <span className="header--optionLineTwo">Prime</span> 
                </div> 
              </div> 
              <Link to="/checkout">
                <div className="header--optionBasket">
                  <ShoppingCartIcon/>
                  <span className="header--optionLineTwo header--basketCount">{cart.length}</span>
                </div>
                </Link>


                
           </div>

    )
}

export default Header
