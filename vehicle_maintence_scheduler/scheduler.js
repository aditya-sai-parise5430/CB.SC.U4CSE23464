function scheduleVehicles(vehicles, hours) {
    let result = [];
    let total = 0;

    for (let v of vehicles) {
        if (total + v.Duration <= hours) {
            result.push(v);
            total += v.Duration;
        }
    }

    return result;
}

module.exports = scheduleVehicles;