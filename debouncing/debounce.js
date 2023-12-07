export default function debounce(callback, delay) {
  // initializing timerId variable
  let timerId = null;

  // args === parameters passed into debounced function => 'function(...params)'
  return function (...args) {
    // capturing value of 'this' from the outer scope
    let context = this;

    // clearing any previous timers, if present
    if (timerId) {
      clearTimeout(timerId);
    }

    // handling 'callback' asynchronously using 'setTimeout()'
    timerId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}
