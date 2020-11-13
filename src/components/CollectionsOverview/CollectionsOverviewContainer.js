import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/selectors'
import withSpinner from '../../components/withSpinner/withSpinner'
import CollectionsOverview from './CollectionsOverview'

const CollectionsOverviewContainer = compose(
  connect(createStructuredSelector({
    isLoading: selectIsCollectionFetching
  })),
  withSpinner,
)(CollectionsOverview)

export default CollectionsOverviewContainer
