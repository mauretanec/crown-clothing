import React from 'react'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.styles.scss'

const CollectionPreview = ({
  items,
  title
}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} {...item} />
        ))
      }
    </div>
  </div>
)

export default withRouter(CollectionPreview)
