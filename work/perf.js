void function() {

	var N = 2e5, M = 2e2, L = 6;

	var cases = [
		['enq0', require('./enq0'), makeCase(require('./enq0'))],
		['enq1', require('./enq1'), makeCase(require('./enq1'))],
		['enq2', require('./enq2'), makeCase(require('./enq2'))],
		['enq3', require('./enq3'), makeCase(require('./enq3'))],
		['enq4', require('./enq4'), makeCase(require('./enq4'))],
		['enq5', require('./enq5'), makeCase(require('./enq5'))],
	];

	cases.forEach(x => {
		console.log(x[0], x[1].name);
		var Q = x[1];
		var q = new Q();
		q.push('elem1');
		q.push('elem2');
		q.push('elem3');
		if (q.shift() !== 'elem1') console.log('err1');
		if (q.shift() !== 'elem2') console.log('err2');
		if (q.shift() !== 'elem3') console.log('err3');
		if (q.shift() !== undefined) console.log('err4:' + q.shift());

		//q.push([1, 2]);
		//console.log(q.shift());
		//q.push(1, 2);
		//console.log(q.shift());
	});

	for (var n = 0; n < L; ++n) {
		process.stdout.write(n + ': ');
		cases.map(x => bench(x[0], x[2]));
		process.stdout.write('\r\n');
	}

	function makeCase(func) {
		return function () {
			for (var i = 0; i < N; ++i) {
				var q = new func();
				for (var j = 0; j < M; ++j)
					q.push(j);
				for (var j = 0; j < M; ++j)
					q.shift();
			}
		}
	}

	function bench(caseName, func) {
		try {
			var time1 = Date.now();
			//console.time(n + caseName);
			func();
		} catch (e) { console.log(e); }
		var time2 = Date.now();
		//console.timeEnd(n + caseName);
		process.stdout.write(caseName + ' ' + ((time2 - time1) / 1000).toFixed(3) + '   ');
	}

}();
