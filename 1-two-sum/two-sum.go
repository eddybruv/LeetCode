func twoSum(nums []int, target int) []int {
    indexMap := make(map[int]int)

    for i, value:= range nums {
        find := target - value;
        if index, ok := indexMap[find]; ok {
            return []int{index, i}
        }

        indexMap[value] = i
    }
    return nil
}