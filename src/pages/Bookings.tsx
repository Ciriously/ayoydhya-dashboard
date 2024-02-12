import React, { useState } from 'react';
import CardDataStats from '../components/CardDataStats';
import TableThree from '../components/Tables/TableThree';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { Package } from '../types/package';
const packageData: Package[] = [
  {
    customerName: 'John Doe',
    orderTime: '2023-01-13T08:00:00Z',
    checkInDate: '2023-01-15',
    checkOutDate: '2023-01-20',
    trackingID: 'ABC123',
    orderValue: 0.0,
    hotelName: 'Hotel ABC',
    status: 'Paid',
  },
  {
    customerName: 'Jane Smith',
    orderTime: '2023-01-13T09:30:00Z',
    checkInDate: '2023-01-14',
    checkOutDate: '2023-01-19',
    trackingID: 'DEF456',
    orderValue: 59.0,
    hotelName: 'Hotel XYZ',
    status: 'Paid',
  },
  {
    customerName: 'Bob Johnson',
    orderTime: '2023-01-13T10:45:00Z',
    checkInDate: '2023-01-16',
    checkOutDate: '2023-01-21',
    trackingID: 'GHI789',
    orderValue: 99.0,
    hotelName: 'Hotel 123',
    status: 'Unpaid',
  },
  {
    customerName: 'Mary Williams',
    orderTime: '2023-01-13T11:15:00Z',
    checkInDate: '2023-01-17',
    checkOutDate: '2023-01-22',
    trackingID: 'JKL012',
    orderValue: 199.0,
    hotelName: 'Hotel 456',
    status: 'Pending',
  },
];

const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [itemsPerPage] = useState(5); // Items per page

  // Filtering logic based on search term
  const filteredData = packageData.filter((packageItem) =>
    packageItem.customerName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <DefaultLayout>
      <div className="bg-white">
        <div>
          <h2>Customers Orders</h2>
        </div>
        <div className="max-w-full overflow-x-auto ">
          <table className="w-full table-auto">
            <thead>
              <tr className=" border-b border-t border-[#eee] text-left ">
                <th className="border-b border-[#fff] py-2 px-2 pl-5 dark:border-strokedark xl:pl-1">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-primary"
                  />
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Customer name
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Order Time
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Check-in & Out Date
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Tracking ID
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Order Value
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Hotel name
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#fff] py-5 px-4 pl-9 dark:border-strokedark xl:pl-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-primary"
                    />
                  </td>
                  <td className="border-b border-[#fff] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.customerName}
                    </h5>
                  </td>
                  <td className="border-b border-[#fff] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.orderTime}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.checkInDate}
                    </p>
                  </td>

                  <td className="border-b border-[#fff] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.trackingID}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.orderValue}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.hotelName}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-5 px-4 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                        packageItem.status === 'Paid'
                          ? 'bg-success text-success'
                          : packageItem.status === 'Unpaid'
                          ? 'bg-danger text-danger'
                          : 'bg-warning text-warning'
                      }`}
                    >
                      {packageItem.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 mr-2 border rounded-md bg-gray-200 text-gray-600 dark:bg-darkinput dark:border-strokedark dark:text-white"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= filteredData.length}
              className="px-3 py-1 border rounded-md bg-gray-200 text-gray-600 dark:bg-darkinput dark:border-strokedark dark:text-white"
            >
              Next
            </button>
          </div>
          <div>
            Page {currentPage} of{' '}
            {Math.ceil(filteredData.length / itemsPerPage)}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Bookings;
