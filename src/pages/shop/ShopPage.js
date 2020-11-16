import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/shop/actions'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer'
import CollectionPageContainer from '../collection/CollectionPageContainer'
import './ShopPage.styles.scss'

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className='ShopPage'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

export default compose(
  connect(null, dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  }))
)(ShopPage)
