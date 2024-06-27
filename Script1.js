let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function analyzeArray(arr) {
    let max = arr[0]; //calculate the max of the array
    for (i in arr) {
        if (arr[i] > max) {
            max = arr[i];
        }       
    }
    document.getElementById("max").textContent = max; //display the max of the array

    let min = arr[0]; //calculate the min of the array
    for (i in arr) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    document.getElementById("min").textContent = min; //display the max of the array

    let avg = 0; //calculate the avg of the array
    let sum = 0;
    for (i in arr) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    document.getElementById("avg").textContent = avg; //display the avg of the array

    const evenNumbers = document.getElementById("even"); //display all of the even numbers in the array
    for (i in arr) {
        if (arr[i] % 2 == 0) {
            evenNumbers.textContent += arr[i] + ", "; //display the number i in array if it is even
        }
    }

}
