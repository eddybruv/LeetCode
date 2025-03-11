import (
	"slices"
)

func smallerNumbersThanCurrent(nums []int) []int {
	// create a temp copy of original array
	sortedNums := append([]int(nil), nums...)

	// sort temp
	slices.Sort(sortedNums)

	// create result array
	result := []int{}

	// create value index hash map
	valueIndexMap := make(map[int]int)

	for index, value := range sortedNums {
		if _, ok := valueIndexMap[value]; !ok {
			valueIndexMap[value] = index
		}
	}

	for _, value := range nums {
		result = append(result, valueIndexMap[value])
	}

	return result
}