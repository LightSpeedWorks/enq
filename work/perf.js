void function() {

	var N = 1e5, M = 1e2, L = 6;

	var cases = [
		['enq0', makeCase(require('./enq0'))],
		['enq1', makeCase(require('./enq1'))],
		['enq2', makeCase(require('./enq2'))],
		['enq3', makeCase(require('./enq3'))],
		['enq4', makeCase(require('./enq4'))],
	];

	for (var n = 0; n < L; ++n) {
		process.stdout.write(n + ': ');
		cases.map(x => bench(x[0], x[1]));
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
