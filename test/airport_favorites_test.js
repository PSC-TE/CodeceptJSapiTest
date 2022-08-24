const airportData = require('../helper/airport_data')

Feature('Favorites airport')

Scenario('get favorites airports without token',async ({I})=>{
   
    const res = await I.sendPostRequest('/favorites',airportData.postData)
    console.log(res);
    I.seeResponseCodeIs(401)
})


Scenario.only('get favorites airports with token',async ({I})=>{
    // const header={
    //     'Authorization': 'Bearer GpfiEJfmJ4ufouKWZxmwpcM4',
    // }
    // I.haveRequestHeaders(header)
    
    let res =await I.sendPostRequest('favorites',airportData.postData)
    console.log(res.data.data);
    I.seeResponseCodeIs(201);
    
    let airportId = res.data.data.id;
    console.log(airportId);
    console.log('=============post request success==================');

    let getResponse =await I.sendGetRequest('favorites')
    console.log(getResponse.data.data);
    I.seeResponseCodeIsSuccessful();
    console.log('=============get request success==================');

    // I.haveRequestHeaders(header)
    let getRes =await I.sendGetRequest(`favorites/${airportId}`)
    console.log(getRes.data);
    
    // I.seeResponseCodeIs(200);
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(status).to.eql(200);
        expect(data.data).to.include.any.keys(['id', 'type']);
      });
    console.log('=============get favorite request success==================');

    
    
    // I.haveRequestHeaders(header)
    let patchRes = await I.sendPatchRequest(`/favorites/${airportId}`,airportData.payload)
    console.log(patchRes.data.data);
    I.seeResponseCodeIs(200)
    console.log('=============put request success==================');


    // I.haveRequestHeaders(header)
    await I.sendDeleteRequest(`favorites/${airportId}`)
    I.seeResponseCodeIs(204)
    console.log('=============delete request success==================');


    // I.haveRequestHeaders(header)
    await I.sendDeleteRequest('favorites/clear_all')
    I.seeResponseCodeIs(204)

})