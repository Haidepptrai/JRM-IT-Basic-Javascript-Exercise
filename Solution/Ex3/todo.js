// TODO: Call the getData function to fetch and display the data
getData();

// TODO: Define an asynchronous function to fetch data from the API
async function getData() {
  // Fetch data from the API
  const response = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  // Log the response to the console
  console.log(response);

  // Parse the response data as JSON
  const data = await response.json();

  // Log the parsed data to the console
  console.log(data);

  // Get the length of the data array

  // Initialize arrays to store labels and values for the chart

  // Loop through the data array to extract labels and values
  for (i = 0; i < length; i++) {}

  // Create a new Chart object to display the data
  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
            "#CD5C5C",
            "#40E0D0",
          ],
          data: values,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "U.S population",
      },
    },
  });
}
