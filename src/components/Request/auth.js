import axios from 'axios';
import React from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]';
const API_KEY = 'AIzaSyBj-nJDv_7ZhWSea2lVRWF3_Jwt4opF2tA';

export async function signIn(email, password) {
  const res = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
  const token = res.data.refreshToken;
  await AsyncStorage.setItem('token', token);
  if (res) {
    return res;
  }
}

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBj-nJDv_7ZhWSea2lVRWF3_Jwt4opF2tA',
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );

  if (response) {
    return response;
  }
}
