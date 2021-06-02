import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { rows } from './stockData';


const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'Item', headerName: 'Item Name', width: 150 },
  
  {
    field: 'Price',
    headerName: 'Price($)',
    type: 'number',
    width: 160,
  },

   {
    field: 'Quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 160,
  },

   {
    field: 'Times_bought',
    headerName: 'Times bought',
    type: 'number',
    width: 160,
  },

   {
    field: 'Item_revenue',
    headerName: 'Item Revenue($)',
    type: 'number',
    width: 160,
  }

];



export default function Inventory() {
  return (
    <div style={{ height: 700, width: '94%' }} className="container">
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}
