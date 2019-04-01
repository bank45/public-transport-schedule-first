import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../routes/pages';

export default class Page404 extends Component {
  render() {
    return (
      <div className='page404'>
        <h2>Page 404</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium consequuntur dignissimos reprehenderit tempore at nobis itaque exercitationem tenetur veniam unde veritatis nostrum quibusdam, placeat sunt eveniet sit soluta sint. </div>
        <div><Link to={PAGES.home.path}>Home Page</Link></div>
      </div>
    );
  }
}
