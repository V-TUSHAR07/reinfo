export const ganttData = {
    data: [
      { id: 1, text: 'Opening Meeting', start_date: "01-10-2024", duration: 2, progress: 0.5 },
      { id: 2, text: 'Intelligence Gathering', start_date: '03-10-2024', duration: 4, progress: 1, parent: 1 },
      { id: 2.1, text: 'Identify application scope', start_date: '03-10-2024', duration: 2, progress: 1, parent: 2 },
      { id: 2.2, text: 'Identify dependencies', start_date: '04-10-2024', duration: 2, progress: 0.9, parent: 2 },
      { id: 2.3, text: 'Identify platforms', start_date: '05-10-2024', duration: 2, progress: 0.8, parent: 2 },
      
      { id: 3, text: 'Vulnerability Analysis', start_date: '10-10-2024', duration: 7, progress: 0.6, parent: 1 },
      { id: 3.1, text: 'Test Application Server Vulnerabilities', start_date: '12-10-2024', duration: 3, progress: 0.5, parent: 3 },
      { id: 3.2, text: 'Test Configuration Management', start_date: '15-10-2024', duration: 2, progress: 0.4, parent: 3 },
      { id: 3.3, text: 'Test Client-Side Vulnerabilities', start_date: '18-10-2024', duration: 3, progress: 0.3, parent: 3 },
      { id: 3.4, text: 'Test Authentication Mechanism', start_date: '21-10-2024', duration: 2, progress: 0.2, parent: 3 },
      { id: 3.5, text: 'Test Authorization Controls', start_date: '23-10-2024', duration: 2, progress: 0.1, parent: 3 },
  
      { id: 4, text: 'Penetration Testing (Exploitation)', start_date: '21-10-2024', duration: 5, progress: 0.3, parent: 1 },
      { id: 4.1, text: 'Impact analysis', start_date: '21-10-2024', duration: 3, progress: 0.5, parent: 4 },
      { id: 4.2, text: 'Propagate exploits', start_date: '24-10-2024', duration: 2, progress: 0.4, parent: 4 },
  
      { id: 5, text: 'Reporting Phase', start_date: '26-10-2024', duration: 5, progress: 0.1, parent: 1 },
      { id: 5.1, text: 'Document vulnerabilities', start_date: '26-10-2024', duration: 2, progress: 0.5, parent: 5 },
      { id: 5.2, text: 'Proof of concept (POC)', start_date: '28-10-2024', duration: 2, progress: 0.4, parent: 5 },
      { id: 5.3, text: 'Provide fixes and steps for remediation', start_date: '30-10-2024', duration: 1, progress: 0.3, parent: 5 },
  
      { id: 6, text: 'Report Submission 1.0', start_date: '01-11-2024', duration: 1, progress: 0, parent: 1 },
      { id: 7, text: 'Revalidation Security Audit', start_date: '02-11-2024', duration: 4, progress: 0, parent: 1 },
      { id: 8, text: 'Report Submission 2.0', start_date: '06-11-2024', duration: 2, progress: 0, parent: 1 },
      { id: 9, text: 'Final Report & Project Sign-off', start_date: '08-11-2024', duration: 2, progress: 0, parent: 1 },
    ],
    links: [
      { id: 1, source: 1, target: 2, type: '0' },
      { id: 2, source: 2, target: 2.1, type: '0' },
      { id: 3, source: 2.1, target: 2.2, type: '0' },
      { id: 4, source: 2.3, target: 2.2, type: '0' },
  
      { id: 5, source: 3, target: 2, type: '0' },
      { id: 6, source: 3.1, target: 3, type: '0' },
      { id: 7, source: 3.2, target: 3.1, type: '0' },
      { id: 8, source: 3.3, target: 3.2, type: '0' },
      { id: 9, source: 3.4, target: 3.3, type: '0' },
      { id: 10, source: 3.5, target: 3.4, type: '0' },
  
      { id: 11, source: 4, target: 35, type: '0' },
      { id: 12, source: 4.1, target: 4, type: '0' },
      { id: 13, source: 4.2, target: 4.1, type: '0' },
  
      { id: 14, source: 5, target: 42, type: '0' },
      { id: 15, source: 5.1, target: 5, type: '0' },
      { id: 16, source: 5.2, target: 5.1, type: '0' },
      { id: 17, source: 5.3, target: 5.2, type: '0' },
  
      { id: 18, source: 6, target: 5.3, type: '0' },
      { id: 19, source: 7, target: 6, type: '0' },
      { id: 20, source: 8, target: 7, type: '0' },
      { id: 21, source: 9, target: 8, type: '0' },
    ]
};
