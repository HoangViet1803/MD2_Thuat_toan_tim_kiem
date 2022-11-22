let _numbers :number[] = [1,33,6,6,5,2,1,3,9,4,2,6,1];
function count(arr: number[], _value: number): number {
    let count = 0;
    for (let item of arr) {
        if(_value === item) {
            count++;
        }
    }
    return count;
}
count(_numbers, 1)