console.log('person 1 : show tickets');
console.log('person2 : show tickets');
const premovie=async()=>{
    const promisewifebriningtick=new Promise((res,rej)=>{
        setTimeout(()=>res('tickets'),3000)
    })
    const getpopcorn=new Promise((res,rej)=>res('popcorn'));
    const getcandy=new Promise((res,rej)=>res('candy'));
    const getcoke=new Promise((res,rej)=>res('coke'))
    let ticket=await promisewifebriningtick;
    let[popcorn,candy,coke]=await Promise.all([getpopcorn,getcandy,getcoke])
    console.log(`${popcorn},${candy},${coke}`)
    return ticket;
}
premovie().then((m)=>console.log(`persorn 3:shows ${m}`));
console.log('person 4: show ticket');
console.log('person 5: show tickets');