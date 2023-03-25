function person(name,age,gender,cls){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.cls=cls;
}

person.prototype.language="JavaScript";

const pdata = new person("talib",23,"M","BCA");

console.log(pdata);