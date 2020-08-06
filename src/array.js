export default {
    range(start, end, step = 1) {
        const r = []
        if (start <= end) {
            if (step < 0) step = -step
            for (let i = start; i <= end; i += step) {
                r.push(i)
            }
        } else {
            if (step < 0) step = -step
            for (let i = start; i >= end; i -= step) {
                r.push(i)
            }
        }
        return r
    },
}