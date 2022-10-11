import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: '/user/getUserInfo',
    method: 'get',
  })
}

export function addUser() {
  return request({
    url: '/user/addUser',
    method: 'post',
    data: {
      name: 'aa',
    },
  })
}
