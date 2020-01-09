import { resolveProjectLink } from '../src/resolve'

describe('resolve', () => {
  it('project links', () => {
    expect(resolveProjectLink('antfu/ziyue.wy')).toBe('https://github.com/antfu/ziyue.wy/blob/master')
  })
})
