// animation 
// let links = document.querySelectorAll("nav a");
// let box_Img = document.querySelector('.box-img');
// let box_Content = document.querySelector('.box-content');

// links.forEach(link => {
//     link.onclick = () => {
//         // console.log('xxx')
//         if(link.className='about'){
//             box_Img.classList.add('animation')
//         }
//     }
// })

// onscroll 
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             })
//         }
//     })

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);
//     header.classList.remove('show');
// }

let btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.onclick = () => {
        alert("hiện đang cập nhật")
    }
})
// let header = document.querySelector('header');
// window.onscroll = () => {
//     console.log('xin chaolll')
//     if (header.scrollHeight > 0) {
//         header.style.position = "fixed";
//     }
//     else{
//         header.style.position = "inherit";
//     }
// };