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
