import React from 'react'
import transitions from 'material-ui/styles/transitions'
import withStyleSheet from '../../theme/withStyleSheet'

const EditorUnderline = ({
  prepareStyles,
  styles,
}) =>
  <div>
    <hr style={prepareStyles(styles.underline)} />
    <hr style={prepareStyles(styles.focusedUnderline)} />
  </div>

const mapThemeToStyles = ({
  textField: {
    borderColor,
    disabledTextColor,
    errorColor,
    focusColor,
  },
}, {
  disabled,
  disabledStyle = {},
  errorText,
  errorStyle = {},
  focus,
  focusStyle = {},
  style,
}) => {
  const { color: errorStyleColor } = errorStyle

  const styles = {
    root: {
      border: 'none',
      borderBottom: 'solid 1px',
      borderColor,
      bottom: errorText ? 12 : 0,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
      width: '100%',
    },
    disabled: {
      borderBottom: 'dotted 2px',
      borderColor: disabledTextColor,
      cursor: 'not-allowed',
    },
    focus: {
      borderBottom: 'solid 2px',
      borderColor: focusColor,
      transform: 'scaleX(0)',
      transition: 'transform 350ms ease-out',

    },
    error: {
      borderColor: errorStyleColor || errorColor,
      transform: 'scaleX(1)',
    },
  }

  let underline = Object.assign({}, styles.root, style)
  let focusedUnderline = Object.assign({}, underline, styles.focus, focusStyle)

  if (disabled) underline = Object.assign({}, underline, styles.disabled, disabledStyle)
  if (focus) focusedUnderline = Object.assign({}, focusedUnderline, {transform: 'scaleX(1)' })
  if (errorText) focusedUnderline = Object.assign({}, focusedUnderline, styles.error)

  return ({
    underline,
    focusedUnderline,
  })
}
export default withStyleSheet(mapThemeToStyles)(EditorUnderline)
