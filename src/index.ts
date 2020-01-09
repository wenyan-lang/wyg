import commander from 'commander'
import consola from 'consola'

const program = new commander.Command()

program
  .version('0.1.0')
  .command('install [packages...]')
  .description('install one or more packages')
  .action((packages, cmd) => {
    consola.info('Installing packages', `${packages.join(', ')}...`)
    consola.warn('NOT IMPLEMENTED')
  })

program.parse(process.argv)
