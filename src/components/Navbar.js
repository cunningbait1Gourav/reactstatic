import styled from 'styled-components'
import logo from '../logo-roto.png'
import Ham from '../hamburger.png'
import { mobile } from '../responsive'
import {useState} from 'react'
import { Offcanvas } from 'react-bootstrap'
import { BrowserRouter,Link } from 'react-router-dom'
import './nav.css'

const Nav = styled.div`
width:100%;
height:96px;
position:fixed;
top:0;
z-index:500;
`
const Logo = styled.div`
display:inline-block;
position:absolute;
margin:0px;
padding:0px;
left:20px;
top:20%;
${mobile({
    width:"250px",left:"10px"
    })}
`
const Menu = styled.div`
    position: fixed;
    right: 38px;
    top: 32px;
    height: 42px;
    width: 42px;
    line-height: 42px;
    font-family: "montserrat-medium", sans-serif;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    color: #39b54a;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    ${mobile({
    right:"10px"
    })}
`
const MenuHamburger = styled.div`
display:none;
flex-direction:column;
flex-wrap:wrap;
${mobile({
    display:"flex"
    })}
`
const MenuHamburgerLine = styled.div`
    display: block;
    width: 22px;
    height: 2px;
    margin-top: -1px;
    position: absolute;
    margin-top:10px;
    right: auto;
    bottom: auto;
    background-color: white;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
`
const TabViewMenu = styled.div`
      display: flex;
      justify-content: space-evenly;
`
const Tabmenu = styled.div`
padding-left: 10px;
font-size: 20px;
`



function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <Menu onClick={handleShow} style={{cursor:"pointer"}}>
                <MenuHamburger>
                    <MenuHamburgerLine>
                    <MenuHamburgerLine>
                    <MenuHamburgerLine>
                    </MenuHamburgerLine>
                    </MenuHamburgerLine>
                    </MenuHamburgerLine>
                </MenuHamburger>
        </Menu>
        {/* <Button variant="primary" onClick={handleShow} style={{position:"realtive",top:"200px",left:"300px",zIndex:"1000"}}>
          {name}
        </Button> */}
        <Offcanvas show={show} onHide={handleClose} {...props} style={{backgroundColor:"black",color:"#fff",width:"50%"}}>
          <Offcanvas.Header closeButton closeVariant="white" style={{backgroundColor:"black"}}>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{display:"flex",flexDirection:"column"}}>
              <BrowserRouter>
                    <Link style={{textDecoration:'none',color:'#fabfab',paddingTop:'10px'}} to= {{pathname:"/", hash:"#"}} smooth reloadDocument={true}>Home</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',paddingTop:'10px'}} to={{pathname:"/", hash:"#about"}} smooth reloadDocument={true}>About</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',paddingTop:'10px'}} to= {{pathname:"/", hash:"#secJoin"}} smooth reloadDocument={true}>Join Us</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',paddingTop:'10px'}} to= {{pathname:"/", hash:"#slides"}} smooth reloadDocument={true}>Events</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',paddingTop:'10px'}} to= {{pathname:"/", hash:"#contactUs"}} smooth reloadDocument={true}>Contact Us</Link>                    
              </BrowserRouter>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }



const Navbar =()=>{
    const [navbar,setNavbar]= useState(false)
    const ChangeBackground = ()=>{
      if(window.scrollY>=180){
        setNavbar(true)
      }
      else{
        setNavbar(false)
      }
    }
    window.addEventListener('scroll',ChangeBackground)
    return (
        <>
        <Nav className={navbar? 'active' : 'inactive' }>
            <Logo><img src={logo} width="250px"></img></Logo>
                    <BrowserRouter className="flex sb br">
                    <Link style={{textDecoration:'none',color:'#fabfab',padding:'0px 20px'}} className='link' to= {{pathname:"/", hash:"#contactUs"}} smooth reloadDocument={true}>Contact Us</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',padding:'0px 20px'}} className='link' to= {{pathname:"/", hash:"#slides"}} smooth reloadDocument={true}>Events</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',padding:'0px 20px'}} className='link' to= {{pathname:"/", hash:"#secJoin"}} smooth reloadDocument={true}>Join Us</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',padding:'0px 20px'}} className='link' to={{pathname:"/", hash:"#about"}} smooth reloadDocument={true}>About</Link>
                    <Link style={{textDecoration:'none',color:'#fabfab',padding:'0px 20px'}} className='link' to= {{pathname:"/", hash:"#"}} smooth reloadDocument={true}>Home</Link>
                    </BrowserRouter>
            <OffCanvasExample placement='end' name='end' />
            </Nav>
        <>
    </>
    </> 
        
    )
}

export default Navbar