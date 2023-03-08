document.getElementById('select-left').addEventListener('click', () => document.body.dataset.side = 'left');
document.getElementById('select-right').addEventListener('click', () => document.body.dataset.side = 'right');


const COLORS = ['G','B','Y','R','P']
const VALID_COLORS = ['G','B','Y','R']

function pull_lever(id) {
	const row = document.querySelector('.colors');
	const item = row?.children[id];
	const color = item?.dataset.color;

	const index = COLORS.indexOf(color);
	const new_index = ((index ? index > -1 : 0) + 1) % COLORS.length;

	item.dataset.color = COLORS[new_index];
}
