import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/selectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import './CollectionsOverview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
      collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))
    }
  </div>
)

export default compose(
  connect(createStructuredSelector({
    collections: selectCollectionsForPreview
  }))
)(CollectionsOverview)
