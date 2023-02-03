import { createPromptModule } from "inquirer";

createPromptModule([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a primeira nota?",
    },
    {
      name: "p3",
      message: "Qual a primeira nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((err) => console.log(err));
