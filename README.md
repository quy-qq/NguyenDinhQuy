# NguyenDinhQuy

## Run

- npm install
- npm run start

#### API Get List Product (Filter And Sort)

Get:\_ http://localhost:3000/?filter={"price":1000}&order={"sortBy":"price", "orderBy":"asc" } \*

#### API Get Details Product (Filter And Sort)

Get:\_ http://localhost:3000/:id \*

#### API Create Product

Post: \_ http://localhost:3000/\* Body:{
"name":"test",
"price":1,
"quantity":3,
"description":"test create product",
}

#### API Update Product

Put: \_ http://localhost:3000/:id\* Body:{
"name":"test",
"price":1,
"quantity":3,
"description":"test create product",
}

#### API Delete Product

Delete: \_ http://localhost:3000/:id\*
