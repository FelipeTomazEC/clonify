import faker from "faker";
import React, { useEffect, useState } from "react";
import { FriendActivityCard } from "./FriendActivityCard";
import { Container } from "./styles";

export function RightSideBar({ className = "right" }) {
  const [friendsActivities, setFriendsActivities] = useState([]);

  useEffect(() => {
    const activities = new Array(20).fill(1).map((_) => {
      const name = faker.name.findName();
      const avatar = faker.internet.avatar();
      const id = faker.random.uuid();
      const album = faker.lorem.words(Math.floor(1 + Math.random() * 3));
      const artist = faker.name.findName();
      const title = faker.lorem.words(Math.floor(1 + Math.random() * 4));

      return { name, avatar, id, album, artist, title };
    });

    setFriendsActivities(activities);
  }, []);

  return (
    <Container className={className}>
      <header>
        <h1>Friend Activity</h1>
      </header>
      <ul>
        {friendsActivities.map((activity) => (
          <li key={activity.id}>
            <FriendActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
