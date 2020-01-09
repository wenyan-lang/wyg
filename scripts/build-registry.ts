import fs from 'fs'
import path from 'path'
import stringify from 'json-stable-stringify'
import { packages } from '../registry-packages'
import { RegistryIndex } from '../src/types'

export function BuildIndex (writeToFile = true) {
  const index: RegistryIndex = {
    packages: {},
    alias: {},
  }

  for (const pkg of packages) {
    if (index.packages[pkg.name])
      throw new Error(`Package name ${pkg.name} already exists`)
    if (index.alias[pkg.name])
      throw new Error(`Package name ${pkg.name} conflicted with existing aliases`)

    index.packages[pkg.name] = pkg.repo

    if ((pkg.aliases || []).length > 5)
      throw new Error('Up to 5 aliases is allowed for a package')

    for (const alias of pkg.aliases || []) {
      if (index.alias[alias])
        throw new Error(`Alias ${alias} already exists`)
      if (index.packages[alias])
        throw new Error(`Alias ${alias} conflicted with existing package names`)

      index.alias[alias] = pkg.name
    }
  }

  if (writeToFile)
    fs.writeFileSync(path.resolve(__dirname, '..', 'registry-index.json'), `${stringify(index, { space: 2 })}\n`, 'utf-8')
  return index
}

if (require.main === module)
  BuildIndex()
