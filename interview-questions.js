// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array. You shouldn't use the .filter method here; try to write the algorithm from scratch.

function lessThanFive(array) {

	for(var i = 0; i < array.length; i++) {
		if(array[i] < 5) {
			array.splice(i,1);
			i--;
		}
	}
	return array;
}

//-------------------------------------------------------------

function lessThanFive(array) {
	var finalArr = [];
	for(var i = 0; i < array.length; i++) {
		if(array[i] >= 5) {
			finalArr.push(array[i]);
		}
	}
	return finalArr;
}

lessThanFive([1,2,3,4,5,6]);

// Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be sorted. For example, if your input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output array should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].

function sortMerge (array1, array2) {
	var newArr = [],
	    i = 0,
	    j = 0;

	while (i < array1.length && j < array2.length) {

		if(array1[i] <= array2[j]) {
			newArr.push(array1[i++]);
		} else {
			newArr.push(array2[j++]);
		}
	}

	if(j < array2.length) {
		array1 = array2;
		i = j;
	}

	while (i < array1.length) {
		newArr.push(array1[i++]);
	}

	return newArr;
	}

sortMerge([2, 3, 5, 8, 9, 10,13], [1, 3, 6, 8, 11,14]);

// [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

array1 = [2, 3, 5, 8, 9, 10,13]
array2 = [1, 3, 6, 8, 11,14]
newArr = []
i = 0
j = 0
'while'

'i < array1.length && j < array2.length' = true
'if'
'array1[i] <= array2[j]' = false
'newArr.push(array2[j++])'
newArr = [1]
j = 1;

'i < array1.length && j < array2.length' = true
'if'
'array1[i] <= array2[j]' = true
'newArr.push(array1[i++]);'
newArr = [1,2]
i = 1;

'i < array1.length && j < array2.length' = true
'if'
'array1[i] <= array2[j]' = true;
'newArr.push(array1[i++]);'
newArr = [1,2,3]
i = 2;

'i < array1.length && j < array2.length' = true
'if'
'array1[i] <= array2[j]' = false;
'newArr.push(array2[j++]);'
newArr = [1,2,3,3]
j = 2

// Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index. For example, if the input was [1, 3, 9, 4], the output should be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).

function getProduct(array, index) {
	index = index || 0;
	if(index >= array.length-1) {
		return array[index];
	} else {
		array[index+1] *= array[index];
		return getProduct(array,index+1);
	}
}

//------------------------------------------------------------------------------

function getProduct(array, index) {
	index = index || 0;
	if(index >= array.length-1) {
		return array[index];
	} else {
		array[index+1] *= array[index];
		return getProduct(array,index+1);
	}
}

function getOtherProduct(arr) {
	var newArr=[];
	for(var i = 0; i < arr.length; i++) {
		newArr[i] = getProduct(arr.slice(i+1).concat(arr.slice(0, i)));
	}
	return newArr;
}

getOtherProduct([1,3,9,4]);
