import React from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.PureComponent {
  static propTypes = {
    /**
     * At this level in the form, what field/value should this label reference
     */
    htmlFor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    /**
     * What component should be used for displaying the label itself
     */
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    /**
     * What content should be displayed inside the label
     */
    children: PropTypes.node,
  };

  static defaultProps = {
    component: 'label',
    children: null,
  };

  static contextTypes = {
    ffFullName: PropTypes.func.isRequired,
    ffFormIndex: PropTypes.number.isRequired,
  };

  render() {
    const {
      component: Component,
      htmlFor,
      children,
      ...restProps
    } = this.props;
    return (
      <Component
        {...restProps}
        htmlFor={[this.context.ffFormIndex].concat(this.context.ffFullName(), htmlFor).join('.')}
      >
        {children}
      </Component>
    );
  }
}
