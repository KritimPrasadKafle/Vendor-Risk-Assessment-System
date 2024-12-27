import React from 'react';
import VendorList from '../src/Components/VendorList';
import AddVendor from '../src/Components/AddVendor';

const App = () => {
  return (
    <div>
      <h1>Vendor Risk Assessment System</h1>
      <AddVendor />
      <VendorList />
    </div>
  );
};

export default App;
