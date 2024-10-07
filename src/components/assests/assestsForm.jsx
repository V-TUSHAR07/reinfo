// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CreateAssetsForm = () => {
//     const [formData, setFormData] = useState({
//         workspaceName: '',
//         dateRange: '',
//         hostname: '',
//         customerName: '',
//         workspace: '',
//         description: '',
//         importance: 3, // default rating
//         scopeTarget: ''
//     });

//     const [submittedData, setSubmittedData] = useState([]);

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData({ ...formData, [id]: value });
//     };



//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmittedData([...submittedData, formData]);
//         setFormData({
//             workspaceName: '',
//             dateRange: '',
//             hostname: '',
//             customerName: '',
//             workspace: '',
//             description: '',
//             importance: 3,
//             scopeTarget: ''
//         });
//     };

//     const handleCancel = () => {
//         setFormData({
//             workspaceName: '',
//             dateRange: '',
//             hostname: '',
//             customerName: '',
//             workspace: '',
//             description: '',
//             importance: 3,
//             scopeTarget: ''
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <form onSubmit={handleSubmit} className="p-4 bg-dark text-light rounded">
//                 <h2>Create Assets</h2>
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control bg-secondary text-light"
//                             id="workspaceName"
//                             placeholder="Workspace Name"
//                             value={formData.workspaceName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control bg-secondary text-light"
//                             id="dateRange"
//                             placeholder="DD/MM/YY - DD/MM/YY"
//                             value={formData.dateRange}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control bg-secondary text-light"
//                             id="hostname"
//                             placeholder="Hostname (net.hostname.com)"
//                             value={formData.hostname}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control bg-secondary text-light"
//                             id="customerName"
//                             placeholder="Customer Name"
//                             value={formData.customerName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control bg-secondary text-light"
//                             id="workspace"
//                             placeholder="Workspace(s)"
//                             value={formData.workspace}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <div className="mb-3">
//                     <textarea
//                         className="form-control bg-secondary text-light"
//                         id="description"
//                         rows="3"
//                         placeholder="Describe the workspace used for..."
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>

//                 <div className="row mb-3">
//                     <div className="col">
//                         <label className="form-label">Importance</label>
//                         <input
//                             type="range"
//                             className="form-range"
//                             min="1"
//                             max="5"
//                             id="importance"
//                             value={formData.importance}
//                             onChange={handleImportanceChange}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control bg-secondary text-light"
//                             id="scopeTarget"
//                             placeholder="Scope Target"
//                             value={formData.scopeTarget}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <div className="d-flex justify-content-end">
//                     <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>
//                         Cancel
//                     </button>
//                     <button type="submit" className="btn btn-success">
//                         Save
//                     </button>
//                 </div>
//             </form>


//         </div>
//     );
// };

// export default CreateAssetsForm;

import React, { useState } from 'react';
import ReusableForm from '../ReusableComponent/reusableForm';

const CreateAssets = () => {
    const [formData, setFormData] = useState({
        workspaceName: '',
        customerName: '',
        description: '',
        importance: 0,
        scopeTarget: '',
        hostname: '',
        workspaces: '',
        dateRange: [null, null],
    });

    const formFields = [
        { id: 'workspaceName', type: 'text', placeholder: 'Workspace Name' },
        { id: 'hostname', type: 'text', placeholder: 'Hostname (net.hostname.com)' }, // New hostname field
        { id: 'dateRange', type: 'datepicker', placeholder: 'DD/MM/YY - DD/MM/YY' },
        { id: 'customerName', type: 'text', placeholder: 'Customer Name' },
        { id: 'workspaces', type: 'text', placeholder: 'Workspace(s)' }, // New workspaces field
        { id: 'description', type: 'textarea', placeholder: 'Describe the workspace used for...' },
        { id: 'importance', type: 'importance', placeholder: 'Importance' },
        { id: 'scopeTarget', type: 'text', placeholder: 'Scope Target' },
    ];

    const [submittedData, setSubmittedData] = useState([]);

    const handleFormSubmit = (newFormData) => {
        setSubmittedData([...submittedData, newFormData]);
        setFormData({
            workspaceName: '',
            customerName: '',
            description: '',
            importance: 0,
            scopeTarget: '',
            hostname: '',
            workspaces: '',
            dateRange: [null, null],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        setFormData({
            workspaceName: '',
            dateRange: '',
            hostname: '',
            customerName: '',
            workspace: '',
            description: '',
            importance: 3,
            scopeTarget: ''
        });
    };

    const handleCancel = () => {
        console.log("Form canceled");
        // Optionally reset or handle cancellation
    };

    return (
        <div>
            <ReusableForm
                formData={formData}
                setFormData={setFormData}
                fields={formFields}
                onSubmit={handleFormSubmit}
                onCancel={handleCancel}
                title= "Create Asset"
            />
            <h2 className="mt-5">Submitted Data</h2>
            <table className="table table-dark table-striped mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Workspace</th>
                        <th>Date Range</th>
                        <th>Hostname</th>
                        <th>Customer Name</th>
                        <th>Workspace</th>
                        <th>Description</th>
                        <th>Importance</th>
                        <th>Scope Target</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedData.map((data, index) => {
                        const formattedStartDate = data.dateRange[0]
                            ? data.dateRange[0].toLocaleDateString()
                            : 'N/A';
                        const formattedEndDate = data.dateRange[1]
                            ? data.dateRange[1].toLocaleDateString()
                            : 'N/A';

                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.workspaceName}</td>
                                <td>{`${formattedStartDate} - ${formattedEndDate}`}</td> {/* Format date range */}
                                <td>{data.hostname}</td>
                                <td>{data.customerName}</td>
                                <td>{data.workspaces}</td> {/* Corrected workspace(s) field */}
                                <td>{data.description}</td>
                                <td>{data.importance}</td>
                                <td>{data.scopeTarget}</td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </div>
    );
};

export default CreateAssets;





