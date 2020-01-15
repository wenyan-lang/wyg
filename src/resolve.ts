import { RepoInfo } from './types'

export function resolveRepoLink (repoLink: string): RepoInfo {
  const regex = /^(?:(github|gitlab|bitbucket):)?(?:(.+):)?([^/]+)\/([^#]+)(?:#(.+))?$/
  const match = regex.exec(repoLink)

  if (!match)
    throw new SyntaxError('invalid repo link')

  const type = match[1] || 'github'
  let origin = match[2] || null
  const owner = match[3]
  const name = match[4]
  const checkout = match[5] || 'master'

  if (type !== 'github' && type !== 'gitlab' && type !== 'bitbucket')
    throw new SyntaxError(`Unsupported repo type ${type}`)

  if (origin == null) {
    if (type === 'github')
      origin = 'github.com'

    else if (type === 'gitlab')
      origin = 'gitlab.com'

    else if (type === 'bitbucket')
      origin = 'bitbucket.org'
  }

  return {
    type,
    origin: origin || undefined,
    owner,
    name,
    checkout,
  }
}

export function getRepoRawRoot (repo: RepoInfo | string) {
  if (typeof repo === 'string')
    repo = resolveRepoLink(repo)
  if (repo.type === 'github')
    return `https://raw.githubusercontent.com/${repo.owner}/${repo.name}/${repo.checkout}`
  if (repo.type === 'gitlab')
    return `https://${repo.origin}/${repo.owner}/${repo.name}/raw/${repo.checkout}`
  if (repo.type === 'bitbucket')
    return `https://${repo.origin}/${repo.owner}/${repo.name}/raw/${repo.checkout}`
  throw new SyntaxError(`Resolving raw root for ${repo.type} is not yet supported.`)
}

export function getRepoRoot (repo: RepoInfo | string) {
  if (typeof repo === 'string')
    repo = resolveRepoLink(repo)
  if (repo.type === 'github')
    return `https://github.com/${repo.owner}/${repo.name}/tree/${repo.checkout}`
  if (repo.type === 'gitlab')
    return `https://${repo.origin}/${repo.owner}/${repo.name}/tree/${repo.checkout}`
  if (repo.type === 'bitbucket')
    return `https://${repo.origin}/${repo.owner}/${repo.name}/src/${repo.checkout}`
  throw new SyntaxError(`Resolving root for ${repo.type} is not yet supported.`)
}
