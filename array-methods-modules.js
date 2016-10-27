var memory = require('./memory');

//secure javascript program
var createArray = function() {
	var publicLength = 0, publicCapacity = 0, publicPtr = memory.allocate(publicLength);
	var privateSIZE_RATIO = 3;

	function publicPush(value) {
		if(publicLength >= publicCapacity) {
			privateResize((publicLength + 1) * privateResize);
		}
		memory.set(publicPtr + publicLength, value);
		publicLength++;
	};

	function privateResize(size) {
		var oldPtr = publicPtr;
		publicPtr = memory.allocate(size);
		if(publicPtr === null) {
			throw new Error('Out of memory');
		}

		memory.copy(publicPtr, oldPtr, publicLength);
		memory.free(oldPtr);
		publicCapacity = size;
	};

	function publicGet(index) {
		if(index < 0 || index >= publicLength) {
			throw new Error('Index error');
		}

		return memory.get(publicPtr + index);
	};


	function publicPop() {
		if(publicLength == 0) {
			throw new Error('Index error');
		}

		var value = memory.get(publicPtr + publicLength - 1);
		publicLength--;
		return value;
	};

	function publicInsert(index, value) {
		if(index < 0 || index >= publicLength) {
			throw new Error('Index error');
		}

		if(publicLength >= publicCapacity) {
			privateResize((publicLength + 1) * privateResize);
		}

		memory.copy(publicPtr + index + 1, publicPtr + index, publicLength - index);
		memory.set(publicPtr + index, value);
		publicLength++;
	};

	function publicRemove(index) {
		if(index < 0 || index >= publicLength) {
			throw new Error('Index error');
		}

		memory.copy(publicPtr + index, publicPtr + index + 1, publicLength - index - 1);
		publicLength--;
	}

	return {
		push: publicPush,
		get: publicGet,
		remove: publicRemove,
		insert: publicInsert,
		pop: publicPop
	}
};


var arr = createArray();
arr.push(1);
console.log('pushed 1 to index 0: ', arr.get(0));
arr.push(2);
console.log('pushed 2 to index 1: ', arr.get(1));

arr.remove(0);
console.log('removed 1 at index 0, arr[1] gets moved to arr[0]: ', arr.get(0));

arr.insert(0, 3);
console.log('\ninsert 3 at index 0, arr[0] gets moved to arr[1]');
console.log('arr[0]', arr.get(0));
console.log('arr[1]', arr.get(1));


