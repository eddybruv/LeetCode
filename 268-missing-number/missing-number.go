import (
	"slices"
)

func missingNumber(nums []int) int {
	n := len(nums)

	for i := 0; i <= n; i++ {
        if !slices.Contains(nums, i) {
            return i
        }
	}

    return 0
}