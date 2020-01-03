import axios from 'axios'
import qs from 'qs'

const http = ({method = 'get', url, data, json = true}) => {
  return new Promise((resolve, reject) => {
    let config = {
      baseURL: '', //基础路径
      // headers: {'X-Requested-With': 'XMLHttpRequest'},
      timeout: 2500, //超时时间
      withCredentials: true, // 携带凭证
      url,
      method,
    }
    if(json) {
      config.data = data
    }else {
      config.params = qs.stringify(data)
    }

    // switch(method.toLowerCase()) {
    //   case 'get': 
    //   case 'delete':
    //     config.params = qs.stringify(data)
    //     break
    //   case 'post':
    //   case 'put':
    //     config.data = data
    //     break
    // }

    axios(config).then(res => {
      if(res.data.code === 0) {
        resolve(res.data)
      }else {
        reject(res.data)
      }
    })
  })
}

export default http