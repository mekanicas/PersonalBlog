const toggleCheckbox = document.querySelector('.toggle-checkbox');
const searchToggle = document.querySelector('.searchclick');
const searchicon = document.querySelector('.fa-magnifying-glass');

searchicon.addEventListener('click', function () {
    if (searchToggle.style.display === 'none') {
        searchToggle,style.display = 'block'
    } else {
        searchToggle.style.display = 'none'
    }
})

toggleCheckbox.addEventListener('change', function(){
    if (this.checked) {
        document.body.classList.add('body');
    } else {
        document.body.classList.remove('body')
    }
})