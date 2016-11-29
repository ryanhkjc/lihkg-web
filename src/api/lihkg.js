import axios from 'axios'

export default {
  fetchCategories () {
    return axios.get('https://lihkg.com/api/system/property')
  },
  fetchThreadList (catID, page, count) {
    let type
    switch (catID) {
      case '1':
        type = 'latest'
        break
      case '2':
        type = 'hot'
        break
      case '3':
        type = 'news'
        break
      default:
        type = 'category'
    }
    return axios.get(`https://lihkg.com/api/thread/${type}`, {
      params: {
        cat_id: catID,
        page,
        count
      }
    })
  },
  fetchThread (threadID, page) {
    return axios.get(`https://lihkg.com/api/thread/${threadID}/page/${page}`)
  }
}