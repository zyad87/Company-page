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
