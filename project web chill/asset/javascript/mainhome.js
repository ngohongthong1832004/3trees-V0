const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const home = {
    addLink : function() {
        home__loginEl = $('.home__login');
        home__registerEl = $('.home__register');
        home__btn__filmEl =$('.home__btn__film');
        home__btn__musicEl = $('.home__btn__music')
        home__btn__artEl = $('.home__btn__art');
        home__footer__btn__facebookEl = $('.home__footer__btn__facebook');
        home__footer__btn__twitterEl = $('.home__footer__btn__twitter');
        home__footer__btn__instagramEl = $('.home__footer__btn__instagram');
        home__footer__btn__googleEl = $('.home__footer__btn__google');
        home__footer__btn__githupEl = $('.home__footer__btn__githup');

        
    },
    slideImgFlim : function() {
        img__introduction__film1El = $('.img__introduction__film1')
        img__introduction__film2El = $('.img__introduction__film2')
        img__introduction__film3El = $('.img__introduction__film3')
        home__content__film1El = $('.home__content__film')
        slide__film__1El = $('.slide__film__1')
        slide__film__2El = $('.slide__film__2')
        slide__film__3El = $('.slide__film__3')
        home__film__contentEl = $('.home__film__content')
        home__filmEl = $('.home__film')

        listImgFilm = [
            {
                url:'./asset/img/wl-.jpg'
            },
            {
                url:'./asset/img/wlop-47se.jpg'
            },
            {
                url:'./asset/img/wl-op-40se.jpg'
            },
        ]

        htmlFilm = listImgFilm.map((imgFilm,index) => {
            // console.log(listImgFilm.url)
            // console.log(index)
            // return`
            // <div class="home__film__content">
            //         <div class="home__film__img">
            //             <div id="slide__film__1" class="img__introduction__film1 " style="background-image: url('${imgFilm.url}');"></div>
            //             <div class="tick__slide">
            //                 <div class="slide__film__1"></div>
            //                 <div class="slide__film__2"></div>
            //                 <div class="slide__film__3"></div>
            //             </div>
            //         </div>
            //         <div class="home__film__content_wrap">
            //             <div class="home__film__content__title">
            //                3Trees-FILM
            //             </div>
            //             <div class="home__film__content__discription">
            //                 <div class="home__content__film">
            //                     ArtStation gives you a beautiful portfolio website! And because it's integrated fully into ArtStation, you don't have to worry about keeping it updated. As you post artwork, it will automatically post to your site.
            //                 </div>
            //                 <a href="film.html" class="home__btn__film">
            //                     Film
            //                     <div class="deco__btn__film"></div>
            //                     <div class="deco__btn__film2"></div>
            //                 </a>
            //             </div>
            //         </div>
            //     </div>`
        })
        // home__filmEl.innerHTML = htmlFilm.join('')
        
        time0 = setTimeout(() => {
            slide__film__2El.click()
        }, 8000);

        slide__film__1El.onclick = function() {
            currentImg = 1
            img__introduction__film1El.style.backgroundImage = "url(./asset/img/wlop-47se.jpg)"
            home__content__film1El.innerText = 'ArtStation gives you a beautiful portfolio website! And because itt have to worry about keeping it updated. As you post artwork, it will automatically post to your site. '
            slide__film__1El.style.width = '40px'
            slide__film__2El.style.width = '20px'
            slide__film__3El.style.width = '20px'

            if(currentImg === 1) {
                time1 = setTimeout(() => {
                    slide__film__2El.click()
                }, 8000);
            }
            window.clearTimeout(time2)
            window.clearTimeout(time3)
            


        }
        slide__film__2El.onclick = function() {
            currentImg = 2
            img__introduction__film1El.style.backgroundImage = "url(./asset/img/wl-.jpg)"
            home__content__film1El.innerText = 'ahahahah aha ha ah a'
            slide__film__1El.style.width = '20px'
            slide__film__2El.style.width = '40px'
            slide__film__3El.style.width = '20px'

            if(currentImg === 2) {
                time2 = setTimeout(() => {
                    slide__film__3El.click()
                }, 8000);
            }
            window.clearTimeout(time1)
            window.clearTimeout(time3)
            


        }
        slide__film__3El.onclick = function() {
            currentImg = 3
            img__introduction__film1El.style.backgroundImage = "url(./asset/img/wl-op-40se.jpg)"
            home__content__film1El.innerText = 'oho ohoh oh oh hohh o'
            slide__film__1El.style.width = '20px'
            slide__film__2El.style.width = '20px'
            slide__film__3El.style.width = '40px'

            if(currentImg === 3) {
                time3 =setTimeout(() => {
                    slide__film__1El.click()
                }, 8000);
            }
            window.clearTimeout(time1)
            window.clearTimeout(time2)


        }



    },
    slideImgMusic :function() {
        const slide = {
             
                currentImgMusic : 1,
                slidehandle : function () {
                    const slide__music__1El = $('.slide__music__1');
                    const slide__music__2El = $('.slide__music__2');
                    const slide__music__3El = $('.slide__music__3');
                    const home__content__music = $('.home__content__music');
                    const img__introduction__music = $('.img__introduction__music');

                    load = function() {
                        slide.currentImgMusic = 2
                                home__content__music.innerText = 'ngohongthong2'
                                     img__introduction__music.style.backgroundImage = "url(./asset/img/wlop-47se.jpg)"  
                                    slide__music__1El.style.width='20px'
                                    slide__music__2El.style.width='40px'
                                    slide__music__3El.style.width='20px'
                    }
                    load()

                        setInterval(() => {
                            slide.currentImgMusic += 1
                            if(slide.currentImgMusic > 3) {
                                slide.currentImgMusic = 1
                            }

                            slide__music__1El.onclick = function() {
                                slide.currentImgMusic = 1
                                home__content__music.innerText = 'ngohongthong1'
                                     img__introduction__music.style.backgroundImage = "url(./asset/img/wl-op-40se.jpg)"  
                                    slide__music__1El.style.width='40px'
                                    slide__music__2El.style.width='20px'
                                    slide__music__3El.style.width='20px'
                            }
                            slide__music__2El.onclick = function() {
                                slide.currentImgMusic = 2
                                home__content__music.innerText = 'ngohongthong2'
                                     img__introduction__music.style.backgroundImage = "url(./asset/img/wlop-47se.jpg)"  
                                    slide__music__1El.style.width='20px'
                                    slide__music__2El.style.width='40px'
                                    slide__music__3El.style.width='20px'
                            }
                            slide__music__3El.onclick = function() {
                                slide.currentImgMusic = 3
                                home__content__music.innerText = 'ngohongthong3'
                                     img__introduction__music.style.backgroundImage = "url(./asset/img/wl-.jpg)"  
                                    slide__music__1El.style.width='20px'
                                    slide__music__2El.style.width='20px'
                                    slide__music__3El.style.width='40px'
                            }



                            switch (slide.currentImgMusic) {
                                case 1:
                                     home__content__music.innerText = 'ngohongthong1'
                                     img__introduction__music.style.backgroundImage = "url(./asset/img/wl-op-40se.jpg)"  
                                     slide__music__1El.style.width='40px'
                                    slide__music__2El.style.width='20px'
                                    slide__music__3El.style.width='20px'
                                    break;
                                case 2:
                                     home__content__music.innerText = 'ngohongthong2'
                                     img__introduction__music.style.backgroundImage = "url(./asset/img/wlop-47se.jpg)"                
                                     slide__music__1El.style.width='20px'
                                    slide__music__2El.style.width='40px'
                                    slide__music__3El.style.width='20px'                           
                                    break;
                                case 3:
                                     home__content__music.innerText = 'ngohongthong3'
                                     img__introduction__music.style.backgroundImage = "url(./asset/img/wl-.jpg)"             
                                     slide__music__1El.style.width='20px'
                                    slide__music__2El.style.width='20px'
                                    slide__music__3El.style.width='40px'                          
                                    break;
                            }
                        }, 8000);
                    },
                    
                }
             slide.slidehandle()
    },
    slideImgArt :function() {
        console.warn("this is the first website so don't criticize me ^_^ ")
        console.log('ngoohngthong')

    },
    clickBtnIntroVsTutorial : function() {
        home__introductionEl = $('.home__introduction');
        home__tutorialEl = $('.home__tutorial');



        home__introductionEl.onclick = function () {
           
            console.log('ngohongthong')
      
        }

    },








    start : function() {
        // home.addLink()
        // home.slideImgFlim()
        // home.slideImgMusic()
        home.slideImgArt()
        home.clickBtnIntroVsTutorial()


    }
}
home.start()



