import SelectCurrency from '../../../components/home/header/SelectCurrency';

const SelectCurrencyContainer = () => {
  const handleChange = (e, setCurrency) => {
    setCurrency(e.target.value);
    console.log(e.target.value);
  };

  const values = ['USD', 'EUR', 'GBP'];

  return <SelectCurrency handleChange={handleChange} values={values} />;
};

export default SelectCurrencyContainer;
