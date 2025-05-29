import { StateSchema } from 'app/providers/StoreProvider';
import { counterReducer, counterActions } from './counterSlice'
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  it('increment', () => {
    const state: CounterSchema = {
      value: 10
    }

    const result = counterReducer(state, counterActions.increment());

    expect(result).toEqual({ value: 11 });
  })

  it('decrement', () => {
    const state: CounterSchema = {
      value: 10
    }

    const result = counterReducer(state, counterActions.decrement());

    expect(result).toEqual({ value: 9 });
  })


  it('should work with an empty state', () => {

    const result = counterReducer(undefined, counterActions.decrement());

    expect(result).toEqual({ value: -1 });
  })
})