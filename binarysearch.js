function binarysearch(key, value){
	
	var start = 0;
	var stop = key.length-1;
	var middle = Math.floor((start + stop)/2);

	while(value !== key[middle] && start < stop){
		if(value > key[middle]){
			start = middle + 1;
		}else if(value < key[middle]){
			stop=middle-1;
		}
		middle = Math.floor(( start + stop ) / 2);
	}
	return (key[middle] === value) ? middle : -1;

};

var key = [1, 2, 6, 10, 13, 24, 35, 42, 44, 50, 52, 63, 64, 68, 70, ];

console.log("24 is at index: ", binarysearch(key, 24));