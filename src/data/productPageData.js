// Cake Premixes 
import ChocolateCakePremix from '../assets/cake-premix-images/chocolate-bread.png'
import VanillaCakePremix from '../assets/cake-premix-images/vanilla-bread.png'
import RedVelvetCakePremix from '../assets/cake-premix-images/red-velvet-bread.png'
import ChocolavaCakePremix from '../assets/cake-premix-images/chocolava-bread.png'
import BrownieCakePremix from '../assets/cake-premix-images/brownie-bread.png'

//   Muffin Premixes 
import ChocolateMuffinPremix from '../assets/muffin-premix-images/chocolate-cup-muffin.png'
import VanillaMuffinPremix from '../assets/muffin-premix-images/vanila-cup-muffin.png'
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

// Real Chocolates 
import Couverture_Chocolate from '../assets/real-chocolates-images/couverture.png'
import Dark_Chips from '../assets/real-chocolates-images/dark-chips.png'
import Cocoa_Butter from '../assets/real-chocolates-images/cocoa-butter.png'
import Cocoa_Mass from '../assets/real-chocolates-images/cocoa-mass.png'
import Chocolate_Tablets from '../assets/real-chocolates-images/chocolate-tablets.png'
import Customized_Chocolates from '../assets/real-chocolates-images/customized-chocolates.png'

// Choco Pastes 
import WhitePaste from '../assets/chcoc-paste-images/white.png'
import MilkPaste from '../assets/chcoc-paste-images/milk.png'
import DarkPaste from '../assets/chcoc-paste-images/dark.png'
import HazelnutPaste from '../assets/chcoc-paste-images/hazelnut.png'

// Flavoured Chocolate Paste 
import MangoPaste from '../assets/chcoc-paste-images/mango-paste.png'
import OrangePaste from '../assets/chcoc-paste-images/orange-paste.png'
import StrawberryPaste from '../assets/chcoc-paste-images/strawberry-paste.png'
import BlueberryPaste from '../assets/chcoc-paste-images/blueberry-paste.png'
import PineapplePaste from '../assets/chcoc-paste-images/pineapple-paste.png'
import PistaPaste from '../assets/chcoc-paste-images/pista-paste.png'


// Choco Chips
import Dark from '../assets/choco-chips-images/dark.png'
import White from '../assets/choco-chips-images/white.png'
import Milk from '../assets/choco-chips-images/milk.png'

// Cocoa Substitutes 
import Natural_Carob from '../assets/cocoa-images/natural-carob.png'
import Medium_Carob from '../assets/cocoa-images/medium-carob.png'
import Dark_Carob from '../assets/cocoa-images/dark-carob.png'

// Formulated Cocoa Substitute
import Formulated_Cocoa from '../assets/cocoa-images/formulated-cocoa.png'

// Consumer Chocolates 
import Centerfilled_Chocolates from '../assets/consumer-chocolate-images/centerfilled-chocolates.png'
import Tablets from '../assets/consumer-chocolate-images/chocolate-tablets.png'
import Almond_Brittle from '../assets/consumer-chocolate-images/almond-brittle.png'


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
        { id: 1, delay: 0, image: ChocolateCakePremix, name: 'Chocolate Cake Premix', description: 'A rich, moist chocolate cake premix that delivers the perfect texture and flavor for your cakes. Easy to prepare, just add water and bake. Ideal for chocolate lovers, this premix guarantees a delightful dessert experience every time.', },
        { id: 2, delay: 150, image: VanillaCakePremix, name: 'Vanilla Cake Premix', description: 'A classic vanilla cake premix that produces light, fluffy cakes with a smooth, sweet flavor. Perfect for any occasion, it’s easy to prepare—just add water. The ideal base for a variety of frosting and toppings.', },
        { id: 3, delay: 300, image: RedVelvetCakePremix, name: 'Red Velvet Cake Premix', description: 'A premium red velvet cake premix that ensures a perfectly soft and tender cake with a hint of cocoa. Its vibrant red color and smooth texture make it a perfect base for cream cheese frosting.', },
        { id: 4, delay: 450, image: ChocolavaCakePremix, name: 'Chocolava Cake Premix', description: 'This indulgent chocolava cake premix creates a rich, molten chocolate center inside a perfectly baked cake. Simple to prepare, just add water. A decadent dessert for any chocolate lover, with gooey goodness in every bite.', },
        { id: 5, delay: 600, image: BrownieCakePremix, name: 'Brownie Cake Premix', description: ' A dense, fudgy brownie cake premix that produces rich, chewy brownies with a deep chocolate flavor. Just add water and bake. Perfect for chocolate lovers who crave a decadent, moist dessert with a chewy texture.', },
        { id: 6, delay: 0, image: ChocolateMuffinPremix, name: 'Chocolate Muffin Premix', description: ' A moist and decadent chocolate muffin premix that delivers soft, tender muffins with a rich chocolate flavor. Just add water and bake. Perfect for breakfast, snacks, or desserts, these muffins are a hit for any occasion.', },
        { id: 7, delay: 200, image: VanillaMuffinPremix, name: 'Vanilla Muffin Premix', description: 'A light and fluffy vanilla muffin premix that creates soft, sweet muffins with a delicate flavor. Simple to prepare, just add water. Ideal for breakfast or an afternoon snack, these muffins pair wonderfully with a hot cup of tea.', },
        { id: 8, delay: 400, image: WafflePremix, name: 'Waffle Premix', description: ' A versatile waffle premix that creates golden, crispy waffles with a light, fluffy interior. Easy to prepare—just add water and cook. Perfect for breakfast or brunch, and can be customized with your favorite toppings for a delicious treat.', },
    ],

    'Chocolate Compounds': [
        { id: 1, delay: 0, image: WhiteChocolateCompound, name: 'White Chocolate', description: 'A smooth and creamy treat made from cocoa butter, milk solids, and sugar, white chocolate is loved for its delicate sweetness and melt-in-the-mouth texture. Perfect for desserts or as a standalone indulgence.' },
        { id: 2, delay: 150, image: MilkChocolateCompound, name: 'Milk Chocolate', description: 'Combining the richness of cocoa with creamy milk, milk chocolate offers a balanced sweetness and velvety texture. A classic favorite for chocolate lovers of all ages.' },
        { id: 3, delay: 300, image: DarkChocolateCompound, name: 'Dark Chocolate', description: `Intense and bittersweet, dark chocolate is crafted with a high cocoa content, making it a sophisticated choice. Known for its depth of flavor and health benefits, it's perfect for connoisseurs.` },

        { id: 4, delay: 450, image: Mango, name: 'Mango Chocolate', description: 'A tropical twist on chocolate, this variant blends the rich creaminess of cocoa with the juicy, sweet flavor of ripe mangoes, creating an exotic and refreshing treat.' },
        { id: 5, delay: 600, image: Orange, name: 'Orange Chocolate', description: ' A zesty delight, orange chocolate marries the bold flavor of rich cocoa with the tangy sweetness of orange, offering a citrusy burst in every bite.' },
        { id: 6, delay: 750, image: Pista, name: 'Pista Chocolate', description: 'This indulgent chocolate combines the nutty richness of pistachios with the creamy texture of cocoa, delivering a luxurious and crunchy experience.' },
        { id: 7, delay: 900, image: Strawberry, name: 'Strawberry Chocolate', description: 'A perfect blend of fruity and sweet, strawberry chocolate combines the luscious flavor of ripe strawberries with smooth, creamy cocoa for a romantic treat.' },
        { id: 8, delay: 1050, image: Blueberry, name: 'Blueberry Chocolate', description: 'A delightful mix of tangy blueberries and rich cocoa, blueberry chocolate offers a fruity burst of flavor balanced with a smooth chocolatey finish.' },
        { id: 9, delay: 1200, image: Pineapple, name: 'Pineapple Chocolate', description: 'With its tropical flair, pineapple chocolate brings together the tangy sweetness of pineapple and the rich, velvety texture of cocoa, making it a unique and refreshing choice.' },
    ],

    'Real Chocolates': [
        { id: 1, delay: 0, image: Couverture_Chocolate, name: 'Couverture', description: ` A premium-quality chocolate with a high cocoa butter content, couverture is loved for its silky texture and glossy finish. It's perfect for professional baking, tempering, and crafting gourmet desserts, making it a favorite among pastry chefs and chocolatiers.` },
        { id: 2, delay: 200, image: Dark_Chips, name: 'Chips', description: `Chocolate chips are small, bite-sized pieces perfect for baking. Retaining their shape when melted, they add bursts of rich chocolate flavor to cookies, brownies, and muffins, making them a must-have for any dessert enthusiast.` },
        { id: 3, delay: 400, image: Cocoa_Butter, name: 'Cocoa Butter', description: `A natural fat extracted from cocoa beans, cocoa butter is an essential ingredient in chocolate making. Its smooth texture, mild chocolate flavor, and moisturizing properties also make it popular in cosmetics and skincare.` },
        { id: 4, delay: 600, image: Cocoa_Mass, name: 'Cocoa Mass', description: ` Pure and unadulterated, cocoa mass is a mix of cocoa solids and cocoa butter. Known for its intense chocolate flavor, it's a foundational ingredient for crafting high-quality chocolate products and confections.` }, 
        { id: 5, delay: 800, image: Chocolate_Tablets, name: 'Chocolate Tablets', description: `Compact and convenient, chocolate tablets are perfect for snacking or melting. Available in various flavors and cocoa percentages, they cater to all chocolate lovers, from milk chocolate enthusiasts to dark chocolate connoisseurs.` }, 
        { id: 6, delay: 900, image: Customized_Chocolates, name: 'Customized Chocolates', description: ` Personalized and unique, customized chocolates are tailored for special occasions, branding, or gifting. Available in creative shapes, designs, and flavors, they add a special touch to celebrations and make memorable keepsakes.` },
    ],

    'Choco Pastes': [
        { id: 1, delay: 0, image: WhitePaste, name: 'White Chocolate Paste', description: `Smooth, creamy, and sweet, white chocolate paste is a versatile delight. Perfect for spreading, baking, or adding a luxurious touch to desserts, it’s loved for its velvety texture and rich flavor.` },
        { id: 2, delay: 200, image: MilkPaste, name: 'Milk Chocolate Paste', description: `A classic blend of cocoa and milk, this paste offers a creamy and balanced chocolatey flavor. Ideal for spreading, drizzling, or enhancing baked goods, it’s a treat for all chocolate lovers.` },
        { id: 3, delay: 400, image: DarkPaste, name: 'Dark Chocolate Paste', description: ` Rich, bold, and bittersweet, this dark chocolate paste is perfect for those who love intense cocoa flavor. Great for desserts, fillings, or spreading, it’s a sophisticated choice for gourmet creations.` },
        { id: 4, delay: 600, image: HazelnutPaste, name: 'Hazelnut Sprade', description: `A luscious mix of chocolate and roasted hazelnuts, this spread is nutty, creamy, and indulgent. Perfect for pancakes, waffles, or as a dip, it’s a must-have for nutty chocolate fans.` },

        { id: 5, delay: 0, image: MangoPaste, name: 'Mango', description: ` A tropical treat, mango paste combines the sweetness of ripe mangoes with a smooth, creamy texture. Perfect for desserts, spreads, or fillings, it adds a fruity twist to your creations.` },
        { id: 6, delay: 200, image: StrawberryPaste, name: 'Strawberry', description: `Fruity, sweet, and creamy, strawberry paste is bursting with the flavor of ripe strawberries. Ideal for cakes, spreads, or desserts, it’s a refreshing and indulgent addition to your recipes.` },
        { id: 7, delay: 400, image: PistaPaste, name: 'Pista', description: `Nutty and creamy, pista paste delivers the rich flavor of pistachios with a smooth texture. Perfect for desserts, fillings, or as a spread, it adds a touch of luxury to any treat.` },
        { id: 8, delay: 600, image: OrangePaste, name: 'Orange', description: `Zesty, sweet, and aromatic, orange paste is a delightful combination of citrus flavor and creamy texture. Ideal for desserts, spreads, or fillings, it’s a refreshing twist for chocolate and baked goods.` },
        { id: 9, delay: 700, image: PineapplePaste, name: 'Pineapple', description: ` Tropical and tangy, pineapple paste offers a vibrant flavor with a creamy consistency. Perfect for spreads, fillings, or desserts, it brings a refreshing burst of fruity goodness.` },
        { id: 10, delay: 800, image: BlueberryPaste, name: 'Blueberry', description: `Sweet, tangy, and creamy, blueberry paste is packed with the flavor of fresh blueberries. Ideal for desserts, spreads, or fillings, it’s a versatile and delicious choice for berry lovers.` },


    ],

    'Choco Chips': [
        { id: 1, delay: 0, image: White, name: 'White Chocolate Chocochips', description: `Smooth and creamy, white chocolate chocochips bring a delightful sweetness to your desserts. Perfect for cookies, cakes, or toppings, they add a touch of elegance and a rich, buttery flavor to every bite.` },
        { id: 2, delay: 200, image: Dark, name: 'Dark Chocolate Chocochips', description: `Rich, bold, and bittersweet, dark chocolate chocochips are perfect for those who love intense cocoa flavor. Ideal for baking or snacking, they add depth and sophistication to cookies, brownies, and other treats.` },
        { id: 3, delay: 400, image: Milk, name: 'Milk Chocolate Chocochips', description: `Creamy and sweet, milk chocolate chocochips are a classic choice for any dessert. With their balanced flavor and smooth texture, they’re perfect for cookies, muffins, and as a topping for ice creams or pastries.` },
    ],

    'Cocoa Substitute': [
        { id: 1, delay: 0, image: Natural_Carob, name: 'Natural', description: `Made from natural carob, this substitute offers a mild, sweet flavor with earthy undertones. Perfect for baking and beverages, it’s caffeine-free and an excellent alternative for chocolate lovers seeking a healthier option.` },
        { id: 2, delay: 200, image: Medium_Carob, name: 'Medium', description: `Balanced and flavorful, the medium carob substitute provides a richer taste with a hint of sweetness. Ideal for cookies, cakes, and hot drinks, it offers a versatile alternative to cocoa in various recipes.` },
        { id: 3, delay: 400, image: Dark_Carob, name: 'Dark', description: `Bold and robust, the dark carob substitute delivers a deep, chocolate-like flavor with minimal sweetness. It’s perfect for creating intense, decadent desserts and beverages while remaining caffeine-free and nutritious.` },

        { id: 4, delay: 0, image: Formulated_Cocoa, name: 'Formulated Cocoa Substitute', description: `Customize the formulated products to replace cocoa powder in bakery products like Ice-cream & Compound Chocolates` },
    ],

    'Consumer Chocolates': [
        { id: 1, delay: 0, image: Centerfilled_Chocolates, name: 'Centerfilled Chocolates', description: `Delightful and indulgent, centerfilled chocolates feature a rich, creamy filling encased in smooth chocolate. With flavors ranging from caramel to fruit or nut-based centers, they provide a luxurious surprise in every bite, perfect for gifting or personal enjoyment.` },
        { id: 2, delay: 200, image: Tablets, name: 'Tablets', description: `Compact and convenient, chocolate tablets are perfect for snacking or sharing. Available in a variety of flavors and cocoa percentages, they cater to diverse preferences, from milk chocolate enthusiasts to dark chocolate lovers, offering a delectable treat for all occasions.` },
        { id: 3, delay: 400, image: Almond_Brittle, name: 'Almond Brittle', description: `A crunchy and nutty delight, almond brittle combines roasted almonds with a caramelized coating, covered in smooth chocolate. This irresistible treat balances sweetness and texture, making it perfect for snacking, gifting, or satisfying your chocolate cravings.` },
    ],
}

export default products;