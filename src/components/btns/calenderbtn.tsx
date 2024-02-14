import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const DateFilterBtn: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDateClick = (arg: { dateStr: string }) => {
    setSelectedDate(arg.dateStr);
  };

  return (
    <div className="relative">
      <button
        className="bg-white text-[#53545C] border  px-4 py-2 rounded-md mr-2"
        onClick={handleButtonClick}
      >
        Filter by Date
      </button>
      {isDropdownOpen && (
        <div className="absolute top-12 right-2 z-10">
          <div className="bg-[#EAEDFD] p-6 rounded-lg shadow-lg w-96 h-100">
            <h3 className="text-lg text-left font-semibold mb-2">
              Filter By Date
            </h3>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 max-h-60 overflow-y-auto">
              {/* Title for date selection */}
              <h4 className="text-lg font-semibold mb-2">Select a Date</h4>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
              />

              {/* Filters by days, weeks, months, and last date, week, month */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Filter by</h4>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Days
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="checkbox" className="mr-2" />
                    Weeks
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="checkbox" className="mr-2" />
                    Months
                  </label>
                </div>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Last Day
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="checkbox" className="mr-2" />
                    Last Week
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="checkbox" className="mr-2" />
                    Last Month
                  </label>
                </div>
              </div>
            </div>
            <button className="bg-[#5570F1] text-white px-4 py-2 rounded-xl w-full">
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilterBtn;
