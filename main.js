function onScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll')
    }
    else if(scrollY == 0){
        navigation.classList.remove('scroll')
    }   
    
}

