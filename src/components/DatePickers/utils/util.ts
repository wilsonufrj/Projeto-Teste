export const assignRef = <T>(ref: React.Ref<T> | undefined, value: T | null) => {
    if (!ref) return;
    if (typeof ref === 'function') ref(value);
    else (ref as React.RefObject<T>).current = value;
}