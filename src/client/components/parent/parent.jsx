import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paragraph1 from '../paragraph1/paragraph1';
import Paragraph2 from '../paragraph2/paragraph2';
import { PAGES } from '../../routes/pages';

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      plan1: [
        'Содержание 1 праграфа: Первый пункт',
        'Второй пункт',
        'Третий пункт'
      ],
      plan2: [
        'Содержание 2 параграфа: Первый пункт',
        'Второй пункт',
        'Третий пункт']
    };
  }

  render() {
    return (
            <div>
                <h1>родительская компонента</h1>
                <Paragraph1 plan1={this.state.plan1} />
                <Paragraph2 plan2={this.state.plan2} />

                <div><Link to={PAGES.home.path}>Home Page</Link></div>
            </div>
    );
  }
}
