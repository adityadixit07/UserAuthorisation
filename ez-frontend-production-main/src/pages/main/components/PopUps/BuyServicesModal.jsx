import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import Search from './Search';
import ezkaro from '../../../../assets/eZ karo.png';
import { createEzKaroForm } from '../../../../actions/ezKaroActions';

import './BuyServicesModal.css';
import { useOutsideClick } from '../../../../hooks/clickOutside';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ButtonLoading from '../../../../static/ButtonLoading';

const BuyServicesModal = ({ ezKaroForm, setEzKaroForm }) => {
  const dispatch = useDispatch();
  const { loading, formSubmittedError } = useSelector(
    (state) => state.ezKaro
  );

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const ezKaroRef = useRef(null);
  useOutsideClick(() => {
    if (ezKaroForm) {
      setEzKaroForm(false);
    }
  }, ezKaroRef, isCalendarOpen);

  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [deliveryTime, setDeliveryTime] = useState(dayjs());
  const [sellerType, setSellerType] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ezFormData = {
      serviceCategory,
      description: serviceDescription,
      budget: maxBudget,
      deliveryTime: deliveryTime.format('ddd DD MMM YYYY'),
      sellerType,
      isEzAssured: isChecked,
    };

    dispatch(createEzKaroForm(ezFormData));

    // Reset form fields
    setServiceCategory('');
    setServiceDescription('');
    setMaxBudget('');
    setSellerType('');
    setIsChecked(false);
  };

  useEffect(() => {
    if (formSubmittedError) {
      toast.success("Please try again!");
    }
  }, [formSubmittedError]);

  return (
    <div className="popup-container">
      <div className="popup-form" ref={ezKaroRef}>
        <div className="whatare">
          <div className="imgform"></div>
          <h2 className="h2heading">What are you looking for?</h2>
          <p className="pheading">You Demand, We Supply</p>
        </div>
        <div className="search">
          <Search />
        </div>
        <div>
          <img src={ezkaro} alt="eZ karo" />
        </div>

        <div className='category-select'>
          <h2>Select a Category:</h2>
        </div>

        <div className="image-boxes">
          {sellerCategory.map((seller) => (
            <div
              key={seller.id}
              className={`image-box pb-[8px] hover:bg-gray-300 rounded-[8px] ${seller.category === serviceCategory ? 'bg-gray-300 rounded-[8px]' : ''}`}
              onClick={() => setServiceCategory(seller.category)}
            >
              <img
                src={seller.url}
                alt={seller.category}
                className={`w-full h-[120px] object-cover ${seller.category === serviceCategory ? "rounded-t-[8px]" : "rounded-[8px]"}`}
              />
              {seller.category === serviceCategory && <span className="tick-mark">&#10003;</span>}
              <p className="category-name">{seller.category}</p>
            </div>
          ))}
        </div>



        <div className="scrollable-form w-full">
          <form onSubmit={handleSubmit} className="max-w-full mx-auto">
            <div className="mb-4">
              <label className="block mb-2">
                Service Category:
                <input
                  type="text"
                  name="serviceCategory"
                  disabled
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block mb-2">
                Description:
                <textarea
                  name="description"
                  value={serviceDescription}
                  onChange={(e) => setServiceDescription(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block mb-2">
                Budget (Max):
                <input
                  type="number"
                  name="maxBudget"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-2">
                Delivery Time:
                <div className="py-2 w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="border border-gray-300 px-3 py-2 rounded-md w-full"
                      label="Select Date"
                      value={deliveryTime}
                      onChange={(date) => setDeliveryTime(dayjs(date))}
                      onOpen={() => setIsCalendarOpen(true)}
                      onClose={() => setIsCalendarOpen(false)}
                    />
                  </LocalizationProvider>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-2">
                Seller Type:
                {/* <input
                  type="text"
                  name="sellerType"
                  value={sellerType}
                  onChange={(e) => setSellerType(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                /> */}
                <select
                  value={sellerType}
                  onChange={(e) => setSellerType(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                >
                  <option disabled value="">Select from dropdown</option>
                  <option value="Online Seller">Online Seller</option>
                  <option value="Local Seller">Local Seller</option>
                  <option value="Pro Seller">Pro Seller</option>
                </select>
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isEzAssured"
                  checked={isChecked}
                  onChange={() => setIsChecked(prev => !prev)}
                  className="form-checkbox border-gray-300 rounded-md mr-2"
                />
                <span>Is Ez Assured</span>
              </label>
            </div>
            <button
              type='submit' disabled={loading}
              className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center justify-center w-[100px] h-[40px]'
            >
              {loading ? <ButtonLoading /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const sellerCategory = [
  {
    id: 1,
    category: 'Professional Services',
    url:
      'https://smallbizclub.com/wp-content/uploads/2020/06/bigstock-Group-Of-Professional-Business-349068817.jpg',
  },
  {
    id: 2,
    category: 'Digital Services',
    url:
      'https://www.europarl.europa.eu/resources/library/images/20200928PHT88015/20200928PHT88015_original.jpg',
  },
  {
    id: 3,
    category: 'Workshop & Training',
    url:
      'https://workexcellence.com/wp-content/uploads/2022/09/best-business-management-workshops-request-public.jpg.webp',
  },
  {
    id: 4,
    category: 'Other',
    url:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80',
  },
];

export default BuyServicesModal;

{/* <select
  value={serviceCategory}
  onChange={(e) => setServiceCategory(e.target.value)}
>
  <option value="">Choose a category</option>
  <option value="category1">Digital Services</option>
  <option value="category2">Legal</option>
  <option value="category3">Professional Service</option>
  <option value="category4">Other Service</option>
</select> */}

// useEffect(() => {
//   if (formSubmittedMessage && formSubmittedMessage !== null) {
//     toast.success(formSubmittedMessage);
//     dispatch(clearEzErrors());
//     navigate('/main/formsubmitted');
//   }

//   if (formSubmittedError && formSubmittedError !== null) {
//     toast.error(formSubmittedError);
//     dispatch(clearEzErrors());
//   }
// }, [dispatch, formSubmittedError, formSubmittedMessage, navigate]);