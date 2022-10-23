import { mock } from 'mockjs'
import request from '@/utils/request'

export function getUserList() {
  return request({
    url: '/user/getuserList',
    method: 'get',
  })
}

// mock
const userInfo = mock({
  name: '@cname',
  state: '@integer(0,1)',
  city: '@county(true)',
})

export function addUser() {
  return request({
    url: '/user/addUser',
    method: 'post',
    data: userInfo,
  })
}
