import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import withTheme from '../theme/withTheme'
import { Icon } from '../Icon'

const mapThemeToStyles = () => {
  const fabRoot = {
    float: 'right',
    position: 'relative',
    right: '-28px',
    top: '-28px',
  }

  return {
    corner: {
      ...fabRoot,
    },
    header: {
      ...fabRoot,
      right: '28px',
      top: '-76px',
    },
    top: {
      ...fabRoot,
      right: '28px',
      top: '-28px',
    },
  }
}


const DocContainer = ({
  addFab,
  styles,
}) =>
  <FloatingActionButton
    id={addFab.selector}
    style={styles.top}
    secondary
    onTouchTap={addFab.action}
  >
    <Icon ligature={addFab.icon} />
  </FloatingActionButton>

export default withTheme(DocContainer, mapThemeToStyles)
