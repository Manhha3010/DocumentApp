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
export async function fetchNewPdf() {
  const res = await axios.get(BAREURL + '/newpdf.json');

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
