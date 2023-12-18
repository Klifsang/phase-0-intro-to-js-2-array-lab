// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name)=>{
    return cats.push(name);
}

const destructivelyPrependCat = (name)=>{
    return cats.unshift(name);
}

const destructivelyRemoveLastCat = ()=>{
    return cats.pop();
}

const destructivelyRemoveFirstCat = () =>{
    return cats.shift();
}

const appendCat = (name)=>{
    return [...cats,name];
}

const prependCat = (name)=>{
    return [name,...cats]
}

const removeLastCat = ()=>{
    let newCatsArr = [...cats];
    newCatsArr.pop();
    return newCatsArr;
}

const removeFirstCat = () =>{
    let newCatsArr = [...cats];
    newCatsArr.shift();
    return newCatsArr;
}