import SelectProductCategory from '../../../components/home/header/SelectProductCategory';

const SelectProductCategoryContainer = () => {
  const handleChange = (e, setProductCategory) => {
    setProductCategory(e.target.value);
    console.log(e.target.value);
  };

  const values = [
    'All Categories',
    'Fruits',
    'Vegetables',
    'Cucumber',
    'Coco Cookies',
  ];

  return <SelectProductCategory handleChange={handleChange} values={values} />;
};

export default SelectProductCategoryContainer;
