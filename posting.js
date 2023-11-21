    // swiper opTab opConbody 
    const faqBtns = document.querySelectorAll('.faqTab > div');
    const faqConts = document.querySelectorAll('.conninn > div');

    faqBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        faqBtns.forEach(otherBtn => {
        otherBtn.classList.remove('active');
        });
        faqConts.forEach(othercont => {
        othercont.classList.remove('active');
        });
        faqBtns[index].classList.add('active');
        faqConts[index].classList.add('active');
        });
    });

    // ques open
    var acodian = {
      click: function(target) {
        var $target = $(target);
        $target.on('click', function() {

          if ($(this).hasClass('active')) {
            slideUp($target);
          } else {
            slideUp($target);
            $(this).addClass('active').next().slideDown();
          }

          function slideUp($target) {
            $target.removeClass('active').next().slideUp();
          }

        });
      }
    };
    acodian.click('.faq_box > .ques');

    // ask open
    var acodian = {
      click: function(target) {
        var $target = $(target);
        $target.on('click', function() {

          if ($(this).hasClass('active')) {
            slideUp($target);
          } else {
            slideUp($target);
            $(this).addClass('active').next().slideDown();
          }

          function slideUp($target) {
            $target.removeClass('active').next().slideUp();
          }

        });
      }
    };
    acodian.click('.ask_box > .ques');


    
    // select-menu
    const optionMenus = document.querySelector(".select-menu"),
        selectBtn = optionMenus.querySelector(".select-btn"),
        options = optionMenus.querySelectorAll(".option"),
        sBtn_text = optionMenus.querySelector(".sBtn-text");

        selectBtn.addEventListener("click", () => optionMenus.classList.toggle("active"));

        options.forEach(option =>{
        option.addEventListener("click",()=>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenus.classList.remove("active");
        })
    });

    // popup
        // open
        let faqpopbtn = document.querySelector(".faqpopbtn");
        faqpopbtn.addEventListener("click", function() {
        document.querySelector(".ask_finishform").style.display = "block";
        });
        // close
        let faqpopbtn_close = document.querySelector(".hide");
        faqpopbtn_close.addEventListener("click", function() {
        document.querySelector(".ask_finishform").style.display = "none";
        });

    // 마우스로 Draggable 참고 : https://codepen.io/rqsaiifh-the-flexboxer/pen/qBgXKrW
      const wrapper = document.querySelector(".drag");
      let isDragStart = false,
        prevPageX, prevScrollLeft;
      const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = wrapper.scrollLeft;
      };
      const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        wrapper.scrollLeft = prevScrollLeft - positionDiff;
      };
      const dragStop = () => {
        isDragStart = false;
      };
      wrapper.addEventListener("mousedown", dragStart);
      wrapper.addEventListener("mousemove", dragging);
      wrapper.addEventListener("mouseup", dragStop);