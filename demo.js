console.log('person 1: show ticket');
console.log('person 2: show ticket');
const promisewifebringiningticket = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('ticket');
    },3000)
})
const getpopcorn=promisewifebringiningticket.then((t)=>{
    console.log('wife : i have tick')
    console.log('husband : we should go in')
    console.log('wife :no i am hungry')
    return new Promise((res,rej) =>
        res(`${t}popcorn`))
    })
const getbutter=getpopcorn.then((t)=>{
    console.log('husband : i got some popcorn');
    console.log('husband : we should go in');
    console.log('wife : i need butter on my popcorn')
    return new Promise((res,rej)=>
    res(`${t}butter`))
})
getbutter.then((t)=>console.log(t))
console.log('person 4: show tickets')
console.log('person 5 : show tickets')