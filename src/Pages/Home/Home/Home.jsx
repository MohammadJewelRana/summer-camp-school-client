import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
 
import Banner from './Banner';
import Popular from '../Popular/Popular';
import PopularInstructor from '../Popular/PopularInstructor';
import Category from './Category';
import StudentsLove from './StudentsLove';
import { AuthContext } from '../../../Provider/AuthProvider';
import LoadingPage from '../../../components/LoadingPage';

 
 

const Home = () => {

    const {user,loading}=useContext(AuthContext);

    if(loading){
        return <LoadingPage></LoadingPage>
    }
    



    return (
        <div>
            <Helmet>
                <title>Home | CosmetiCraft</title>
            </Helmet>

        
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor></PopularInstructor>
            <Category></Category>
            <StudentsLove></StudentsLove>
          

            
           
        </div>
    );
};

export default Home;