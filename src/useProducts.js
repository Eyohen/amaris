// hooks/useProducts.js
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { URL } from './url';

export const fetchProducts = async () => {
  const response = await axios.get(`${URL}/api/products`);
  return response.data;
};

// export const useProducts = () => {
//   return useQuery({ queryKey: ['products'], queryFn: fetchProducts });
// };

// hooks/useCategories.js
export const fetchCategories = async () => {
  const response = await axios.get(`${URL}/api/categories`);
  return response.data;
};

// export const useCategories = () => {
//   return useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
// };

// hooks/useCreateProduct.js



// export const createProduct = async (product) => {
//   const response = await axios.post(`${URL}/api/products/create`, product);
//   return response.data;
// };

export const createProduct = async (formData) => {
    const response = await axios.post(`${URL}/api/products/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    return response.data;
  };
  

// export const useCreateProduct = () => {
//   const queryClient = useQueryClient();
  
//   return useMutation({
//     mutationFn: createProduct,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['products'] });
//     },
//   });
// };