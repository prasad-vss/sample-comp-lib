"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _core = require("@material-ui/core");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ButtonModule = _interopRequireDefault(require("./Button.module.css"));
const _excluded = ["variant", "children", "className", "ignoreExistingClassNames"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const Button = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
      variant,
      children,
      className,
      ignoreExistingClassNames = false
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  let modifierClassName;
  if (variant === 'primary') modifierClassName = _ButtonModule.default.primaryButton;else if (variant === 'secondary') modifierClassName = _ButtonModule.default.secondaryButton;else if (variant === 'tertiary') modifierClassName = _ButtonModule.default.tertiaryButton;else modifierClassName = _ButtonModule.default.defaultButton;
  const computedClassName = ignoreExistingClassNames ? className : (0, _clsx.default)(_ButtonModule.default.button, modifierClassName, className);
  return /*#__PURE__*/_react.default.createElement(_core.Button, _extends({
    className: computedClassName,
    classes: {
      disabled: _ButtonModule.default.disabledButton
    },
    ref: ref
  }, props, {
    onClick: e => {
      if ((e === null || e === void 0 ? void 0 : e.detail) > 1) return;
      return props.onClick();
    }
  }), children);
});
Button.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
  ignoreExistingClassNames: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;