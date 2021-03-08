$(function() {
    $(".toggle").on("click", function() {
        if ($(".items").hasClass("active")) {
            $(".items").removeClass("active");
        } else {
            $(".items").addClass("active");
        }
    });
});

// Get DOM Elements
const modal = document.querySelector('#audience-modal-pdf');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

const modal2 = document.querySelector('#audience-modal-video');
const modalBtn2 = document.querySelector('#modal-btn2');
const closeBtn2 = document.querySelector('.close2');

const modal3 = document.querySelector('#onlineclass-modal-pdf');
const modalBtn3 = document.querySelector('#modal-btn3');
const closeBtn3 = document.querySelector('.close3');

const modal4 = document.querySelector('#onlineclass-modal-video');
const modalBtn4 = document.querySelector('#modal-btn4');
const closeBtn4 = document.querySelector('.close4');

const modal5 = document.querySelector('#onlineexam-modal-pdf');
const modalBtn5 = document.querySelector('#modal-btn5');
const closeBtn5 = document.querySelector('.close5');

const modal6 = document.querySelector('#onlineexam-modal-video');
const modalBtn6 = document.querySelector('#modal-btn6');
const closeBtn6 = document.querySelector('.close6');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);

modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);

modalBtn4.addEventListener('click', openModal4);
closeBtn4.addEventListener('click', closeModal4);

modalBtn5.addEventListener('click', openModal5);
closeBtn5.addEventListener('click', closeModal5);

modalBtn6.addEventListener('click', openModal6);
closeBtn6.addEventListener('click', closeModal6);
// Open
function openModal() {
  modal.style.display = 'block';
}

function openModal2() {
    modal2.style.display = 'block';
  }

function openModal3() {
    modal3.style.display = 'block';
  }
  
function openModal4() {
      modal4.style.display = 'block';
    }

function openModal5() {
      modal5.style.display = 'block';
    }
    
function openModal6() {
        modal6.style.display = 'block';
      }


// Close
function closeModal() {
  modal.style.display = 'none';
}

function closeModal2() {
    modal2.style.display = 'none';
  }

function closeModal3() {
    modal3.style.display = 'none';
  }
  
function closeModal4() {
      modal4.style.display = 'none';
    }

function closeModal5() {
      modal5.style.display = 'none';
    }
    
function closeModal6() {
        modal6.style.display = 'none';
      }




