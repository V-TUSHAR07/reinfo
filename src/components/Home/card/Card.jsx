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

// import React, { useEffect, useState } from "react";
// import * as d3 from "d3";

// const Card = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       name: "Task 1",
//       start: new Date(2024, 9, 1),
//       end: new Date(2024, 9, 5),
//     },
//     {
//       id: 2,
//       name: "Task 2",
//       start: new Date(2024, 9, 3),
//       end: new Date(2024, 9, 7),
//     },
//     {
//       id: 3,
//       name: "Task 3",
//       start: new Date(2024, 9, 2),
//       end: new Date(2024, 9, 8),
//     },
//   ]);

//   const [taskName, setTaskName] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [editingTaskId, setEditingTaskId] = useState(null);

//   useEffect(() => {
//     drawChart();
//   }, [tasks]);

//   const drawChart = () => {
//     const svg = d3.select("#ganttChart").select("svg").remove(); // Clear previous chart

//     const newSvg = d3
//       .select("#ganttChart")
//       .append("svg")
//       .attr("width", 800)
//       .attr("height", 300)
//       .style("border", "1px solid #ccc")
//       .style("background", "#f9f9f9")
//       .style("border-radius", "8px");

//     const x = d3
//       .scaleTime()
//       .domain([new Date(2024, 9, 1), new Date(2024, 9, 15)])
//       .range([50, 750]);

//     const y = d3
//       .scaleBand()
//       .domain(tasks.map((task) => task.name))
//       .range([50, 250])
//       .padding(0.2);

//     // Adding gridlines
//     newSvg
//       .append("g")
//       .attr("class", "grid")
//       .attr("transform", "translate(0, 250)")
//       .call(d3.axisBottom(x).ticks(10).tickSize(-200).tickFormat(""));

//     // Adding tasks
//     newSvg
//       .selectAll(".task")
//       .data(tasks)
//       .enter()
//       .append("rect")
//       .attr("class", "task")
//       .attr("x", (d) => x(d.start))
//       .attr("y", (d) => y(d.name))
//       .attr("width", (d) => x(d.end) - x(d.start))
//       .attr("height", y.bandwidth())
//       .attr("fill", (d) => (d.id === editingTaskId ? "orange" : "steelblue"))
//       .attr("rx", 5)
//       .attr("ry", 5)
//       .on("click", (event, d) => handleEditTask(d.id));

//     // Adding x-axis
//     newSvg
//       .append("g")
//       .attr("transform", "translate(0,250)")
//       .call(d3.axisBottom(x).ticks(10).tickFormat(d3.timeFormat("%Y-%m-%d")))
//       .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-0.8em")
//       .attr("dy", ".15em")
//       .attr("transform", "rotate(-45)");

//     // Adding y-axis
//     newSvg
//       .append("g")
//       .attr("transform", "translate(50,0)")
//       .call(d3.axisLeft(y));
//   };

//   const handleAddTask = (e) => {
//     e.preventDefault();
//     if (!taskName || !startDate || !endDate) return;

//     const newTask = {
//       id: tasks.length + 1,
//       name: taskName,
//       start: new Date(startDate),
//       end: new Date(endDate),
//     };

//     setTasks([...tasks, newTask]);
//     resetForm();
//   };

//   const handleEditTask = (id) => {
//     const taskToEdit = tasks.find((task) => task.id === id);
//     if (taskToEdit) {
//       setTaskName(taskToEdit.name);
//       setStartDate(taskToEdit.start.toISOString().split("T")[0]);
//       setEndDate(taskToEdit.end.toISOString().split("T")[0]);
//       setEditingTaskId(id);
//     }
//   };

//   const handleUpdateTask = (e) => {
//     e.preventDefault();
//     if (!taskName || !startDate || !endDate || editingTaskId === null) return;

//     const updatedTasks = tasks.map((task) =>
//       task.id === editingTaskId
//         ? {
//             ...task,
//             name: taskName,
//             start: new Date(startDate),
//             end: new Date(endDate),
//           }
//         : task
//     );

//     setTasks(updatedTasks);
//     resetForm();
//   };

//   const handleDeleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const resetForm = () => {
//     setTaskName("");
//     setStartDate("");
//     setEndDate("");
//     setEditingTaskId(null);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Gantt Chart with Dynamic Tasks</h2>
//       <form
//         onSubmit={editingTaskId ? handleUpdateTask : handleAddTask}
//         style={{ marginBottom: "20px" }}
//       >
//         <input
//           type="text"
//           placeholder="Task Name"
//           value={taskName}
//           onChange={(e) => setTaskName(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           required
//         />
//         <button type="submit">
//           {editingTaskId ? "Update Task" : "Add Task"}
//         </button>
//         {editingTaskId && (
//           <button type="button" onClick={resetForm}>
//             Cancel
//           </button>
//         )}
//       </form>
//       <div id="ganttChart"></div>
//       <h3>Current Tasks</h3>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.name} - {task.start.toISOString().split("T")[0]} to{" "}
//             {task.end.toISOString().split("T")[0]}
//             <button onClick={() => handleEditTask(task.id)}>Edit</button>
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Card;
