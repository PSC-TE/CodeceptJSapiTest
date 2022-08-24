// let url = 'https://airportgap.dev-tester.com/api'
require('dotenv').config();


Feature('airport api check')
Scenario('get user',async ({I})=>{
    // I.amBearerAuthenticated('Authorization','Bearer GpfiEJfmJ4ufouKWZxmwpcM4')
    // I.haveRequestHeaders({page : 203})
    
    let res = await I.sendGetRequest(`airports`)
    // console.log(I._url);
    
    console.log(res.data.data);
    I.seeResponseCodeIs(200);
    I.assertEqual(res.data.data.length,30)
    console.log("===============================================");
    // let res2= await I.sendGetRequest(res.data.links.next)
    // console.log(res2.data.data);
    
    });
    
Scenario('post/airports/distance', async ({I})=>{
    const data={
        from: 'KIX', 
        to: 'SFO'
    }   
    const res = await I.sendPostRequest(`airports/distance`,data);  
    
    // I.seeResponseCodeIs(200);
    console.log(res.data.data);  
    let status =res.status
    console.log(status); 
    I.assertEqual(status,200)
    let city= res.data.data.attributes.from_airport.city
    I.assertEqual(city,'Osaka')
    // I.expect(city).to.equal('Osaka');
    
    })

Scenario('generate token',async ({I})=>{
    const loginData ={
        email : process.env.airport_EMAIL,
        password : process.env.airport_PASS
    }

    const res = await I.sendPostRequest('tokens', loginData)
    I.seeResponseCodeIs(200);
    console.log(res.data)
    
})

