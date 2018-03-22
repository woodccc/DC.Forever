import axios from 'axios'
import env from '@/../config/prod.env'

import { showFullScreenLoading, tryHideFullScreenLoading, notificationForError } from './axiosInitHelper'

const URL_PREFIX = env.URL_PREFIX

// 创建axios实例
const $ = axios.create({
  baseURL: URL_PREFIX,
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
  timeout: 15000
})

// 请求拦截器
$.interceptors.request.use((config) => {
  if (config.showLoading) {
    showFullScreenLoading()
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
$.interceptors.response.use((response) => {
  if (response.config.showLoading) {
    tryHideFullScreenLoading()
  }
  return response
}, (error) => {
  tryHideFullScreenLoading()
  debugger
  notificationForError(error)
  return Promise.reject(error)
})

export default {
  get: (url, config = { showLoading: true }) => $.get(url, config),
  put: (url, data, config = { showLoading: true }) => $.put(url, data, config),
  post: (url, data, config = { showLoading: true }) => $.post(url, data, config),
  delete: (url, data, config = { showLoading: true }) => $.delete(url, data, config)
}
