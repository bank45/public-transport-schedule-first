import React, { Component } from 'react';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import './app.css';

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
      // const {rasp} = this.props
      <div className={cn()}>
        <h1>{appName}  ============app</h1>
        <div className={cn('header')}>
          <h2>Menu</h2>
          {/* <div>rasp:{rasp.content}</div> */}
        </div>
        {this.renderMenu()}
        {children}
        <div className={cn('footer')}>
          ---
          <br />
          Created with Love by Elbrus Team :)
        </div>
      </div>
    );
  }

  renderMenu() {
    return (
      <div className={cn('menu')}>
        <div className={cn('menu-logo')}>
          {/* <img alt='Elbrus Image' src={elbrusImg} height='100px' /> */}
        </div>
        <div className={cn('menu-list')}>
          <div className='menuDiv'><Link to={PAGES.home.path}>Home Page</Link></div>
          <div className='menuDiv'><Link to={PAGES.page404.path}>Page 404</Link></div>
          <div className='menuDiv'><Link to={PAGES.parent.path}>родительская компонента</Link></div>
          <div className='menuDiv'><Link to={PAGES.lifecycle.path}>Расписание</Link></div>
        </div>
      </div>
    );
  }
}
