setInterval(mufun, 1000);
function mufun() {
  let b1 = document.getElementById("on");
  let b2 = document.getElementById("off");
  let view = document.getElementById("view");

  b1.addEventListener("click", function () {
    if ((view.style.display = "none")) {
      view.style.display = "block";

    }
  })

  b2.addEventListener("click", function () {
    if ((view.style.display = "block")) {
      view.style.display = "none";
    }
  })
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.newheader');
  if (window.scrollY > 100) { // Adjust the threshold as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.querySelectorAll('.classhead').forEach(head => {
  head.addEventListener('click', () => {
    const detail = head.nextElementSibling;
    const plusIcon = head.querySelector('.fa-plus');
    const minusIcon = head.querySelector('.fa-minus');

    document.querySelectorAll('.classhead').forEach(otherHead => {
      if (otherHead !== head) {
        const otherDetail = otherHead.nextElementSibling;
        const otherPlusIcon = otherHead.querySelector('.fa-plus');
        const otherMinusIcon = otherHead.querySelector('.fa-minus');

        otherDetail.classList.remove('show');
        otherPlusIcon.style.display = 'inline';
        otherMinusIcon.style.display = 'none';
      }
    });

    detail.classList.toggle('show');

    if (detail.classList.contains('show')) {
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'inline';
    } else {
      plusIcon.style.display = 'inline';
      minusIcon.style.display = 'none';
    }
  });
});

document.querySelectorAll('.faqhead').forEach(head => {
  head.addEventListener('click', () => {
    const detail = head.nextElementSibling;
    const plusIcon = head.querySelector('.fa-caret-down');
    const minusIcon = head.querySelector('.fa-caret-up');

    document.querySelectorAll('.faqhead').forEach(otherHead => {
      if (otherHead !== head) {
        const otherDetail = otherHead.nextElementSibling;
        const otherPlusIcon = otherHead.querySelector('.fa-caret-down');
        const otherMinusIcon = otherHead.querySelector('.fa-caret-up');

        otherDetail.classList.remove('show');
        otherPlusIcon.style.display = 'inline';
        otherMinusIcon.style.display = 'none';
      }
    });

    detail.classList.toggle('show');

    if (detail.classList.contains('show')) {
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'inline';
    } else {
      plusIcon.style.display = 'inline';
      minusIcon.style.display = 'none';
    }
  });
});