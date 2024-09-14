import Header from '@/components/Header'
import React from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from "@/components/ui/separator"
import features from './../Shared/features.json'
import { Button } from '@/components/ui/button';
import { useState } from 'react'

function AddListing() {
    const[formdata, setFormData] = useState([]);

    const handleInputChange=(name, value)=>{
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    console.log(formdata);

    const onSubmit=(e)=>{
        e.prvenDefault();
        console.log(formdata);
    }

  return (
    <div>
        <Header />
        <div className="px-10 md:px-20 my-10">
            <h2 className="font-bold text-4xl">Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10'>
                {/*Car Details*/}
                <div>
                    <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            carDetails.carDetails.map((item, index)=>(
                                <div key={index}>
                                    <label className='text-sm'>
                                        {item?.label}
                                        {item.required&&<span className='text-red-500'>*</span>}
                                    </label>
                                    {item.fieldType=='text'||item.fieldType=='number'?
                                        <InputField item={item} handleInputChange={handleInputChange}/> :
                                        item.fieldType=='dropdown'?
                                        <DropdownField item={item}  handleInputChange={handleInputChange}/>
                                        :item.fieldType=='textarea'?
                                        <Textarea item={item}  handleInputChange={handleInputChange}/>
                                        :""
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Separator className="my-6"/>
                {/*Features List*/}
                    <div>
                        <h2 className='fonr-medium text-xl my-6'>Features</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                            {features.features.map((item, index)=>(
                                <div key={index} className='flex gap-2 items-center'>
                                    <input type="checkbox" onChange={(value)=>handleInputChange(item.name, true)}/>
                                    <h2>{item.label}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                {/*Car Images*/}
                <div className="mt-10 flex justify-end">
                    <Button type="submit" onClick={(e)=>onSubmit(e)}>Submit</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing