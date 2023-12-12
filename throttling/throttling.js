export default function throttle(func, delay) {
  let timerId = null;

  return function () {
    const context = this;
    const args = arguments;

    if (!timerId) {
      timerId = setTimeout(() => {
        func.apply(context, args);
        timerId = null;
      }, delay);
    }
  };
}
