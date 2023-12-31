import React from 'react';
import useClasses from '../../../CustomHook/useClasses';
import SectionTitle from '../../../components/SectionTitle';
import DisplayPopular from './DisplayPopular';

const Popular = () => {


    const [classes] = useClasses();
    // console.log(classes);
    
   const sortClasses= classes.sort((a, b) => a.available_seat - b.available_seat);
//    console.log(sortClasses);


    return (
        <div>

            <SectionTitle heading={'Popular class'}></SectionTitle>



            <div className='grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center'>
                {
                    sortClasses.slice(0,6).map(singlePopularClass => <DisplayPopular
                        key={singlePopularClass._id}
                        singlePopularClass={singlePopularClass}
                    ></DisplayPopular>)
                }

            </div>


        </div>
    );
};

export default Popular;