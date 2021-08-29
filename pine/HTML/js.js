const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const logIn = $('.onclick__logIn')
const logOut = $('.onclick__logOut')
const modal = $('.modal')
const modal2 = $('.modal2')
const modalface = $('.modal__overlay')
const modalface2 = $('.modal__overlay2')
const modalbody = $('.modal__body')
const btnback = $('.auth-from-back')
const btnback2 = $('.auth-from-back2')
const btntoggle = $('.auth-from__switch-btn')
const btntoggle2 = $('.auth-from__switch-btn2')
const listrender = $('.listapp')
const load = $('.grid__rowload')



// start =====================================================================
logIn.onclick = function () {
    modal.classList.add('open')
    modal.classList.remove('modal')
    
}

logOut.onclick = function () {
    modal2.classList.add('open')
    modal2.classList.remove('modal2')
    
}

modalface.onclick = function () {
    modal.classList.remove('open')
    modal.classList.add('modal')
}

modalface2.onclick = function () {
    modal2.classList.remove('open')
    modal2.classList.add('modal2')
}

btnback.onclick = function () {
    modal.classList.remove('open')
    modal.classList.add('modal')
}

btnback2.onclick = function () {
    modal2.classList.remove('open')
    modal2.classList.add('modal2')
}

btntoggle.onclick = function () {
    modal.classList.remove('open')
    modal.classList.add('modal')

    modal2.classList.add('open')
    modal2.classList.remove('modal2')
}

btntoggle2.onclick = function () {
    modal2.classList.remove('open')
    modal2.classList.add('modal2')

    modal.classList.add('open')
    modal.classList.remove('modal')
}
// end =====================================================================


const app = {
    list: [
        {
            name:'bach diep phi',
            url:'(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
            oldcost:'10238998320',
            newcost:'37901228',
            home:'can tho',
            city:'thanh pho can tho',
            percent:'77%'
        },
        {
            name:'bach diep phi',
            url:'(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
            oldcost:'10238998320',
            newcost:'37901228',
            home:'can tho',
            city:'thanh pho can tho',
            percent:'77%'
        },
        {
            name:'bach diep phi',
            url:'(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
            oldcost:'10238998320',
            newcost:'37901228',
            home:'can tho',
            city:'thanh pho can tho',
            percent:'77%'
        },
        {
            name:'bach diep phi',
            url:'(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
            oldcost:'10238998320',
            newcost:'37901228',
            home:'can tho',
            city:'thanh pho can tho',
            percent:'77%'
        },
        {
            name:'bach diep phi',
            url:'(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
            oldcost:'10238998320',
            newcost:'37901228',
            home:'can tho',
            city:'thanh pho can tho',
            percent:'77%'
        },
    ],
    render: function () {
        
    const html = app.list.map(product => {
        return `  <div class="grid__column-2-4 l-2-4 m-6 c-6">

        <div class="grid__column-2-loi">
           
            <div class="home-product-item">
                <div class="home-product-item__img" style="background-image: url${product.url};">
                    
                </div>
                <h4 class="home-product-item__name">${product.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${product.oldcost}$</span>
                    <span class="home-product-item__price-curent">${product.newcost}$$</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__action-like">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    <div class="home-product-item__action-rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">${product.city}</span>
                    <span class="home-product-item__origin-name">">${product.home}</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    Yêu Thích
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">">${product.percent}</span>
                    <span class="home-product-item__sale-off-label">Giảm</span>
                </div>
            </div>
        </div>
    </div>`
    })
    load.innerHTML = html.join('')
    },

    start: function() {
        app.render()
    },
}


app.start()












