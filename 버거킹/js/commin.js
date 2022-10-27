/* 1. pc버전 서브메뉴 관련 */
const menu = document.querySelector('.menu__main') //전체 메뉴
const subMenu = document.querySelectorAll('.list__drop') // 하위 메뉴
const panel = document.querySelector('header__panel') // 하위 메뉴 나올 때 나오는 판넬
const header = document.querySelector('.header') //전체 헤더

//하위 메뉴 보여줌
menu.addEventListener('mousehover', function(){
    panel.style.display = 'block';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'block'
    })
})

//마우스 떼면 하위 메뉴 숨김
header.addEventListener('mouseout', function(){
    panel.style.display = 'none';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'none'
    })
})
panel.addEventListener('mouseout',function(){
    panel.style.display = 'none';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'none'
    })
})

/* 2. 모바일 버전 메뉴 보이기, 숨기기 */
const Mhamburger = document.querySelector('.mobile.hamburger') //햄버거
const Mclose = document.querySelector('.mobile.close') //닫기 버튼 
const Mnav  = document.querySelector('.header__Mnav') // 모바일 메뉴 전체

Mhamburger.addEventListener('click',function(){
    Mnav.style.display = 'block'
})

Mclose.addEventListener('click',function(){
    Mnav.style.display = 'none'
})

/* 3. 모바일 하위 메뉴 보이기 숨기기 */
function showHide(e) {
    const MListDrop = e.children[2]; //내가 선택한 메뉴의 하위메뉴
    //const displayAttr = MListDrop.style.display
    const displayAttr = window.getComputedStyle(MListDrop).display\

    if (displayAttr === 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }

}

/* 4. width가 767px이상일 때 모바일 메뉴 보임 방지 */

window.addEventListener('resize',function(){
    let winwidtH = window.innerWidth

    if (winwidth >= 767) {
        Mnav.style
    }
})