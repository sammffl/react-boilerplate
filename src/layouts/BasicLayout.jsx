import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sider from './components/Sider';
import Content from './components/Content';
import './BasicLayout.scss';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  location: PropTypes.object.isRequired,
  appName: PropTypes.string,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.array,
  })),
  renderGlobalHeader: PropTypes.func,
  renderGlobalFooter: PropTypes.func,
};

const defaultProps = {
  prefixCls: 'basicLayout',
  className: '',
  appName: '',
  menuData: [],
  renderGlobalHeader: () => <div />,
  renderGlobalFooter: () => <div />,
};

class BasicLayout extends Component {
  render() {
    const classes = classnames({
      [this.props.prefixCls]: true,
      [this.props.className]: true,
    });
    return (
      <div className={classes}>
        <Sider
          appName={this.props.appName}
          menuData={this.props.menuData}
          location={this.props.location}
        />
        <Content
          renderGlobalHeader={this.props.renderGlobalHeader}
          renderGlobalFooter={this.props.renderGlobalFooter}
        >
          {this.props.children}
        </Content>
      </div>
    );
  }
}

BasicLayout.propTypes = propTypes;
BasicLayout.defaultProps = defaultProps;
export default BasicLayout;