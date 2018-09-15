module.exports = function getZerosCount(number, base) {

    let baseCount = 1;
    let binaryCount = 0;
    const binaryMultiplier = 2;
    let i = binaryMultiplier;
    const baseMultiplier = getMultiplier(base);

    return Math.min(parseInt(countZeros(number, baseMultiplier) / baseCount), parseInt(countZeros(number, binaryMultiplier) / (binaryCount === 0 ? 1 : binaryCount)));

    function getMultiplier(base) {
        if (base <= i + 1 && base % binaryMultiplier === 0) {
            binaryCount++;
            return base;
        } else if (base <= i + 1) {
            return base;
        } else if (base % binaryMultiplier === 0) {
            binaryCount++;
            return getMultiplier(base / binaryMultiplier);
        } else if (base % (i + 1) === 0) {
            baseCount++;
            return getMultiplier(base / (i + 1));
        } else {
            i++;
            baseCount = 1;
            return getMultiplier(base);
        }
    }
};

function countZeros(number, multiplier) {
    return number < multiplier ? 0 : parseInt(number / multiplier) + countZeros(parseInt(number / multiplier), multiplier);
}