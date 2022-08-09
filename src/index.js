
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    if(matrix == undefined){
        return []
    }
    if(matrix.length == 0){
        return []
        
    } else {

    let arrayTowel =  matrix.map((elem => elem.join(' ')))

    for(let i = 1; i< arrayTowel.length; i= i+2){
        arrayTowel[i] = (arrayTowel[i]).split(' ').reverse().join(' ')
    
    }

    let arrayNumbers = (((arrayTowel.join(',')).replace(/\s/g, ',')).split(',')).map(parseFloat)
    return arrayNumbers}
}



