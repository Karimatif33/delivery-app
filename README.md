# Run App
- 1 - npm i
- 2 - npm run start:dev
- 3 - app will run on http://localhost:3000/
- 4- follow the following routes
# Routes
- 1 - localhost:3000/api/youDeliverThis   Post new order
- 3 - localhost:3000/api/allOrders   Get all orders
- 4 - localhost:3000/api/:id   patch order (updateorder)
- 5 - localhost:3000/api/:id   Get single order
- 6 - localhost:3000/api/:id   Delete order

# Dashboard Directory Documentation

This documentation provides an overview of the files and code in the Dashboard directory. The Dashboard directory contains files and code related to managing orders.

## Files

The following files are included in the Dashboard directory:

- `app.controller.ts`: This file contains the controller for managing orders. It includes methods for getting all orders, getting a single order, adding an order, updating an order, and deleting an order.
- `app.module.ts`: This file contains the module for the Dashboard directory. It includes imports for the necessary modules and controllers.
- `app.service.ts`: This file contains the service for the Dashboard directory. It includes a method for getting a "Hello World" message.
- `orders.controller.ts`: This file contains the controller for managing orders. It includes methods for getting all orders, getting a single order, adding an order, updating an order, and deleting an order.
- `orders.module.ts`: This file contains the module for managing orders. It includes imports for the necessary modules and controllers.
- `orders.service.ts`: This file contains the service for managing orders. It includes methods for getting all orders, getting a single order, adding an order, updating an order, and deleting an order.

## Code

### app.service.ts

```typescript
getHello(): string {
  return 'Hello World!';
}

This method returns a "Hello World" message.
app.controller.ts

@Get()
getHello(): string {
  return this.appService.getHello();
}

This method returns the "Hello World" message from the app.service.ts file.
orders.service.ts

async getOrders() {
  // Retrieves all orders from the database
  // and maps them to a new object with specific properties.
}

async updateOrder(orderId: string, customerName: string, items_to_shipped: string, pickupLocation: string, deliveryLocation: string, status: string) {
  // Updates an order in the database with new information.
}

async insertOrder(customerName: string, desc: string, pickupLocation: string, deliveryLocation: string, status: string) {
  // Adds a new order to the database.
}

async deleteOrder(prodId: string) {
  // Deletes an order from the database.
}

async getSingleOrder(orderId: string) {
  // Retrieves a single order from the database by its ID.
}

These methods handle the CRUD operations for managing orders.
orders.controller.ts

@Get()
async getAllOrders() {
  // Retrieves all orders from the database and returns them.
}

@Post('youDeliverThis')
async addOrder() {
  // Adds a new order to the database with the specified properties.
}

@Patch(':id')
async updateOrder() {
  // Updates an existing order in the database with the specified properties.
}

@Delete(':id')
removeOrder() {
  // Deletes an existing order from the database.
}

@Get(':id')
getOrder() {
  // Retrieves a single order from the database by its ID and returns it.
}
These methods handle the HTTP requests related to orders.
Conclusion

The Dashboard directory contains files and code related to managing orders. The orders.service.ts file contains methods for retrieving, adding, updating, and deleting orders from the database. The orders.controller.ts file contains methods for handling HTTP requests related to orders. The other files in the directory provide necessary imports and dependencies for the service and controller.



