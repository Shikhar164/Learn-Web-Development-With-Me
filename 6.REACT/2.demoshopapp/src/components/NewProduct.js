import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){

    function saveProduct(product){
        console.log("I am inside NewProdtuct.js")
        console.log(product);
        //calling part
        props.onPrintProductData(product);
    }

    return (<div className='new-product'>
        <ProductForm onSaveProduct={saveProduct}/>{/* Agar Element mai koi content nhi h toh aise likho */}
    </div>);
}

export default NewProduct;