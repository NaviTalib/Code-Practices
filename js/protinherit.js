//PROTOTYPE INHERITANCE IN JS

const company = {
    slogan:function(){
        return `This is the best company`;
    },
    changeName:function(newName){
        this.name=newName;
    }

}
//Object.create():-

const myObj = Object.create(company);
myObj.name="my it company";
myObj.type="production";
myObj.changeName("flex it solution")
// console.log(myObj);

// Using call to chain constructors for an object:-

function factory(name,loctaion){
    this.name=name;
    this.loctaion=loctaion;
}
function cryp(name,loctaion){
    factory.call(this,name,loctaion);
    this.category="crypto"
}

const myFactory = new cryp("indcrypto","India");
console.log(myFactory);



