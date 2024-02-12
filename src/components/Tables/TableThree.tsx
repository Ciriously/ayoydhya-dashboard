import React, { useState } from 'react'; // Import useState
import { Package } from '../../types/package';

const TableThree = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [itemsPerPage] = useState(5); // Items per page

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
    <div className="rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 relative">
      {/* Search box */}
      <div className="flex">
        <div>Customers Order</div>
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2">
            <svg
              className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                fill=""
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
          />
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
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
          Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
        </div>
      </div>
    </div>
  );
};

export default TableThree;
