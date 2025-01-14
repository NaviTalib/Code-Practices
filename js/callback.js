function orderPizza(type, callback){
    console.log("\n");
    console.log(`Ordering a ${type} pizza...`);

    setTimeout(() => {
        console.log(`${type} pizza is ready!`);
        callback();
    }, 2000);
}

function eatPizza(){
    console.log("Eating the pizza!");
}

orderPizza("cheese",eatPizza);
