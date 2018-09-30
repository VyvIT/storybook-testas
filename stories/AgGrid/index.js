import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AgGridWrapper from "./AgGridWrapper";
import notes from './simpleAgGrid.md';


const opts = {
  columnDefs: [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }

  ],
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]
}

storiesOf('AgGrid', module)
  .add('simple', () => (
    <AgGridWrapper
      columnDefs={opts.columnDefs}
      rowData={opts.rowData}>
    </AgGridWrapper>
  ));