import { expectTypeOf, test } from "vitest";

type SantasList<A extends readonly any[], B extends readonly any[]> = [
  ...A,
  ...B,
];

test("Organize Santa's List", () => {
  const bads = ["tommy", "trash"] as const;
  const goods = ["bash", "tru"] as const;

  type test_0_actual = SantasList<typeof bads, typeof goods>;
  type test_0_expected = ["tommy", "trash", "bash", "tru"];
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual = SantasList<[], []>;
  type test_1_expected = [];
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual = SantasList<[], ["trash"]>;
  type test_2_expected = ["trash"];
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type test_3_actual = SantasList<["john"], ["ashley", "elliot", "ziltoid"]>;
  type test_3_expected = ["john", "ashley", "elliot", "ziltoid"];
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();

  type test_4_actual = SantasList<
    ["1", 2, "3"],
    [false, boolean, "4", ["nested"]]
  >;
  type test_4_expected = ["1", 2, "3", false, boolean, "4", ["nested"]];
  expectTypeOf<test_4_actual>().toEqualTypeOf<test_4_expected>();

  // @ts-expect-error
  type error_0 = SantasList<null, undefined>;
});
