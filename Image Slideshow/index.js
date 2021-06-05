let imageNumber = 1;  // variable indicating current image's number

function move(n) {
    imageNumber += n;
    if(imageNumber < 1) { 
        imageNumber = 3;  // for going back to last slide 
    }else if(imageNumber > 3) {
        imageNumber = 1  // for going back to first slide 
    }
    changeSlideTo(imageNumber);
}

function slide(n) {
    imageNumber = n;  // goes to given slide number (i.e; n)
    changeSlideTo(imageNumber);
}

function changeSlideTo(num) {
    let images = document.querySelectorAll(".image");
    let dots = document.querySelectorAll(".dots span");

    for(let i=0;i<images.length;i++) {
        images[i].style.display = "none";  // making every image to be hidden
        dots[i].className = "";            // making every dot to be in-active
    }

    console.log("Num : ",num);
    images[num - 1].style.display = "block";  // displaying current image
    console.log(images[num-1].style.display)
    dots[num - 1].className = "active";       // making current dot to be active
}

changeSlideTo(imageNumber);  // displaying image for 1st time