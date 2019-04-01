import React, { Component } from 'react';
// import connect from 'react-redux/es/connect/connect';
import { connect } from 'react-redux';
import './styleTablo.css';

const mapStateToProps = (state, ownProps) => ({
  raspisanie: state.raspisanie
});


class Tablo extends Component {
  // constructor(props) {
  //   super(props);
  //    this.state.raspisanie = this.props.raspisanie;
  // }

  render() {
    //  const { raspisanie } = this.props;
    return (
      <div id='divTablo'>
        <h1>Табло</h1>
        {/* <div>raspisanie: {this.props.raspisanie}</div> */}

        <ul>
          {this.props.raspisanie.map((rasp, index) => <li key={index}> {index} arrival: {rasp.arrival}from: {rasp.from.title}thread: {rasp.thread.title}</li>)}
        </ul>


      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Tablo);
