# Mammon
Personal money manager

## How does it work
The concept is built around my usual monthly routine: generate 3 simple lists<*name, amount*> for every:
* bank **account** (used for calculating totals for a specific entry),
* **income**
* **expense**

The screen is split in two sections, with first showing the list of all entries, and the second the overview of the selected entry.

Fields can be updated by clicking on them (date of selected entry; name, amount of any list item).

When an entry doesn't have *account* data, it will calculate it's total by using the latest entry with *account* data.


### Project status
Currently there is just a starting UI logic to overview and update entries (*stuff in EntriesBox and EntryBox*), but let that not fool you, there's a lot of complexity under the hood. Beside the usual work of setting up the **node.js** / **React** environment (*npm, webpack with hot module replacement, build, jsdoc, mocha*), the project's structure, and code patterns are already put in place. Some of these features include a **Redux** store (implemented through **immutable.js**), with using **reselect** (memoized selectors).


### Installing

```git clone https://github.com/Asipu/Mammon.git```

```
cd Mammon
npm install
npm start
navigate to http://localhost:3000 in your non-IE browser of choice.
```

## Running the tests

```npm run test```

or for tests in background

```npm run test:watch```

## Generating documentation

```npm run doc```

The output is in **jsdoc** folder

## Deployment

```npm run build```

The output is in **dist** folder

## Authors

* **Juraj Bilic**

## License

This project is licensed under the MIT License
