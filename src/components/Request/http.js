import axios from 'axios';

const BAREURL =
  'https://document-app-aca19-default-rtdb.asia-southeast1.firebasedatabase.app/';
export async function fetchArtist() {
  const res = await axios.get(BAREURL + '/artists.json');

  const artist = [];
  for (const key in res.data) {
    const artitsObj = {
      name: res.data[key].name,
      img: res.data[key].img,
    };
    artist.push(artitsObj);
  }
  return artist;
}

export async function upArtist(data) {
  await axios.post(BAREURL + '/artists.json', data);
}

export async function upNewPost(data) {
  await axios.post(BAREURL + '/newpost.json', data);
}
export async function upMostView(data) {
  await axios.post(BAREURL + '/mostview.json', data);
}
export async function upRandom(data) {
  await axios.post(BAREURL + '/random.json', data);
}

export async function fetchNewPost() {
  const res = await axios.get(BAREURL + '/newpost.json');

  const artist = [];
  for (const key in res.data) {
    const artitsObj = {
      name: res.data[key].name,
      path: res.data[key].path,
    };
    artist.push(artitsObj);
  }
  return artist;
}
export async function fecthMostView() {
  const res = await axios.get(BAREURL + '/mostview.json');

  const artist = [];
  for (const key in res.data) {
    const artitsObj = {
      name: res.data[key].name,
      path: res.data[key].path,
    };
    artist.push(artitsObj);
  }
  return artist;
}

export async function fetchRandom() {
  const res = await axios.get(BAREURL + '/random.json');

  const artist = [];
  for (const key in res.data) {
    const artitsObj = {
      name: res.data[key].name,
      path: res.data[key].path,
    };
    artist.push(artitsObj);
  }
  return artist;
}
export async function fetchAll() {
  const res = await axios.get(BAREURL + '/random.json');
  const res2 = await axios.get(BAREURL + '/mostview.json');
  const res3 = await axios.get(BAREURL + '/newpost.json');

  const artist = [];
  for (const key in res.data) {
    const artitsObj = {
      name: res.data[key].name,
      path: res.data[key].path,
    };
    artist.push(artitsObj);
  }
  for (const key in res2.data) {
    const artitsObj = {
      name: res2.data[key].name,
      path: res2.data[key].path,
    };
    artist.push(artitsObj);
  }
  for (const key in res3.data) {
    const artitsObj = {
      name: res3.data[key].name,
      path: res3.data[key].path,
    };
    artist.push(artitsObj);
  }

  return artist;
}
