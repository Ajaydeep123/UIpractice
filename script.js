let vElement = document.querySelector('.v');

let vImage = vElement.querySelector('.rcon-items>img');
let vContent = vElement.querySelector(`.rcon-content`);

let lElement = document.querySelector('.l');
let lheading = lElement.querySelector(`.rcon-content>span`)
let lImage = lElement.querySelector('.rcon-items>img');
let lContent = lElement.querySelector(`.rcon-content`);

let rElement = document.querySelector('.r');
let rheading = rElement.querySelector(`.rcon-content>span`);
let rImage = rElement.querySelector('.rcon-items>img');
let rContent = rElement.querySelector(`.rcon-content`);

lElement.addEventListener('click', function () {
  vElement.style.transform = 'translate(50%, 75%) rotate(-15deg) ';
  vElement.style.height = '400px';
  vImage.style.height = '175px';
  vContent.style.display = 'none';
// console.log(lheading)
    lElement.style.transform = 'translateX(00%)';
    lElement.style.height = '400px';
    lElement.style.textAlign = 'center';
    lImage.style.transform = `translateY(-00%)`;
    lImage.style.height = '300px';
    lheading.style.left =`-100%`;
    lheading.style.top = `140px`;
    lContent.style.opacity = '1';

    rElement.style.transform = 'translate(-250%,75%) rotate(360deg)';
    rImage.style.transform = `translateY(-00%)`;
});

rElement.addEventListener('click', function () {
  vElement.style.transform = 'translateX(-50%) rotate(-90deg)';
  vElement.style.height = '400px';
  vImage.style.transform = `translateY(-100%) rotate(-290deg)`;
  vImage.style.height = '175px';
  vContent.style.display = 'none';

  lElement.style.transform = 'translate(680px, 75%) ';
  lImage.style.transform = `translateY(-00%)`;
  lImage.style.height = '175px';
  lContent.style.display = 'none';

       rElement.style.transform = 'translateX(-100%)rotate(0deg)';
       rElement.style.height = '400px';
    //    rElement.style.textAlign = 'center';
       rImage.style.transform = `translateY(-00%)`;
       rImage.style.height = '300px';
       rheading.style.left = `-100%`;
       rheading.style.top = `140px`;
       rContent.style.opacity = '1'; 


});
