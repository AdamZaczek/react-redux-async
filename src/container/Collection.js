import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../presentational/CollectionItem';
import { fetchCollection } from '../actions/fetchCollection';

const mapCollectionItems = collection =>
  collection.map(collectionItem => <CollectionItem key={collectionItem.cardId} item={collectionItem} />)

class Collection extends Component {
  componentDidMount() {
    this.props.fetchCollection('http://localhost:3000/collection');
  }

  render() {
    const { collection } = this.props;
    return (
      <div>
        {
          collection.length ?
          <div>
            <h2>All Collection:</h2>
            {mapCollectionItems(this.props.collection)}
          </div>
          :
          <div>Loading data...</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collection: state.collection.collection,
});

const mapDispatchToProps = dispatch => ({
  fetchCollection: url => dispatch(fetchCollection(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
