function person(name,age,gender,cls){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.cls=cls;
}

const pdata = new person("Talib",23,"M","BCA");
console.log(pdata);