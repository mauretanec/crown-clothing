import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import { selectCollection } from '../../redux/shop/selectors'
import './CollectionPage.styles.scss'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default compose(
  connect((state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  }))
)(CollectionPage)
