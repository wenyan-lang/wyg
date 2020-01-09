import { resolveRepoLink } from '../src/resolve'

const r = resolveRepoLink

describe('resolve', () => {
  it('repo links', () => {
    expect(r('antfu/ziyue-wy'))
      .toEqual({
        checkout: 'master',
        type: 'github',
        origin: 'github.com',
        owner: 'antfu',
        name: 'ziyue-wy',
      })
  })
})
