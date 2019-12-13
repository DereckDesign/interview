let dropdowns = document.querySelectorAll('.dropdown')

for (let i = 0; i < dropdowns.length; i++) {
	dropdowns[i].addEventListener('click', function() {
		if (document.querySelector('.active')) {
			document.querySelector('.active').classList.remove('active')
		}
		this.classList.toggle('active')
	})
}