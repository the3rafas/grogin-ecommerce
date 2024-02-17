import { staticPolicyData } from '@/constrains/data';
import useGetImage from '@/utils/use-image';
import { RiMapPinLine, RiUser3Line, RiHeartLine, RiShoppingCartLine, RiArrowDownSLine } from '@remixicon/react';
import Image from 'next/image';
import SearchInput from '../search input';
import { Accordion, AccordionBody, AccordionHeader, AccordionList, Card, Icon } from '@tremor/react';
import './style.css';
import Slider from '../slider';
export default function Header() {
  return (
    <div className=' w-8/12 mx-auto flex flex-col justify-evenly gap-6 '>
      <div className='flex flex-col gap-x-4 justify-between w-full items-center border-b-2'>
        <div className='flex justify-between w-full gap-x-4 items-center h-20'>
          <div className='flex justify-between w-1/5 items-center'>
            <div>
              <Image src={useGetImage({ src: 'logo-dark.png', dir: 'header' })} alt='logo' width={142} height={34} />
            </div>
            <div className='flex  gap-x-2 items-center'>
              <RiMapPinLine />
              <div>
                <div className='text-xs font-normal text-gray-950'>Deliver to</div>
                <div className='font-medium text-sm'>all</div>
              </div>
            </div>
          </div>
          <div className='w-3/5 '>
            <SearchInput />
          </div>
          <div className='w-1/5 flex justify-evenly items-center'>
            <div className='flex gap-x-2 items-center'>
              <RiUser3Line />
              <div>
                <div className='text-xs font-normal text-gray-950'>Sign In</div>
                <div className='font-medium text-sm'>Account</div>
              </div>
            </div>
            <div>
              <RiHeartLine />
            </div>
            <div>
              <RiShoppingCartLine />
            </div>
          </div>
        </div>
        <div className='flex  w-full  items-center h-12 gap-x-4'>
          <AccordionList className='w-1/4'>
            <Accordion>
              <AccordionHeader className='text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-full max-w-6 mr-3' viewBox='0 0 24 24' fill='#fff'>
                  <path
                    d='M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z'
                    style={{ stroke: 'black' }}
                  />
                </svg>
                <div>All Categories</div>
              </AccordionHeader>
              <AccordionBody className='leading-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit.
                Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
              </AccordionBody>
            </Accordion>
          </AccordionList>
          <ul className='flex  w-2/4 justify-between'>
            <li className='flex gap-x-2 items-center'>
              <h6 className='text-sm font-semibold'>Home</h6>
              <RiArrowDownSLine />
            </li>
            <li className='flex gap-x-2 items-center'>
              <h6 className='text-sm font-semibold'>Shop</h6>
              <RiArrowDownSLine />
            </li>
            <li className='flex gap-x-2 items-center'>
              <h6 className='text-sm font-semibold'>Fruits & Vegetables</h6>
              <RiArrowDownSLine />
            </li>
            <li className='flex gap-x-2 items-center'>
              <h6 className='text-sm font-semibold'>Beverages</h6>
              <RiArrowDownSLine />
            </li>
            <li className='flex gap-x-2 items-center'>
              <h6 className='text-sm font-semibold'>Blog</h6>
              <RiArrowDownSLine />
            </li>
            <li className='flex gap-x-2 items-center'>
              <h6 className='text-sm font-semibold'>Contact</h6>

              <RiArrowDownSLine />
            </li>
          </ul>
          <div className='flex w-1/4 justify-between items-center'>
            <div>Trending Products</div>
            <div className='text-orange-600 font-semibold text-sm'>Almost Finished</div>
            <div className='sale'>SALE</div>
            <RiArrowDownSLine className='text-orange-600 ' />
          </div>
        </div>
      </div>
      <div className='flex  justify-between w-full'>
        <div className='w-full flex justify-end'>
          <Slider />
        </div>
      </div>
      <div className='flex gap-x-px'>
        {staticPolicyData.map((policy, index) => (
          <div className='flex-1 w-1/4 flex gap-3 h-24' key={index}>
            <div className='self-end'>
              {' '}
              <Image width='70' height='70' src={useGetImage({ src: policy.image, dir: 'header' })} alt={policy.heading} />
            </div>
            <div>
              <h1 className='font-bold text-base'>{policy.heading}</h1>
              <p className='text-gray-500 capitalize text-xs'>{policy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
