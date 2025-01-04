// Cake Premixes 
import ChocolateCakePremix from '../assets/cake-premix-images/chocolate-cake-4.png'
import VanillaCakePremix from '../assets/cake-premix-images/vanila.png'
import RedVelvetCakePremix from '../assets/cake-premix-images/red-velvet.png'
import ChocolavaCakePremix from '../assets/cake-premix-images/chocolate-cake.png'
import BrownieCakePremix from '../assets/cake-premix-images/brownie-cake.jpg'

//   Muffin Premixes 
import ChocolateMuffinPremix from '../assets/muffin-premix-images/chocolate-muffin.jpg'
import VanillaMuffinPremix from '../assets/muffin-premix-images/vanilla-muffin.jpg'
import WafflePremix from '../assets/muffin-premix-images/waffle.jpg'

// Chocolate Compounds 
import FlavourExample from '../assets/flavour-example.jpg'

// Choco Pastes 
import ChocoPasteExample from '../assets/chcoc-paste-images/choco-paste-example.png'

const products = {

    CakePremixes: [
        { id: 1, image: ChocolateCakePremix, name: 'Chocolate Cake Premix' },
        { id: 2, image: VanillaCakePremix, name: 'Vanilla Cake Premix' },
        { id: 3, image: RedVelvetCakePremix, name: 'Red Velvet Cake Premix' },
        { id: 4, image: ChocolavaCakePremix, name: 'Chocolava Cake Premix' },
        { id: 5, image: BrownieCakePremix, name: 'Brownie Cake Premix' },
    ],

    MuffinPremixes: [
        { id: 1, image: ChocolateMuffinPremix, name: 'Chocolate Muffin Premix' },
        { id: 2, image: VanillaMuffinPremix, name: 'Vanilla Muffin Premix' },
        { id: 3, image: WafflePremix, name: 'Waffle Premix' },
    ],

    ChocolateCompounds: [
        { id: 1, image: FlavourExample, name: 'Dark Chocolate' },
        { id: 2, image: FlavourExample, name: 'White Chocolate' },
        { id: 3, image: FlavourExample, name: 'Milk Chocolate' },
        { id: 4, image: FlavourExample, name: 'Mango Chocolate' },
        { id: 5, image: FlavourExample, name: 'Orange Chocolate' },
        { id: 6, image: FlavourExample, name: 'Pista Chocolate' },
        { id: 7, image: FlavourExample, name: 'Strawberry Chocolate' },
        { id: 8, image: FlavourExample, name: 'Blueberry Chocolate' },
        { id: 9, image: FlavourExample, name: 'Pineapple Chocolate' },
    ],

    ChocoPastes: [
        { id: 1, image: ChocoPasteExample, name: 'White Chocolate' },
        { id: 2, image: ChocoPasteExample, name: 'Milk Chocolate' },
        { id: 3, image: ChocoPasteExample, name: 'Dark Chocolate' },
        { id: 4, image: ChocoPasteExample, name: 'Hazelnut Sprade' },
    ],

    ChocoChips: [
        { id: 1, image: ChocoPasteExample, name: 'White Chocolate Chocochips' },
        { id: 2, image: ChocoPasteExample, name: 'Dark Chocolate Chocochips' },
        { id: 3, image: ChocoPasteExample, name: 'Milk Chocolate Chocochips' },
    ],
}

export default products;