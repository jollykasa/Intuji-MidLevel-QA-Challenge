const { faker } = require('@faker-js/faker');
import path from 'path';


exports.user = {
    firstName: faker.person.firstName(),
    email : faker.internet.email(),
    password: faker.internet.password(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address : faker.location.streetAddress(),
    state : faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.imei(),
}