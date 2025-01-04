import Chocolate_Slabs from '../assets/products-images/chocolate-slabs-2.jpg'
import Dark_Chocolate_Compound from '../assets/products-images/dark-chocolate-compound.jpg'
import White_Chocolate_Compound from '../assets/products-images/white-chocolate-compound.png'
import Chocolate_Paste from '../assets/products-images/chocolate-paste.jpg'
import Hazelnut_Paste from '../assets/products-images/hazelnut-paste.jpg'
import Chocolate_Chips_Dark_And_White from '../assets/products-images/chocolate-chips-dark-and-white.jpg'
import Compound_Chocolate_Chips_Dark_And_White from '../assets/products-images/dark-and-white-chocolate-chip.avif'
import Cocoa_Powder_Substitute from '../assets/products-images/cocoa-powder-substitute.jpg'
import Cocoa_Powder_Replacer from '../assets/products-images/cocoa-powder-replacer.jpeg'

const products = [
    {
      id: 1,
      image: Chocolate_Slabs,
      name: "Chocolate Slabs",
      description: "Premium chocolate slabs made for baking, coating, and snacking.",
      colSpan: 'lg:col-span-2',
      rowSpan: '',
      delay: 0,
    },
    {
      id: 2,
      image: Dark_Chocolate_Compound,
      name: "Dark Chocolate Compound",
      description: "Rich and smooth dark chocolate compound, perfect for confectionery and baking.",
      colSpan: 'lg:col-span-2',
      rowSpan: '',
      delay: 150,
    },
    {
      id: 3,
      image: Chocolate_Paste,
      name: "Chocolate Paste",
      description: "Thick and indulgent chocolate paste used in fillings, cakes, and spreads.",
      colSpan: 'lg:col-span-2',
      rowSpan: '',
      delay: 300,
    },
    {
      id: 4,
      name: "White Chocolate Compound",
      image: White_Chocolate_Compound,
      description: "Velvety and creamy white chocolate compound, ideal for coatings and desserts.",
      colSpan: 'lg:col-span-3',
      rowSpan: '',
      delay: 150,
    },
    {
      id: 5,
      name: "Chocolate Chips - Dark and White",
      image: Chocolate_Chips_Dark_And_White,
      description: "Semi-sweet dark and creamy white chocolate chips for a delightful crunch in cookies and cakes.",
      colSpan: 'lg:col-span-3',
      rowSpan: '',
      delay: 300,
    },
    {
      id: 6,
      name: "Hazelnut Paste",
      image: Hazelnut_Paste,
      description: "Smooth and flavorful hazelnut paste, a perfect addition to your baked goods or spread.",
      colSpan: 'lg:col-span-2',
      rowSpan: '',
      delay: 0,
    },
    {
      id: 7,
      name: "Compound Chocolate Chips",
      image: Compound_Chocolate_Chips_Dark_And_White,
      description: "Convenient compound chocolate chips, available in dark and white varieties, for baking and snacking.",
      colSpan: 'lg:col-span-2',
      rowSpan: '',
      delay: 250,
    },
    {
      id: 8,
      name: "Cocoa Powder Substitute",
      image: Cocoa_Powder_Substitute,
      description: "A rich cocoa powder substitute that enhances the flavor of your baked goods and beverages.",
      colSpan: 'lg:col-span-2',
      rowSpan: '',
      delay: 500,
    },
    {
      id: 9,
      name: "Cocoa Powder Replacer",
      image: Cocoa_Powder_Replacer,
      description: "A versatile cocoa powder replacer with a smooth texture for various recipes.",
      colSpan: 'lg:col-span-6',
      rowSpan: '',
      delay: 150,
      imageHeight: 'h-80',
    }
  ];
  

  export default products;
