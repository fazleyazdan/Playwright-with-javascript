// playwright-mcp-api-product.spec.js
// Playwright API test for GET product details
const { test, expect, request } = require('@playwright/test');
const Ajv = require('ajv');

const ajv = new Ajv();

const productSchema = {
  type: 'object',
  required: ['id', 'title', 'price', 'category', 'description'],
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    price: { type: 'number' },
    category: { type: 'string' },
    description: { type: 'string' },
  },
};

test.describe('GET /products/1', () => {
  test('should return product details with valid schema', async ({ request }) => {
    const url = 'https://fakestoreapi.com/products/1';
    const response = await request.get(url);
    expect(response.status()).toBe(200);
    const body = await response.json();
    // Validate required keys
    for (const key of ['id', 'title', 'price', 'category', 'description']) {
      expect(body).toHaveProperty(key);
    }
    // Validate schema
    const validate = ajv.compile(productSchema);
    const valid = validate(body);
    expect(valid).toBe(true);
    // Log product title and price
    console.log(`Product title: ${body.title}`);
    console.log(`Product price: ${body.price}`);
  });
});

