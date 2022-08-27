let _inp = document.getElementsByTagName('input')
for (i = 0; i < _inp.length; i++) {
    let name = document.getElementById('fullname')
    let pass = document.getElementById('pass')
    let email = document.getElementById('email')
    let number = document.getElementById('number')
    let error = document.getElementsByClassName('error')
    _inp[i].addEventListener('input', function () {
        for (s = 0; s < error.length; s++) {
            error[s].style.cssText = 'transform:scale(0) translateY(-50%);'
        }
        if (this.getAttribute('id') == name.getAttribute('id')) {
            if (this.value.search(/[ا-ی]/i) != -1 || (this.value.search(/[0-9]/)) != -1) {
                this.nextElementSibling.style.cssText = 'transform:scale(1) translateY(-50%);color:red;'
            }
        }
        if (this.getAttribute('id') == pass.getAttribute('id')) {
            if (((this.value.length) <= 8) || (this.value.search(/[0-9]/) == -1) || (this.value.search(/[a-z]/) == -1) || (this.value.search(/[A-Z]/) == -1)) {
                this.nextElementSibling.style.cssText = 'transform:scale(1) translateY(-50%);color:red;'
            }
        }
        if (this.getAttribute('id') == email.getAttribute('id')) {
            if (((this.value.length) <= 5) || (this.value.search(/[a-z]/) == -1) || (this.value.search(/[@]/) == -1)) {
                this.nextElementSibling.style.cssText = 'transform:scale(1) translateY(-50%);color:red;'
            }
        }
        if (this.getAttribute('id') == number.getAttribute('id')) {
            if (((this.value.length) != 11) || (this.value.search(/[a-z]/i) != -1) || (this.value.search(/[0-9]/) == -1)) {
                this.nextElementSibling.style.cssText = 'transform:scale(1) translateY(-50%);color:red;'
            }
        }
    })
}