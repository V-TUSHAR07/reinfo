export const ganttData = {
    data: [
      { id: 1, text: 'Opening Meeting', start_date: "01-10-2024", duration: 2, progress: 0.5 },
      { id: 2, text: 'Intelligence Gathering', start_date: '03-10-2024', duration: 4, progress: 1, parent: 1 },
      { id: 21, text: 'Identify application scope', start_date: '03-10-2024', duration: 2, progress: 1, parent: 2 },
      { id: 22, text: 'Identify dependencies', start_date: '04-10-2024', duration: 2, progress: 0.9, parent: 2 },
      { id: 23, text: 'Identify platforms', start_date: '05-10-2024', duration: 2, progress: 0.8, parent: 2 },
      
      { id: 3, text: 'Vulnerability Analysis', start_date: '10-10-2024', duration: 7, progress: 0.6, parent: 1 },
      { id: 31, text: 'Test Application Server Vulnerabilities', start_date: '12-10-2024', duration: 3, progress: 0.5, parent: 3 },
      { id: 32, text: 'Test Configuration Management', start_date: '15-10-2024', duration: 2, progress: 0.4, parent: 3 },
      { id: 33, text: 'Test Client-Side Vulnerabilities', start_date: '18-10-2024', duration: 3, progress: 0.3, parent: 3 },
      { id: 34, text: 'Test Authentication Mechanism', start_date: '21-10-2024', duration: 2, progress: 0.2, parent: 3 },
      { id: 35, text: 'Test Authorization Controls', start_date: '23-10-2024', duration: 2, progress: 0.1, parent: 3 },
  
      { id: 4, text: 'Penetration Testing (Exploitation)', start_date: '21-10-2024', duration: 5, progress: 0.3, parent: 1 },
      { id: 41, text: 'Impact analysis', start_date: '21-10-2024', duration: 3, progress: 0.5, parent: 4 },
      { id: 42, text: 'Propagate exploits', start_date: '24-10-2024', duration: 2, progress: 0.4, parent: 4 },
  
      { id: 5, text: 'Reporting Phase', start_date: '26-10-2024', duration: 5, progress: 0.1, parent: 1 },
      { id: 51, text: 'Document vulnerabilities', start_date: '26-10-2024', duration: 2, progress: 0.5, parent: 5 },
      { id: 52, text: 'Proof of concept (POC)', start_date: '28-10-2024', duration: 2, progress: 0.4, parent: 5 },
      { id: 53, text: 'Provide fixes and steps for remediation', start_date: '30-10-2024', duration: 1, progress: 0.3, parent: 5 },
  
      { id: 6, text: 'Report Submission 1.0', start_date: '01-11-2024', duration: 1, progress: 0, parent: 1 },
      { id: 7, text: 'Revalidation Security Audit', start_date: '02-11-2024', duration: 4, progress: 0, parent: 1 },
      { id: 8, text: 'Report Submission 2.0', start_date: '06-11-2024', duration: 2, progress: 0, parent: 1 },
      { id: 9, text: 'Final Report & Project Sign-off', start_date: '08-11-2024', duration: 2, progress: 0, parent: 1 },
    ],
    links: [
      { id: 1, source: 2, target: 1, type: '0' },
      { id: 2, source: 21, target: 2, type: '0' },
      { id: 3, source: 22, target: 21, type: '0' },
      { id: 4, source: 23, target: 22, type: '0' },
  
      { id: 5, source: 3, target: 2, type: '0' },
      { id: 6, source: 31, target: 3, type: '0' },
      { id: 7, source: 32, target: 31, type: '0' },
      { id: 8, source: 33, target: 32, type: '0' },
      { id: 9, source: 34, target: 33, type: '0' },
      { id: 10, source: 35, target: 34, type: '0' },
  
      { id: 11, source: 4, target: 35, type: '0' },
      { id: 12, source: 41, target: 4, type: '0' },
      { id: 13, source: 42, target: 41, type: '0' },
  
      { id: 14, source: 5, target: 42, type: '0' },
      { id: 15, source: 51, target: 5, type: '0' },
      { id: 16, source: 52, target: 51, type: '0' },
      { id: 17, source: 53, target: 52, type: '0' },
  
      { id: 18, source: 6, target: 53, type: '0' },
      { id: 19, source: 7, target: 6, type: '0' },
      { id: 20, source: 8, target: 7, type: '0' },
      { id: 21, source: 9, target: 8, type: '0' },
    ]
};
