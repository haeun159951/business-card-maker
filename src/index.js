import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_upload';
import CardRepository from './service/card_repository';
import ImageFileInputButton from './components/image_file_input_button/image_file_input_button';
const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();

const FileInput = memo((props) => (
  <ImageFileInputButton {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
