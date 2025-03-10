func twoSum(nums []int, target int) []int {
    indexMap := make(map[int]int)

    for i, value:= range nums {
        find := target - value;

        fmt.Println(indexMap[find])

        _, ok := indexMap[find]
        if ok {
            return []int{indexMap[find], i}
        }

        indexMap[value] = i
    }
    return []int{0, 0}
}