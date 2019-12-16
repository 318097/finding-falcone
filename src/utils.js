const getToken = () => sessionStorage.getItem('falconeToken');

const setToken = token => sessionStorage.setItem('falconeToken', token);

const extractNames = input => Object.values(input).map(data => data.name);

export {
  getToken,
  setToken,
  extractNames,
};