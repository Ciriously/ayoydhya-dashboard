import React, { useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import next from '../images/icon/next.png';
import prev from '../images/icon/prev.png';
import packageData from '../components/Tabledata';
import sort from '../images/icon/sort.svg';
import HotelBtn from '../components/btns/hotelbtn';
import Calbtn from '../components/btns/calenderbtn';

const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filtering logic based on search term
  const filteredData = packageData.filter((packageItem) =>
    packageItem.customerName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page function
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle items per page change function
  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1); // Reset current page to 1 when changing items per page
  };

  return (
    <DefaultLayout>
      <div className="bg-white rounded-xl h-screen  overflow-auto">
        <div className="flex justify-between text-center text-black-2 font-medium mb-4 px-7 mt-4">
          <h2>Customers Orders</h2>
          <div className="flex">
            {/* Button for filtering by hotels */}
            <HotelBtn />
            {/* Button for filtering by date */}
            <Calbtn />
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full h-auto table-auto">
            <thead>
              <tr className=" border-b border-t  border-[#CFD3D5] text-left ">
                <th className="border-b border-[#fff] py-2 px-2 pl-5 dark:border-strokedark xl:pl-5">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 rounded-md text-primary"
                  />
                </th>
                <th className="min-w-[220px] py-3 px-4 text-sm font-medium text-black dark:text-white xl:pl-5">
                  Customer name
                </th>
                <th className="min-w-[150px] py-4 px-4 text-sm font-medium text-black dark:text-white xl:pl-1">
                  Order Time
                </th>
                <th className="min-w-[150px] py-4 px-4 text-sm font-medium text-black dark:text-white xl:pl-1">
                  Check-in & Out Date
                </th>
                <th className="min-w-[150px] py-4 px-4 text-sm font-medium text-black dark:text-white xl:pl-1 flex items-center">
                  Tracking ID
                  <img src={sort} className="h-5 ml-2" alt="Sort" />
                </th>

                <th className=" min-w-[120px] py-4 px-4 font-medium text-sm text-black dark:text-white xl:pl-1">
                  Order Value
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-sm text-black dark:text-white xl:pl-1">
                  Hotel name
                </th>
                <th className="min-w-[120px] py-4 px-4  text-sm font-medium text-black dark:text-white xl:pl-1">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#fff] pl-5 pr-0 dark:border-strokedark xl:pl-5">
                    {' '}
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-primary"
                    />
                  </td>
                  <td className="border-b border-[#fff] py-3 px-2 pl-3 dark:border-strokedark xl:pl-5">
                    {' '}
                    <h5 className="font-normal text-sm text-[#6E7079] dark:text-white">
                      {' '}
                      {packageItem.customerName}
                    </h5>
                  </td>
                  <td className="border-b border-[#fff] py-1 px-2 dark:border-strokedark">
                    {' '}
                    <p className="text-sm text-[#6E7079] dark:text-white">
                      {' '}
                      {packageItem.orderTime}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-1 px-2 dark:border-strokedark">
                    {' '}
                    <p className="text-sm text-[#6E7079] dark:text-white">
                      {' '}
                      {packageItem.checkInDate}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-1 px-2 dark:border-strokedark">
                    {' '}
                    <p className="text-sm text-[#6E7079] dark:text-white">
                      {' '}
                      {packageItem.trackingID}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-1 px-2 dark:border-strokedark">
                    {' '}
                    <p className="text-sm text-[#6E7079] dark:text-white">
                      {' '}
                      {packageItem.orderValue}
                    </p>
                  </td>
                  <td className="border-b border-[#fff] py-1 px-2 dark:border-strokedark">
                    {' '}
                    <p className="text-sm text-[#6E7079] dark:text-white">
                      {' '}
                      {packageItem.hotelName}
                    </p>
                  </td>

                  <td className="border-b border-[#fff] py-1 px-2 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                        packageItem.status === 'Paid'
                          ? 'bg-success text-success'
                          : packageItem.status === 'Unpaid'
                          ? 'bg-danger text-danger'
                          : packageItem.status === 'Cancelled by User'
                          ? 'bg-blue-500 text-blue-500'
                          : packageItem.status === 'Departured'
                          ? 'bg-yellow-500 text-yellow-500'
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
        <hr className="my-4 border-[#A6A8B1] dark:border-strokedark" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex justify-between items-center">
            <div>
              <select
                id="itemsPerPage"
                onChange={(e) => handleItemsPerPageChange(e.target.value)}
                value={itemsPerPage}
                className="px-2 mr-2 ml-4 py-1 border-white rounded-md bg-[#5E636614] text-[#A6A8B1] dark:bg-darkinput dark:text-white"
              >
                <option value="5">5</option>
                <option value="12">12</option>
                <option value="20">20</option>
              </select>
              <label
                htmlFor="itemsPerPage"
                className="text-sm text-[#A6A8B1] font-inter"
              >
                {' '}
                Items per page
              </label>
            </div>
            <h2 className="text-sm ml-5 font-inter"> 1-12 of 200 items</h2>
          </div>

          <div className="text-sm text-[#666666] mt-1 ml-auto font-inter">
            <span>
              Page{' '}
              <select
                id="selectPage"
                onChange={(e) => paginate(parseInt(e.target.value))}
                value={currentPage}
                className="px-2 py-1 border-white  rounded-md bg-[#5E636614] text-gray-600 dark:bg-darkinput dark:border-strokedark dark:text-white"
              >
                {Array.from(
                  { length: Math.ceil(filteredData.length / itemsPerPage) },
                  (_, i) => i + 1,
                ).map((pageNumber) => (
                  <option key={pageNumber} value={pageNumber}>
                    {pageNumber}
                  </option>
                ))}
              </select>{' '}
              of {Math.ceil(filteredData.length / itemsPerPage)} pages
            </span>
          </div>

          <div>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-500 text-gray-600 dark:bg-darkinput dark:border-strokedark dark:text-white"
            >
              <img src={prev} className="h-3" alt="prev" />
            </button>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= filteredData.length}
              className="px-3 py-1 bg-gray-500 text-gray-600 dark:bg-darkinput dark:border-strokedark dark:text-white"
            >
              <img src={next} className="h-3" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Bookings;
