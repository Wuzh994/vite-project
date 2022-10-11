import { resultError, resultSuccess } from '../util'

const userInfo = {
  name: 'Wuzh994',
  userId: '001',
  email: 'demo@xxx.com',
  country: 'China',
  address: 'Xiamen City 77',
  phone: '123****8910',
}

export default [
  {
    url: '/dev-api/user/getUserInfo',
    method: 'get',
    response: () => {
      return resultSuccess(userInfo, {})
    },
  },
  {
    url: '/dev-api/user/addUser',
    method: 'post',
    response: ({ body }) => {
      console.log(body)
      return resultError({ code: 403 }, '403 Forbidden')
    },
  },
]
