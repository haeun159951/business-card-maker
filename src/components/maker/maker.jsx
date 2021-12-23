import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const historyState = useHistory().state;

  //card object  - not array
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.readCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  // id 별로 작성하기  - login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        console.log(userId);
      } else {
        history.push('/');
      }
    });
  });

  const createOrupdateCard = (card) => {
    //js - object feature - for good performance
    // OLDWAY: const updated = { ...cards };
    // updated[card.id] = card;
    //setCards(updated);
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
