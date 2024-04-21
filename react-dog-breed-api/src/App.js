import axios from "axios";
import React, { useState, useEffect } from "react";

const App = (props) => {
  // Define the state for API data
  const [breeds, setBreeds] = useState([]);

  // Fetching data from API on component mount
  useEffect(() => {
    const url = "https://dogapi.dog/api/v2/breeds";
    axios
      .get(url)
      .then((response) => {
        // Set the fetched data to state
        setBreeds(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  // Internal CSS for table and cell borders
  const tableCellStyle = {
    border: "1px solid black",
  };

  // Rendering the list of breeds in a table format
  return (
    <div>
      <h2>List of Dog Breeds</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "2px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={tableCellStyle}>Name</th>
            {/* <th style={tableCellStyle}>Description</th> */}
            <th style={tableCellStyle}>Life Span (years)</th>
            <th style={tableCellStyle}>Male Weight (kg)</th>
            <th style={tableCellStyle}>Female Weight (kg)</th>
            <th style={tableCellStyle}>Hypoallergenic</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{breed.attributes.name}</td>
              {/* <td style={tableCellStyle}>{breed.attributes.description}</td> */}
              <td style={tableCellStyle}>
                {breed.attributes.life.min} - {breed.attributes.life.max}
              </td>
              <td style={tableCellStyle}>
                {breed.attributes.male_weight.min} -{" "}
                {breed.attributes.male_weight.max}
              </td>
              <td style={tableCellStyle}>
                {breed.attributes.female_weight.min} -{" "}
                {breed.attributes.female_weight.max}
              </td>
              <td style={tableCellStyle}>
                {breed.attributes.hypoallergenic ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
