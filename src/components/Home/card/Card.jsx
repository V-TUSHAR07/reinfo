import React, { useEffect, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
Chart.register(PieController, ArcElement, Tooltip, Legend);

const Card = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("criticalPieChart").getContext("2d");

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new Pie chart with a shadow effect
    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Critical", "Non-Critical"],
        datasets: [
          {
            data: [40, 90],
            backgroundColor: [
              "rgba(255, 99, 132, 0.9)", // Critical
              "rgba(54, 162, 235, 0.9)", // Non-Critical
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleColor: "white",
            bodyColor: "white",
          },
        },
        elements: {
          arc: {
            borderWidth: 2,
            shadowColor: "rgba(0, 0, 0, 0.5)", // Shadow color
            shadowBlur: 4, // Blur of the shadow
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-xl p-6 transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-lg font-semibold">Headphone</h1>
          <div className="flex items-center mt-1 text-yellow-400 text-sm">
            <span>★★★★☆</span>
          </div>
          <p className="text-xs text-gray-400">02/09/2024 - 09/09/2024</p>
        </div>
        <button className="text-gray-400 text-xl hover:text-white transition duration-300">
          •••
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          "Vulnerabilities",
          "Services",
          "Critical",
          "Assets",
          "Confirmed",
          "Open",
        ].map((label, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-4 flex flex-col justify-between items-center h-28 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
          >
            <h3 className="text-sm font-semibold mb-2 text-center">{label}</h3>
            {label === "Critical" ? (
              <div className="flex justify-center items-center h-full">
                <canvas id="criticalPieChart" width="100" height="100"></canvas>
              </div>
            ) : (
              <p className="text-xl font-bold">0</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
