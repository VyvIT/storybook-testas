import React, { Component } from 'react';
import { AgGridReact } from "ag-grid-react";

class AgGridWrapper extends Component {

  render() {
    return (
      <div
        className="ag-theme-material"
        style={{
          height: '500px',
          width: '600px'
        }}
      >
        <AgGridReact {...this.props}/>
      </div>
    );
  }
}

export default AgGridWrapper;