let randomNum = Math.floor(Math.random()*10000)

const dataForRandomUser = {
    email : `abc${randomNum}@sony.com`,
    name : `abc name${randomNum}`,
    gender :"male",
    status : "active"
     }

const dataForUpdate ={
    name : `automation${randomNum}`,
    gender : 'female',
    status : 'inactive'
    }

module.exports = {dataForRandomUser,dataForUpdate}
        