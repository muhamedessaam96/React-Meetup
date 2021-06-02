import { createContext , useState} from 'react';

const FavoritesContext = createContext({
    favorites : [],
    totalFavorites :0,
    addFavorite : (Favoritemeetup) => {},
    removeFavorite : (meetupId) => {},
    itemIsFavorite : (meetupId) => {}
});



 export function FavoritesContextProvider(props){
    const [userFavorites , setUserFavorites] = useState([]);

    function addFavoriteHandler(Favoritemeetup){
       setUserFavorites((prevUserFavorites) => {
           return prevUserFavorites.concat(Favoritemeetup);
       });
    }

    function removeFavoritesHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
           return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoritesHandler (meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }


    const context ={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoritesHandler,
        itemIsFavorite : itemIsFavoritesHandler,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;