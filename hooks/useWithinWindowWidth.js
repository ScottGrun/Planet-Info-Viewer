import { useWindowSize } from "./useWithinWindowWidth"

function useWithinWindowWidth(minWidth, maxWidth) {
    const { width } = useWindowSize()

    const isWithin = width && width >= minWidth && width <= maxWidth
    useDebugValue({ minWidth, maxWidth, isWithin }, formatDebugValueWithinWindow)
    return isWithin
}

export { useWithinWindowWidth, useWindowSize }