const differenceInDays = require('date-fns/differenceInDays');
let startDate = new Date('2020/04/02')
let today = new Date;
const daysBetween = differenceInDays(today, startDate);
console.log(`{Day${daysBetween + 1}}`)