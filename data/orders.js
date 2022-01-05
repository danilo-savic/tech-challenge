"use strict";
exports.__esModule = true;
var MOCK_ORDERS = [
    {
        id: 1,
        date: new Date('2020-01-05'),
        employeeId: 1,
        voucherId: 6
    },
    {
        id: 2,
        date: new Date('2020-02-05'),
        employeeId: 1,
        voucherId: 6
    },
    {
        id: 3,
        date: new Date('2020-03-05'),
        employeeId: 1,
        voucherId: 1
    },
    {
        id: 4,
        date: new Date('2020-03-10'),
        employeeId: 1,
        voucherId: 2
    },
    {
        id: 5,
        date: new Date('2020-01-03'),
        employeeId: 2,
        voucherId: 5
    },
    {
        id: 6,
        date: new Date('2020-01-03'),
        employeeId: 2,
        voucherId: 5
    },
    {
        id: 7,
        date: new Date('2020-02-03'),
        employeeId: 2,
        voucherId: 5
    },
    {
        id: 8,
        date: new Date('2020-02-03'),
        employeeId: 2,
        voucherId: 5
    },
    {
        id: 9,
        date: new Date('2020-03-03'),
        employeeId: 2,
        voucherId: 5
    },
    {
        id: 10,
        date: new Date('2020-03-03'),
        employeeId: 2,
        voucherId: 5
    },
    {
        id: 11,
        date: new Date('2020-01-03'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 12,
        date: new Date('2020-01-04'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 13,
        date: new Date('2020-01-05'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 14,
        date: new Date('2020-01-06'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 15,
        date: new Date('2020-01-07'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 16,
        date: new Date('2020-01-08'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 17,
        date: new Date('2020-02-03'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 18,
        date: new Date('2020-02-03'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 19,
        date: new Date('2020-02-03'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 20,
        date: new Date('2020-02-03'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 21,
        date: new Date('2020-02-03'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 22,
        date: new Date('2020-02-03'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 23,
        date: new Date('2020-03-04'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 24,
        date: new Date('2020-03-04'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 25,
        date: new Date('2020-03-04'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 26,
        date: new Date('2020-03-04'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 27,
        date: new Date('2020-03-04'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 28,
        date: new Date('2020-03-04'),
        employeeId: 10,
        voucherId: 3
    },
    {
        id: 29,
        date: new Date('2020-01-08'),
        employeeId: 5,
        voucherId: 4
    },
    {
        id: 30,
        date: new Date('2020-02-03'),
        employeeId: 5,
        voucherId: 4
    },
    {
        id: 31,
        date: new Date('2020-03-04'),
        employeeId: 5,
        voucherId: 4
    },
    {
        id: 32,
        date: new Date('2020-01-07'),
        employeeId: 6,
        voucherId: 5
    },
    {
        id: 33,
        date: new Date('2020-02-05'),
        employeeId: 6,
        voucherId: 5
    },
    {
        id: 34,
        date: new Date('2020-03-14'),
        employeeId: 6,
        voucherId: 5
    },
    {
        id: 35,
        date: new Date('2020-01-05'),
        employeeId: 3,
        voucherId: 2
    },
    {
        id: 36,
        date: new Date('2020-01-05'),
        employeeId: 3,
        voucherId: 2
    },
    {
        id: 37,
        date: new Date('2020-02-05'),
        employeeId: 3,
        voucherId: 2
    },
    {
        id: 38,
        date: new Date('2020-02-05'),
        employeeId: 3,
        voucherId: 2
    },
    {
        id: 39,
        date: new Date('2020-03-05'),
        employeeId: 3,
        voucherId: 2
    },
    {
        id: 40,
        date: new Date('2020-03-05'),
        employeeId: 3,
        voucherId: 2
    },
    {
        id: 41,
        date: new Date('2020-01-07'),
        employeeId: 4,
        voucherId: 6
    },
    {
        id: 42,
        date: new Date('2020-02-03'),
        employeeId: 4,
        voucherId: 6
    },
    {
        id: 43,
        date: new Date('2020-03-04'),
        employeeId: 4,
        voucherId: 4
    },
    {
        id: 44,
        date: new Date('2020-02-03'),
        employeeId: 7,
        voucherId: 6
    },
    {
        id: 45,
        date: new Date('2020-03-04'),
        employeeId: 7,
        voucherId: 6
    },
    {
        id: 46,
        date: new Date('2020-01-07'),
        employeeId: 8,
        voucherId: 1
    },
    {
        id: 47,
        date: new Date('2020-01-07'),
        employeeId: 8,
        voucherId: 1
    },
    {
        id: 48,
        date: new Date('2020-02-05'),
        employeeId: 8,
        voucherId: 1
    },
    {
        id: 49,
        date: new Date('2020-02-05'),
        employeeId: 8,
        voucherId: 1
    },
    {
        id: 50,
        date: new Date('2020-02-05'),
        employeeId: 8,
        voucherId: 1
    },
];
exports["default"] = MOCK_ORDERS;
