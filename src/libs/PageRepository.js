import Repository from './Repository'
export default {
  checkLink (link) {
    return Repository.post('/check', link)
  },
  getData () {
    return Repository.get('/getData')
  },
  filter () {
    return Repository.get('/filter')
  }
}
