import React, { useEffect, useState } from 'react';
import { getFriendsActivitiesFromAPI } from '../../services/get-friends-activities-from-api';
import { FriendActivityCard } from './FriendActivityCard';
import { Container } from './styles';

export function FriendsActivityFeed() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getFriendsActivitiesFromAPI()
      .then((activities) => setActivities(activities))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <header>
        <h1>Friend Activity</h1>
      </header>
      <ul>
        {activities.map((activity) => (
          <li key={activity.friend.id}>
            <FriendActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
