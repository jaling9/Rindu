# Rindu

Project running at <https://rindu.marcomadera.com>

## **Running Locally**

```bash
git clone https://github.com/MarcoMadera/Rindu.git
cd Rindu
npm install
npm run dev
```

For the project to work properly a `.env.local` file similar to [`.env.example`](https://github.com/MarcoMadera/spotify-playlists-cleaner/blob/master/.env.example) is required.

https://github.com/MarcoMadera/Rindu/blob/6f94bfe195f0d9497fd13060429b2f30ff795a83/.env.example#L1-L8

To get the client ID and client secret, go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

Create a new app and copy the client ID and client secret.

Create a `.env.local` file and paste the client ID and client secret as the example [`.env.example`](https://github.com/MarcoMadera/spotify-playlists-cleaner/blob/master/.env.example).


In the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) for your app, go to "edit settings" and click "Add redirect URI" and paste the following URL: http://localhost:3000/dashboard

You can get the SETLIST_FM_API_KEY [here](https://api.setlist.fm/docs/1.0/index.html) and paste it in the `.env.local`.

**Important:** The `.env.local` file with client id, client secret and apikeys is not pushed to GitHub.

Now you can run the project locally.

```bash
npm run dev
```

## **Components**

For a better understanding of the components used in this project, please visit the [live component collection](https://main--62c0c8de6b5dd3fac001eb94.chromatic.com) 

## **About the project**

Built with ReactJs/NextJs. It started as a simple script to clean spotify playlists. It served as a way to clean my playlists and to learn how to use the [Spotify API](https://developer.spotify.com/documentation/web-api/).

It has been taking shape similar to what a clone of Spotify is. It is intended to add features such as creating dynamic playlists, advanced search, and background noises.

## Video



https://user-images.githubusercontent.com/17222523/206883606-1c9ef3e7-21f7-421c-b9cc-b2e43c0d53f5.mp4



## Images

![Home](./public/Home.png)

![Dashboard](./public/Dashboard.png)
