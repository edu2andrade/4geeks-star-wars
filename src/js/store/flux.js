const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			
			addNewFav: (fav) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, fav]});
			},

			removeFav: (fav) => {
				const store = getStore();
				const newFavorites = store.favorites.filter(item => item !== fav);
				setStore({favorites: newFavorites})
			}
		}
	};
};

export default getState;
