if(navigator.vendor !== 'Apple') {
twemoji.parse(document.body, {
	folder: 'svg',
	ext: '.svg',
});
} else {
	console.log('ok')
}

console.log('TweMoji has been loaded')

console.log('Vibra UI is active')

document.getElementsByClassName('attr')[0].remove()