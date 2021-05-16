# Take-home test

I made the following assumptions, based on the material provided.

As there wasn't any depicted initial state, none of the selectors are active on first load. Then, the sliding component will be rendered once first clicked for each switch. Logically, it wouldn't make sense for the options to be loaded so that all of the correct answers are on the left/right (it would be too easy), so these are positions are randomly determined and vary between sessions. I also assume there would be a maximum of 4 different options from the material. I also assume structure of the questions, as an object with an numerical id, question as a string, and then an array of options, each option being its own array containing the label and whether it is true or false. Finally, when the window is lower than 895px wide, the component stretches to fill the width of the page.

This is also my first attempt at typechecking with TypeScript. As such, I was able to understand its current popularity, in the intellisense and early error catching which likely saved a lot of headache towards the end of the task.

While not explicitly requested, I have been learning more about TTD and Jest, so implemented a few simple unit tests located in the `__tests__` directory. Further, to demonstrate reusablility, there is a selector for different questions, and the subsequent appearance based on the different number of options.

## Available Scripts

To start...

### `yarn start` or `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.\
