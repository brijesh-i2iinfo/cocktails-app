/* eslint-disable prettier/prettier */
import api from './index';

const getProduct = () => api.get('/users');

export {getProduct};
