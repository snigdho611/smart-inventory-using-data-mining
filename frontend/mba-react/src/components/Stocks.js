import React from "react";
import { rows } from "./stockData";

const Stocks = () => {
  return (
    <>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>

          </tr>
        </thead>
      </table>

      <div className="stock-container">
       {rows.map((data, key) => {
        return (
          <div key={key}>


            <table className="table">
              <tbody>
                <tr>

                  <td>
                    {data.ID}
                  </td>
                  <td>
                    {data.Item} 
                  </td>
                  <td>
                    {data.Price}
                  </td>


                </tr>
              </tbody>

            </table>
            </div>
            );
        })}


     </div>

     </>
     );
};

export default Stocks;