import { formatTemperature } from './stringHelper';

describe('stringHelper', () => {
  it('should format temperature to round off value', () => {
    expect(formatTemperature(11.7)).toEqual('12');
  });
});
