import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import { memo } from 'react/cjs/react.development';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
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
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset(); ///ㄷ다 작ㅇㅏ면 리셋
    setFile({ fileName: null, fileURL: null });
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
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button className={styles.button} name='Add' onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
