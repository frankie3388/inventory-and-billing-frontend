import Form from 'react-bootstrap/Form';
// import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';

// Functional component for creating blog form. This component is responsible for
// creating blogs.
function AddProductForm() {

  // This handleSubmit function Posts the form data to the server to create the blog
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create blog data from form input
      const productData = {
        productName: event.target.elements.productName.value,
        category: event.target.elements.category.value,
        price: event.target.elements.price.value,
        quantity: event.target.elements.quantity.value,
        description: event.target.elements.description.value,
      };
  
  
      // Post image data and blog data to server and S3
      const response = await fetch("http://localhost:5000/products/createproduct", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(productData), // Convert object to JSON string
      });
  
      if (response.ok) {
        console.log("Product data created successfully");
      } else {
        console.error('Failed to create product data:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
        <Form className="create-blog-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 create-blog-input" controlId="productName">
              <Form.Label data-testid="productName-test">Product Name</Form.Label>
              <Form.Control type="text" name="productName" placeholder="Enter Product Name" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="category">
              <Form.Label data-testid="category-test">Category</Form.Label>
              <Form.Control type="text" name="category" placeholder="Enter category" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="price">
              <Form.Label data-testid="price-test">Price</Form.Label>
              <Form.Control type="text" name="price" placeholder="Enter price" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="quantity">
              <Form.Label data-testid="quantity-test">Quantity</Form.Label>
              <Form.Control type="text" name="quantity" placeholder="Enter quantity" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="description">
              <Form.Label data-testid="description-test">Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Enter description" />
            </Form.Group>
            <div className="position-create-blog-button">
              <Button className="create-blog-button" variant="primary" type="submit">
                Add Product
              </Button>
            </div>
        </Form>
    )
}

export default AddProductForm;