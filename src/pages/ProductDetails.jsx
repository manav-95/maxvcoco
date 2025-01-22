import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/productPageData'; // Assuming product data is here

const ProductDetails = () => {
    const { name } = useParams();  // Get product name from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch product data based on name from URL
        const fetchProductDetails = () => {
            const foundProduct = Object.values(products)
                .flat() // Flattening all categories to search easily
                .find(product => product.name === name);

            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                setProduct(null);  // If not found, show null
            }
            setLoading(false);
        };

        fetchProductDetails();
    }, [name]);

    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (!product) {
        return (
            <div className="text-center py-20">
                <h2 className="text-3xl font-semibold text-red-500">Product Not Found</h2>
                <Link to="/products/Premixes?start=0&end=4&title1=Cake Premixes&title2=Muffin Premixes" className="mt-4 text-lg text-blue-500 hover:text-blue-700">Go Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-[#FFEDD5] to-[#FECACA] py-4 lg:py-20 poppins-regular">
            <div className="max-w-7xl mx-auto px-4">
                <div className='grid grid-cols-1 lg:grid-cols-10 gap-8 p-4 bg-[#4e3620] bg-opacity-70 rounded-lg'>
                    <div className='lg:col-span-5 bg-[#fbecdf] bg-opacity-20 p-4 rounded-lg'>
                        <img
                            src={product.image}
                            alt={product.name}
                            className='object-contain object-center drop-shadow-xl h-[240px] sm:h-[380px] lg:h-[400px] w-full hover:scale-105 transition-all duration-300 ease-in-out'
                        />
                    </div>
                    <div className='lg:col-span-5 flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center items-center lg:items-start space-y-6 lg:space-y-4 lg:px-10 text-[#fbecdf]'>
                            <h1 className='text-4xl font-semibold text-center lg:text-left'>{product.name}</h1>
                            <p className='text-lg text-center lg:text-left'>{product.description}</p>
                            <div className='py-4'>
                                <Link to={`/products/Premixes?start=0&end=4&title1=Cake Premixes&title2=Muffin Premixes`} className="bg-red-500 text-white py-3 px-8 rounded-md text-lg hover:bg-[#D93F3F] transition-colors duration-300 ease-in-out">
                                    Back to Products
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
