import request from "supertest";
import app from "../app";
import { ProductService } from "#services/product.service";

jest.mock("#services/product.service", () => ({
  ProductService: {
    getAll: jest.fn(),
  },
}));

jest.mock("#middlewares/upload.middlewares", () => ({
  upload: {
    single: () => (_req: unknown, _res: unknown, next: () => void) => next(),
  },
}));

describe("GET /api/products", () => {
  const mockedGetAll = jest.mocked(ProductService.getAll);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 and list of products", async () => {
    mockedGetAll.mockResolvedValue({
      products: [],
      currentPage: 1,
      totalItems: 0,
      totalPages: 0,
    });

    const res = await request(app).get("/api/products");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe("Daftar produk berhasil di ambil");
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toEqual([]);
    expect(res.body.pagination).toEqual({
      page: 1,
      limit: 10,
      total: 0,
    });
    expect(mockedGetAll).toHaveBeenCalledWith({
      page: 1,
      limit: 10,
      search: undefined,
      sortBy: undefined,
      sortOrder: "desc",
    });
  });

  it("should pass query params to ProductService.getAll", async () => {
    mockedGetAll.mockResolvedValue({
      products: [],
      currentPage: 2,
      totalItems: 0,
      totalPages: 0,
    });

    const res = await request(app).get(
      "/api/products?page=2&limit=5&sortBy=name&sortOrder=asc",
    );

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toEqual([]);
    expect(res.body.pagination).toEqual({
      page: 2,
      limit: 5,
      total: 0,
    });
    expect(mockedGetAll).toHaveBeenCalledWith({
      page: 2,
      limit: 5,
      search: undefined,
      sortBy: "name",
      sortOrder: "asc",
    });
  });
});
