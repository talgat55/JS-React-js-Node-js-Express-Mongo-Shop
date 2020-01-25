import React from 'react';
import AdminLayout from '../../../layouts/Admin';
import ProductCreateComponent from '../../../components/admin/ProductCreate/ProductCreate';

const ProductCreate = () => {
    const titlePage = 'Create Product';
    return (
        <>
            <AdminLayout
                title={titlePage}
            >
                <ProductCreateComponent
                    title={titlePage}
                />
            </AdminLayout>
        </>
    )
};

export default ProductCreate;