import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class Nav extends Component{
  state = {
      activeItem: null
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


render(){
  const { activeItem } = this.state
  return(
<Menu className='menu navbar' >
  <Link to='/home'> 
       <Menu.Item name='Home' 
       active={activeItem === 'Home'}
       onClick={this.handleItemClick}/>
  </Link> 
  <Link to='/about'>
      <Menu.Item name='About'
      active={activeItem === 'About'}
      onClick={this.handleItemClick}/>
  </Link>
  <Link to='/projects'>
      <Menu.Item name='Projects'
      active={activeItem === 'Projects'}
      onClick={this.handleItemClick}/>
  </Link>
  <Link to='/skills'>
      <Menu.Item name='Skills'
      active={activeItem === 'Skills'}
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
)}
}

export default Nav