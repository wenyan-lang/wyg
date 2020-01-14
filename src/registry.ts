import axios from 'axios'
import fs from 'fs-extra'
import { DEFAULT_REGISTRY_INDEX, WENYAN_MODULES_DIRNAME } from './meta'
import { RegistryIndex } from './types'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const download = require('download-git-repo')

let registryIndexCache: RegistryIndex | null = null

export async function getRegistryIndex (registryIndex = DEFAULT_REGISTRY_INDEX, cache = true) {
  if (cache && registryIndexCache)
    return registryIndexCache

  const { data } = await axios.get<RegistryIndex>(registryIndex)

  registryIndexCache = data

  return data
}

export async function resolvePackageName (packageName: string) {
  const index = await getRegistryIndex()
  let name = packageName

  if (index.alias[name])
    name = index.alias[name]

  if (index.packages[name])
    return [name, index.packages[name]] as const

  throw new ReferenceError(`Package ${packageName} not found.`)
}

export async function getPackage (name: string, repo: string) {
  const target = `${WENYAN_MODULES_DIRNAME}/${name}`
  fs.remove(target)
  return new Promise((resolve, reject) => {
    download(repo, target, (err?: Error) => {
      if (err)
        reject(err)
      else
        resolve()
    })
  })
}
