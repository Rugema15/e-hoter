import React, { useEffect, useState } from 'react'

const stats = [
  { label: 'Travelers Served', value: 500000 },
  { label: 'Cups of coffee', value: 50000 },
  { label: 'Accomodation Guests', value: 135000 },
  { label: 'Retail Customers', value: 250000 },
];

function formatK(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'k';
  }
  return num;
}

const Percentage = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      return setInterval(() => {
        setCounts(prev =>
          prev.map((count, idx) =>
            idx === i && count < stat.value
              ? count + Math.ceil(stat.value / 100)
              : count
          )
        );
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    stats.forEach((stat, i) => {
      if (counts[i] > stat.value) {
        setCounts(prev =>
          prev.map((count, idx) => (idx === i ? stat.value : count))
        );
      }
    });
  }, [counts]);

  return (
    <div className='bg-[#0a1f44] py-12 px-10 flex flex-wrap gap-10 px-8 py-6 p-30'>
      {stats.map((stat, i) => (
        <div key={stat.label} className='max-w-7xl mx-auto gap-5 text-center'>
          <h2 className='text-4xl font-bold text-white'>
            {formatK(counts[i])}
          </h2>
          <p className='text-violet-600 text-lg'>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Percentage