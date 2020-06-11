import React from "react";
import { FriendActivityCard } from "./FriendActivityCard";
import { Container } from "./styles";

export function RightSideBar({ friendsActivities }) {
  return (
    <Container>
      <header>
        <h1>Friend Activity</h1>
      </header>
      <ul>
        {friendsActivities.map((activity) => (
          <li key={activity.friend.id}>
            <FriendActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
