# React Native: Handling Null or Undefined Object Properties

This repository demonstrates a common but sometimes elusive error in React Native: attempting to access a property of a null or undefined object.  The error message can be vague, making debugging challenging.  This example shows the problem and a robust solution using optional chaining and nullish coalescing.

## Problem

When working with asynchronous data fetching, you might try to access object properties before the data has loaded. This leads to a runtime error because you're attempting to access a property from a `null` or `undefined` object. 

## Solution

The best approach involves using optional chaining (`?.`) and the nullish coalescing operator (`??`).  Optional chaining safely accesses properties only if the preceding object exists; nullish coalescing provides a default value if the property is null or undefined.

## How to Run

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to start the app.