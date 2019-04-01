import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Type from 'prop-types';
import { bindActionCreators } from 'redux';
import { startRaspAC, addRaspAC, addCoutriAC } from '../../redux/actions/app-actions';
import { PAGES } from '../../routes/pages';
import Tablo from '../tablo/tablo';
import './style.css';

const Statmod = require('../../models/stations');


class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raspisanie: [],
      to: '',
      date: ''
    };
  }
  
  static propTypes = {
    startRaspMethod: Type.func
  }
  

  
  raspFetch = async (e) => {
    e.preventDefault();
    await this.props.startRaspMethod();
    // console.log('from:', e.target.from.value);
    // console.log('to:', e.target.to.value);

    const formData = new FormData(e.target);
    const obj = {};

    formData.forEach(async function (value, key) {
      obj[key] = value
    })

    //  const { startRaspMethod } = this.props;
    // try {
  
      // axios.get('/api/thread')
      const response = await fetch('/api/rasp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
    const respBody = await response.json();
    // console.log('Ответ с расписанием: ', respBody);
    // this.props.addRaspMethod(this.state.raspisanie);
    // this.setState({ raspisanie: respBody.segments });
    // await this.props.addRaspMethod();
    
    for (let i of respBody.segments) {
      console.log(i)
      await this.props.addRaspMethod(i);
    }
    
    
    //  console.log('this.props.raspisanie', this.props.raspisanie)
  }
  
  componentDidMount(){
    
  }
  
  render() {
    return (
      <div >
        <h3>Форма расписания</h3>

        <form id='containerRasp' onSubmit={this.raspFetch}>
          <div className='divForm' id='from'>
            <label>from</label>
            <input name='from' />
          </div>
          <div className='divForm' id='to'>
            <label>to</label>
            <input name='to' />
          </div>
          <div className='divForm' id='date'>
            <label>date</label>
            <input name='date' />
          </div>
          <div className='divForm' id='transport'>
            <label>transport</label>
            <input name='transport' />
          </div>
          <div className='divForm'>
            <button type='submit'>Расписание</button>
          </div>
        </form>


        {/* <div><button onClick={this.raspFetch}>rasp</button></div> */}

        <Tablo />

        <div><Link to={PAGES.home.path}>Home Page</Link></div>

        {/* {this.formListen()} */}
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => bindActionCreators({
  startRaspMethod: startRaspAC,
  addRaspMethod: addRaspAC
  // addCountriMethod: addCoutriAC
}, dispatch);
// const startRaspMethod = dispatch => (startRaspAC())

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addRaspMethod: content => dispatch(addRaspAC(content))
//   }
// }

export default connect(
  null,
  mapDispatchToProps
)(Lifecycle);
