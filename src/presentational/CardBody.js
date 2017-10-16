import React, { Component } from 'react';
import { connect } from 'react-redux';
import { interact } from '../actions/interact';

class CardBody extends Component {

  interact = (type, id) => {
    this.props.interact(type, id);
  }

  render() {
    const {
      body: {
        user: { userId, name, image, title, company },
        interactions: { type, text, color },
      },
      isInteracting,
    } = this.props;
    return (
      <div className='cardBody'>
        <img src={require('../' + image)} alt="Users avatar"></img>
        <div>
          {name}
        </div>
        <div>
          {title}
        </div>
        <div>
          {company}
        </div>
        <button disabled={isInteracting} onClick={() => this.interact(type, userId)}>
          <div>{
            isInteracting ?
            <img src={require('../assets/spinner.gif')} alt="Spinning loader"></img>
              :
              text
            }
          </div>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isInteracting: state.isInteracting,
})

const mapDispatchToProps = dispatch => ({
  interact: (type, id) => dispatch(interact(type,id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardBody);