import "fmt"

func containsDuplicate(nums []int) bool {
	set := make(map[int]struct{}) // {} 

	for _, num := range nums {
		set[num] = struct{}{}
	}

	lenNums := len(nums)
	lenSet := len(set)

	return lenNums != lenSet
}