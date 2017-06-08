import React from 'react'
import PropTypes from 'prop-types'
import createClass from 'create-react-class'
import classNames from 'classnames'

export default createClass({
  propTypes: {
    type: PropTypes.string
  },

  render() {
    const {type} = this.props
    const iconClass = classNames(
      'icon',
      {
        [`icon-${type}`]: type
      }
    )
    return (
      <span className={iconClass}></span>
    )
  }
})
