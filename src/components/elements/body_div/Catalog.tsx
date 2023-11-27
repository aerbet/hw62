import React from 'react';

const Catalog: React.FC = () => {
  const pcTech = [
    'Graphics Cards',
    'Processors',
    'Motherboards',
    'Memory Modules',
    'Storage Drives',
    'Power Supplies',
    'Cooling Systems',
    'PC Cases',
    'Monitors',
    'Keyboards',
    'Mice',
    'Webcams',
    'Microphones',
    'Headsets',
    'Speakers',
    'Printers',
    'Scanners',
    'External Hard Drives',
    'USB Hubs',
    'Network Adapters',
    'Routers',
    'Switches',
    'Wireless Access Points',
    'Ethernet Cables',
    'UPS (Uninterruptible Power Supply)',
    'Webcams',
    'Microphones',
    'Graphics Tablets',
    'External SSDs',
    'Gaming Peripherals',
    'VR Headsets',
    'Capture Cards',
    'Thunderbolt Docks',
    'Docking Stations',
    'Laptop Stands',
    'Desk Chairs',
  ];

  return (
    <div className='Catalog'>
      <ul>
        {pcTech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;