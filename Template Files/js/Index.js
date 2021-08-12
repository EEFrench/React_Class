import React from 'react';

const FinalProject = () => (
    <div className="container py-5">
        {/* Page Title */}
        <div className="row">
            <div className="col text-center">
                <h1>Final Project</h1>
            </div>
        </div>

        {/* Project Requirements */}
        <div className="row section">
            <aside className="col">
                <h2>Requirements</h2>
            </aside>
            <main className="col-9">
                <ul className="points">
                    <li>You will build a basic E-commerce application using the <a href="https://fakestoreapi.herokuapp.com/" target="_blank" rel="noreferrer">Fake Store API</a> to retrieve product data.</li>
                    <br/>
                    <li>The app will have the following 4 pages:
                        <ul className="nested-points">
                        <br/>
                            <li>Products page
                                <ul className="nested-points">
                                    <li>Display the image, title, and price of all products in a list or grid.</li>
                                    <li>When a product is clicked, navigate to the detail page for the selected product.</li>
                                </ul>
                            </li>
                            <br/>
                            <li>Product details page
                                <ul className="nested-points">
                                    <li>Display all product details (image, title, price, category, description)</li>
                                    <li>Display a "Quantity" input with default value of 1</li>
                                    <li>Display an "Add to Cart" button</li>
                                    <li>When the "Add to Cart" button is clicked, the product and quantity should be added to the cart</li>
                                </ul>
                            </li>
                            <br/>
                            <li>Cart page
                                <ul className="nested-points">
                                    <li>Display a list of the products and their quantities in the cart</li>
                                    <li>Allow products to be deleted from the cart</li>
                                </ul>
                            </li>
                            <br/>
                            <li>Checkout page
                                <ul className="nested-points">
                                    <li>Display the name, price, and quantity of all items in the the cart</li>
                                    <li>Display the total cost of the cart.</li>
                                    <li>Display a checkout form with inputs for
                                        <ul>
                                            <li>Name</li>
                                            <li>Shiping Address</li>
                                            <li>Billing Address</li>
                                            <li>Credit Card Info</li>
                                            <li>Submit button</li>
                                        </ul>
                                    </li>
                                    <li>Submitting the order form should clear the cart and return the user to the main products page</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br/>
                    <li>Use React Router to handle navigation between pages
                        <ul className="nested-points">
                            <li>/products &rarr; Products Page</li>
                            <li>{'/products/:id'} &rarr; Product Details Page</li>
                            <li>/cart &rarr; Cart Page</li>
                            <li>/checkout &rarr; Checkout Page</li>
                        </ul>
                    </li>
                    <br/>
                    <li>Use Context API or Redux to maintain a global Cart state.
                        <ul className="nested-points">
                            <li>The Context or Redux store should provide the following functionality
                                <ul className="nested-points">
                                    <li>Get cart state</li>
                                    <li>Add a product and its quantity to the cart</li>
                                    <li>Update the quantity of a product</li>
                                    <li>Remove a product from cart</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </main>
        </div>

        {/* Optional Requirements */}
        <div className="row section">
            <aside className="col">
                <h2>Optional Features</h2>
            </aside>
            <main className="col-9">
                <ul className="points">
                    <li>Allow filtering products by category</li>
                    <li>Allow filtering products by search term</li>
                    <li>Allow ordering products by price (lowset to highest, highest to lowest)</li>
                    <li>Allow updating product quantity in the cart</li>
                    <li>On a product detail page, show a list of similar or recommended products</li>
                </ul>
            </main>
        </div>
    </div>
);

export default FinalProject;