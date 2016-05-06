import test from 'ava';
import electronFileInput from './';

test('it work!', t => {
	const result = electronFileInput();
	t.is(result, 42);
});
