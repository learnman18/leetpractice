var createHelloWorld = function() {
    let arg= []
    return function(...args) {
        return 'Hello World'
    }
};

 const f = createHelloWorld();
 console.log(f());
 