console.log('person 1 : show tickets');
console.log('person2 : show tickets');
const premovie=async()=>{
    const promisewifebriningtick=new Promise((res,rej)=>{
        setTimeout(()=>rej('tickets'),3000)
    })

    let ticket;
    try{
        ticket=await  promisewifebriningtick;
    }catch(err){
        ticket ='Sad Face'
    }
    return ticket;
}
premovie().then((m)=>console.log(`persorn 3:shows ${m}`));
console.log('person 4: show ticket');
console.log('person 5: show tickets');
