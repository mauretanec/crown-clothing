import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../../redux/shop/selectors'
import withSpinner from '../../components/withSpinner/withSpinner'
import CollectionPage from './CollectionPage'

const CollectionPageContainer = compose(
  connect(createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
  })),
  withSpinner
)(CollectionPage)

export default CollectionPageContainer
