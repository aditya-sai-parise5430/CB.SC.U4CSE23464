function knapsack(vehicles, capacity) {
    let n = vehicles.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        let dur = vehicles[i - 1].Duration;
        let imp = vehicles[i - 1].Impact;

        for (let w = 0; w <= capacity; w++) {
            if (dur <= w) {
                dp[i][w] = Math.max(
                    imp + dp[i - 1][w - dur],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

module.exports = knapsack;