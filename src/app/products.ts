export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Carol Phone',
    price: 1000,
    description: 'Novo e criativo, ideal para leitores.',
  },
  {
    id: 2,
    name: 'Kindle',
    price: 300,
    description: 'Leia em qualquer lugar, a qualquer hora.',
  },
  {
    id: 3,
    name: 'iPhone 11',
    price: 2000,
    description: 'Leve uma camera de cinema no seu bolso.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
