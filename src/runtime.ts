import { resolvePackageName } from './registry'

export const resolve = (name: string) => {
  return resolvePackageName(
    (url: string) => window.fetch(url).then(r => ({ data: r.json() })) as any,
    name,
  )
}
