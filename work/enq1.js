void function () {
	'use strict';

	// Queue
	function Queue() {
		if (!(this instanceof Queue)) return new Queue();
		this.tail = this.head = null;
	}
	Queue.prototype.push = function push(x) {
		if (this.tail)
			this.tail = this.tail[1] = [x, null];
		else
			this.tail = this.head = [x, null];
	};
	Queue.prototype.shift = function shift() {
		if (!this.head) return null;
		var x = this.head[0];
		this.head = this.head[1];
		if (!this.head) this.tail = null;
		return x;
	};

	if (typeof module === 'object' && module && module.exports)
		module.exports = Queue;
}();
