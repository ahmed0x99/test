import React, { useState } from 'react'
import Product from '../Product/Product'

export default function ProductList() {

    // API ----- 
    // lifiting state-up
    //  parent ------ child
    // state ----> update , delete, create (CRUD) Read , Update , Delete
    const [products , setProducts] = useState([
        {
            "id":1,
            "name" : "product 1",
            "count" : 4
        },

        {
            "id":2,
            "name" : "product 2",
            "count" : 7
        },
        {
            "id":3,
            "name" : "product 3",
            "count" : 4
        },
        {
            "id":4,
            "name" : "product 4",
            "count" : 9
        },
    ])
    function UpdateState(id){
        // copy
        let newArr = [... products]
        // update-delete
        newArr[id - 1].count ++
        // replace
        setProducts(newArr)
    }

    // Git & Github -----> 
// copy 
// edit - delete
// replace

    // function editMethod(id) {
    //     const productsArr = [... products];
    //     productsArr[id].count ++;
    //     setProducts(productsArr)
    //     console.log(products)
    // }


    //  function deleteMethod(id) {
    //     let productsArr = [... products];
     
    //     productsArr = productsArr.filter((element
    //     ) => {
          

    //         return element.id !== id
    //     }
    //     )
    //     setProducts(productsArr)
    //     console.log(products)
    // }

    let x = 5

    return (
    <div className='flex items-center justify-evenly flex-wrap'>   
   {
    products.map((currentItem , index) => {
      return <Product element = {currentItem} method = {UpdateState} id ={currentItem.id}   />
    }
    )
}








    </div>
  )
}
