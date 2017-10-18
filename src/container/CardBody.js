import React, { Component } from 'react';
import { connect } from 'react-redux';
import { interact } from '../actions/interact';
import CardBodyItem from '../presentational/CardBodyItem';
import { isInteracting } from '../reducers/isInteracting';

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
      <div>
        <CardBodyItem
          image={image}
          name={name}
          title={title}
          company={company}
          isInteracting={isInteracting}
          onClick={() => this.interact(type, userId)}
          text={text}
          color={color}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isInteracting: isInteracting(state),
})

const mapDispatchToProps = dispatch => ({
  interact: (type, id) => dispatch(interact(type,id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardBody);