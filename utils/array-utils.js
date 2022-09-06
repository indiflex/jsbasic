export { assertArray as assertEqual } from './test-utils.js';

const range = (start, end, step) => {
	if (start !== end && (end - start) * step < 0) return [];

	const tmp = start;
	end = end ?? (start >= 0 ? ((start = start > 0 ? 1 : 0), tmp) : -1);
	step = step ?? (start >= end ? -1 : 1);

	const result = [start];
	const until = x =>
		step !== 0 && start !== end && (start > end ? x >= end : x <= end);
	for (let i = start + step; until(i); i += step) {
		result.push(i);
	}

	return result;
};

export { range };
