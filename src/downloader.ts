import fs from 'fs-extra'
import { WENYAN_MODULES_DIRNAME } from './meta'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const download = require('download-git-repo')

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
