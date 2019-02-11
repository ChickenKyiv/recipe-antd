

// this version are similar to the version below, buuuut.
// we will completely rely on env variables. without env variables everything looks so
// complex. So without ENV it wouldn't work fine. keep it in mind.

// if(  )
const {
  REACT_APP_FRONTEND_NETLIFY,
  REACT_APP_FRONTEND_STAGING,
  REACT_APP_TESTING_VERSION,

  BACKEND_SERVER_PRODUCTION,
  BACKEND_SERVER_STAGING,
  BACKEND_SERVER_LOCAL
} = process.env;

let backendHost;
// const apiVersion = 'v1'; // if api have versions, you can use it too. We don't have it, so we don't need it

if( REACT_APP_FRONTEND_NETLIFY ){
  backendHost = 'https://recipe-api-loopback.herokuapp.com/'; // replace with config variables
}

if( REACT_APP_FRONTEND_STAGING ) {
  backendHost = 'https://staging.api.realsite.com';
}



if( REACT_APP_TESTING_VERSION ){
    backendHost = `https://api.${hostname}`;
}

// else or it can be default for switch, etc...

if( false ){
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';
}

export const API_ROOT = `${backendHost}`;

//-----------------------------------------------
//-----------------------------------------------

// @todo let's keep that version in someplace. maybe later we'll use a different versions of API
let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'groceristar.netlify.com') {
  backendHost = 'https://recipe-api-loopback.herokuapp.com/';
} else if(hostname === 'staging.realsite.com') {
  backendHost = 'https://staging.api.realsite.com';

} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;

} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';

}

export const API_ROOT = `${backendHost}`;
