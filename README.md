# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by an incorrect dependency array in the `useEffect` hook.

## Bug Description
The `MyComponent` component uses `useState` to manage a count.  The `useEffect` hook attempts to increment the count on every render.  Because `count` is included in the dependency array, the component re-renders endlessly, resulting in a browser crash.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the browser console and the component behavior.

## Solution
The solution involves correctly managing the dependencies within the `useEffect` hook.  The solution eliminates the infinite loop and demonstrates proper use of `useEffect` dependencies.