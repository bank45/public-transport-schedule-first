import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';


const mapStateToProps = (state, ownProps) => ({
  string: state.string
});  


class Paragraph2 extends Component {
  render() {
    return (
      <div >
        <h1>дочерняя компонента 2</h1>
        <ul>
          {this.props.plan2.map((str, index) => <li key={index}>{str}</li>)}
        </ul>

        <ul>
          {this.props.string.map((inp, index) => <li key={index}>{inp.id}  {inp.content}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Paragraph2);

