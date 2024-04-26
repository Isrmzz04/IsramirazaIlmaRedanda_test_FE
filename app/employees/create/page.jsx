"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Heading from "@/components/Heading";
import { httpService } from '@/service/service';
const AddEmployee = () => { 
   const router = useRouter();
  const [formData, setFormData] = useState({
    status: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {    
    e.preventDefault();
    // console.log("Form Data:", formData);
    try {
      await httpService.post("/employees", formData)
      setFormData({
        employeeName: '',
        joinDate: '',
        jobs: '',
        shift: '',
        status: true
      });
      alert("Success added");
      router.push("/employees")      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Heading>Add Employee</Heading>
      <div>
        <form method='POST' onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="EmployeeName" className="block text-sm font-medium text-gray-700"> Employee Name <span className="text-red-500">*</span> </label>
            <input
              type="text"
              id="EmployeeName"
              name="employeeName"
              placeholder="Employee name"
              className="mt-1 w-full max-w-3xl py-2 px-4 rounded-md border border-gray-200 shadow-sm text-sm"
              value={formData.employeeName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="JoinDate" className="block text-sm font-medium text-gray-700"> Join Date <span className="text-red-500">*</span> </label>
            <input
              type="date"
              id="JoinDate"
              name="joinDate"
              className="mt-1 w-full max-w-3xl py-2 px-4 rounded-md border border-gray-200 shadow-sm text-sm"
              value={formData.joinDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Jobs" className="block text-sm font-medium text-gray-900"> Jobs <span className="text-red-500">*</span> </label>
            <select
              name="jobs"
              id="Jobs"
              className="mt-1.5 w-full max-w-3xl py-2.5 px-4 rounded-lg border border-gray-300 text-gray-700 text-sm bg-white"
              value={formData.jobs}
              onChange={handleChange}
              required
            >
              <option value="">Please select</option>
              <option value="Admin Inventory">Admin Inventory</option>
              <option value="Admin Accounting">Admin Accounting</option>
              <option value="Marketing">Marketing</option>
              <option value="Frontdesk">Frontdesk</option>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
            </select>
          </div>
          <div>
            <label htmlFor="Shift" className="block text-sm font-medium text-gray-900"> Shift <span className="text-red-500">*</span> </label>
            <select
              name="shift"
              id="Shift"
              className="mt-1.5 w-full max-w-3xl py-2.5 px-4 rounded-lg border border-gray-300 text-gray-700 text-sm bg-white"
              value={formData.shift}
              onChange={handleChange}
              required
            >
              <option value="">Please select</option>
              <option value="Shift 01">Shift 01</option>
              <option value="Shift 02">Shift 02</option>
              <option value="Shift 03">Shift 03</option>
            </select>
          </div>
          <div>
            <label htmlFor="Status" className="block text-sm font-medium text-gray-900 mb-2"> Status <span className="text-red-500">*</span> </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="status"
                className="sr-only peer"
                checked={formData.status}
                onChange={handleChange}
              />
              <div className={`w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer transition-all duration-300 peer-checked:bg-blue-600 ${formData.status ? 'peer-checked:bg-blue-600' : ''}`}>
                <div className={`absolute left-2 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 transform ${formData.status ? 'translate-x-full' : ''}`}></div>
              </div>
              <span className="ms-3 text-sm font-medium text-gray-900">{formData.status ? 'Active' : 'Inactive'}</span>
            </label>
          </div>
          <div className='pt-6'>
            <button type='submit' className='w-fit py-2 px-6 font-semibold text-sm rounded-lg bg-green-700 text-white mb-6'>
              Save Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
