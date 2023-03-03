import axios from 'axios'


const API = axios.create({ baseURL: 'https://metateskback.azurewebsites.net' });
// const API = axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


// get user data 

const Api = {

  // getUser
  getUser: function () {
    return API.get('user');
  },

  // user signUp
  signUp: function (data) {
    return API.post(`/auth/Up`, data);
  },

  // user signIn
  signIn: function (data) {
    return API.post(`/auth/In`, data)
  },


  confirmation: function(data) {
    return axios.post('http://localhost:5000/auth/confirmation',data)
  },

  // stripe api
  stripe: function (data) {
    return API.post('/payment',data)
  }
}


export default Api