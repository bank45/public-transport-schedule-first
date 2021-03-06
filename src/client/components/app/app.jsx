import React, { Component } from 'react';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import './app.css';
import { Navbar, Nav } from 'react-bootstrap';

const cn = bemClassNameFactory('app');

export default class App extends Component {
  static propTypes = {
    appName: Type.string,
    children: Type.node.isRequired,
    rasp: Type.string
  };

  static defaultProps = {
    appName: 'Default Name'
  };

  render() {
    const {
      appName,
      children,
      rasp
    } = this.props;
    return (
      <div className={cn()}>
        <h1>{appName}</h1>
        <div className={cn('header')}>
        </div>
        {this.renderMenu()}
        {children}
        <div className={cn('footer')}>
          ---
          <br />
          Created with Love by Team :)
        </div>
      </div>
    );
  }

  renderMenu() {
    return (
      <div className={cn('menu')}>
        <div className={cn('menu-logo')}>
        </div>
        <Navbar bg='light' variant='light' className={cn('menu-list')}>
          <Navbar.Brand>API</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href={PAGES.home.path}>Home Page</Nav.Link>
            <Nav.Link href={PAGES.lifecycle.path}>Расписание</Nav.Link>
            {/* <Nav className='menuDiv'><Link to={PAGES.page404.path}>Page 404</Link></Nav> */}
            <Nav.Link href={PAGES.parent.path}>родительский компонент</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
