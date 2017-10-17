import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../presentational/CollectionItem';
import FetchError from '../presentational/FetchError';
import {
  fetchCollection,
  getCollectionData
} from '../actions/fetchCollection';

const collectionEndpoint = 'http://localhost:3001/collection';

const mapCollectionItems = collection => {
  return collection.map(collectionItem =>
    <CollectionItem
      key={collectionItem.cardId}
      item={collectionItem}
    />
  )
}

class Collection extends Component {
  componentDidMount() {
    this.props.fetchCollection(collectionEndpoint);
  }

  fetchCollection = () => this.props.fetchCollection(collectionEndpoint);

  render() {
    const { collection, isFetching, errorMessage } = this.props;
    return (
      <div>
        {
          errorMessage && !collection.length &&
            <FetchError
              message={errorMessage.message}
              onRetry={this.fetchCollection}
            />
        }
        {
          !errorMessage && !collection.length &&
          <div>Loading data...</div>
        }
        {
          collection.length && !isFetching &&
          <div>
            {mapCollectionItems(collection)}
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    collection: getCollectionData(state),
    isFetching: state.isFetching,
    errorMessage: state.errorMessage,
}};

const mapDispatchToProps = dispatch => ({
  fetchCollection: url => dispatch(fetchCollection(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
