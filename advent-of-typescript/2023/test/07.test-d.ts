import { expectTypeOf, test } from 'vitest'

type AppendGood<T> = {
  [K in keyof T as K extends string ? `good_${K}` : K]: T[K]
};

test('Filtering The Children (part 2)', () => {
  type WellBehavedList = {
    tom: { address: '1 candy cane lane' };
    timmy: { address: '43 chocolate dr' };
    trash: { address: '637 starlight way' };
    candace: { address: '12 aurora' };
  };
  type test_wellBehaved_actual = AppendGood<WellBehavedList>;
  type test_wellBehaved_expected = {
    good_tom: { address: '1 candy cane lane' };
    good_timmy: { address: '43 chocolate dr' };
    good_trash: { address: '637 starlight way' };
    good_candace: { address: '12 aurora' };
  };
  expectTypeOf<test_wellBehaved_actual>().toEqualTypeOf<test_wellBehaved_expected>()

  type Unrelated = {
    dont: 'cheat';
    play: 'fair';
  };
  type test_Unrelated_actual = AppendGood<Unrelated>;
  type test_Unrelated_expected = {
    good_dont: 'cheat';
    good_play: 'fair';
  };
  expectTypeOf<test_Unrelated_actual>().toEqualTypeOf<test_Unrelated_expected>()
})
