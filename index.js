function createAdder(a){
    return  addA = (b) => a + b;
}

const add5 = createAdder(5);

module.exports = {add5};


