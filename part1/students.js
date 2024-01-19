const students = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 21},
    {name: 'Jane', age: 20}
];

const studentsInClass = {
    'math': [
        {name: 'Alice', age: 20},
        {name: 'Bob', age: 21},
        {name: 'Jane', age: 20}
    ],
    'physics': [
        {name: 'John', age: 21},
        {name: 'Jane', age: 20}
    ]
};

const serverResponse = {
    data: {
        products: [
            {id: 1, name: 'Iphone', price: 1000},
            {id: 2, name: 'Android', price: 900, options: [{color: 'red'}, {color: 'green'}]},
            {id: 3, name: 'Banana', price: "1.5"}
        ]
    },
    pagination: {
        total: 3,
        page: 1,
        perPage: 10
    }
};