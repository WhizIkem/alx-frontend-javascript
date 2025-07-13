# TypeScript
This repository contains solutions to the TypeScript project tasks, focusing on fundamental to advanced TypeScript concepts. Each task demonstrates specific features and best practices in TypeScript development.

## Learning Objectives
By completing this project, I aim to understand and be able to explain:

**Basic types in TypeScript**

**Interfaces, Classes, and functions**

**How to work with the DOM and TypeScript**

**Generic types**

**How to use namespaces**

**How to merge declarations**

**How to use an ambient Namespace to import an external library**

**Basic nominal typing with TypeScript**

## Project Structure
Each task is organized into its own dedicated directory (e.g., task_0, task_1, etc.).

task_X/: Contains the solution for a specific task.

js/: Directory for TypeScript source files (.ts).

package.json: Project dependencies and scripts.

tsconfig.json: TypeScript compiler options.

webpack.config.js: Webpack configuration for bundling (where applicable).

.eslintrc.js: ESLint configuration (where applicable).

index.html: A simple HTML file to view browser-based task outputs (where applicable).

## Setup and Installation
To run any of the tasks locally, navigate into the respective task directory (cd 0x04-TypeScript/task_X/) and follow these steps:

Install dependencies:

<npm install>

Build the project:

<npm run build>

(This will compile TypeScript to JavaScript and bundle it using Webpack, creating a dist folder)

Start the development server:

<npm run start-dev>

Then open your browser to http://localhost:8080

## Tasks Overview
Task 0: Creating an interface for a student

Focus: Basic interfaces, arrays, and DOM manipulation with TypeScript.

Task 1: Let's build a Teacher interface

Focus: Interfaces with optional properties, readonly properties, and index signatures.

Task 2: Extending the Teacher class

Focus: Interface extension.

Task 3: Printing teachers

Focus: Function interfaces and implementation.

Task 4: Writing a class

Focus: Class definition, methods, and interface implementation for classes.

Task 5: Advanced types Part 1

Focus: Interface implementation with classes, union types, and type guards.

Task 6: Creating functions specific to employees

Focus: Type predicates and conditional type execution.

Task 7: String literal types

Focus: String literal types and conditional return values.

Task 8: Ambient Namespaces

Focus: Type aliases, interfaces, ambient declarations (.d.ts), triple-slash directives, and importing external modules.

Task 9: Namespace & Declaration merging

Focus: Namespaces, declaration merging, class extension, and conditional logic within methods.

Task 10: Update task_4/js/main.ts

Focus: Demonstrating usage of classes and interfaces defined in Task 9.

Task 11: Brand convention & Nominal typing

Focus: Nominal typing using brand properties and type-safe sum functions.