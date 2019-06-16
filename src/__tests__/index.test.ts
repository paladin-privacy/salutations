import { generate } from '../generate';
import { Gender } from '../models';

let random = 0;

jest.mock(
  '../random',
  () => ({
    __esModule: true,
    randomNumber: (max: number) => random
  })
);

const name = 'Rick';

test('verify results for noblemen', () => {
  random = 0;
  expect(generate({ noble: true, gender: Gender.MALE, name }))
    .toEqual('derp');
});
