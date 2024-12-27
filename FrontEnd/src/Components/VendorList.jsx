
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/vendors')
      .then(response => setVendors(response.data))
      .catch(error => console.error('Error fetching vendors:', error));
  }, []);

  return (
    <div>
      <h2>Vendor List</h2>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor._id}>
            <strong>{vendor.name}</strong> - Score: {vendor.securityScore} - Risk Level: {vendor.riskLevel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorList;
