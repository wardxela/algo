import { expectTypeOf, test } from "vitest";

// I guess it's unstable. Consider to add more tests or at least check for battle prove solution
type SantaListProtector<T> = T extends object
	? T extends Function
		? T
		: {
				readonly [K in keyof T]: SantaListProtector<T[K]>;
			}
	: T;

test("Protect the List", () => {
	type test_0_actual = SantaListProtector<{
		hacksore: () => "naughty";
		trash: string;
		elliot: {
			penny: boolean;
			candace: {
				address: {
					street: {
						name: "candy cane way";
						num: number;
					};
					k: "hello";
				};
				children: [
					"harry",
					{
						saying: ["hey"];
					},
				];
			};
		};
	}>;
	type test_0_expected = {
		readonly hacksore: () => "naughty";
		readonly trash: string;
		readonly elliot: {
			readonly penny: boolean;
			readonly candace: {
				readonly address: {
					readonly street: {
						readonly name: "candy cane way";
						readonly num: number;
					};
					readonly k: "hello";
				};
				readonly children: readonly [
					"harry",
					{
						readonly saying: readonly ["hey"];
					},
				];
			};
		};
	};
	expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

	type test_1_actual = SantaListProtector<{
		theo: () => "naughty";
		prime: string;
		netflix: {
			isChill: boolean;
		};
	}>;
	type test_1_expected = {
		readonly theo: () => "naughty";
		readonly prime: string;
		readonly netflix: {
			readonly isChill: boolean;
		};
	};
	expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();
});
