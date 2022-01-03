import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewProduct.css';

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const rating = parseInt(data.rate)

      if(5 >= rating ){
            fetch('https://arcane-ravine-56101.herokuapp.com/addprodcut', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((result) => {

                    reset()
                });
            }
            
            else {
                alert('plase 1-5 star')
            }

            }
    return (
        <div className="add-prodcut">
        <h3 className="page-title">Add Your Product</h3>
        <div className="container ">
            <form className="row  addproduct-from" onSubmit={handleSubmit(onSubmit)}>
                <p className="product-details">Product Deatils</p>
                <div className="col-md-12">
                    <label className="form-label">Product Title</label>
                    <input type="title" className="form-control"  {...register("title", { required: true })} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Categories</label>
                    <input type="Categories" className="form-control"  {...register("Categories", { required: true })} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Price </label>
                    <input type="text" className="form-control"   {...register("price", { required: true })} />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Products Fetures </label>
                    <input type="text" className="form-control"   {...register("desc1", { required: true })} />
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control"   {...register("desc2", { required: true })} />
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control"   {...register("desc3", { required: true })} />
                </div>
                <div className="col-md-12">
                    
                    <input type="text" className="form-control"   {...register("desc4")} />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Image Link</label>
                    <input type="text" className="form-control " id="inputCity"  {...register("image", { required: true })} />
                </div>

                <div className="col-12">
                    <input type="submit" value="Submit" className="btn btn-primary" />

                </div>
            </form>
        </div>
    </div>
    );
};

export default AddNewProduct;
