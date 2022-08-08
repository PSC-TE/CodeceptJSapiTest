const user_data = require ('../helper/user_data')


let userId

Feature('using random imported data');
    Scenario('Crud operation', async ({I}) => {
        let res= await I.sendPostRequest(`users`, user_data.dataForRandomUser);
        console.log(res.data);
        console.log(res.status);
        I.seeResponseCodeIsSuccessful();
        I.seeResponseContainsJson(user_data.dataForRandomUser);
        userId = res.data.id;
        console.log('------------------post operation successful----------------------');
       
        let response2= await I.sendGetRequest(`users/${userId}`);
        console.log(response2.data);
        I.seeResponseCodeIs(200);
        console.log('------------------get operation successful----------------------');

        let response3 = await I.sendPutRequest(`users/${userId}`,user_data.dataForUpdate)
        console.log(response3.data)
        I.seeResponseCodeIs(200)
        I.seeResponseContainsJson(user_data.dataForUpdate)
        console.log('------------------put operation successful----------------------');

        let response4 = await I.sendDeleteRequest(`users/${userId}`);
        console.log(response4.status);
        I.seeResponseCodeIs(204);
        console.log('------------------delete operation successful----------------------');

});
