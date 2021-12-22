import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
      ></input>
      <select
        className={styles.select}
        name='theme'
        value={theme}
        onChange={onChange}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        onChange={onChange}
      ></input>
      <textarea
        className={styles.textarea}
        type='text'
        name='message'
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button className={styles.button} name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
