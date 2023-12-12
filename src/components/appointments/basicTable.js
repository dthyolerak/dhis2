import React from 'react';
import './responsiveTable.css'; // Import your CSS file for styling (if needed)
import data from './data2';

const ResponsiveTable = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Carbs (g)</th>
            <th>Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
