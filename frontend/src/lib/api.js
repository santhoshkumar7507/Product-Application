import api from "./axios";

// USERS API
export const syncUser = async (userData) => {
  const { data } = await api.post("/users/sync", userData);
  return data;
};

// Products API
const dummyProducts = [
  {
    id: "prod_1",
    title: "Aura Noise-Cancelling Headphones",
    description: "Experience silence like never before. High-fidelity audio combined with industry-leading active noise cancellation.",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date().toISOString(),
    user: { name: "AudioTech", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AudioTech" },
    comments: [{ id: 1, content: "Amazing sound quality!", user: { name: "John", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" }, createdAt: new Date().toISOString() }]
  },
  {
    id: "prod_2",
    title: "Minimalist Mechanical Keyboard",
    description: "A sleek, low-profile mechanical keyboard designed for both productivity and gaming aesthetics. Features tactile RGB switches.",
    price: 149.50,
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date().toISOString(),
    user: { name: "KeyMaster", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=KeyMaster" },
    comments: []
  },
  {
    id: "prod_3",
    title: "Lumina Smart Table Lamp",
    description: "Illuminate your workspace with customizable RGB ambient lighting and wireless charging base.",
    price: 79.00,
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date(Date.now() - 1000000000).toISOString(),
    user: { name: "Lumina Inc", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lumina" },
    comments: []
  },
  {
    id: "prod_4",
    title: "Ergonomic Office Chair V2",
    description: "Built for long hours. Features adjustable lumbar support, breathable mesh, and dynamic recline.",
    price: 349.99,
    imageUrl: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date().toISOString(),
    user: { name: "ErgoDesign", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ErgoDesign" },
    comments: []
  },
  {
    id: "prod_5",
    title: "4K Action Camera Ultra",
    description: "Capture your adventures in stunning 4K at 60fps. Waterproof, shockproof, and ready for action.",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date(Date.now() - 500000000).toISOString(),
    user: { name: "CamPro", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CamPro" },
    comments: []
  },
  {
    id: "prod_6",
    title: "Premium Leather Satchel",
    description: "Handcrafted full-grain leather satchel. Fits up to a 15-inch laptop with multiple compartments for organization.",
    price: 129.00,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date().toISOString(),
    user: { name: "Artisan Leathers", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Artisan" },
    comments: []
  }
];

export const getAllProducts = async () => {
  return dummyProducts;
};

export const getProductById = async (id) => {
  return dummyProducts.find(p => String(p.id) === String(id));
};

export const getMyProducts = async () => {
  return dummyProducts.slice(0, 2);
};

export const createProduct = async (productData) => {
  const { data } = await api.post("/products", productData);
  return data;
};

export const updateProduct = async ({ id, ...productData }) => {
  const { data } = await api.put(`/products/${id}`, productData);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};

// Comments API
export const createComment = async ({ productId, content }) => {
  const { data } = await api.post(`/comments/${productId}`, { content });
  return data;
};

export const deleteComment = async ({ commentId }) => {
  const { data } = await api.delete(`/comments/${commentId}`);
  return data;
};
