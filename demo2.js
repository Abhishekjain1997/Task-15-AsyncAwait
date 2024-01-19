console.log('person 1 : show tickets');
console.log('person 2 : show tickets');
const premovie=async()=>{
    const promisewifebriningticket=new Promise((res,rej)=>{
        setTimeout(()=> res('tickets'),3000);
    });
        const getpopcorn=new Promise((res,rej)=>
        res('popcorn'))

        const addbutter=new Promise((res,rej)=>
        res('butter'))

        const getColdDrinks=new Promise((res,rej)=>
        res('colddrink'))
        let tickets =await promisewifebriningticket;
        console.log(`wife : i have the ${tickets}`);
        console.log('husband : we should go in');
        console.log('wife : no i am hungry')
        let popcorn=await getpopcorn ;
        console.log(`husband :i got some ${popcorn}`);
        console.log('husband :we should go in');
        console.log('Wife: i need some butter on my popcorn')
        let butter=await addbutter;
        console.log(`husband : i got some ${butter} on popcorn`)
        console.log('husband :anything else darling')
        console.log('wife : i need some colddrink')
        let colddrink=await getColdDrinks;
        console.log(`husband : i got some ${colddrink}`)
        console.log('husband :anything else darling')
        console.log('wife : lets go we are getting late')
        console.log('husband : thankyou for the reminder *grins*')
         
        return tickets
}

premovie().then((m)=>console.log(`person 3: show ${m}`))
console.log('person 4 :show tickets');
console.log('persin 5: show tickets');
