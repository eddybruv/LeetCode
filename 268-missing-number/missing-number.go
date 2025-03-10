func missingNumber(nums []int) int {
	n := len(nums)
	sum := (n * (n + 1)) / 2

    for _, value := range nums {
        sum -= value
    }

    return sum
}