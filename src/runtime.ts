import { resolvePackageName, getRegistryIndex } from './registry'
import { RegistryIndex } from './types'
import { resolveRepoLink, getRepoRoot, getRepoRawRoot } from './resolve'

const get = (url: string) => window.fetch(url)
  .then(r => r.json())
  .then(i => ({ data: i as RegistryIndex }))

export const getIndex = () => {
  return getRegistryIndex(
    get,
  )
}

export const list = async () => {
  const index = await getRegistryIndex(get)

  return Object.entries(index.packages).map(([name, value]) => ({ ...value, name }))
}

export const resolve = (name: string) => {
  return resolvePackageName(
    get,
    name,
  )
}

export { resolveRepoLink, getRepoRoot, getRepoRawRoot }
