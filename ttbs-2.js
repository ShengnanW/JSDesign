/**
 * 每行日期为三个数，分别表示年、月、日；
 * 输出每行指定日期从2012.3.12经历的天数
 * @param {数据数量} num 
 * @param {含有num行日期的数组} data 
 */

function countDay(num=0, data=[]) {
    const count = (year, month, day) => {
        const dayMount = 1000*60*60*24; //将毫秒数转换为天数

        const oldMills = Date.UTC(2012, 03, 12);
        const newMills = Date.UTC(year, month, day);
        const days = Math.floor((newMills - oldMills) / dayMount); 
        // console.log(oldMills, newMills, days);
        return days;
    }

    if(num && data.length) {
        const daysArr = data.map(item => count(+item.year, +item.month, +item.day));
        return daysArr;
    } 
    return [];
}

function test() {
    const data = [
        {year: 2012, month: 3, day: 22},
        {year: 2013, month: 2, day: 10},
        {year: 2014, month: 12, day: 5},
        {year: 2015, month: 07, day: 24},
        {year: 2016, month: 09, day: 25},
        {year: 2017, month: 06, day: 11},
    ];

    console.log(countDay(6, data));
}

test();