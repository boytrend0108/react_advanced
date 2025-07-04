import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  it('should return a counter value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  })
})