import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_upload';
import ImageFileInputButton from './components/image_file_input_button/image_file_input_button';
const authService = new AuthService();
const imageUploader = new ImageUploader();

const FileInput = (props) => (
  <ImageFileInputButton {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);
