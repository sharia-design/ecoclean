// --- Header Fixing ---

const header = document.getElementById('header')
let scrolled = 0
let root = document.documentElement;
window.addEventListener('scroll', e => {
    scrolled = document.scrollingElement.scrollTop
    if (scrolled > 290) {
        root.style.setProperty('--header-height', '80px')
        document.querySelector('.header-logo').style.height = '47px'
        document.querySelector('.header-info__cta').classList.add('fixed')
    } else {
        root.style.setProperty('--header-height', '110px')
        document.querySelector('.header-logo').style.height = '69px'
        document.querySelector('.header-info__cta').classList.remove('fixed')
    }
})

// --- Booking --- //

const blur = document.getElementById('blur')
const bookBtn = document.querySelectorAll('.book-btn')
const bookClose = document.getElementById('modal-book-close')
const modalBook = document.getElementById('modal-book')

// --- Open
bookBtn.forEach(item => {
    item.addEventListener('click', () => {
        showBlur(true)
        modalBook.classList.add('show')
    })
})

// --- Close 
bookClose.addEventListener('click', () => {
    modalBook.classList.remove('show')
    showBlur(false)
})
blur.addEventListener('click', () => {
    modalBook.classList.remove('show')
    showBlur(false)
})

function showBlur(what) {
    if(what) {
        blur.classList.remove('hidden')
    } else {
        blur.classList.add('hidden')
    }
}


// --- Eve Icons
eva.replace();


// --- Booking --- ///
const bookWrapper = document.getElementById('modal-book-wrap')
const bookResponse = document.getElementById('book-response')
const bookSubmitBtn = document.getElementById('book-submit')

let name = document.getElementById('name')
let phone = document.getElementById('phone')

// --- Phone Input
document.getElementById('phone').addEventListener('keyup', e => {
    document.getElementById('phone').value = document
        .getElementById('phone')
        .value.replace(/[^0-9\.+]/g, '')
})

// --- Validation
function validateBooking () {
    let valid = false
    if (name.value.length <= 1) {
        name.classList.add('false')
        valid = false
    } else {
        name.classList.remove('false')
        valid = true
    }

    if (phone.value.length == '') {
        phone.classList.add('false')
        valid = false
    } else if (phone.value.length <= 6) {
        phone.classList.add('false')
        valid = false
    } else {
        phone.classList.remove('false')
        valid = true
    }

    return valid
}



bookSubmitBtn.addEventListener('click', function() {


    if (validateBooking()) {
        // Store booking
        let userName = name.value
        let userPhone = phone.value
        
        console.log(userName, userPhone);
        
        
        // Show response
        modalResponse()
    }
    

})

function modalResponse() {
    // Show response
    bookWrapper.classList.add('none')
    bookResponse.classList.remove('none')
    
    // Reset Modal UI
    setTimeout(() => {
        bookWrapper.classList.remove('none')
        bookResponse.classList.add('none')
    }, 4000);
}

