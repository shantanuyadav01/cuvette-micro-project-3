const sample=require('./script.json')
// console.log(sample);
function food(fooditem){
    return (fooditem);
}
console.log(food(sample));
function vegetable(fooditem){
    return console.log(fooditem.filter(items=>items.category==='Vegetable'));
}
console.log(vegetable(sample))
function Fruit(fooditem){
    return console.log(fooditem.filter(items=>items.category==='Fruit'));
}
console.log(Fruit(sample));
function Protein(fooditem){
    return console.log(fooditem.filter(items=>items.category==='Protein'));
}
console.log(Protein(sample));
function Nuts(fooditem){
    return console.log(fooditem.filter(items=>items.category==='Nuts'));
}
console.log(Nuts(sample));
function Grain(fooditem){
    return console.log(fooditem.filter(items=>items.category==='Grain'));
}
console.log(Grain(sample));
function Dairy(fooditem){
    return console.log(fooditem.filter(items=>items.category==='Dairy'));
}
console.log(Dairy(sample));
function Calorie(fooditem){
    return console.log(fooditem.filter(items=>items.calorie>100));
}
console.log(Calorie(sample));
function calorie(fooditem){
    return console.log(fooditem.filter(items=>items.calorie<100));
}
console.log(calorie(sample));
function hightolowprotiens(fooditem){
    return console.log(fooditem.sort((a,b)=> b.protiens - a.protiens));
}
hightolowprotiens(sample)
function lowtohighcab(fooditem){
    return console.log(fooditem.sort((a,b)=> a.cab - b.cab));
}
lowtohighcab(sample)
