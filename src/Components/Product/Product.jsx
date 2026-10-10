const Product = (props) => {

console.log(props)

  return (
    <div className="w-1/4 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
      <div className="h-48 bg-gray-700 rounded-xl" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{props.element.name}</span>
            <p className="text-xs text-gray-700">ID: {props.element.id}</p>
          </div>
          <span className="font-bold text-red-600">{props.element.count}</span>
        </div>
        <button
       
     
      onClick={() => {
        props.method(props.id)
      }
      } 
        
        className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"> + </button>
      
       <button
       
        onClick={() => {
          alert("GoodBye !!")
        }
        }
        className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Delete</button>
      
      </div>
    </div>
  );
}

export default Product;
