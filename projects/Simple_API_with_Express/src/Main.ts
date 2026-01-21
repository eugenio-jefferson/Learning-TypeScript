import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

const products: Object[] = [];

app.get("/products", (request: Request, response: Response) => {
  response.status(200).json({
    products: products,
  });
});

app.post("/products", (request: Request, response: Response) => {
  const body = request.body;
  
  const newProduct = {
    id: crypto.randomUUID(),
    name: body.name,
    description: body.description,
    price: body.price,
  };
  
  products.push(newProduct);

  response.status(201).json({
    message: "Product created successfully",
    product: newProduct,
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
