import { useEffect, useState } from 'react';

// useDebounce is a custom hook that delays updating a value until after a specified delay.
// The generic type <T> allows this hook to handle debouncing of any type of value.
export function useDebounce<T>(value: T, delay: number): T {
    // debouncedValue holds the debounced state, and setDebouncedValue is the function to update it.
    const [debouncedValue, setDebouncedValue] = useState(value);

    // useEffect is used to perform side effects in function components.
    useEffect(() => {
        // Set a timeout to update the debounced value after the specified delay.
        const handler = setTimeout(() => {
            setDebouncedValue(value);  // Update the debounced value to the latest value.
        }, delay);

        // Return a cleanup function that clears the timeout if the component unmounts
        // or if the value or delay changes. This prevents outdated values from being set.
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);  // Dependencies array: useEffect will re-run if value or delay changes.

    // Return the debounced value. This value will only update `delay` milliseconds after the
    // last change to the input value.
    return debouncedValue;
}
