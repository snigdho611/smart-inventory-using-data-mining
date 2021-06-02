import * as React from 'react';
import app from "../base";
import { DataGrid } from '@material-ui/data-grid';
import { rows } from './associationData';


const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'itemsets', headerName: 'Item sets', width: 300 },
  {
    field: 'length',
    headerName: 'length',
    type: 'number',
    width: 130,
  },
  
  {
    field: 'support',
    headerName: 'support',
    type: 'number',
    width: 140,
  }

];



export default function Association() {
  return (
    <div style={{ height: 700, width: '66%' }} className="container">
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}
