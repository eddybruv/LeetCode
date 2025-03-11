func smallerNumbersThanCurrent(nums []int) []int {
	result := []int{}
	for _, value := range nums {
		count := 0
		for _, value2 := range nums {
			if value2 < value {
				count += 1
			}
		}
        result = append(result, count)
	}
	return result
}