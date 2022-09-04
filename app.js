let flag = 0;

function controller(x){
     
    flag = flag+x;
    slider(flag); 
}

function slider(num){
    let slide = document.getElementsByClassName('slides');
    for(let img of slide){
        img.style.display = 'none';
    }
    if(num == slide.length){
        num=0;
        flag=0;
    }
    if(num < 0){
        flag = slide.length-1;
        num = slide.length-1;
    }

    slide[num].style.display = 'block';
}
slider(flag);