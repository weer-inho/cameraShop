import {cameraType, promoType} from '../types/types';
import {lorem, datatype, internet, name, system} from 'faker';

export const makeFakeCameraOffer = (): cameraType => ({
  id: datatype.number(1),
  name: internet.userName(),
  vendorCode: name.title(),
  type: name.title(),
  category: lorem.text(),
  description: lorem.text(),
  level: name.title(),
  rating: datatype.number(1),
  price: datatype.number(1),
  previewImg: system.filePath(),
  previewImg2x: system.filePath(),
  previewImgWebp: system.filePath(),
  previewImgWebp2x: system.filePath(),
  reviewCount: datatype.number(1),
} as cameraType);

export const fakeCameraThird: cameraType = {
  id: 3,
  name: "Look Shot",
  vendorCode: "NB569SH",
  type: "Цифровая",
  category: "Видеокамера",
  description: "Гибридный автофокус и динамический стабилизатор по приятной цене. Светочувствительная матрица без шумов. 8-кратный выездной зум в стильной упаковке.",
  previewImg: "img/content/look-shot.jpg",
  level: "Любительский",
  rating: 4,
  price: 18590,
  previewImg2x: "img/content/look-shot@2x.jpg",
  previewImgWebp: "img/content/look-shot.webp",
  previewImgWebp2x: "img/content/look-shot@2x.webp",
  reviewCount: 11,
}

export const makeFakePromoOffer = (): promoType => ({
  id: datatype.number(1),
  name: internet.userName(),
  previewImg: system.filePath(),
  previewImg2x: system.filePath(),
  previewImgWebp: system.filePath(),
  previewImgWebp2x: system.filePath(),
} as promoType);
