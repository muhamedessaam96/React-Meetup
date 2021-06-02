import { useState , useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';



function AllMeetupsPage(){
  const [isLoading , setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);
  
  useEffect(()=>{
      setIsLoading(true);

      fetch(
        'https://react-demo-f-default-rtdb.firebaseio.com/meetups.json'
      )
          .then(Response => {
            return Response.json();
          })
          .then (data => {
           const meetups = [];

           for(const key in data){
             const meetup ={
               id : key,
               ...data[key]
             };
             meetups.push(meetup);
           }

            setIsLoading(false);
            setloadedMeetups(meetups);
          });
 
  } , []);

   
   if (isLoading){
     return (
     <section>
       <p>Loading....</p>
     </section>
     );  
   }
    return  (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );

}

export default AllMeetupsPage;