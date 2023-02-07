import { useState } from "react"
import Calendar from "reactjs-availability-calendar";
import { ReadURL } from "../constants/URLS";
import { options } from "../utils/CalendarOptions";

export const ProjectCard = () => {
    // FETCH DATA FROM GOOGLE SHEETS API
    const [data, setData] = useState([]);
    const [req, setReq] = useState('');
    const [loading, setLoading] = useState(true);

    const url = ReadURL;

    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        // val is values.{req}
        const val = values[req];

        const datas = val.map((item: any) => {
            return {
                from: item,
                to: item
            }
        })

        setData(datas);
        setLoading(false);
    }

    const bookings2 = [{
        from: '2022-11-18',
        to: '2022-11-18',
        middayCheckout: true,
    }]
    const bookings = data.concat(bookings2);


    const handleChange = (event: any) => {
        setReq(event.target.value);
    };


    return (
        <div className="h-screen mt-3 mb-10 container mx-auto">
            <div className="container w-11/12 xl:w-3/4 mx-auto flex flex-col justify-center shadow-md shadow-gray-200 dark:shadow-gray-600 rounded-xl dark:bg-gray-800 dark:text-white">

                <div className="w-9/12 mx-auto flex flex-col justify-center">
                    <label className="block pt-10 pl-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select value={req} onChange={handleChange} onClick={fetchData} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-9/12 mx-auto py-10">

                    {loading ? <h2>Select option from the drop down</h2> :
                        <Calendar bookings={bookings} />
                    }

                </div>
            </div>
        </div >
    )
}