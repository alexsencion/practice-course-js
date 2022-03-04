const list1 = [
    100,200,300,500
];



function calcArithmeticMean(list) {

//     let addList = 0;

//     for (let i = 0; i < list.length; i++) {
//     addList = addList + list[i];
// }

const addList = list.reduce(
    function (accumulatedValue = 0, newElement) {
        return accumulatedValue + newElement;
    }
);

    const averageList = addList / list.length;

    return averageList;

}