
//冒泡type升降序true升
const bubble = (arr, type) => {
    const len = arr.length
    let count = 1
    while (count < len - 1) {
        for (let i = 0; i < len - count; i++) {
            if ((arr[i] < arr[i + 1] && !type) || (arr[i] > arr[i + 1] && type)) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
        count++
    }
    return arr
}

//直接插入排序true升类似打牌整理牌
const insert = (arr, type) => {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if ((arr[j] > arr[i] && type) || arr[j] < arr[i] && !type) {
                arr.splice(j, 0, arr.splice(i, 1) [0])
                break
            }
        }
    }
    return arr
}
//优化插入排序
//二分查找
const halfInsert = (arr, type) => {
    const len = arr.length
    let mid, low, high, pos
    for (let i = 1; i < len; i++) {
        //中位
        low = 0
        high = i - 1
        while (high >= low) {
            mid = parseInt((low + high) /
                2)
            if (arr[i] === arr[mid]) {
                pos = mid
                break
            } else if (arr[i] < arr[mid]) {
                high = mid - 1
                pos = low
                if (high === low) {
                    pos++
                }
            } else {
                low = mid + 1
                pos = low
                if (high === low) {
                    pos--
                }
            }
        }
        let temp = arr.splice(i, 1)[0]
        arr.splice(pos, 0, temp)
    }
    return type ? arr : arr.reverse()
}
//希尔排序
//直接插入排序true升
const shellSort = (arr, type) => {
    const len = arr.length
    let gap = Math.floor(len / 2)
    // for (let i =) {
    while (gap >= 1) {
        for (var i = gap; i < len; i++) {
            let j, temp = arr[i];
            for (j = i - gap; j >= 0 && temp <
                arr[j]; j = j - gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
        gap = Math.floor(gap / 2)
    }
    return type ? arr : arr.reverse()
}

//快速排序
const quicksort = (arr, type) => {
    const f = arr => {
        const len = arr.length
        if (len === 0) return []
        const base = arr[0]
        let left = []
        let right = []
        for (let i = 1; i < len; i++) {
            arr[i] <= base ? left.push(arr[i]) :
                right.push(arr[i])
        }
        return type ? [...f(left), base, ...f(right)] : [...f(right), base, ...f(left)]
    }
    return f(arr)
}
//选择排序
const select = (arr, type) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let mIdx = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[mIdx]) {
                mIdx = j
            }
        }
        [arr[mIdx], arr[i]] = [arr[i], arr[mIdx]]
    }
    return type ? arr : arr.reverse()
}
//归并排序
const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    if (left.length) {
        arr = [...arr, ...left]
    }
    if (right.length) {
        arr = [...arr, ...right]
    }
    return arr
}
const mergeSort = (arr, type) => {
    let len = arr.length
    if (len < 2) return arr
    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return type ? merge(mergeSort(left), mergeSort(right)) : merge(mergeSort(right), mergeSort(left))
}
export {
    bubble,
    insert,
    halfInsert,
    shellSort,
    quicksort,
    select,
    mergeSort
}
