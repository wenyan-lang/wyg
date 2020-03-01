import { DEFAULT_REGISTRY_INDEX } from './meta'
import { RegistryIndex, Fetch } from './types'

let registryIndexCache: RegistryIndex | null = null

export async function getRegistryIndex (
  fetch: Fetch,
  registryIndex = DEFAULT_REGISTRY_INDEX,
  cache = true,
) {
  if (cache && registryIndexCache)
    return registryIndexCache

  const { data } = await fetch(registryIndex)

  registryIndexCache = data

  return data
}

export async function resolvePackageName (fetch: Fetch, packageName: string) {
  const index = await getRegistryIndex(fetch)
  // eslint-disable-next-line prefer-const
  let [name, version] = packageName.split('@', 2)

  if (index.alias[name])
    name = index.alias[name]

  if (index.packages[name]) {
    return {
      name,
      ...index.packages[name],
      version,
    }
  }

  throw new ReferenceError(`Package ${packageName} not found.`)
}
