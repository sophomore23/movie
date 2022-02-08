import axios from 'axios'

const getApiURL = (searchValue) => {
    return axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=3f607a82`)
};

  
export { getApiURL}