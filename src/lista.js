module.exports = class Lista {
	#elementos;

	constructor() {
		this.#elementos = [];
	}

	count() {
		return this.#elementos.length;
	}
	find() {
		if (this.#elementos.length == 1) {
			return this.#elementos[0].value;
		}
		return NaN;
	}
	findKeyIndex(key) {
		let found = NaN;
		if (this.count()) {
			this.#elementos.forEach((element, index) => {
				if (Object.keys(element)[0] === key) {
					found = index;
				}
			});
		}
		return found;
	}
	add(key, value) {
		let found_index = this.findKeyIndex(key);
		if (!isNaN(found_index)) {
			this.#elementos[found_index][`${key}`] = value;
		} else {
			this.#elementos.push({ [`${key}`]: value });
		}
		// this.getOrderList();
	}
	// addFirst(key, value) {
	// 	let found_index = this.findKeyIndex(key);
	// 	if (!isNaN(found_index)) {
	// 		this.#elementos[found_index][`${key}`] = value;
	// 	} else {
	// 		this.#elementos.unshift({ [`${key}`]: value });
	// 	}
	// 	this.getOrderList();
	// }
	// getOrderList() {
	// 	this.#elementos.sort(function (a, b) {
	// 		if (Object.keys(a)[0] > Object.keys(b)[0]) {
	// 			return 1;
	// 		}
	// 		if (Object.keys(a)[0] < Object.keys(b)[0]) {
	// 			return -1;
	// 		}
	// 		return 0;
	// 	});
	// }
	getByKey(key) {
		let index_element = this.findKeyIndex(key);
		if (!isNaN(index_element)) {
			return this.#elementos[index_element][key];
		}
		return NaN;
	}
	// getElementosOrdenados() {
	// 	let ordered_keys = [];
	// 	this.#elementos.forEach((element) => {
	// 		ordered_keys.push(Object.keys(element)[0]);
	// 	});
	// 	return ordered_keys;
	// }
	delete(key) {
		let index_element = this.findKeyIndex(key);
		if (!isNaN(index_element)) {
			this.#elementos.splice(index_element, 1);
		}
	}
};