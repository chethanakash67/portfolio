import React from 'react';

const Stats = () => {
  const statistics = [
    { value: '20+', label: 'Projects Delivered' },
    { value: '5', label: 'Years of Experience' },
    { value: '15', label: 'Awards Won' },
    { value: '300+', label: 'Happy Clients' },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 py-10">
      {statistics.map((stat, index) => (
        <div key={index} className="border border-gray-800 p-6 bg-[#111111]">
          <div className="text-[#ff0000] text-3xl font-bold">{stat.value}</div>
          <div className="text-gray-500 text-xs uppercase">{stat.label}</div>
        </div>
      ))}
    </section>
  );
};

export default Stats;