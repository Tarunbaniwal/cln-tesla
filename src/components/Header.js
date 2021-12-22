import React from "react";
import style from "styled-components";

function Header() {
  return (
    <Wraper>
      <Logo>
        <a href="/#" className="logoLink">
          <img src="./assets/asset 11.svg" alt="" />
        </a>
      </Logo>
      <MiddleMenu>
        <a href="/#"><li>Model S</li></a>
        <a href="/#"><li>Model 3</li></a>
        <a href="/#"><li>Model X</li></a>
        <a href="/#"><li>Model Y</li></a>
        <a href="/#"><li>Solar Roof</li></a>
        <a href="/#"><li>Solar Panels</li></a>
      </MiddleMenu>     
      <RightMenu>
        <a href="/#"><li>Shop</li></a> 
        <a href="/#"><li>Account</li></a>
        <ul><button>Menu</button></ul>
      </RightMenu>
    </Wraper>
  );
}

export default Header;

const Wraper = style.div`
    padding-top:12px;
    display:flex;
    justify-content:space-between;
    
    li{
        list-style-type:none;
        margin:0 8px;
        color:#181b21;
        text-align:left;
        font-size:15px;
        line-height:21px;
        font-weight:600;
        cursor:pointer;
        @media only screen and (max-width:1199px){
          display:none;
        }
    }

    a{
        text-decoration:none;
        padding:4px 8px;
        
    }
    
`
const Logo = style.div`
    
    padding-left:32px;
    item-align:start;
    a{
        padding:0 8px 0 16px;
    }
    a > img{
        width:120px;
        height:30px;
    }
    @media only screen and (max-width:1199px){
      padding-left: 24px;
      
    }

`
const MiddleMenu = style.div`
    padding:0 8px;
    display:flex;
    justify-content:space-between;

`

const RightMenu = style.div`
    padding-right:32px;
    display:flex;
    justify-content:space-between;
    ul{
      padding:4px 8px;
    }
    button{
      margin:0 8px;
      border:none;
      font-size:15px;
      font-weight:600;
      background:transparent;
      cursor:pointer;
    }
    @media only screen and (max-width:1199px){
      padding-right: 0;
      
    }

`