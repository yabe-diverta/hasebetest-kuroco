import axios from 'axios'

export default function({ $axios }) {
  $axios.onRequest((config) => {
    config.headers['x-rcms-api-access-token'] = 'd0540ece81878a10880136e5a278777f3117a5d026dd0ae1622bd6215617cb38	'
    return config
  })
}