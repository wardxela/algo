import { expectTypeOf, test } from 'vitest'

type FilterChildrenBy<T, E> = T extends E ? never : T;

test('Filtering The Children (part 1)', () => {
  type test_0_actual = FilterChildrenBy<
    'nice' | 'nice' | 'nice',
    'naughty'
  >;
  type test_0_expected = 'nice';
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>()

  type test_1_actual = FilterChildrenBy<
    'nice' | 'naughty' | 'naughty',
    'naughty'
  >;
  type test_1_expected = 'nice';
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>()

  type test_2_actual = FilterChildrenBy<
    string | number | (() => void),
    Function
  >;
  type test_2_expected = string | number;
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>()
})
