import { request } from './axios'
const articleUrl = '/api/v1/search?query=react'

export const getHitsApi = ( params={}) => {
    return request('get', articleUrl, params)
}
