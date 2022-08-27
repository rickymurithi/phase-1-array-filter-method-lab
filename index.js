// Code!
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Booby']

const driversInfo = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(driverNames, string) {
    return driverNames.filter(name => name.toLowerCase() === string.toLowerCase())
}
//findingMatch(drivers, string);
console.log(findMatching(drivers, 'Bobby'))

function fuzzyMatch(driverNames, string) {
    return driverNames.filter(name => name.charAt(0) === string.charAt(0))
}
console.log(fuzzyMatch(drivers, 'Sally'));

function matchName(drivers, string) {
    return drivers.filter(element => element.name === string)
}
console.log(string(driversInfo, 'Bobby'));