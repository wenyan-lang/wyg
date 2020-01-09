import fs from 'fs'
import path from 'path'
import stringify from 'json-stable-stringify'
import { packages } from '../registry-packages'
import { RegistryIndex } from '../src/types'

function buildIndex () {
  const index: RegistryIndex = {
    packages: {},
    alias: {},
  }

  for (const pkg of packages) {
    if (index.packages[pkg.name])
      throw new Error(`Package name ${pkg.name} already exists`)
    if (index.alias[pkg.name])
      throw new Error(`Package name ${pkg.name} conflicted with existing alias`)

    index.packages[pkg.name] = pkg.repo

    for (const al of pkg.alias || []) {
      if (index.alias[al])
        throw new Error(`Alias ${al} already exists`)
      if (index.packages[al])
        throw new Error(`Alias ${al}  conflicted with existing package names`)

      index.alias[al] = pkg.name
    }
  }

  fs.writeFileSync(path.resolve(__dirname, '..', 'registry-index.json'), `${stringify(index, { space: 2 })}\n`, 'utf-8')
}

buildIndex()
