import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../..//redux/directory/selectors'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.styles.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(section => (
      <MenuItem key={section.id} {...section} />
    ))}
  </div>
)

export default compose(
  connect(createStructuredSelector({
    sections: selectDirectorySections
  }))
)(Directory)
