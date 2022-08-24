
Feature('TestCases ');
let randomNum = Math.floor(Math.random()*10000)
let userId;
    Scenario.skip('Crud operation', async ({I}) => {
        const data ={
            email : `abc${randomNum}@sony.com`,
            name : `abc first name${randomNum}`,
            gender :"male",
            status : "active"
            }

            const dataForUpdate ={
                name : `automation${randomNum}`,
                gender : 'female',
                status : 'inactive'
            }
       
        let res= await I.sendPostRequest(`users`, data);
        console.log(res.data);
        console.log(res.status);
        I.seeResponseCodeIsSuccessful();
        I.seeResponseContainsJson(data);
        userId = res.data.id;
   
   
        let response2= await I.sendGetRequest(`users/${userId}`);
        console.log(response2.data);
        I.seeResponseCodeIs(200);

        let response3 = await I.sendPutRequest(`users/${userId}`,dataForUpdate)
        console.log(response3.data)
        I.seeResponseCodeIs(200)
        I.seeResponseContainsJson(dataForUpdate)

        let response4 = await I.sendDeleteRequest(`users/${userId}`);
        console.log(response4.data);
        I.seeResponseCodeIs(204);
    
});


Scenario.only('authentication Test', async ({ I }) => {
    let res = await I.sendGetRequest(`users?page=2`);
    console.log(res.data);
    I.seeResponseCodeIsSuccessful();
    I.seeResponseCodeIs(200);
    
});





