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
        <a href="/#">Model S</a>
        <a href="/#">Model X</a>
        <a href="/#">Model 3</a>
        <a href="/#">Model Y</a>
        <a href="/#">Solar Roof</a>
        <a href="/#">Solar Panels</a>
      </MiddleMenu>
      <RightMenu>
        <a href="/#">Shop</a>
        <a href="/#">Account</a>
        <button>Menu</button>
      </RightMenu>
    </Wraper>
  );
}

export default Header;

const Wraper = style.div`
    margin:12px 8px 0 24px;
    padding:4px 0;
    display:flex;
    justify-content:space-between;
    
`
const Logo = style.div`

    a > img{
      width:120px;
      height:30px;
    }
`;
const MiddleMenu = style.div`
    padding:8px 8px;
    a{
      padding:4px 8px;
      text-decoration:none;
      color:#181b21;
      text-align:left;
      line-height:21px;
      font-weight:600;
      font-size:14px;
      color:#181b21;
    }
    @media only screen and (max-width:1199px){
      display:none;
    }
`;
const RightMenu = style.div`
    a{
      @media only screen and (max-width:1199px){
        display:none;
      }
    }
    padding:4px 8px;  
    button{
      border:none;
      padding:0px 8px;
      font-size:14px;
      background:transparent;
      font-weight:600;
    }
    
`;

