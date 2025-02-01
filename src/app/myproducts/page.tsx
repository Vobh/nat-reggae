import ProductList from "../components/products/ProductList";

const MyProductsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 mb-6 text-2xl">My products</h1>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <ProductList />
            </div>
        </main>
    )
}

export default MyProductsPage;