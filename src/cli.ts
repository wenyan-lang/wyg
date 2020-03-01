import commander from 'commander'
import consola from 'consola'
import axios from 'axios'
// @ts-ignore
import updateNotifier from 'update-notifier'
import pkg, { version } from '../package.json'
import { getRegistryIndex, resolvePackageName } from './registry'
import { getPackage } from './downloader'

updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60 * 60 * 24 * 7, // 7 days
}).notify()

const program = new commander.Command()

async function handleInstall (packages: string[], cmd: any) {
  try {
    const resolvedPackages = []

    for (const pkg of packages) {
      const { name, repo, dependencies } = await resolvePackageName(axios.get, pkg)
      if (dependencies && Object.keys(dependencies).length) {
        consola.info(`Installing dependencies of ${name}...`)
        await handleInstall(Object.entries(dependencies).map(([n, v]) => `${n}@${v}`), cmd)
      }
      consola.info(`Installing ${name}...`)
      await getPackage(name, repo)
      resolvedPackages.push(name)
    }

    const is = resolvedPackages.length > 1 ? 'are' : 'is'
    consola.success(`${resolvedPackages.join(', ')} ${is} successfully installed.`)
  }
  catch (e) {
    consola.error(e)
    process.exit(1)
  }
}

program
  .version(version)
  .name('wyg')

program
  .command('install [names...]')
  .description('install one or more packages')
  .action(handleInstall)

program
  .command('i [names...]')
  .description('shorthand for install')
  .action(handleInstall)

program
  .command('list')
  .description('list all available packages')
  .action(async () => {
    const data = await getRegistryIndex(axios.get)
    consola.log(data)
  })

program.parse(process.argv)
