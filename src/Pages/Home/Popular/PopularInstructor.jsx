import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useInstructor from '../../../CustomHook/useInstructor';
 import DisplayInstructor from './DisplayInstructor';

const PopularInstructor = () => {

    const [instructor] = useInstructor();


    
    // console.log(instructor);
    const allInstructor=instructor.filter(sd=>sd.role==='instructor');
    console.log(allInstructor);




    return (
        <div className='mt-20'>
            <SectionTitle heading={'popular instructor'}></SectionTitle>

            <div className='grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  justify-items-center'>
            {
                allInstructor.slice(0,6).map(singlePopularInstructor => <DisplayInstructor
                    key={singlePopularInstructor._id}
                    singlePopularInstructor={singlePopularInstructor}
                ></DisplayInstructor>)
            }
            </div>




        </div>
    );
};

export default PopularInstructor;