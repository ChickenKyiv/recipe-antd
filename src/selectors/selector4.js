/* This API wrapper is useful because it:
   1. Centralizes our Axios default configuration.
   2. Abstracts away the logic for determining the baseURL.
   3. Provides a clear, easily consumable list of JavaScript functions
      for interacting with the API. This keeps API calls short and consistent.
*/
import axios from 'axios';

import { API_ROOT } from './api-config'

let api = null;

function getInitializedApi() {
  if (api) return api; // return initialized api if already initialized.

  return (api = axios.create({
    baseURL: getBaseUrl(),
    responseType: 'json',
    withCredentials: true
  }));
}

// Helper functions
function getBaseUrl() {
  // Insert logic here to get the baseURL by either:
  // 1. Sniffing the URL to determine the environment we're running in.
  // 2. Looking for an environment variable as part of the build process.

  // 3. as we move it into separated place we can just
  // return API_ROOT;
}

function get( url ) {
  return getInitializedApi().get(url);
}

function post( url, data ) {
  return getInitializedApi().post(url, data);
}

// Public functions
// Note how short these are due to the centralized config and helpers above. 😎
// Here we will 


export function getUserById( id ) {
  return get(`user/${id}`);
}

export function saveUser(user) {
  return post(`user/${user.id}`, { user: user });
}
