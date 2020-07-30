import { v4 as uuidv4 } from 'uuid';

import bicycleLogo from './SpecializedEPIC.jpg';

const hardcodedArr = [];

for (let i = 0; i < 10; i++) {

  const bicycle = {
    id: uuidv4(),
    brand: 'Specialized',
    model: 'EPIC',
    logo: bicycleLogo,
    year: 2020,
    price: '$5000'
  };

  hardcodedArr.push(bicycle);
}

export default hardcodedArr;
