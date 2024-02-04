function solution(nums) {
    const length = nums.length / 2;
    const kinds = new Set(nums).size;
    return kinds > length ? length : kinds

}