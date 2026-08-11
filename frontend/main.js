let lis = document.querySelectorAll('ul li')

let exp = document.querySelector('.experiment')

lis.forEach((li)=>{
    li.addEventListener('click',(e) =>{
        
        lis.forEach((li) =>{
            li.classList.remove('active');
        })
        e.currentTarget.classList.add('active')


    })
})