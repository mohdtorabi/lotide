# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mohdtorabi/lotide`

**Require it:**

`const _ = require('@mohdtorabi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: "return first item of the array" 
* `tail(...)`: "return the last item of the array"
* `middle(...)`: "return the middle item of the array"
* `assertEqual(...)`: " returning if the passed or fail based on the fact that actual is equal or not equal to the expected output"
* `assertArraysEqual(...)`:"returning if the passed or fail based on the fact that actual array is equal or not equal to the expected array output"