"use client"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getEmployees } from "@/store/employees/action"
import Heading from "@/components/Heading"
import Link from "next/link"
import { httpService } from "@/service/service"

const Employees = () => {
    const router = useRouter()
    const { dataEmployees } = useSelector((state) => state.employees)
    const dispatch = useDispatch()

    const handleEdit = async (id) => {
        router.push(`/employees/edit/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            const confirmation = window.confirm("Are you sure you want to delete this employee?");
            if (confirmation) {
                await httpService.delete("/employees/" + id)
                dispatch(getEmployees())
                alert("Employees deleted successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    return (
        <div>
            <Heading>Employees</Heading>
            <div className="w-fit py-2 px-6 font-semibold text-sm rounded-lg bg-black text-white mb-6">
                <Link href="employees/create">Add Data</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="text-left">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Employee Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Join Date</th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Jobs</th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Shift</th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Status</th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            dataEmployees.length > 0 && dataEmployees.map((value, i) => (

                                <tr key={value.id} className="odd:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{value.employeeName}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.joinDate}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.jobs}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.shift}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.status ? "Active" : "Inactive"}</td>
                                    <td>
                                        <div className="flex gap-2 justify-center">
                                            <button onClick={() => handleEdit(value.id)} className='w-fit py-1 px-2.5 font-semibold text-xs rounded-md border border-gray-300 bg-gray-100 text-gray-500'>
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(value.id)} className='w-fit py-1 px-2.5 font-semibold text-xs rounded-md border border-gray-300 bg-gray-100 text-gray-500'>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Employees