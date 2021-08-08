import React,{useRef} from "react";

function CategoryFilter({categories, onFilter}) {
  const filterButtonRefs = useRef([]);
  filterButtonRefs.current = [];

  const addToRef = (element) => {
    if(element && !filterButtonRefs.current.includes[element]){
      filterButtonRefs.current.push(element);
    }
  }

  const handleFilterButton = (event) => {
    filterButtonRefs.current.map(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
    onFilter(event.target.value);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map((category, index) => <button key={index} ref={addToRef} onClick={handleFilterButton} value={category}>{category}</button>)
      }
    </div>
  );
}

export default CategoryFilter;
