/**
 * @Author         : David Nguyễn <davidnguyen67dev@gmail.com>
 * @CreatedDate    : 2024-07-24 21:39:00
 * @LastEditors    : David Nguyễn <davidnguyen67dev@gmail.com>
 * @LastEditDate   : 2024-07-24 21:43:07
 * @FilePath       : love.js
 * @CopyRight      : Con chù chù 🥴🥴
 **/

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const startMusicButton = document.getElementById('startMusicButton');
  const backgroundMusic = document.getElementById('backgroundMusic');

  startMusicButton.addEventListener('click', function () {
    backgroundMusic.play();
    modal.style.display = 'none';
  });
});

$(window).on('load', function (event) {
  $('body').removeClass('preloading');
  $('.loadingLove').delay(1000).fadeOut('fast');

  function getHeart(e) {
    let ele = document.createElement('div');
    ele.className = 'element';
    document.querySelector('body').prepend(ele);
    ele.style.left = e.clientX + 'px';
    ele.style.top = e.clientY - 10 + 'px';
    setTimeout(() => {
      let text = document.querySelectorAll('.element')[0],
        directionX = Math.random() < 0.5 ? -1 : 1,
        directionY = Math.random() < 0.5 ? -1 : 1;

      text.style.left =
        parseInt(text.style.left) - directionX * (Math.random() * 100) + 'px';
      text.style.top =
        parseInt(text.style.top) - directionY * (Math.random() * 100) + 'px';
      text.style.opacity = 0;
      text.style.transform = 'scale(0.4)';
      text.innerHTML = '💗';
      text.style.zIndex = '100';

      setTimeout(() => {
        ele.remove();
      }, 1000);
    }, 10);
  }
  document.onmousemove = function (e) {
    getHeart(e);
  };
  document.onclick = function (e) {
    let ele = document.createElement('div');
    ele.className = 'heartRain';
    document.querySelector('body').prepend(ele);
    ele.style.left = e.clientX - 10 + 'px';
    ele.style.top = e.clientY - 10 + 'px';
    ele.innerHTML = '💗';
    setTimeout(() => {
      ele.style.top = 'calc(85% - 25px)';
    }, 100);
    setTimeout(() => {
      ele.style.opacity = 0;
    }, 3000);
    setTimeout(() => {
      ele.remove();
    }, 4000);
  };
  document.onmousedown = (e) => {
    getHeart(e);
  };

  const inputField = document.getElementById('inputField');
  const textToType = 'Phạm Thị Thảo';
  const typingSpeed = 100; // milliseconds per character

  let charIndex = 0;
  function typeText() {
    if (charIndex < textToType.length) {
      inputField.value += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
    if (inputField.value.length == textToType.length) {
      setTimeout(() => {
        document.querySelector('.buttonLove').style.transform =
          'translateY(0%)';
        document.querySelector('.cricleBtn').style.transform = 'scale(0.1)';
      }, 1000);
      setTimeout(() => {
        document.querySelector('.cricleBtn').style.transform = 'scale(1)';
        document.querySelector('.cricleBtn').innerHTML = '💗';
      }, 2000);
      setTimeout(() => {
        document.querySelector('.buttonLove').style.width = '120px';
        document.querySelector('.button').style.transform = 'translateX(25px)';
      }, 2500);
      setTimeout(() => {
        document.querySelector('.button').style.width = 'calc(100% - 25px)';
        document.querySelector('.button').style.height = '10px';
      }, 3000);
      setTimeout(() => {
        document.querySelector('.button').style.height = '30px';
      }, 3500);
      setTimeout(() => {
        document.querySelector('.button').innerHTML = 'Nhận thư';
      }, 4000);
    }
  }

  setTimeout(() => {
    typeText();
  }, 11500);
});

// .textLetter text h2
let indexText = 0;
let textLetter = document.querySelector('.textLetter h2');
const textLetterH2 = 'Gửi Phạm Thị Thảo 🥲';
let timoutTextLetter;

function textCharLetter() {
  if (indexText < textLetterH2.length) {
    textLetter.textContent += textLetterH2[indexText];
    indexText++;
    setTimeout(indexText, 100);
  } else {
    clearInterval(timoutTextLetter);
    setTimeout(() => {
      funcTimeoutLetterContent();
    }, 500);
  }
}
function funcTimeoutLetter() {
  indexText = 0; // Reset indexText
  textLetter.textContent = ''; // Xóa nội dung hiện tại của textLetter
  clearInterval(timoutTextLetter);
  timoutTextLetter = setInterval(() => {
    textCharLetter();
  }, 200);
}

// chữ của thư bạn muốn gửi
let indexTextContent = 0;
let textLetterContent = document.querySelector('.contentLetter');
let textLetterP = `Mày ơi? Mày mặc váy vào đi, để t đón đi chill, đường phố Hà Lội 😃`;
let timoutTextLetterContent;
function textCharLetterContent() {
  if (indexTextContent < textLetterP.length) {
    // Nếu ký tự hiện tại là '\n', thêm một thẻ <br> để xuống dòng
    if (textLetterP[indexTextContent] === '/') {
      textLetterContent.innerHTML += '<br>';
    } else {
      // Ngược lại, thêm ký tự vào nội dung hiện tại
      textLetterContent.textContent += textLetterP[indexTextContent];
    }
    // Tăng chỉ số ký tự
    indexTextContent++;
    // Gọi lại hàm sau 50ms
    textCharLetterContent && setTimeout(textCharLetterContent, 800);
  } else {
    // Nếu đã đạt đến cuối của văn bản, hủy bỏ setTimeout
    clearTimeout(timeoutTextLetterContent);
  }
}
function funcTimeoutLetterContent() {
  indexTextContent = 0; // Reset indexTextContent
  textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
  clearInterval(timoutTextLetterContent);
  timoutTextLetterContent = setInterval(() => {
    textCharLetterContent();
  }, 100);
}
//end
document
  .querySelector('.boxSlider .right')
  .addEventListener('click', function () {
    var slider = document.querySelectorAll('.slider');
    document.querySelector('.listSlider').appendChild(slider[0]);
  });
document
  .querySelector('.boxSlider .left')
  .addEventListener('click', function () {
    var slider = document.querySelectorAll('.slider');
    document.querySelector('.listSlider').prepend(slider[slider.length - 1]);
  });

document.querySelector('.buttonLove').addEventListener('click', function () {
  let timeout = setInterval(() => {
    var letters = document.createElement('div');
    letters.className = 'letters';
    letters.innerHTML = '<img src="../image/letters.png" alt="">';
    document.querySelector('body').prepend(letters);
    let left = Math.floor(Math.random() * 100);
    let rotate = Math.floor(Math.random() * 360);
    letters.style.left = left + '%';
    letters.style.top = '-10%';
    letters.style.transform = `rotate(${rotate}deg)`;
    setTimeout(() => {
      letters.style.top = '100%';
    }, 1000);
    setTimeout(() => {
      letters.remove();
    }, 11000);
    document.querySelectorAll('.letters').forEach((item) => {
      item.addEventListener('click', function () {
        clearInterval(timeout);
        $('.wrapperLetterForm').fadeIn();
        funcTimeoutLetter();
      });
    });
  }, 500);
});

document.querySelector('.fa-xmark').addEventListener('click', function () {
  indexTextContent = 0; // Reset indexTextContent
  textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
  clearInterval(timoutTextLetterContent);
  $('.wrapperLetterForm').fadeOut();
});
