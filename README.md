# Clonify

Clonify is a clone of the famous desktop version of the Spotify application.
You can access this application at https://clonify-app.herokuapp.com.

![clonify](https://user-images.githubusercontent.com/36672867/87503683-3bfc9300-c63b-11ea-85cf-55999b9e1711.gif)

### Features

- Fetch user's public playlists;
- Fetch user's followed podcasts;
- Fetch user's recent played playlists and albums;
- Friend Activity Feed
  - Since Spotify Web API doesn't provide an endpoint to get the user's friends, the activities presented aren't from real people.
- Play user's playlists tracks;
- Play user's recent played playlists and albums.

_Obs.: Since the tracks are retrieved from the Spotify Web API, only 30 seconds previews of these tracks are available._

### Getting Started

Following the instructions down below you'll get a copy of the project, so you can run it from your local machine.

#### Requirements

To run this project you must have:

- [NodeJS](https://nodejs.org/) and NPM (or [Yarn](https://yarnpkg.com/)) installed on your machine. You can get these tools at https://nodejs.org and https://yarnpkg.com.

- A valid Spotify API Key. You can get it by following the instructions at https://developer.spotify.com/documentation/web-api/quick-start/

#### Installing

1. Clone the repository to your local machine:
   `$ git clone https://github.com/FelipeTomazEC/clonify.git`

2. Enter in the directory of the project:
   `$ cd clonify`

3. Install the dependencies:
   `$ npm install` or `$ yarn install`

4. Make a copy of the `example.env` file, and name it as `.env`:
   `$ cp example.env .env`

5. Open the `.env` in an editor of your preference and replace the value `spotify_client_id` with your own client id.

6. That's all. Now you can run it with the command:
   `$ npm start` or `$ yarn start`.

### Built With

- [Faker](https://github.com/marak/Faker.js/) - Library to generate fake data, like friends activities, etc.
- [React Icons](https://react-icons.github.io/react-icons/) - Library that provide icons for react apps.
- [React JS](https://reactjs.org/) - Library for create web applications.
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/reference/) - Official API to access Spotify resources.
- [Styled Components](https://styled-components.com/) - Library for styling react components.


### License

This project is licensed under the **MIT License** - see the [LICENSE.md](./LICENSE.md) file for details.

