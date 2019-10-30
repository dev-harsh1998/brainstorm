// Complexity O(n) for Return
const countFreq = arr => {
    let freq = [];

    for(let i =0;i<arr.length;i++){
        if(freq[arr[i]] != undefined){
            let count = freq[arr[i]];
            count += 1;
            freq[arr[i]] = count; 
        }else {
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

const printFreq = arr => {
    console.log("Entities  -> Frequency Counts");
    for(let i =0; i<arr.length; i++){
        if(arr[i] != undefined){
            console.log(`   ${i}      ->      ${arr[i]}`);
        }
    }
}

arr = [2,8,6,3,30,17,26,26,8,21,24,5,21,2,8,24,22,20,30,3,18,0,
    3,18,10,0,20,8,30,3,3,21,27,2,7,8,28,8,18,29,17,18,3,26,30,20,5,2,
    22,25,23,14,13,15,10,16,13,11,11,0,15,8,11,2,1,18,4,14,1,29,10,11,21,
    7,3,2,28,18,8,22,21,16,7,9,3,15,22,17,9,10,13,30,26,26,20,1,8,18,24,19,
    14,2,30,30,28,2,24,26,18,27,1,28,13,29,9,2,24,0,16,8,27,6,9,3,3,23,30,9,
    14,13,29,23,10,9,6,6,8,19,6,4,25,13,21,0,0,25,8,22];

printFreq(countFreq(arr));