import { classNames } from './classnames';

describe('classnames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with two params', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe('someClass class1 class2')
  })

  test('with three params', () => {
    expect(classNames('someClass', { drugable: true, disabled: false }, ['class1', 'class2']))
      .toBe('someClass drugable class1 class2')
  })
})