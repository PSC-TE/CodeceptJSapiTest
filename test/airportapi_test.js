// let url = 'https://airportgap.dev-tester.com/api'


Feature('airport api check')
Scenario('get user',async ({I})=>{
    I.amBearerAuthenticated('Authorization','Bearer GpfiEJfmJ4ufouKWZxmwpcM4')
    await I.sendGetRequest(`airports`)
    I.seeResponseCodeIs(200);
    });
    
Scenario.only('post/airports/distance', async ({I})=>{
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
    I.expect(city).to.equal('Osaka');
    
    })

Scenario('generate token',async ({I})=>{
    const loginData ={
        email : 'psc26dec@gmail.com',
        password : 'Psc@2612'
    }

    const res = await I.sendPostRequest('tokens', loginData)
    I.seeResponseCodeIs(200);
    console.log(res.data)
    
}