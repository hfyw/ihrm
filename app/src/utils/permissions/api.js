import api from '../http'
//获取员工信息
export const getSole = (params) => api.get('api/sys/user', { params })
