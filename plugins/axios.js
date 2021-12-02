import axios from 'axios'

export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.headers['x-rcms-api-access-token'] = process.env.STATIC_ACCESS_TOKEN
    return config
  })
}
