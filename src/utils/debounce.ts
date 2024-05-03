// utils/debounce.ts
function debounce<F extends (...args: unknown[]) => unknown>(
  func: F,
  wait: number,
  immediate: boolean = false
): (...args: Parameters<F>) => ReturnType<F> | void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
}

export default debounce;
