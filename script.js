function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
  
            // 전기수는 여기에 왜 네비오븐을 넣지??
            //-------------------------------------
            // fooer
          // dropdown
          const optionMenu = document.querySelector(".ffdropdown"),
            selectBtn = optionMenu.querySelector(".select_btn"),
            options = optionMenu.querySelectorAll(".foption"),
            title = optionMenu.querySelector(".setitle");
            selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
            options.forEach(option => {
            option.addEventListener("click", () => {
                let selectedOption = option.querySelector(".option_text").innerText;
                title.innerText = selectedOption;
                optionMenu.classList.remove("active");
            })
        });

        // option select 중복가능
        const selectBoxElements = document.querySelectorAll(".select");
  
        function toggleSelectBox(selectBox) {
            selectBox.classList.toggle("active");
        }

        function selectOption(optionElement) {
            const selectBox = optionElement.closest(".select");
            const selectedElement = selectBox.querySelector(".btn-tt");
            selectedElement.textContent = optionElement.textContent;
        }

        selectBoxElements.forEach(selectBoxElement => {
            selectBoxElement.addEventListener("click", function (e) {
                const targetElement = e.target;
                const isOptionElement = targetElement.classList.contains("option-tt");

                if (isOptionElement) {
                    selectOption(targetElement);
                }

                toggleSelectBox(selectBoxElement);
            });
        });

        document.addEventListener("click", function (e) {
            const targetElement = e.target;
            const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

            if (isSelect) {
                return;
            }

            const allSelectBoxElements = document.querySelectorAll(".select");

            allSelectBoxElements.forEach(boxElement => {
                boxElement.classList.remove("active");
            });
        }); 

            // search
              // search_open
              let search_open = document.querySelector("#search_open");
              search_open.addEventListener("click", function () {
              document.querySelector("#search_content").style.display = "flex";
              });
              // search_close
              let search_close = document.querySelector("#search_close");
              search_close.addEventListener("click", function () {
              document.querySelector("#search_content").style.display = "none";
              document.querySelector("#search_open").style.display = "flex";
              });
  
            // nav
              // nav_open
              let nav_open = document.querySelector("#nav_open");
              nav_open.addEventListener("click", function () {
              document.querySelector("#nav_content").style.display = "flex";
              });
              // nav_close
              let nav_close = document.querySelector("#nav_close");
              nav_close.addEventListener("click", function () {
              document.querySelector("#nav_content").style.display = "none";
              document.querySelector("#nav_open").style.display = "flex";
              });
  
  
            // header scroll
            let section = document.querySelectorAll("article");
              let menu = document.querySelectorAll("header nav a");
          
              window.onscroll = () => {
              section.forEach((i) => {
                  let top = window.scrollY;
                  let offset = i.offsetTop - 150;
                  let height = i.offsetHeight;
                  let id = i.getAttribute("id");
          
                  if (top >= offset && top < offset + height) {
                  menu.forEach((link) => {
                      link.classList.remove("active");
                      document
                      .querySelector("header nav a[href*=" + id + "]")
                      .classList.add("active");
                  });
                  }
              });
            };
  
  
            // reveal
            function reveal() {
                var reveals = document.querySelectorAll(".reveal");
            
                for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
            
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
                }
            }
            window.addEventListener("scroll", reveal);
            // To check the scroll position on page load
            reveal();
  
  
            // seawrapper 최근 검색어 슬라이드
            $('.seawrapper').slick({
              infinite: true,
              slidesToShow: 4.5,
              // slidesToScroll: 1,
            });
  
            // nav bannerwrapper swiper
            let menuconmainSwiper = new Swiper(".banneswiper", {
                rewind: true,
                speed: 600,
                parallax: true, // 스무스 코드
                grabCursor: true,
                // effect: 'fade',
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // navigation: {
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev",
                // },
              });
  
            //Add scroLL event Listener to the page
            const header = document.getElementById('navBar');
            const menutop = document.querySelector('.hea_top');
            const offset = 50;
            const pcnav = document.querySelector('.pc-nav ul');
            // const search = document.querySelector('.search_open');
  
  
            window.addEventListener("scroll", () => {
                //if the page is scroLLed by 50px or more
                if (pageYOffset > offset) {
                    //Activate navbar
                    header.classList.add('active');
                    menutop.classList.add('active');
                    pcnav.classList.add('active');
                } else {
                    //Deactivate navbar
                    header.classList.remove('active');
                    menutop.classList.remove('active');
                    pcnav.classList.remove('active');
                }
            });
  
  
            // swiper-slid parallax
            const swiper01 = new Swiper(".mainContentSwiper", {
                rewind: true,
                speed: 600,
                parallax: true, // 스무스 코드
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                // navigation: {
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev",
                // },
                autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                },    
            });
  
  
            // tab-container
              const tabBtns = document.querySelectorAll('.mainTab > li');
              const tabConts = document.querySelectorAll('.tab-container > div');
  
              tabBtns.forEach((btn, index) => {
              btn.addEventListener('click', () => {
                  tabBtns.forEach(otherBtn => {
                  otherBtn.classList.remove('active');
                  });
                  tabConts.forEach(othercont => {
                  othercont.classList.remove('active');
                  });
                  tabBtns[index].classList.add('active');
                  tabConts[index].classList.add('active');
                  });
              });
  
  
            // tab-containerSub 01
            const subtabBtns01 = document.querySelectorAll('.subTab01 > li');
            const subtabConts01 = document.querySelectorAll('.tab-containerSub01 > div');
  
            subtabBtns01.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                subtabBtns01.forEach(otherBtn01 => {
                otherBtn01.classList.remove('activeSub01');
                });
                subtabConts01.forEach(othercont01 => {
                othercont01.classList.remove('activeSub01');
                });
                subtabBtns01[index].classList.add('activeSub01');
                subtabConts01[index].classList.add('activeSub01');
                });
            });
  
  
            // tab-containerSub 02
            const subtabBtns02 = document.querySelectorAll('.subTab02 > li');
            const subtabConts02 = document.querySelectorAll('.tab-containerSub02 > div');
  
            subtabBtns02.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                subtabBtns02.forEach(otherBtn => {
                otherBtn.classList.remove('activeSub02');
                });
                subtabConts02.forEach(othercont => {
                othercont.classList.remove('activeSub02');
                });
                subtabBtns02[index].classList.add('activeSub02');
                subtabConts02[index].classList.add('activeSub02');
                });
            });
  
  
            // tab-containerSub 03
            const subtabBtns03 = document.querySelectorAll('.subTab03 > li');
            const subtabConts03 = document.querySelectorAll('.tab-containerSub03 > div');
  
            subtabBtns03.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                subtabBtns03.forEach(otherBtn => {
                otherBtn.classList.remove('activeSub03');
                });
                subtabConts03.forEach(othercont => {
                othercont.classList.remove('activeSub03');
                });
                subtabBtns03[index].classList.add('activeSub03');
                subtabConts03[index].classList.add('activeSub03');
                });
            });
  
  
            // tab-containerSub 04
            const subtabBtns04 = document.querySelectorAll('.subTab04 > li');
            const subtabConts04 = document.querySelectorAll('.tab-containerSub04 > div');
  
            subtabBtns04.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                subtabBtns04.forEach(otherBtn => {
                otherBtn.classList.remove('activeSub04');
                });
                subtabConts04.forEach(othercont => {
                othercont.classList.remove('activeSub04');
                });
                subtabBtns04[index].classList.add('activeSub04');
                subtabConts04[index].classList.add('activeSub04');
                });
            });
  
  
            // 탭 부분 마우스 스크롤 subTab01
            //참고 https://youtu.be/7HPsdVQhpRw?si=zLk1jcAjIZWnKtwy
            const subTabwrapper01 = document.querySelector(".subTab");
  
            const dragStart = (e) => {
                isDragStart = true;
                prevPageX = e.pageX;
                prevScrollLeft = subTabwrapper01.scrollLeft;
            }
  
            const dragging = (e) => {
                if(!isDragStart) return;
                e.preventDefault();
                let positionDiff = e.pageX - prevPageX;
                subTabwrapper01.scrollLeft = prevScrollLeft - positionDiff;
            }
  
            const dragStop = () => {
                isDragStart = false;
            }
  
            subTabwrapper01.addEventListener("mousedown", dragStart);
            subTabwrapper01.addEventListener("mousemove", dragging);
            subTabwrapper01.addEventListener("mouseup", dragStop);
  
  
            // 탭 부분 마우스 스크롤 subTab02
            //참고 https://youtu.be/7HPsdVQhpRw?si=zLk1jcAjIZWnKtwy
            const subTabwrapper02 = document.querySelector(".subTab02");
            
            // let isDragStart = false, prevPageX, prevScrollLeft;
            // 왜 위에꺼 지우니까 중복이 될까 -> 여태 뭐가 문제인지 두번째 서브탭부터 마우스 스크롤이 안먹혔었음
  
            const dragStart02 = (e) => {
                isDragStart = true;
                prevPageX = e.pageX;
                prevScrollLeft = subTabwrapper02.scrollLeft;
            }
  
            const dragging02 = (e) => {
                if(!isDragStart) return;
                e.preventDefault();
                let positionDiff = e.pageX - prevPageX;
                subTabwrapper02.scrollLeft = prevScrollLeft - positionDiff;
            }
  
            const dragStop02 = () => {
                isDragStart = false;
            }
  
            subTabwrapper02.addEventListener("mousedown", dragStart02);
            subTabwrapper02.addEventListener("mousemove", dragging02);
            subTabwrapper02.addEventListener("mouseup", dragStop02);
  
            // 탭 부분 마우스 스크롤 subTab03
            //참고 https://youtu.be/7HPsdVQhpRw?si=zLk1jcAjIZWnKtwy
            const subTabwrapper03 = document.querySelector(".subTab03");
            
            // let isDragStart = false, prevPageX, prevScrollLeft;
  
            const dragStart03 = (e) => {
                isDragStart = true;
                prevPageX = e.pageX;
                prevScrollLeft = subTabwrapper03.scrollLeft;
            }
  
            const dragging03 = (e) => {
                if(!isDragStart) return;
                e.preventDefault();
                let positionDiff = e.pageX - prevPageX;
                subTabwrapper03.scrollLeft = prevScrollLeft - positionDiff;
            }
  
            const dragStop03 = () => {
                isDragStart = false;
            }
  
            subTabwrapper03.addEventListener("mousedown", dragStart);
            subTabwrapper03.addEventListener("mousemove", dragging03);
            subTabwrapper03.addEventListener("mouseup", dragStop03);
  
            // 탭 부분 마우스 스크롤 subTab04
            //참고 https://youtu.be/7HPsdVQhpRw?si=zLk1jcAjIZWnKtwy
            const subTabwrappe04 = document.querySelector(".subTab04");
            
            // let isDragStart = false, prevPageX, prevScrollLeft;
  
            const dragStart04 = (e) => {
                isDragStart = true;
                prevPageX = e.pageX;
                prevScrollLeft = subTabwrappe04.scrollLeft;
            }
  
            const dragging04 = (e) => {
                if(!isDragStart) return;
                e.preventDefault();
                let positionDiff = e.pageX - prevPageX;
                subTabwrappe04.scrollLeft = prevScrollLeft - positionDiff;
            }
  
            const dragStop04 = () => {
                isDragStart = false;
            }
  
            subTabwrappe04.addEventListener("mousedown", dragStart04);
            subTabwrappe04.addEventListener("mousemove", dragging04);
            subTabwrappe04.addEventListener("mouseup", dragStop04);
  

            // 할부 계산기
          const slider = document.getElementById("myRange");
          const output = document.getElementById("demo");
          const pst = document.getElementById("myRange1");
          const value = document.getElementById("value");
              output.innerHTML = slider.value;
  
              slider.oninput = function () {
                  output.innerHTML = this.value;
              }
  
              
              value.textContent = pst.value;
              pst.oninput = function () {
                  value.textContent = this.value;
              }
  
              function btnPay() {
                  alert('서비스 준비중 입니다.');
              };
  
  
          // event Swiper
          const swiper03 = new Swiper(".eventthumbsSlider", {
              rewind: true,
              spaceBetween: 7,
              slidesPerView: 4, // 사이즈별로 보여지는거 있는데..
              parallax: true,
              speed: 900,
              freeMode: true,
              watchSlidesProgress: true,
              autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
              },
          });
          const swiper04 = new Swiper(".eventSwiper", {
              rewind: true,
              spaceBetween: 7,
              slidesPerView: 1,
              breakpoints: {
                  1366: {
                  slidesPerView: 2,//1366px 이상일 때 3개
                  }
              },
              parallax: true,
              speed: 900,
              thumbs: {
                  swiper: swiper03,
              },
              pagination: {
              el: ".swiper-pagination",
              clickable: true,
              },
              autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
              },
          });

          // bestmore open
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
            acodian.click('.bestmorebtn');

            // newKia swiper-slid 1366px에서는 작동X
            // event 스와이퍼가 먹히지 않아서 아래로 내렸더니 해결됐음
            var ww = $(window).width();
            const mySwiper = undefined;

            function initSwiper() {

            if (ww < 1366 && mySwiper == undefined) {
                mySwiper = new Swiper(".newKiaSwiper", {
                    slidesPerView: 1,
                    spaceBetween: 3,
                    simulateTouch: true,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    
                });
            } else if (ww >= 1366 && mySwiper == undefined) {
                mySwiper = new Swiper(".newKiaSwiper", {
                    breakpoints: {
                        1366: {
                        slidesPerView: 3,//1366px 이상일 때 3개
                        }
                    },
                });
                mySwiper.destroy();
                mySwiper = undefined;

                }
            };

            initSwiper();

            $(window).on('resize', function () {
            ww = $(window).width();
            initSwiper();
            });

          
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };
  
  
  
  
  
  
  
  