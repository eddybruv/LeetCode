func twoSum(nums []int, target int) []int {
    indexMap := make(map[int]int)

    for i, value:= range nums {
        find := target - value;
        if _, ok := indexMap[find]; ok {
            return []int{indexMap[find], i}
        }

        indexMap[value] = i
    }
    return nil
}