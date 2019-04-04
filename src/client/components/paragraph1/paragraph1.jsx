import React from 'react';
import { connect } from "react-redux";
import { addInputAC } from "../../redux/actions/app-actions";

class Paragraph1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    countSimbol = (input) => {
      this.setState({ input });
      console.log('this.state.input: ', this.state.input);
    }

    handleAddInput = () => {
      this.props.addInputMethod(this.state.input);
      this.setState({ input: '' });
    }

    debagger

    render() {
      return (
            <div>
                <h1>дочерний компонент 1</h1>
                <ul>
                {this.props.plan1.map((str, index) => <li key={index}>{str}</li>)}
                </ul>
                <h3>Введите что-нибудь</h3>

                <input type='text'
                    onChange={e => this.countSimbol(e.target.value)}
                    value={this.state.input}
                />
                <button onClick={this.handleAddInput}>
                    Add Input
                    </button>


                <h3>Количество введенных символов: {this.state.input.length}</h3>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus consequatur itaque harum eum quos minus reiciendis ullam mollitia assumenda alias exercitationem neque, asperiores quia voluptatem esse facilis odio quam culpa.</div>
            </div>
      );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addInputMethod: content => dispatch(addInputAC(content))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Paragraph1);

