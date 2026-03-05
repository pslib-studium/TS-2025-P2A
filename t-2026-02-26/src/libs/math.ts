// Základní aritmetické funkce
export function add(a: number, b: number): number {
	return a + b;
}

export function divide(a: number, b: number): number {
	if (b === 0) throw new Error('Division by zero');
	return a / b;
}

export function factorial(n: number): number {
	if (n < 0) throw new Error('Negative input not allowed');
	if (!Number.isInteger(n)) throw new Error('Input must be integer');
	let result = 1;
	for (let i = 2; i <= n; i++) result *= i;
	return result;
}

// Třída s validací a metodami
export class Calculator {
	private _memory: number = 0;

	get memory(): number {
		return this._memory;
	}

	set memory(val: number) {
		if (typeof val !== 'number' || isNaN(val)) throw new Error('Invalid value');
		this._memory = val;
	}

	addToMemory(val: number) {
		this._memory += val;
	}

	clearMemory() {
		this._memory = 0;
	}
}
