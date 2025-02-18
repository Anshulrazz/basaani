'use client';
import { useState } from 'react';

export default function Hero() {
  const [flightType, setFlightType] = useState('One Way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departing, setDeparting] = useState('');
  const [returning, setReturning] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelClass, setTravelClass] = useState('Economy');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchData = { flightType, from, to, departing, returning, adults, children, travelClass };
    console.log('Search Data:', searchData);
    // Add API call or redirection logic here
  };

  return (
    <div
      id="booking"
      className="relative flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('https://colorlib.com/etc/bforms/colorlib-booking-5/img/background.jpg')" }}
    >
      <div className="w-full max-w-5xl p-10 bg-gray-900 rounded-lg shadow-lg bg-opacity-80">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-4 justify-left">
            {['One Way', 'Roundtrip'].map((type, index) => (
              <label key={index} className="flex space-x-2 text-white cursor-pointer items-left">
                <input
                  type="radio"
                  name="flight-type"
                  className="hidden peer"
                  checked={flightType === type}
                  onChange={() => setFlightType(type)}
                />
                <span className="flex items-center justify-center w-5 h-5 border border-white rounded-full peer-checked:bg-red-500"></span>
                {type}
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[{ label: 'Flying from', value: from, setValue: setFrom }, { label: 'Flying to', value: to, setValue: setTo }].map(({ label, value, setValue }, index) => (
              <div key={index}>
                <label className="text-white">{label}</label>
                <input
                  type="text"
                  placeholder={label}
                  value={value}
                  onChange={(e: any) => setValue(label === 'Travel Class' ? e.target.value : Number(e.target.value))}
                  className="w-full p-3 text-white bg-gray-800 border border-gray-500 rounded-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-white">Departing</label>
              <input
                type="date"
                value={departing}
                onChange={(e) => setDeparting(e.target.value)}
                className="w-full p-3 text-white bg-gray-800 border border-gray-500 rounded-full focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {flightType !== 'One Way' && (
              <div>
                <label className="text-white">Returning</label>
                <input
                  type="date"
                  value={returning}
                  onChange={(e) => setReturning(e.target.value)}
                  className="w-full p-3 text-white bg-gray-800 border border-gray-500 rounded-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[{ label: 'Adults (18+)', value: adults, setValue: setAdults, options: [1, 2, 3, 4, 5] }, { label: 'Children (0-17)', value: children, setValue: setChildren, options: [0, 1, 2, 3] }, { label: 'Travel Class', value: travelClass, setValue: setTravelClass, options: ['Economy', 'Business', 'First Class'] }].map(({ label, value, setValue, options }, index) => (
              <div key={index}>
                <label className="text-white">{label}</label>
                <select
                  value={value}
                  onChange={(e: any) => setValue(e.target.value)}
                  className="w-full p-3 text-white bg-gray-800 border border-gray-500 rounded-full focus:ring-2 focus:ring-red-500"
                >
                  {options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-end">
              <button type="submit" className="w-full py-3 font-semibold text-white uppercase transition duration-300 bg-red-500 rounded-lg hover:bg-red-600">
                Show Flights
              </button>
            </div>
          </div>
        </form>
      </div> 
    </div>
  );
}
