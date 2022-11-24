# React Component Library

## Introduction

Welcome to my React Component Library! I built this project based off of the Udemy Course, ["Advanced React for Enterprise: React for Senior Engineers" by Kati Franz][react for senior engineers]. I took this course because I wanted to learn how to better organize and scale projects with thousands of lines of code. This repo provides a better way to organize large repos by clearly seperating concerns. It is seperated into packages of React components, CSS, and foundation variables. Each file and folder has a clear purpose so that developers can easily extend the code and avoid creating tech debt.

This repo has a great developer experience. It is a monorepo that leverages `lerna` to allow a developer to run multiple coordinated sub repos with a single command. It supports auto reload so that changes can be made and immediately seen in the browser while developing. It uses `Typescript` so developers get autocomplete and see errors in the text editor. It has linters to standardize code quality. It also uses `commitizen` to standardize git commits. These tools allow for seamless dev environment setup and provides a clear path of how to work with existing code and commit new code.

This code repo implements a front end design system that has been published to NPM and can be used across projects. The NPM packages can be found here for [React Components][react npm package], [CSS][scss npm package], and [foundation][foundation package]. It also has a [Storybook UI][storybook] so that developers can visually see components and learn how to edit components with props.

## Getting Started

### Installation

To install this project into an existing React project run

```
yarn add @pterodactylpaultest/react @pterodactylpaultest/scss @pterodactylpaultest/foundation
```

### Importing Components

In your React Component import the component from the library and its corresponding stylesheet.

```
import { Select } from '@pterodactylpaultest/react';
import '@pterodactylpaultest/scss/lib/Select.css';
```

Now you're ready to use the component.

```
<Select options={[{ label: 'foo', value: 'bar' }, { label: 'wizz', value: 'bang' }]} />
```

[react for senior engineers]: https://www.udemy.com/course/react-for-senior-engineers/
[scss npm package]: https://www.npmjs.com/package/@pterodactylpaultest/scss
[react npm package]: https://www.npmjs.com/package/@pterodactylpaultest/react
[foundation package]: https://www.npmjs.com/package/@pterodactylpaultest/foundation
[storybook]: https://pterodactylpauldesign.netlify.app/
