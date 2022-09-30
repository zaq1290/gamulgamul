import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Calculator from './Calculator'
import { atCheckList } from '@apis/detail'

interface DetailSelectBoxProps {

}
const DetailSelectBox: FC<DetailSelectBoxProps> = props => {
  const { productId, businessType} = useParams();
  let goodsList: string[] = [];
  let goodsInfo: { goodsId: number; goodsName: string }[] =  [
    {
        "goodsId": 1,
        "goodsName": "goods1"
    },
    {
        "goodsId": 5,
        "goodsName": "goods5"
    }
];
  let productPrices: { price: number; researchDate: string }[] = [];
  useEffect(() => {
    // get data
    const getData = async() =>{
      const { data } = await atCheckList(productId, businessType);
      console.log(data);
      
    }

    getData()
    //goodsList = loadData.goodsList
  }, []);
  const navigate = useNavigate();
  const optionList = ['m',  'o'];
  const [optionState, setOption] = useState<string>('m');
  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };
  // const getGoodsItemInfo = (goodsId, ) => {

  // }
  return (
    <>
      <div className="flex justify-between">
        <select
          onChange={handleSelection}
          className="form-select form-select-sm my-3 block max-w-[25vw] rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-2 py-1 text-xs font-normal text-gray-700 shadow-md transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          aria-label=".form-select-sm example"
        >
          {goodsInfo.map(goods => (
            <option value={goods.goodsName} key={goods.goodsId}>
              {goods.goodsName}
            </option>
          ))}
        </select>
      </div>
      <Calculator />
    </>
  );
};

export default DetailSelectBox;
