```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    setUser(data);
  };

  return (
    <View>
      <Text>{user?.name ?? 'Loading...'}</Text> {/* Safe access using optional chaining and nullish coalescing */}
    </View>
  );
};

export default MyComponent;
```