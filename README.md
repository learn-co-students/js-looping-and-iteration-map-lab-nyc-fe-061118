# Map Lab

## Problem Statement

The `map` method is one of the core iterator methods in JavaScript. It's a
powerful tool for creating a new collection from an another collection whose
members have undergone the change you pass in as an argument.

## Objectives

1. Use `map` to work with `String`s as well as `Object`s
2. Use `map` to perform a set of `String`  transformations
3. Use `map` transform a collection of `Object`s

## Use `map` to work with `String`s as well as `Object`s

This lab contains an array of drivers with various information. We need to
write methods using the `map` method so that Scuber employees can easily change
the data into the format their various business rules require. Be sure to run
the tests to get a feel for the types of problems this lab is asking you to
solve _before_ you start writing JavaScript code.

## Use `map` to perform a set of `String`  transformations

Write `lowerCaseDrivers` - this function takes an array of drivers, and returns an array of the drivers names in lowercase.
Write `nameToAttributes` - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with `firstName` and `lastName` attributes.

## Use `map` transform a collection of `Object`s

Write `attributesToPhrase` - this function takes an array of drivers as JavaScript objects and returns a string saying `"<NAME OF DRIVER> is from <HOMETOWN>"` for each JavaScript object in the array. Note that between the `<` and `>` we are looking for the value stored in the `name` and `hometown` object attributes, not the strings `"DRIVER"` or `"HOMETOWN"`.

## Conclusion

While its simple "changing to collect" of each element in a collection is
conceptually simple, the power of transforming a collection succinctly means
less to type, less to read, and less to get lost in.

Seeing a series of `map` functions chained together tells readers of the code
your intention in a beautifully expressive way.

Further, that `map` returns an `Array` means that you can apply `filter` or
`reduce` immediately after e.g.

```js
students.map( s => !!s.permissionSlip && s.isVegetarian) // Find vegetarians w/ permission slips on file
  .map( s => s.preferredMeal ). // Extract the meal name
  .filter( s => s.match(/curry/i). // Find those who like curry, case-insensitive
  .length;

// => "How many students going on the field trip should we order curry for?"
```

means you can write terse code that loses little expressivity.

## Resources

- [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-looping-and-iteration-map-lab'>Map Lab</a> on Learn.co and start learning to code for free.</p>
