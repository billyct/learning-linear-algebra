/**
 * Created by billyct on 2016/10/10.
 * Debounce
 */

export default (fn, delay) => {
  let timer = null;

  return () => {
    const context = this;
    const args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
};