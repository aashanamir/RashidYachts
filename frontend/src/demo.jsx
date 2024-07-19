import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const App = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="App">
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};

export default App;
