import {store} from '../store/index.js';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;


export type cameraType = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  rating: number;
  price: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  reviewCount: number;
}

export type promoType = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export type reviewType = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
  createAt: string;
  cameraId: number;
}

export type ProjectData = {
  cameras: cameraType[];
  pageCount: number;
  promo: promoType;
  isDataLoaded: boolean;
};

export type OfferData = {
  currentOffer: cameraType;
  currentComments: reviewType[];
  currentNearBy: cameraType[];
};

