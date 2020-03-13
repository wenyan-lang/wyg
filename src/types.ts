export interface RegistryIndex {
  packages: Record<string, {
    repo: string
    entry: string
    description?: string
    author?: string
    dependencies?: Record<string, string>
    examples?: string[]
  }>
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

export type Fetch = ((url: string) => Promise<{data: RegistryIndex}>)
