let arr = [-100,1,9,17,1800,6,-1,0.5,0.555555555,7000,900,-600,500,46]

// 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 //
console.log('---Max---');
let max = ''
    for (let i = 0; i < arr.length; i++) {
        if (max>arr[i]) {
        } else{
            max=arr[i]
        }
    }
console.log(max);

// 2 // 2 // 2 // 2 // 2 // 2 // 2 // 2 // 2 // 2 // 2 // 2 //
console.log('---Min---');
let min = ''
for (let i = 0; i < arr.length; i++) {
    if (min<arr[i]) {       
    }  else{
        min=arr[i]
    }
}
console.log(min);

// 3 // 3 // 3 // 3 // 3 // 3 // 3 // 3 // 3 // 3 // 3 // 3 //
console.log('---Negative---');
let negative = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i]<0) {
        negative.push(arr[i])
        console.log(arr[i]);
    }  
}

// 4 // 4 // 4 // 4 // 4 // 4 // 4 // 4 // 4 // 4 // 4 // 4 //
console.log('---/3---');
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>0 && arr[i]%3==0) {
        console.log(arr[i]);
    }   
}

// 5 // 5 // 5 // 5 // 5 // 5 // 5 // 5 // 5 // 5 // 5 // 5 //
console.log('---Difference---');
let difference = max - min
console.log(difference);

// 6 // 6 // 6 // 6 // 6 // 6 // 6 // 6 // 6 // 6 // 6 // 6 //
console.log('---Average---');
let a = 0
let b = 0
for (let i = 0; i < negative.length; i++) {
    a = a + negative[i]  
    b = a/i 
}
console.log(b);

// 7 // 7 // 7 // 7 // 7 // 7 // 7 // 7 // 7 // 7 // 7 // 7 //
console.log('---/4---');
let arr4 = []
for (let i = 0; i <= 100; i++) {
    if (i%4==0) {
        arr4.push(i)
    }  
}
console.log(arr4);

// 8 // 8 // 8 // 8 // 8 // 8 // 8 // 8 // 8 // 8 // 8 // 8 //
console.log('---/2---');
let arr2 = []
for (let i = 0; i <= 100; i++) {
    if (i%2==0) {
        arr2.push(i)
    }
}
console.log(arr2);
let arrIndex = []
for (let i = 1; i < arr2.length; i=i+2) {
    arrIndex.push(arr2[i])  
}
console.log(arrIndex);

// 9 // 9 // 9 // 9 // 9 // 9 // 9 // 9 // 9 // 9 // 9 // 9 //
console.log('---xx---');
let xx = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>= 10 && arr[i]<= 99) {
        xx.push(arr[i])
    }
}
console.log(xx);

// 10 // 10 // 10 // 10 // 10 // 10 // 10 // 10 // 10 // 10 //
console.log('---<Length---');
let length = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i]<arr.length) {
        length.push(arr[i])
    }
}
console.log(length);

// 11 // 11 // 11 // 11 // 11 // 11 // 11 // 11 // 11 // 11 //
console.log('---Average /3---');
let c = 0
let d = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%3==0) {
        c = c + arr[i]
        d = c/i
    }
}
console.log(d);

// 12 // 12 // 12 // 12 // 12 // 12 // 12 // 12 // 12 // 12 //
console.log('---Odd---');
let e = 100
let arrOdd = []
for (let i = 0; i < e; i++) {
    if (i%2!==0) {
        arrOdd.push(i)
    }
}
let f = 0
for (let i = 0; i < arrOdd.length; i++) {
   f = f + arrOdd[i]    
}
console.log(f);

// 13 // 13 // 13 // 13 // 13 // 13 // 13 // 13 // 13 // 13 //
console.log('---^2---');
let arr5 = []
for (let i = 0; i <= 5; i++) {
    arr5.push(i)
}
for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]*arr5[i]);
}

// 14 // 14 // 14 // 14 // 14 // 14 // 14 // 14 // 14 // 14 //
let input = document.createElement('input')
document.body.append(input)
input.style.maxWidth = '400px'
input.style.width = '100%'
input.style.padding = '10px'
input.style.fontSize = '20px'
input.style.margin = '30px'
let btn = document.createElement('button')
document.body.append(btn)
btn.innerHTML = 'Add'
btn.style.fontSize = '20px'
btn.style.padding = '5px'
btn.style.cursor = 'pointer'
let array = []
let i = 1
btn.addEventListener('click',()=> {
    if (input.value !== '') {
        array.push(input.value)
        let block = document.createElement('div')
        document.body.append(block)
        block.style.maxWidth = '400px'
        block.style.margin = '0px 30px 30px 30px'
        block.style.display = 'flex'
        block.style.border = '1px solid black'
        block.style.display = 'flex'
        block.style.justifyContent = 'space-around'
        block.style.alignItems = 'center'
        block.innerHTML = `<p>${i}</p> <h4>${input.value}</h4>`
        input.value = ''
        i++
    }else{
        alert('Error')
    }
})







    