import React, {useState , useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import axios from 'axios';

const ProductCreate = ({title}) => {
    const [DataForm, setDataForm] = useState({
        'title': '',
        'description': '',
        'price': '',
        'image': '',
    });

    const handleChange = event => {
        setDataForm({
            [event.target.name]: event.target.value
        });
    };
    const onDrop = useCallback(acceptedFiles => {
        handleImageUpload(acceptedFiles[0]);
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    const handleImageUpload = file => {
        let formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:5000/admin/upload-file',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then((response) => {

            // console.log('SUCCESS!!');
            // console.log(response);
            setDataForm({
                'image': response.data
            });

        }).catch((err) => {
                console.log(err);
        });
    };
    return (
        <>
            <div className="card card-user">
                <div className="card-header">
                    <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        name="title"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control textarea"
                                        placeholder="Description"
                                        name="description"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Price"
                                        name="price"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">

                                <div {...getRootProps()} className="form-group">
                                    <label>Image</label>
                                    <input {...getInputProps()} />
                                    {
                                        isDragActive ?
                                            <p>Drop the files here ...</p> :
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                    }
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <div className="update ml-auto mr-auto">
                                <button type="submit" className="btn btn-primary btn-round">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default ProductCreate;