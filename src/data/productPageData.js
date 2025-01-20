// Cake Premixes 
import ChocolateCakePremix from '../assets/cake-premix-images/chocolate-cake-4.png'
import VanillaCakePremix from '../assets/cake-premix-images/vanila.png'
import RedVelvetCakePremix from '../assets/cake-premix-images/red-velvet.png'
import ChocolavaCakePremix from '../assets/cake-premix-images/chocolate-cake-2.png'
import BrownieCakePremix from '../assets/cake-premix-images/brownie-cake.png'

//   Muffin Premixes 
import ChocolateMuffinPremix from '../assets/muffin-premix-images/chocolate-muffin.png'
import VanillaMuffinPremix from '../assets/muffin-premix-images/vanilla-muffin.png'
import WafflePremix from '../assets/muffin-premix-images/waffle.png'

// Basic Chocolate Compounds 
import WhiteChocolateCompound from '../assets/chocolate-compounds-images/white-chocolate.png'
import MilkChocolateCompound from '../assets/chocolate-compounds-images/milk-chocolate.png'
import DarkChocolateCompound from '../assets/chocolate-compounds-images/dark-chocolate-compound.png'

// Flavoured Chocolate Compounds
import Mango from '../assets/chocolate-compounds-images/mango-flavour.png'
import Orange from '../assets/chocolate-compounds-images/orange-flavour.png'
import Strawberry from '../assets/chocolate-compounds-images/strawberry-flavour.png'
import Pineapple from '../assets/chocolate-compounds-images/pineapple-flavour.png'
import Blueberry from '../assets/chocolate-compounds-images/blueberry-flavour.png'
import Pista from '../assets/chocolate-compounds-images/pista-flavour.png'

// Choco Pastes 
import WhitePaste from '../assets/chcoc-paste-images/white.png'
import MilkPaste from '../assets/chcoc-paste-images/milk.png'
import DarkPaste from '../assets/chcoc-paste-images/dark.png'
import HazelnutPaste from '../assets/chcoc-paste-images/hazelnut.png'

// Choco Chips
import Dark from '../assets/choco-chips-images/dark.png'
import White from '../assets/choco-chips-images/white.png'
import Milk from '../assets/choco-chips-images/milk.png'


const products = {

    // 'Cake Premixes': [
    //     { id: 1, delay: 0, image: ChocolateCakePremix, name: 'Chocolate Cake Premix' },
    //     { id: 2, delay: 150, image: VanillaCakePremix, name: 'Vanilla Cake Premix' },
    //     { id: 3, delay: 300, image: RedVelvetCakePremix, name: 'Red Velvet Cake Premix' },
    //     { id: 4, delay: 450, image: ChocolavaCakePremix, name: 'Chocolava Cake Premix' },
    //     { id: 5, delay: 600, image: BrownieCakePremix, name: 'Brownie Cake Premix' },
    // ],

    // 'Muffin Premixes': [
    //     { id: 1, delay: 0, image: ChocolateMuffinPremix, name: 'Chocolate Muffin Premix' },
    //     { id: 2, delay: 200, image: VanillaMuffinPremix, name: 'Vanilla Muffin Premix' },
    //     { id: 3, delay: 400, image: WafflePremix, name: 'Waffle Premix' },
    // ],

    'Premixes': [
        { id: 1, delay: 0, image: ChocolateCakePremix, name: 'Chocolate Cake Premix' },
        { id: 2, delay: 150, image: VanillaCakePremix, name: 'Vanilla Cake Premix' },
        { id: 3, delay: 300, image: RedVelvetCakePremix, name: 'Red Velvet Cake Premix' },
        { id: 4, delay: 450, image: ChocolavaCakePremix, name: 'Chocolava Cake Premix' },
        { id: 5, delay: 600, image: BrownieCakePremix, name: 'Brownie Cake Premix' },

        { id: 6, delay: 0, image: ChocolateMuffinPremix, name: 'Chocolate Muffin Premix' },
        { id: 7, delay: 200, image: VanillaMuffinPremix, name: 'Vanilla Muffin Premix' },
        { id: 8, delay: 400, image: WafflePremix, name: 'Waffle Premix' },
    ],

    'Chocolate Compounds': [
        { id: 1, delay: 0, image: WhiteChocolateCompound, name: 'White Chocolate' },
        { id: 2, delay: 150, image: MilkChocolateCompound, name: 'Milk Chocolate' },
        { id: 3, delay: 300, image: DarkChocolateCompound, name: 'Dark Chocolate' },

        { id: 4, delay: 450, image: Mango, name: 'Mango Chocolate' },
        { id: 5, delay: 600, image: Orange, name: 'Orange Chocolate' },
        { id: 6, delay: 750, image: Pista, name: 'Pista Chocolate' },
        { id: 7, delay: 900, image: Strawberry, name: 'Strawberry Chocolate' },
        { id: 8, delay: 1050, image: Blueberry, name: 'Blueberry Chocolate' },
        { id: 9, delay: 1200, image: Pineapple, name: 'Pineapple Chocolate' },
    ],

    'Real Chocolates': [
        { id: 1, delay: 0, image: White, name: 'Covature' },
        { id: 2, delay: 200, image: Dark, name: 'Chips' },
        { id: 3, delay: 400, image: Milk, name: 'Coco Butter' },
        { id: 4, delay: 400, image: Milk, name: 'Coco Mass' }, 
        { id: 5, delay: 400, image: Milk, name: 'Chocolate Tablets' }, 
        { id: 6, delay: 400, image: Milk, name: 'Customized Chocolates' },
    ],

    'Choco Pastes': [
        { id: 1, delay: 0, image: WhitePaste, name: 'White Chocolate' },
        { id: 2, delay: 200, image: MilkPaste, name: 'Milk Chocolate' },
        { id: 3, delay: 400, image: DarkPaste, name: 'Dark Chocolate' },
        { id: 4, delay: 600, image: HazelnutPaste, name: 'Hazelnut Sprade' },

        { id: 5, delay: 400, image: DarkPaste, name: 'Strawberry' },
        { id: 6, delay: 600, image: HazelnutPaste, name: 'Mango' },


    ],

    'Choco Chips': [
        { id: 1, delay: 0, image: White, name: 'White Chocolate Chocochips' },
        { id: 2, delay: 200, image: Dark, name: 'Dark Chocolate Chocochips' },
        { id: 3, delay: 400, image: Milk, name: 'Milk Chocolate Chocochips' },
    ],

    'Cocoa Substitute': [
        { id: 1, delay: 0, image: White, name: 'Natural' },
        { id: 2, delay: 200, image: Dark, name: 'Medium' },
        { id: 3, delay: 400, image: Milk, name: 'Dark' },

        { id: 4, delay: 400, image: Milk, name: 'Formulated Cocoa Substitute' },
    ],

    'Consumer Chocolates': [
        { id: 1, delay: 0, image: White, name: 'Centerfilled Chocolates' },
        { id: 2, delay: 200, image: Dark, name: 'Chocolate Tablets' },
        { id: 3, delay: 400, image: Milk, name: 'Almond Gratle' },
    ],
}

export default products;