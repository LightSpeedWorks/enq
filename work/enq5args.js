void function () {
	'use strict';

	// Queue
	function Queue() {
		if (!(this instanceof Queue)) return new Queue();
		this.tail = this.head = undefined;
	}
	Queue.prototype.push = function push(x) {
		arguments.next = undefined;
		if (this.tail)
			this.tail = this.tail.next = arguments;
		else
			this.tail = this.head = arguments;
	};
	Queue.prototype.shift = function shift() {
		if (!this.head) return undefined;
		var x = this.head;
		if (x.length === 1) x = x[0];
		this.head = this.head.next;
		if (!this.head) this.tail = undefined;
		return x;
	};

	if (typeof module === 'object' && module && module.exports)
		module.exports = Queue;
}();
