import commander from 'commander'
import consola from 'consola'
import { version } from '../package.json'
import { getRegistryIndex, getPackage, resolvePackageName } from './registry'

const program = new commander.Command()

async function handleInstall (packages: string[], cmd: any) {
  try {
    const resolvedPackages = []

    for (const pkg of packages) {
      const [name, repo] = await resolvePackageName(pkg)
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
  .name('wypm')

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
    const data = await getRegistryIndex()
    consola.log(data)
  })

program.parse(process.argv)