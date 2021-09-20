const random = (n: number) => {
    return Math.floor(Math.random() * Math.floor(n));
}

const shuffle = (arr: Array<any>) => {
    for (let i = 0; i < arr.length; i++) {
        const j = random(arr.length);
        const k = random(arr.length);
        const t = arr[j];
        arr[j] = arr[k];
        arr[k] = t;
    }
    return arr;
}

export default shuffle