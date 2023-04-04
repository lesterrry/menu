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

document.addEventListener('DOMContentLoaded', (_event) => {
	let dropdown_instances = document.querySelectorAll('.header__dropdown')
	for (let i = dropdown_instances.length - 1; i >= 0; i--) {
		dropdowns.push(new Dropdown(dropdown_instances[i]))
		dropdowns[i].instance.addEventListener('click', () => {
			if (!mobile) return
			if (dropdowns[i].isShown) {
				dropdowns[i].instance.classList.remove('display-flex')
				dropdowns[i].isShown = false
			} else {
				dropdowns[i].instance.classList.add('display-flex')
				dropdowns[i].isShown = true
			}
		})
	}
})