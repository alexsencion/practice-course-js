//Convertir el codigo a funcion

//Lista Ordenada

function calcArithmeticMean(list) {

    
    const addList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    
        const averageList = addList / list.length;
    
        return averageList;
    
    }


const list1 = [
    400000000,
    500,
    100,
    200,
];

list1.sort()

const middleList1 = parseInt(list1.length / 2);

function isPair(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let median;

if (isPair(list1.length)) {
    const element1 = list1[middleList1 - 1];
    const element2 = list1[middleList1];

    const averageElementOneAndTwo = calcArithmeticMean([
        element1,
        element2,
    ]);

    median = averageElementOneAndTwo;

} else {

    median = list1[middleList1];

    
}