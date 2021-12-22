import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService }) => {
  //card object  - not array
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'haeun',
      company: 'BMO',
      theme: 'light',
      title: 'technology Analyst',
      email: 'haeun159951@gmail.com',
      message: 'go for it',
      filename: 'haeun',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'hailey',
      company: 'Samsung',
      theme: 'dark',
      title: 'Automation engineer',
      email: 'haeun159951@gmail.com',
      message: 'go for it',
      filename: 'haeun',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'Kim',
      company: 'Alpha Labs',
      theme: 'colorful',
      title: 'Developer',
      email: 'haeun159951@gmail.com',
      message: 'go for it',
      filename: 'haeun',
      fileURL: null,
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
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
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
