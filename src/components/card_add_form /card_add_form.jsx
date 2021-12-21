import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInputButton from '../image_file_input_button/image_file_input_button';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset(); ///ㄷ다 작ㅇㅏ면 리셋
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      ></input>
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='Company'
      ></input>
      <select
        ref={themeRef}
        className={styles.select}
        name='theme'
        placeholder='theme'
      >
        <option placeholder='light'>light</option>
        <option placeholder='night'>dark</option>
        <option placeholder='dark'>colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='title'
      ></input>
      <input
        ref={emailRef}
        className={styles.input}
        type='text'
        name='email'
        placeholder='email'
      ></input>
      <textarea
        ref={messageRef}
        className={styles.textarea}
        type='text'
        name='message'
        placeholder='message'
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInputButton />
      </div>
      <Button className={styles.button} name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
