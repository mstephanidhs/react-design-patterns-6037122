import { useEffect, useState } from 'react';

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      setUser({
        id: userId,
        name: 'Shaun',
        age: 123,
        hairColor: 'Brown',
        hobbies: ['code', 'food'],
      });
    });

    if (!user) {
      return <p>Loading...</p>;
    }

    return <Component {...props} user={user} />;
  };
};
