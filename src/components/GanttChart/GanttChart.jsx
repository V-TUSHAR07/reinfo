import React, { useEffect } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'; // Import Gantt chart CSS
import { ganttData } from '../../data/ganttData';

const Dhtmlx = () => {
  useEffect(() => {
    gantt.config.date_format = "%d-%m-%Y";
    gantt.init("gantt_here");
    gantt.parse(ganttData);   // Parse the data into the Gantt chart
  }, []);

  return <div id="gantt_here" style={{ width: '100%', height: '800px' }} />;
};

export default Dhtmlx;
