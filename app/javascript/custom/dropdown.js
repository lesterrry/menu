let mobile = false

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	console.log('Detected mobile screen')
	mobile = true
}

class Dropdown {
	constructor(instance, isShown=false) {
		this.instance = instance
		this.isShown = isShown
	}
}

let dropdowns = []

const populateDropdowns = () => {
	let dropdown_instances = document.querySelectorAll('.header__dropdown')
	for (let i = dropdown_instances.length - 1; i >= 0; i--) {
		dropdowns[i] = new Dropdown(dropdown_instances[i])
		if (mobile) {
			dropdowns[i].instance.addEventListener('click', () => {
				if (dropdowns[i].isShown) {
					dropdowns[i].instance.classList.remove('active')
					dropdowns[i].isShown = false
				} else {
					dropdowns[i].instance.classList.add('active')
					dropdowns[i].isShown = true
				}
			})
		} else {
			dropdowns[i].instance.addEventListener('mouseover', () => {
				dropdowns[i].instance.classList.add('active')
				dropdowns[i].isShown = true
			})
			dropdowns[i].instance.addEventListener('mouseout', () => {
				dropdowns[i].instance.classList.remove('active')
				dropdowns[i].isShown = false
			})
		}
	}
}

if (document.readyState !== 'loading') {
	populateDropdowns()
} else {
	document.addEventListener('DOMContentLoaded', () => { populateDropdowns() })
}
