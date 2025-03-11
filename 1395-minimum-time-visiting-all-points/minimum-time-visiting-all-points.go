import ("math")

func minTimeToVisitAllPoints(points [][]int) int {
    count := float64(0);
    for i, _ := range points {
        if i == 0 {
            continue;
        }

        yDiff := math.Abs(float64(points[i-1][1] - points[i][1]))
        xDiff := math.Abs(float64(points[i-1][0] - points[i][0]))

        if yDiff > xDiff {
            count += yDiff
        } else {
            count += xDiff
        }
    }

    return int(count)
}