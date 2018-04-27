// https://stackoverflow.com/questions/352203/generating-permutations-lazily/353248#353248

function myswap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

function myreverse(a, t_h, t_e) {
	var firstHalf = a.splice(0, t_h);
	var secondHalf = a.reverse();
	var out = firstHalf.concat(secondHalf);
	return out;
}

function findSmallestIndex(arr, t_h_b, t_h, t_e) {
	
	for(var i=t_e; i>=t_h; i--) { 
		if(arr[t_h_b] >= arr[i]) {

			// test
			//console.log('--');
			//console.log(arr[t_h_b]);
			//console.log(arr[i]);

			continue;
		} else {
			return i;	
		}
	}

	// We should not be here
	console.log('find smallest error');	
}

function biggerIsGreater(w) {
	// test here
	var a = w.split('');
	//var a = w.split('').map(Number);


	var len = a.length;

	if(len == 1) return 'no answer';

	if(len == 2) {
		if(a[0] == a[1]) return 'no answer';
	}

	var t_h = len - 1;
	var t_e = len - 1;
	var t_h_b = null;
	var first = 0;
	var last = len - 1;	
	
	while(true) {
		while(
			t_h >= 1 &&
			a[t_h] <= a[t_h - 1]
		) {
			t_h--;
		} 

		//
		if(t_h == 0) {
			return 'no answer';
		}

		// before
		t_h_b = t_h - 1;
		// t_h stays the same	
	
		var smallestIndex = findSmallestIndex(a, t_h_b, t_h, t_e);
		myswap(a, t_h_b, smallestIndex);
		var out = myreverse(a, t_h, t_e);
		out = out.join('');
		return out;
	}	

	
	return true;
}

//var w = '34511';
//var w = '34211';
//var w = '543211';
//var w = 'dhck';
var w = 'bb';

var out = biggerIsGreater(w);
console.log(out);
