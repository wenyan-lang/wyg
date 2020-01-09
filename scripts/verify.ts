import { BuildIndex } from './build-registry'

function Verify () {
  BuildIndex(false)
}

if (require.main === module)
  Verify()
