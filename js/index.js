function scrollfunction(){
    if(document.documentElement.scrollTop > 200){
        document.getElementById('navbar').classList.add('noTransparrent');
    }else{
        document.getElementById('navbar').classList.remove('noTransparrent');
    }
}
window.onscroll = function(){
    scrollfunction()
}



const scrollToTopButton = document.getElementById('scrollToTopButton');

// عرض الزر عند التمرير لأسفل بمقدار معين
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// التمرير إلى أعلى الصفحة عند النقر على الزر
scrollToTopButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0; // لمتصفحات حديثة
});



const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

// تعيين وضع الظلام باستناء
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // حفظ وضع الظلام في التخزين المحلي
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// تحقق من وضع الظلام المحفوظ في التخزين المحلي عند تحميل الصفحة
window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }
});


let counting = false;

// تابع لزيادة العداد
function increaseCount(targetElement, targetValue, increment, interval) {
    let currentCount = 0;
    const element = document.getElementById(targetElement);

    const updateCount = () => {
        if (currentCount < targetValue && counting) {
            currentCount += increment;
            element.textContent = currentCount;
            setTimeout(updateCount, interval);
        } else {
            element.textContent = targetValue;
        }
    };

    updateCount();
}

// تفعيل زيادة الأرقام عند الوصول إلى القسم
window.addEventListener('scroll', () => {
    const section = document.getElementById('statistics');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY;
    const triggerPoint = sectionTop + sectionHeight - window.innerHeight;

    if (scrollPosition >= triggerPoint && !counting) {
        counting = true; // تم تفعيل العداد
        // زيادة الأرقام هنا
        increaseCount('website-count', 30, 1, 90); // زيادة العداد الأول
        increaseCount('app-count', 170, 1, 20); // زيادة العداد الثاني
        increaseCount('user-count', 15, 1, 150); // زيادة العداد الثالث
        increaseCount('video-count', 100, 1, 30); // زيادة العداد الرابع
    }
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  document.getElementById('fullYear').innerHTML = new Date().getFullYear();