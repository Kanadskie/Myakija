import { Product } from '../types';
import kristal_05 from '../images/products/cristal_05.jpg'
import kristal_15 from '../images/products/cristal_15.jpg'
import kashinka_033 from '../images/products/kashinka_033.jpg'
import kashinka_05 from '../images/products/kashinka_05.jpg'
import mineral_05 from '../images/products/mineral_05.jpg'
import mineral_15 from '../images/products/mineral_15.jpg'

export const products: Product[] = [
  {
    id: 1,
    name: "Кашинка питьевая",
    description: "Чистая питьевая вода для повседневного использования",
    price: 0,
    image: kashinka_033,
    volume: "0.33 л",
    pack: "ПЭТ",
    quantity_in_pack: "12 шт",
    category: "drinking",
    composition: "Анионы (мг/л): Гидрокарбонаты (HCO3−) 10 – 400, Сульфаты (SO₄²-) 90 – 250, Хлориды (Cl-) 15 – 70, Фторид-ион (F-) 0,1 – 1,0; Катионы (мг/л): Кальций (Ca²+ ) 20 – 130, Натрий (Na+) 15 – 130, Магний (Mg²+) 5 – 65, Калий (K+) 2 – 20",
    mineralization: "0,1 – 0,5 г/л",
    hardness: "не более 5 мг-экв/л",
    usage: "Ежедневное употребление"
  },

  {
    id: 2,
    name: "Кашинка питьевая",
    description: "Чистая питьевая вода для повседневного использования",
    price: 0,
    image: kashinka_05,
    volume: "0.5 л",
    pack: "ПЭТ",
    quantity_in_pack: "12 шт",
    category: "drinking",
    composition: "Анионы (мг/л): Гидрокарбонаты (HCO3−) 10 – 400, Сульфаты (SO₄²-) 90 – 250, Хлориды (Cl-) 15 – 70, Фторид-ион (F-) 0,1 – 1,0; Катионы (мг/л): Кальций (Ca²+ ) 20 – 130, Натрий (Na+) 15 – 130, Магний (Mg²+) 5 – 65, Калий (K+) 2 – 20",
    mineralization: "0,1 – 0,5 г/л",
    hardness: "не более 5 мг-экв/л",
    usage: "Ежедневное употребление"
  },

  {
    id: 3,
    name: "Кашинская кристальная",
    description: "Чистая питьевая вода для повседневного использования",
    price: 0,
    image: kristal_05,
    volume: "0.5 л",
    pack: "ПЭТ",
    quantity_in_pack: "12 шт",
    category: "drinking",
    composition: "Анионы (мг/л): Гидрокарбонаты (HCO3−) 10 – 400, Сульфаты (SO₄²-) 90 – 250, Хлориды (Cl-) 15 – 60, Фторид-ион (F-) 0,1 – 1,0; Катионы (мг/л): Кальций (Ca²+ ) 20 – 130, Натрий (Na+) 15 – 130, Магний (Mg²+) 5 – 65, Калий (K+) 2 – 20",
    mineralization: "0,1 – 0,5 г/л",
    hardness: "не более 7 мг-экв/л",
    usage: "Ежедневное употребление"
  },

  {
    id: 4,
    name: "Кашинская кристальная",
    description: "Чистая питьевая вода для повседневного использования",
    price: 0,
    image: kristal_15,
    volume: "1.5 л",
    pack: "ПЭТ",
    quantity_in_pack: "6 шт",
    category: "drinking",
    composition: "Анионы (мг/л): Гидрокарбонаты (HCO3−) 10 – 400, Сульфаты (SO₄²-) 90 – 250, Хлориды (Cl-) 15 – 60, Фторид-ион (F-) 0,1 – 1,0; Катионы (мг/л): Кальций (Ca²+ ) 20 – 130, Натрий (Na+) 15 – 130, Магний (Mg²+) 5 – 65, Калий (K+) 2 – 20",
    mineralization: "0,1 – 0,5 г/л",
    hardness: "не более 7 мг-экв/л",
    usage: "Ежедневное употребление"
  },

  {
    id: 5,
    name: "Кашинская курортная",
    description: "Вода минеральная природная питьевая лечебно-столовая",
    price: 0,
    image: mineral_05,
    volume: "0.5 л",
    pack: "ПЭТ",
    quantity_in_pack: "12 шт",
    category: "mineral",
    composition: "Анионы (мг/л): Гидрокарбонаты (HCO3−) <50, Сульфаты (SO₄²-) 1500 – 2220, Хлориды (Cl-) 200 – 350; Катионы (мг/л): Кальций (Ca²+ ) 250 – 550, Магний (Mg²+) 100 – 180, Натрий + Калий (Na+ + K+) 250 – 400",
    mineralization: "2,5 – 3,7 г/л",
    hardness: "",
    usage: "Рекомендации к лечебному употреблению, необходимо проконсультироваться с врачом"
  },

    {
    id: 6,
    name: "Кашинская курортная",
    description: "Вода минеральная природная питьевая лечебно-столовая",
    price: 0,
    image: mineral_15,
    volume: "1.5 л",
    pack: "ПЭТ",
    quantity_in_pack: "6 шт",
    category: "mineral",
    composition: "Анионы (мг/л): Гидрокарбонаты (HCO3−) <50, Сульфаты (SO₄²-) 1500 – 2220, Хлориды (Cl-) 200 – 350; Катионы (мг/л): Кальций (Ca²+ ) 250 – 550, Магний (Mg²+) 100 – 180, Натрий + Калий (Na+ + K+) 250 – 400",
    mineralization: "2,5 – 3,7 г/л",
    hardness: "",
    usage: "Рекомендации к лечебному употреблению, необходимо проконсультироваться с врачом"
  }
];