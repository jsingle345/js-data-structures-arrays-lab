// Write your solution here!


let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
};

destructivelyPrependDriver = (name) =>{
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

// destructivelyRemoveFirstDriver = () => {
//     drivers.shift();
// }

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name){
    const newDrivers = [...drivers, name]
    return newDrivers
}

function prependDriver(name){
    const newDrivers = [name, ...drivers]
    return newDrivers
}

function removeFirstDriver(){
   return drivers.slice(1);
}

function removeFirstDriver () {
    return drivers.slice(1);
  }

function removeLastDriver(){
    return drivers.slice(0, -1)
}