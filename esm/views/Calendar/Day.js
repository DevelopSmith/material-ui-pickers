import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
export var useStyles = makeStyles(function (theme) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      padding: 0
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    daySelected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersDay'
});
export var Day = function Day(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      current = _ref.current,
      selected = _ref.selected,
      other = _objectWithoutProperties(_ref, ["children", "disabled", "hidden", "current", "selected"]);

  var classes = useStyles();
  var className = clsx(classes.day, hidden && classes.hidden, current && classes.current, selected && classes.daySelected, disabled && classes.dayDisabled);
  return React.createElement(IconButton, _extends({
    className: className,
    tabIndex: hidden || disabled ? -1 : 0
  }, other), React.createElement(Typography, {
    variant: "body2",
    color: "inherit"
  }, children));
};
Day.displayName = 'Day';
process.env.NODE_ENV !== "production" ? Day.propTypes = {
  current: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  selected: PropTypes.bool
} : void 0;
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};
export default Day;