export interface RegistryIndex {
  packages: Record<string, string>
  alias: Record<string, string>
}

export interface RepoInfo {
  url?: string
  type: 'github' | 'gitlab' | 'bitbucket'
  checkout: string
  name: string
  owner: string
  origin?: string
}

export type Registry = PackageInfo[]

export interface PackageInfo {
  name: string
  aliases?: string[]
  repo: string
  author?: string
  description?: string
}
