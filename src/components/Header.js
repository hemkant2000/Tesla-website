import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { connectAdvanced } from 'react-redux'



function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            
            <a>
                <img src="images/logo.svg" alt="" className='logoimg'/>
            </a>
         

            <Menu>

                <p><a href='#'>Model S</a></p>
                <p><a href='#'>Model 3</a></p>
                <p><a href='#'>Model X</a></p>
                <p><a href='#'>Model Y</a></p>
            </Menu>

            <RightMenu>

                <p><a href='#'>Shop</a></p>
                <p><a href='#'> Account</a></p>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href='#'><p>Existing inventory</p></a></li>
                <li><a href='#'><p>Used inventory</p></a></li>
                <li><a href='#'><p>Trade-in</p></a></li>
                <li><a href='#'><p>Cybertruck</p></a></li>
                <li><a href='#'><p>Roadster</p></a></li>
                <li><a href='#'><p>Semi</p></a></li>
                <li><a href='#'><p>Charging</p></a></li>
                <li><a href='#'><p>Powerwall</p></a></li>
                <li><a href='#'><p>Commercial Energy</p></a></li>
                <li><a href='#'><p>Utilities</p></a></li>
                <li><a href='#'><p>Find Us</p></a></li>
                <li><a href='#'><p>Powerwall</p></a></li>
                <li><a href='#'><p>Support</p></a></li>
                <li><a href='#'><p>Investor Relation</p></a></li>

            </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    // width: 100%; // width 100% or top:0, left:0,right:0
    top:0;
    left:0;
    right:0;
    justify-content: space-between;
    z-index: 1;
`

const Menu = styled.div`
    max-width: 500px;
    margin-left: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    p{
        border-radius: 20px;

        &:hover {
            background-color:  hsla(10, 5%, 5%, .05);
        
          }
        padding: 7px 2px;
    }

    a{
        font-weight: 600;
        // text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        width: 100%;

    }

    @media(max-width: 768px){
        display: none;
    }

    
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        // text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;

    }

    p{
        border-radius: 20px;

        &:hover {
            background-color:  hsla(10, 5%, 5%, .05);
        
          }
        padding: 7px 2px;
    }
`
const CustomMenu = styled(MenuIcon)`
    margin: 0 4px;
    cursor: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;

    background: white;
    width: 300px;
    
    z-index: 20;
    list-style: none;
    padding: 20px;
    text-align: start;
    display:flex;
    flex-direction: column;
    li{
        padding: 15px ;
        // border-bottom: 1px solid rgba(0,0,0, .2);
        border-radius: 10px;
        a{
            font-weight: 600;
        }
        &:hover {
            background-color:  hsla(10, 5%, 5%, .08);
        
          }
    }

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
 
    transition: transform 0.2s;

    overflow: auto;
    



`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    

`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    &:hover {
        background-color:  hsla(10, 5%, 5%, .08);
    
      }

    border-radius: 5px;

    
`

export default Header;