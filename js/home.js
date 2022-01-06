// --- Hero Service Type --- //
const services = [
    'დეზინფექცია',
    'ავეჯის დალაგება',
    'დერატიზაცია',
    'HCCP დანერგავა',
    'დეზინსექცია',
]

let heroService = document.getElementById('hero-service')

let i = 0;

function type() {
    heroService.innerHTML = services[i]
    if (i < services.length) {
        setTimeout(() => {
            heroService.innerHTML = services[i]
            i++
            type()
        }, 2200);
    } else {
        i = 0;
        type()
    }
}

type()