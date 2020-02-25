import PageRepository from './PageRepository'

const repositories = {
  page: PageRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
