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
import { Button, Form } from 'react-bootstrap'
// import Form from 'react-bootstrap/FormGroup';

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
    e.persist()
    const savedEvent = e;
    savedEvent.preventDefault();
    await this.props.startRaspMethod();
    // console.log('from:', e.target.from.value);
    // console.log('to:', e.target.to.value);

    const formData = new FormData(savedEvent.target);
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

  componentDidMount() {

  }

  render() {
    return (
      <div >
        <h3>Форма расписания</h3>

        <Form id='containerRasp' onSubmit={this.raspFetch}>
          <Form.Group>
            <Form.Text className='text-muted'>from</Form.Text>
            <Form.Control type='text' name='from' />
          </Form.Group>
          <Form.Group className='divForm' id='to'>
            <Form.Text>to</Form.Text>
            <Form.Control type='text' name='to' />
          </Form.Group>
          <Form.Group type='Date' className='divForm' id='date'>
            <Form.Text>date</Form.Text>
            <Form.Control name='date' />
          </Form.Group>
          <Form.Group className='divForm' id='transport'>
            <Form.Text>transport</Form.Text>
            <Form.Control name='transport' />
          </Form.Group>
            <Button variant='primary' type='submit'>Расписание</Button>
        </Form>


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
