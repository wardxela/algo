import { expectTypeOf, test } from "vitest";

// Answer
type SantasFavoriteCookies = "ginger-bread" | "chocolate-chip";

// Test
test("Christmas Cookies", () => {
	type test_0_expected = "ginger-bread" | "chocolate-chip";
	expectTypeOf<test_0_expected>().toEqualTypeOf<SantasFavoriteCookies>();
});
