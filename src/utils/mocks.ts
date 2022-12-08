import {cameraType, promoType, reviewType} from '../types/types';
import {lorem, datatype, internet, name, system} from 'faker';

export const makeFakeCameraOffer = (): cameraType => ({
  id: datatype.number({min: 1, max: 1}),
  name: internet.userName(),
  vendorCode: name.title(),
  type: name.title(),
  category: lorem.text(),
  description: lorem.text(),
  level: name.title(),
  rating: datatype.number({min: 1, max: 5}),
  price: datatype.number({min: 1, max: 5000}),
  previewImg: system.filePath(),
  previewImg2x: system.filePath(),
  previewImgWebp: system.filePath(),
  previewImgWebp2x: system.filePath(),
  reviewCount: datatype.number({min: 1, max: 50}),
} as cameraType);

export const makeFakeReview = ():reviewType => ({
  id: String(datatype.number({min: 1, max: 50})),
  userName: internet.userName(),
  advantage: lorem.text(),
  disadvantage: lorem.text(),
  review: lorem.text(),
  rating: datatype.number({min: 1, max: 5}),
  createAt: lorem.text(),
  cameraId: datatype.number({min: 1, max: 50}),
} as reviewType);

export const makeFakePromoOffer = (): promoType => ({
  id: datatype.number(1),
  name: internet.userName(),
  previewImg: system.filePath(),
  previewImg2x: system.filePath(),
  previewImgWebp: system.filePath(),
  previewImgWebp2x: system.filePath(),
} as promoType);

export const fakeReview: reviewType = {
  id: String(datatype.number({min: 1, max: 50})),
  userName: internet.userName(),
  advantage: lorem.text(),
  disadvantage: lorem.text(),
  review: lorem.text(),
  rating: datatype.number({min: 1, max: 5}),
  createAt: lorem.text(),
  cameraId: datatype.number({min: 1, max: 50}),
}
