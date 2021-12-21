import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInputButton from '../image_file_input_button/image_file_input_button';
const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
      ></input>
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
      ></input>
      <select className={styles.select} name='theme' value={theme}>
        <option value='light'>light</option>
        <option value='night'>dark</option>
        <option value='dark'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
      ></input>
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
      ></input>
      <textarea
        className={styles.textarea}
        type='text'
        name='message'
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInputButton />
      </div>
      <Button className={styles.button} name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
