/**
 Given an integer numRows, return the first numRows of Pascal's triangle.

 In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var maxAliveAtOnce = function (people) {
    let maxAlive = 0;
    let deathYearCounts = [];
    let currPeopleAlive = 0;
    let birthYearsArray = people.reduce((accum, [birthYear, deathYear]) => {
        let obj = accum[birthYear];
        if(obj) {
            obj.deathYears.push(deathYear);
        }else {
            accum[birthYear] = {birthYear, deathYears: [deathYear]};
        }
        return accum
    }, []);


    birthYearsArray.forEach(({birthYear, deathYears}) => {
        currPeopleAlive += deathYears.length;
        console.log('afterBirths currPeopleAlive: ' + currPeopleAlive);
        for (const deathYear of deathYears) {
            deathYearCounts[deathYear] = deathYearCounts[deathYear] ? deathYearCounts[deathYear] + 1 : 1;
        }
        currPeopleAlive -= deathYearCounts[birthYear] || 0;
        console.log('afterDeaths currPeopleAlive: ' + currPeopleAlive);

        maxAlive = Math.max(maxAlive, currPeopleAlive);
        console.log('----------');
        console.log('maxAlive: ' + maxAlive);
        console.log('----------');
    });

    return maxAlive
};

let expected, actual, people;


people = [[1,3], [1, 1], [2, 4], [2, 6], [3, 10], [3, 3], [3, 4]];
expected = 4;
actual = maxAliveAtOnce(people);
if (actual !== expected) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 1');
}
