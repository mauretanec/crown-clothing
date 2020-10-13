import React from 'react'
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import './ShopPage.styles.scss'

class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state
   return (
    <div className='ShopPage'>
      {
        collections.map(collection => (
          <CollectionPreview key={collection.id} {...collection} />
        ))
      }
    </div>
   )
  }
}

export default ShopPage
