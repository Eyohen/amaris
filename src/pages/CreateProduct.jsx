import React,{useState} from "react";
import { URL } from '../url'
import axios from 'axios'
import {Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {fetchCategories, createProduct } from '../useProducts';

  

const CreateProduct = () => {
  const navigate = useNavigate()

    const [title,setTitle]=useState("")
    const [file, setFile] = useState(null)
    const [imageUrl,setImageUrl]=useState(null)
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const [color,setColor]=useState("")
    const [size,setSize]=useState("")
    const [categoryId,setCategoryId]=useState("")
    const [selectedCategoryId,setSelectedCategoryId]=useState([])


    const {isPending, isError, data, error} = useQuery({queryKey:['categories'], queryFn:fetchCategories})

    // if (isPending) return <p>Loading categories ...</p>;
    // if (isError) return <p> Error loading categories</p>

    const queryClient = useQueryClient();
    
    const createProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey:['products']});
          navigate('/');
        },
        onError: (error) => {
          console.error('Error creating products', error);
        },
      });


    const handleCategoryId = (e) => {       
        setSelectedCategoryId(e.target.value);
    };

    const handleProduct = (e) => {
    e.preventDefault();
    // const newProduct = {
    //   title,
    //   imageUrl,
    //   price,
    //   description,
    //   color,
    //   size,
    //   categoryId: selectedCategoryId,
    // };
    // createProductMutation.mutate(newProduct);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('color', color);
    formData.append('size', size);
    formData.append('categoryId', selectedCategoryId);
    if (file) {
      formData.append('imageUrl', file);
    }
    createProductMutation.mutate(formData);
  }



      
   

    
  return (
    <div className="w-full">
    
      <div className="items-center h-[100vh] justify-center flex w-full">
        {isPending ? (<p className="text-2xl">Loading...</p>) : ( <div className="flex flex-col gap-y-6">
        <p className="text-2xl text-center">Create Product</p>
          <input onChange={(e)=>setTitle(e.target.value)} className="border border-black px-2 py-1 w-full md:w-[500px]" placeholder="Title" />
          <input onChange={(e)=>setPrice(e.target.value)} className="border border-black px-2 py-1" placeholder="Price" />
          <input onChange={(e)=>setDescription(e.target.value)} className="border border-black px-2 py-1" placeholder="Description" />
          <input onChange={(e)=>setColor(e.target.value)} className="border border-black px-2 py-1" placeholder="Color " />
          <input onChange={(e)=>setSize(e.target.value)} className="border border-black px-2 py-1" placeholder="Size " />
          <label className='cursor-pointer'>
                  <input type="file"className="hidden" onChange={(e) => setFile(e.target.files[0])} />
                  <span className='text-blue-500 underline'>Choose file</span>
                </label>
         
          <select value={selectedCategoryId} onChange={handleCategoryId} className="border border-black px-2 py-1">
            <option value="">Select Status:</option>
            {data.map(item => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ) )}
          </select>


<button onClick={handleProduct} className="bg-blue-500 text-white py-1">{isPending ? "Creating ..." : "Create Product"}</button>
{/* {createProductMutation.isError && <h3 className="text-red-500 text-md">Something went wrong</h3>} */}
          
        </div>)}
       
      </div>
    </div>
  );
};

export default CreateProduct;
