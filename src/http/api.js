import http from './axios.js'

export const api_name = (data) => http({method: 'get', url: 'xxx', data, json: false})