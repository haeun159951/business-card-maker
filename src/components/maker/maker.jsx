import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  //card object
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
