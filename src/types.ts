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
