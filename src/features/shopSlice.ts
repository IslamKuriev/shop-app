import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  discount: number;
  left: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface CartItem {
  id: number;
  productId: number;
  amount: number;
}

export interface ShopState {
  products: Product[];
  categories: Category[];
  cartItems: CartItem[];
}

const initialState: ShopState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: 'MacBook',
      price: 100000,
      discount: 3,
      left: 31,
      image:
        'https://store-apple.msk.ru/image/cache/catalog/tovary/macbook/pro13/apple-macbook-pro-m2-silver-2022-800x800-800x800.jpg',
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Galaxy',
      price: 35999,
      discount: 0,
      left: 11,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_t_22P2sYDpgVT4_nQM5L_Nt6yiKHS9y4A&s',
    },
    {
      id: 3,
      categoryId: 3,
      name: 'Скутер',
      price: 65500,
      discount: 10,
      left: 0,
      image:
        'https://i0.wp.com/motormarkt.ru/wp-content/uploads/2022/06/100022-2-Regulmoto-DIGITA-50-LJ50QT-3L-02.jpg?fit=1200%2C1200&ssl=1',
    },
    {
      id: 4,
      categoryId: 2,
      name: 'Монитор Samsung',
      price: 12000,
      discount: 0,
      left: 7,
      image:
        'https://lh4.googleusercontent.com/proxy/1tmNs4AcVZ359TBNAD01-Ix1TW8ii0gp-3wzzHDDHNBpnlKea9jAiWpV21qOTsV2vRbLxVkAVT1b3Y0Vo3cW0uFlZXt1Cw5FaGcvcYm7M8Yt9Gf-54PXfhIK9IR-4cw97PA3AY1bfg',
    },
    {
      id: 5,
      categoryId: 3,
      name: 'Респераторная маска',
      price: 500,
      discount: 0,
      left: 24,
      image:
        'https://пробахилы.рф/wa-data/public/shop/products/67/20/12067/images/10641/10641.970.jpg',
    },
    {
      id: 6,
      categoryId: 2,
      name: 'Стиральная машина',
      price: 100000,
      discount: 25,
      left: 0,
      image:
        'https://www.belaya-tehnika.ru/images/watermarked/1/detailed/9/%D0%A1%D1%82%D0%B8%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0_HAUSWIRT_S_6102.jpg',
    },
    {
      id: 7,
      categoryId: 2,
      name: 'Белый холодильник',
      price: 43100,
      discount: 50,
      left: 18,
      image: 'https://mrmag.ru/files/products/kholodilnik_morozilnik_c2f636cwrg_haier.500x500.jpeg',
    },
    {
      id: 8,
      categoryId: 1,
      name: 'Колонка',
      price: 3000,
      discount: 0,
      left: 1,
      image:
        'https://www.coxo.ru/upload/resize_cache/iblock/da7/e5ish9thhkpu4hew6tf2473l6cxb5noh/500_500_1/6ec1db8e_e67f_11e9_80f5_00155dc86405_93776485_c7c9_11ec_a423_00155d7d1c00.resize1.jpg',
    },
    {
      id: 9,
      categoryId: 1,
      name: 'Наушники',
      price: 1500,
      discount: 15,
      left: 5,
      image:
        'https://static.insales-cdn.com/r/I_p4rbaXaKg/rs:fit:1000:0:1/plain/images/products/1/3455/787885439/600x800.webp@webp',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Гаджеты и аксессуары',
    },
    {
      id: 2,
      name: 'Бытовая техника',
    },
    {
      id: 3,
      name: 'Прочее',
    },
  ],
  cartItems: [
    { id: 1, productId: 2, amount: 2 },
    { id: 2, productId: 9, amount: 5 },
  ],
};

export const shopSlice = createSlice({
  name: 'shopApp',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.products.map((p) => {
        p.id === action.payload ? p.left-- : p;
      });
    },
    cartElementInc: (state, action) => {
      state.products.map((product) => {
        product.id === action.payload.productId && product.left ? product.left-- : product;
      });
      state.cartItems.map((item) => {
        item.productId === action.payload.productId && action.payload.left ? item.amount++ : item;
      });
    },

    cartElementDec: (state, action) => {
      state.products.map((product) => {
        product.id === action.payload.productId && action.payload.amount ? product.left++ : product;
      });
      state.cartItems.map((item) => {
        item.productId === action.payload.productId && item.amount ? item.amount-- : item;
      });
    },
    cartRemoveElement: (state, action) => {
      state.cartItems = state.cartItems.filter((c) => {
        return c.productId !== action.payload;
      });
    },
  },
});
export const { addToCart, cartElementInc, cartElementDec, cartRemoveElement } = shopSlice.actions;
export const ShopSlice = shopSlice.reducer;
