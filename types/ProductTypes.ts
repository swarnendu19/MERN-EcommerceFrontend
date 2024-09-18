export interface Color {
    colorid: number;
    name: string;
    colorname: string;
    colorclass: string;
  }
  
export  interface Size {
    sizeid: number;
    name: string;
    sizename: string;
    instock: boolean;
  }
  
export interface ProductImage {
    imageid: number;
    imglink: string;
    imgalt: string;
  }
  
export  interface Product {
    productid: number;
    title: string;
    category: string;
    maincategory: string;
    price: string;
    discount: string;
    stars: number;
    isnew: boolean;
    issale: boolean;
    isdiscount: boolean;
    colors: Color[];
    sizes: Size[];
    reviewCount: number;
    images: ProductImage;
  }
  