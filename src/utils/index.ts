export const getItemLocalStorage = (item: string) => {
    return typeof window !== 'undefined' && localStorage.getItem(item)
        ? JSON.parse(localStorage.getItem(item) || '')
        : ''
}