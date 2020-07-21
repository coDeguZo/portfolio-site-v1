import React, {Component} from 'react'
import { Menu, Sidebar, Responsive, Icon, Image, Segment, Header, Button, MenuHeader } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


class Nav extends Component{
  state = {
      activeItem: null,
      sideBarVisible: false
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleAboutClick = (e, {name}) => swal({
    icon: "info",
    text: "About Coming Soon !"
  });


render(){
  const { activeItem, sideBarVisible } = this.state
  return(
    <div>
    <Responsive {...Responsive.onlyComputer}>
      <Menu className='menu navbar' >
        <Link to='/'> 
            <Menu.Item name='Home' 
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}/>
        </Link> 
        <Link to='/'>
            <Menu.Item name='About'
            active={activeItem === 'About'}
            onClick={this.handleAboutClick}/>
        </Link>
        <Link to='/projects'>
            <Menu.Item name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}/>
        </Link>
        <Link to='/resume'>
            <Menu.Item name='Resume'
            active={activeItem === 'Resume'}
            onClick={this.handleItemClick}/>
        </Link>
        <Link to='/blogs'>
            <Menu.Item name='Blogs'
            active={activeItem === 'Blog'}
            onClick={this.handleItemClick}/>
        </Link>
        <Link to='/contact'>
            <Menu.Item name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}/>
        </Link>
      </Menu>
    </Responsive>
                              {/* Tablet */}
    {/* --------------------------------------------------------- */}
    <Responsive {...Responsive.onlyTablet}>
      <Menu className='menu navbar' >
        <Link to='/'> 
            <Menu.Item name='Home' 
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}/>
        </Link> 
        <Link to='/'>
            <Menu.Item name='About'
            active={activeItem === 'About'}
            onClick={this.handleAboutClick}/>
        </Link>
        <Link to='/projects'>
            <Menu.Item name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}/>
        </Link>
        <Link to='/resume'>
            <Menu.Item name='Resume'
            active={activeItem === 'Resume'}
            onClick={this.handleItemClick}/>
        </Link>
        <Link to='/blogs'>
            <Menu.Item name='Blogs'
            active={activeItem === 'Blog'}
            onClick={this.handleItemClick}/>
        </Link>
        <Link to='/contact'>
            <Menu.Item name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}/>
        </Link>
      </Menu>
    </Responsive>
                      {/* Mobile Menu  */}
    {/* --------------------------------------------------- */}
    <Responsive {...Responsive.onlyMobile}>
      <Menu>
        <Menu.Item><Image src={process.env.PUBLIC_URL + '/chibuguzo.jpg'} size="mini"/></Menu.Item>
          <Sidebar
            fluid
            inverted
            as={Menu}
            animation='overlay'
            icon='labeled'
            direction="right"
            onHide={() => this.setState({sideBarVisible: false})}
            vertical
            visible={sideBarVisible}
            width='thin'
          >
            <Menu.Item onClick={() => this.setState({sideBarVisible: false})}><Link style={{color: "black"}} to='/'>Home</Link></Menu.Item>
            <Menu.Item onClick={() => this.setState({sideBarVisible: false})}><Link style={{color: "black"}} to='/'>About</Link></Menu.Item>
            <Menu.Item onClick={() => this.setState({sideBarVisible: false})}><Link style={{color: "black"}} to='/projects'>Projects</Link></Menu.Item>
            <Menu.Item onClick={() => this.setState({sideBarVisible: false})}><Link style={{color: "black"}} to='/resume'>Resume</Link></Menu.Item>
            <Menu.Item onClick={() => this.setState({sideBarVisible: false})}><Link style={{color: "black"}} to='/blogs'>Blogs</Link></Menu.Item>
            <Menu.Item onClick={() => this.setState({sideBarVisible: false})}><Link style={{color: "black"}} to='/contact'>Contact</Link></Menu.Item>
          </Sidebar>
        <Menu.Item position="right">
        <Button className="burger-button" onClick={() => this.setState({sideBarVisible: true})}>
              <Icon color="black" name="bars" />
        </Button>
        </Menu.Item>
      </Menu>
    </Responsive>
    </div>
)}
}

export default Nav