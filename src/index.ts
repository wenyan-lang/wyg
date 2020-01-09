import commander from 'commander'
import consola from 'consola'
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

    consola.success(`${resolvedPackages.join(', ')} successfully installed.`)
  }
  catch (e) {
    consola.error(e)
    process.exit(1)
  }
}

program
  .command('install [packages...]')
  .description('install one or more packages')
  .action(handleInstall)

program
  .command('i [packages...]')
  .description('install one or more packages')
  .action(handleInstall)

program
  .command('list')
  .description('list all available packages')
  .action(async () => {
    const data = await getRegistryIndex()
    consola.log(data)
  })

program.parse(process.argv)
