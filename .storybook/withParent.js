import React, { Component } from 'react';

export default (WrappedComponent) => {
  class Layout extends Component {

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return Layout;
}