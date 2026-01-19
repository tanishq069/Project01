// app.js (main entry point)

const express = require('express');
const app = express();

// API endpoint to generate charts
app.get('/api/charts', (req, res) => {
  // Get user parameters from the request (e.g., chart type, data, options)
  const { chartType, chartData, chartOptions } = req.query;

  // Process user parameters and generate the chart using Chart.js
  const chart = generateChart(chartType, chartData, chartOptions);

  // Return the chart data as JSON response
  res.json({ chart });
});

// Function to generate the chart using Chart.js
function generateChart(chartType, data, options) {
  // Use Chart.js API to create the chart
  const Chart = require('script.js');
  const canvasRenderService = new Chart.CanvasRenderService(800, 600);
  const configuration = {
    type: chartType,
    data: data,
    options: options,
  };

  // Render the chart and get the image buffer
  const image = canvasRenderService.renderToBufferSync(configuration);

  // Return the image buffer (or base64 encoded image, etc.) to the frontend
  return image;
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
