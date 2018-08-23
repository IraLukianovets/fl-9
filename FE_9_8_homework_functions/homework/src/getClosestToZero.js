function getClosestToZero(...arguments){
    
    let current = 0;
    let near = arguments[0]; 

    for (let i = 0; i < arguments.length; i++) {
       
        current = arguments[i] * arguments[i];
        if (current <= near * near) {
            near = arguments[i];
        }
    }
    return near;
}

