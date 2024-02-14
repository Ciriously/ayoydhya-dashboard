import { useState } from 'react';
import packageData from './../Tabledata';
import next from '../../images/icon/next.png';
import prev from '../../images/icon/prev.png';
import sort from '../../images/icon/sort.svg';

const TableThree = () => {
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
    <div className="rounded-xl border h-screen border-stroke bg-[white] px-5 pt-6 pb-2 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-bold mb-0">Customer Orders</h2>
        {/* Search box */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-40 h-9 mb-0 sm:w-48 bg-transparent border border-[#CFD3D5] align-center text-black font-inter focus:outline-none dark:text-white rounded-lg pl-10 pr-3 py-2"
          />
          <svg
            className="absolute left-1 top-4.5 -translate-y-1/2 fill-body dark:fill-bodydark"
            width="40"
            height="20"
            viewBox="0 0 20 20"
            fill="black"
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
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full h-auto table-auto">
          <thead>
            <tr className=" border-b border-t  border-[#CFD3D5] text-left ">
              <th className="border-b border-[#fff] py-2 px-2 pl-5 dark:border-strokedark xl:pl-1">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 rounded-md text-primary"
                />
              </th>
              <th className="min-w-[220px] py-1 px-4 text-sm font-medium text-black dark:text-white xl:pl-4">
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

              <th className="py-4 px-4 font-medium text-sm text-black dark:text-white xl:pl-1">
                Order Value
              </th>
              <th className="py-4 px-4 font-medium text-sm text-black dark:text-white xl:pl-1">
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
                <td className="border-b border-[#fff] pl-5 pr-0 dark:border-strokedark xl:pl-1">
                  {' '}
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-primary"
                  />
                </td>
                <td className="border-b border-[#fff] py-3 px-2 pl-3 dark:border-strokedark xl:pl-4">
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
              className="px-2 py-1 border-white  border-b rounded-md bg-[#5E636614] text-[#A6A8B1] dark:bg-darkinput dark:border-strokedark dark:text-white"
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
  );
};

export default TableThree;
