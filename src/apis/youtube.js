import axios from 'axios';

const KEY = 'AIzaSyBnZWEnIVtjvP1O_-G4JdP5Q_CwwN_xd5U';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

