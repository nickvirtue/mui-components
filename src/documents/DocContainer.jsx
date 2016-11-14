import React from 'react'

import Paper from 'material-ui/Paper'

import SearchFilter from './SearchFilter'
import DocAddFab from './DocAddFab'

const DocContainer = ({
  addFab,
  search,
  children,
  style,
}) =>
  <Paper zDepth={1} style={style}>
    {addFab &&
      <DocAddFab addFab={addFab} />
    }
    {search ?
      <SearchFilter />
      :
        <div>&nbsp;</div>
    }
    {children}
  </Paper>

export default DocContainer

