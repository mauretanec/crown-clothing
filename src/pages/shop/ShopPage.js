import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import withSpinner from '../../components/withSpinner/withSpinner'
import { updateCollections } from '../../redux/shop/actions'
import './ShopPage.styles.scss'

const CollectionsOverviewWithSpinner = compose(
  withSpinner
)(CollectionsOverview)

const CollectionPageWithSpinner = compose(
  withSpinner
)(CollectionPage)

class ShopPage extends React.Component {
  state = {
    isLoading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
      updateCollections(collectionsMap)
      this.setState({ isLoading: false })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot()
  }

  render() {
    const { match } = this.props
    const { isLoading } = this.state
    return (
      <div className='ShopPage'>
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
        />
      </div>
    )
  }
}

export default compose(
  connect(null, dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  }))
)(ShopPage)
