//Assignment Feet to Mile

function ftToMile(feet) {
    let mile = feet / 5280;
    return mile;
}

let resultMile = (ftToMile(10000)).toFixed(6);
console.log(`Resultant Mile is ${resultMile}`);

//Assignment Wood Calculator

function woodCalculator(chair, table, bed){
    
    let totalWood = (chair *1) + (table * 3) + (bed * 5);
    return totalWood;
}

let result = woodCalculator(1, 2, 3)

console.log(`Total wood requires ${result}`)

//Assignment Brick Calculator

function brickCalculator(height){
    let totalFt;
    if(height >10 && height <= 20){
        totalFt = (10 * 15) + ((height - 10) * 12)
    }else if(height >20){
        totalFt = (10 * 15) + (10 * 12) + ((height - 20) * 10);
    }else {
        totalFt = height * 15
    }

    let totalBricks = totalFt * 1000;
    return totalBricks
}

let resultBrick = brickCalculator(25);
console.log(`Total Bricks Required is ${resultBrick}`)

//Assignment Tiny Friend

function tinyFriend(names){
    let length = names[0].length;
    let tinyFriend = names[0];
    for(i = 1; i <names.length; i++){
        if(length > names[i].length){
            tinyFriend = names[i];
            length = names[i].length;
        }
    }

    return tinyFriend;
}

let name = tinyFriend(['Moshiur', 'Masud', 'Saiful','AB', 'Jashim', 'Muntasirrahman', 'Abu']);
console.log(`Tiny Freind's name is ${name}`);