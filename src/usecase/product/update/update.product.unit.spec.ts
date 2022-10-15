import ProductFactory from "../../../domain/product/factory/product.factory";
import UpdateProductUseCase from "./update.product.usecase";
const product = ProductFactory.create(
  "a",
  "Product A",
  100,
)

const input = {
  id: product.id,
  name: "John Updated",
  price: 200
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  };
};

describe("Unit test for product update use case", () => {
  it("should update a product", async () => {
    const productRepo = MockRepository();
    const updateProductUseCase = new UpdateProductUseCase(productRepo);

    const output = await updateProductUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
