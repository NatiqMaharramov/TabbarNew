let items = document.querySelector(".items");
let item = document.querySelectorAll(".item");
let image = document.querySelectorAll(".image");


// for (let i = 0; i < item.length; i++) {
//   item[i].addEventListener("click", () => {

//     for(let j=0;j<item.length;j++){
//         item[j].style.backgroundColor="white"
//         item[j].style.color="blue"
//     };

//     item[i].style.backgroundColor = "blue";
//     item[i].style.color = "white";

   

//   })

// } 

for(let i=0;i<item.length;i++){

    item[i].addEventListener('click',()=>{

        items.querySelector('.active').classList.remove('active')
        item[i].classList.add('active')
        let filterName=item[i].getAttribute('data-name')

      for(let i=0;i<image.length;i++){

            let filterImage=image[i].getAttribute('data-name')
            if(filterName===filterImage || filterName==='all'){

                image[i].classList.add('show')
                image[i].classList.remove('hide')
            }else{

                image[i].classList.remove('show')
                image[i].classList.add('hide')

            }

        }

    })
}
