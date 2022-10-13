import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type cameraType = {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  category: string,
  description: string,
  level: string,
  rating: number,
  price: number,
  previewImg: string,
  previewImg2x: string,
  previewImgWebp: string,
  previewImgWebp2x: string,
  reviewCount: number
}
