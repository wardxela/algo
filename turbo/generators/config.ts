import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper(
    "problemPath",
    (root: string, year: number, day: number, title: string) => {
      const finalDay = day < 10 ? `0${day}` : day.toString();
      return `${root}/apps/advent-of-code/src/${year}/${finalDay}-${plop.getHelper("dashCase")(title)}`;
    },
  );

  plop.setGenerator("problem", {
    description: "Create a new code problem with",
    prompts: [
      {
        type: "number",
        name: "year",
        message: "What is the year of the event?",
      },
      {
        type: "number",
        name: "day",
        message: "What is the day of the event?",
        validate: (input: number) => {
          if (input < 1 || input > 25) {
            return "day must be between 1 and 25";
          }
          return true;
        },
      },
      {
        type: "string",
        name: "title",
        message: "What is the title of the problem?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ problemPath turbo.paths.root year day title }}/a.ts",
        templateFile: "templates/problem/solution.hbs",
      },
      {
        type: "add",
        path: "{{ problemPath turbo.paths.root year day title }}/a.test.ts",
        templateFile: "templates/problem/a.test.hbs",
      },
      {
        type: "add",
        path: "{{ problemPath turbo.paths.root year day title }}/b.ts",
        templateFile: "templates/problem/solution.hbs",
      },
      {
        type: "add",
        path: "{{ problemPath turbo.paths.root year day title }}/b.test.ts",
        templateFile: "templates/problem/b.test.hbs",
      },
      {
        type: "add",
        path: "{{ problemPath turbo.paths.root year day title }}/input-easy.txt",
        templateFile: "templates/problem/input-easy.hbs",
      },
      {
        type: "add",
        path: "{{ problemPath turbo.paths.root year day title }}/input-hard.txt",
        templateFile: "templates/problem/input-hard.hbs",
      },
    ],
  });
}
