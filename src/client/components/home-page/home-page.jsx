import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../routes/pages';

export default class HomePage extends Component {

  render() {
    return (
      <div className='home-page'>
        <h1>API Yandex</h1>
        <p>Расписание движения общественного транспорта 

        </p>
        <div><Link to={PAGES.home.path}>Home Page</Link></div>
      </div>
    );
  }
}
