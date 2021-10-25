import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { rows as old } from './stockData';

const Restock = (props) => {




	var rows = [];

	for (var i = 0; i < old.length; i++) {
		if (old[i].Quantity < 32 && old[i].Item_revenue > 5000) {
			rows.push(old[i]);
		}
	}



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





	return (
    <div style={{ height: 460, width: '94%' }} className="container">
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
			)
}

export default Restock;