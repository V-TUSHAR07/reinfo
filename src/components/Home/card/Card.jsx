import React, { useEffect, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
Chart.register(PieController, ArcElement, Tooltip, Legend);

const Card = () => {
  // Use an array of refs to store references for multiple chart canvases
  const chartRefs = useRef([]);

  useEffect(() => {
    // Data to be used for the "Critical" pie charts
    const chartData = [29, 90];
    const chartData1 = [29, 90];
    const chartData2 = [29, 90];

    // Loop through all chartRefs and initialize a pie chart for each "Critical" section
    chartRefs.current.forEach((chartRef, index) => {
      const ctx = chartRef.getContext("2d");

      // Destroy any existing chart instance tied to the ref to prevent multiple instances
      if (chartRef.chartInstance) {
        chartRef.chartInstance.destroy();
      }

      // Create a new Pie chart for each "Critical" section
      chartRef.chartInstance = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Critical", "Non-Critical"], // Labels for the pie chart
          datasets: [
            {
              data: chartData, // Data for the pie chart
              backgroundColor: [
                "rgba(255, 99, 132, 0.9)", // Critical
                "rgba(54, 162, 235, 0.9)", // Non-Critical
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)", // Border for Critical
                "rgba(54, 162, 235, 1)", // Border for Non-Critical
              ],
              borderWidth: 2, // Border thickness
            },
            {
              data: chartData1, // Data for the pie chart
              backgroundColor: [
                "rgba(255, 99, 132, 0.9)", // Critical
                "rgba(54, 162, 235, 0.9)", // Non-Critical
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)", // Border for Critical
                "rgba(54, 162, 235, 1)", // Border for Non-Critical
              ],
              borderWidth: 2, // Border thickness
            },
            {
              data: chartData2, // Data for the pie chart
              backgroundColor: [
                "rgba(255, 99, 132, 0.9)", // Critical
                "rgba(54, 162, 235, 0.9)", // Non-Critical
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)", // Border for Critical
                "rgba(54, 162, 235, 1)", // Border for Non-Critical
              ],
              borderWidth: 2, // Border thickness
            },
          ],
        },
        options: {
          responsive: true, // Chart adjusts to container size
          maintainAspectRatio: false, // Ensure the chart can adapt its size
          plugins: {
            legend: { display: false }, // Hide legend for the pie chart
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Tooltip background color
              titleColor: "white", // Tooltip title color
              bodyColor: "white", // Tooltip body color
            },
          },
        },
      });
    });

    // Cleanup function to destroy charts on unmount or update
    return () => {
      chartRefs.current.forEach((chartRef) => {
        if (chartRef.chartInstance) {
          chartRef.chartInstance.destroy();
        }
      });
    };
  }, []);

  // Card data for each card, you can add more entries as needed
  const cardsData = [
    {
      title: "Headphone",
      rating: "★★★★☆",
      date: "02/09/2024 - 09/09/2024",
    },
    {
      title: "Speaker",
      rating: "★★★★★",
      date: "03/09/2024 - 10/09/2024",
    },
    {
      title: "Microphone",
      rating: "★★★☆☆",
      date: "01/09/2024 - 08/09/2024",
    },
    {
      title: "Headphone",
      rating: "★★★★☆",
      date: "02/09/2024 - 09/09/2024",
    },
    {
      title: "Speaker",
      rating: "★★★★★",
      date: "03/09/2024 - 10/09/2024",
    },
    {
      title: "Microphone",
      rating: "★★★☆☆",
      date: "01/09/2024 - 08/09/2024",
    },
  ];

  return (
    <div className="mb-6 ml-6">
      {/* Button group container */}
      <div className="flex justify-between items-center mb-6 ">
        <div className="flex space-x-12">
          <button className="bg-gray-800 text-white py-[10px] px-8 text-xs rounded-[40px] shadow-md hover:bg-black hover:text-black  transition duration-300 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Add</span>
          </button>
          <button className="bg-gray-800 text-white py-[10px] px-8 text-xs rounded-[40px] shadow-md hover:bg-green-600 transition duration-300 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
              />
            </svg>
            <span>Search</span>
          </button>
        </div>
        <div>
          <button className="bg-gray-800 text-white py-[10px] px-8 text-xs rounded-[40px] shadow-md hover:bg-yellow-600 transition duration-300 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18m-7 6h7"
              />
            </svg>
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Outer container: Responsive grid layout with smaller gaps and responsive sizes */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
        {/* Loop through cardsData and generate each card */}
        {cardsData.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className="w-full mx-auto bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-[20px] shadow-lg p-4 transition-transform duration-300 hover:scale-105"
          >
            {/* Header section of the card with title, rating, and date */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <h1 className="text-sm font-semibold">{card.title}</h1>
                <div className="flex items-center mt-1 text-yellow-400 text-xs">
                  <span>{card.rating}</span>
                </div>
                <p className="text-xs text-gray-400">{card.date}</p>
              </div>
              <button className="text-gray-400 text-lg hover:text-white transition duration-300">
                •••
              </button>
            </div>

            {/* Inner grid for the boxes inside each card */}
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                "Vulnerabilities",
                "Services",
                "Critical", // Critical will have the pie chart
                "Assets",
                "Confirmed",
                "Open",
              ].map((label, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-[10px] p-2 flex flex-col justify-between items-center h-20 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xs font-semibold mb-1 text-center">
                    {label}
                  </h3>

                  {/* If the label is 'Critical', render the pie chart */}
                  {label === "Critical" ? (
                    <div className="flex justify-center items-center h-full">
                      {/* Canvas for Critical pie chart with a unique ref */}
                      <canvas
                        ref={(el) => (chartRefs.current[cardIndex] = el)} // Assign unique ref for each card's Critical chart
                        id={`criticalPieChart-${cardIndex}`} // Unique ID for each chart
                        width="50"
                        height="50"
                        className="md:w-10 md:h-10 w-8 h-8" // Smaller canvas size
                      ></canvas>
                    </div>
                  ) : (
                    // For other sections, just display 0
                    <p className="text-xxl font-semi-bold">0</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
