import AddProductForm from "../components/AddproductForm";
// import '../styling/CreateBlogPage.css';


function AddProductPage() {
    return (
        <div>
            <h3 className="create-blog-heading">Add Products</h3>
            {/* Component for the actual form to create a new blog */}
            <AddProductForm />
        </div>
    )
}

export default AddProductPage;