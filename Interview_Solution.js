const checkExist = (index, word, i , j , matrix, rowCount, colCount) => {
    let found = false;
    //stop condition
    //check index still in the matrix and the char at index of word must equal the char of matrix at i,j position
    if(i >= 0 && i <= rowCount && j >= 0 && j <= colCount && word[index] === matrix[i][j]){
        let temp = matrix[i][j];
        index += 1;
        //set the position is visited
        matrix[i][j] = '1';
        if(index === word.length){
            return true;
        }else{
            //go 4 direction, backtracking algorithm
            found = checkExist(index,word, i-1,j,matrix, rowCount,colCount);
            if(found == false){
                found = checkExist(index,word, i+1,j,matrix, rowCount,colCount);
            }
            if(found == false){
                found = checkExist(index,word, i,j-1,matrix, rowCount,colCount);
            }
            if(found == false){
                found = checkExist(index,word, i,j+1,matrix, rowCount,colCount);
            }
        }
        matrix[i][j] = temp;
    }
    return found;
}

const searchString = (lstWord, matrix, m, n) =>{
    //get every word in list
    for (let k = 0; k < lstWord.length; k++) {
        let found = false;
        //loop matrix check word
        for (let  i= 0; i < m ; i++) {
            for (let j = 0; j < n; j++) {
                found = checkExist(0, lstWord[k], i , j, matrix, m-1, n-1);
                if(found == true)  {
                    break;
                }      
            }
            if(found == true)  {
                break;
            }   
        }
        found == true ? console.log("yes") : console.log("no");
    }
}


function main() {
    const matrix = [
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['h','g','f','e'],
        ['d','c','b','a']
    ];
    const lstWord = ["abfgf","bfgc","abfga","hdc","fghde"]
    searchString(lstWord, matrix, matrix.length, matrix[0].length);
}

main();
