import React from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = React.useState(null);
  const [favorite, setFavorite] = React.useState([]);
  const [itemFavorite, setItemFavorite] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const [idHistory, setIdHistory] = React.useState([]);
  const Ninh = 'Ninh';

  const addFavorite = id => {
    setFavorite(curr => [...curr, id]);
  };

  const removeFavorite = id => {
    setFavorite(curr => curr.filter(item => item !== id));
  };

  const addItemFavorite = item => {
    setItemFavorite(curr => [...curr, item]);
  };

  const removeItemFavorite = data => {
    setItemFavorite(curr => curr.filter(item => item.path !== data.path));
  };

  const addHistory = item => {
    setHistory(curr => [...curr, item]);
  };
  const addIdHistory = item => {
    setIdHistory(curr => [...curr, item]);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        Ninh,
        favorite,
        setFavorite,
        addFavorite,
        removeFavorite,
        addItemFavorite,
        removeItemFavorite,
        itemFavorite,
        addHistory,
        history,
        addIdHistory,
        idHistory,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
