import { expectTypeOf, test } from "vitest";

type _IncDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
type Digit = _IncDigit[number];

type _Inc<T extends string> = T extends `${infer F}${Digit}`
  ? T extends `${F}${infer L extends Digit}`
    ? `${L extends 9 ? _Inc<F> : F}${_IncDigit[L]}`
    : never
  : 1;

type Increment<T extends number> = number extends T
  ? number
  : `${T}` extends `${string}${"." | "+" | "-" | "e"}${string}`
    ? number
    : _Inc<`${T}`> extends `${infer N extends number}`
      ? N
      : never;

type DayCounter<S extends number, E extends number> = S extends E
  ? S
  : S | DayCounter<Increment<S>, E>;

test("Count the Days", () => {
  type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  type test_0_actual = DayCounter<1, 12>;
  type test_0_expected = TwelveDaysOfChristmas;
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type DaysUntilChristmas =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25;
  type test_1_actual = DayCounter<1, 25>;
  type test_1_expected = DaysUntilChristmas;
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();
});
