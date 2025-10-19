import "fmt"

func containsDuplicate(nums []int) bool {
	set := make(map[int]struct{}) // {} 

	for _, num := range nums {
        _, exists := set[num]
        if exists {
            return true
        }
		set[num] = struct{}{}
	}

    return false

	// lenNums := len(nums)
	// lenSet := len(set)

	// return lenNums != lenSet
}