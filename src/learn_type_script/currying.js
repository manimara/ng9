function add(a){
    const next = function(...args){
        return function(x){
   /*          if(!x){
                return args.reduce((acc, a) => acc + a);
            }
            else{
                return next(...args, x)
            } */
            return args.reduce(function(total, c){
                return total + c;
            }, 0);
        }   
    }
    return next();
}
/* 
console.log(
    add(1),
    add(1)(2),
    add(1)(2)(3)); */


    const infiniteCurry = fn => {
        const next = (...args) => {
          return x => {
            if (!x) {
              return args.reduce((acc, a) => {
                return fn.call(fn, acc, a)
              }, 0);
            }
            return next(...args, x);
          };
        };
        return next();
      };
      
    //   const iSum = infiniteCurry((x, y) => x + y);
    //   console.log(iSum(1)(3)(4)(2)());
    //   console.log(iSum(1)(3)(4)(2)(15));
    //   console.log(iSum(1)(3)());


      function add(x){
        let sum = x;
        function fn(y){
            sum += y;
            return fn;
        }
        fn.valueOf = function(){
                return sum;
        };
        return fn;
    }

    console.log(add(1)(3)(4)(2)(15));