import React, { Component } from 'react';
import Parse from 'parse';
import FineUploaderTraditional from 'fine-uploader-wrappers';
import Gallery from 'react-fine-uploader';

import { generateFilename } from 'libs/filename';

// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css';

const uploader = new FineUploaderTraditional({
  options: {
    autoUpload: true,
    chunking: {
      enabled: false,
    },
    deleteFile: {
      enabled: false,
      endpoint: '/uploads',
    },
    request: {
      endpoint: 'https://api.please.docker/media',
    },
    validation: {
      allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
    },
  },
});

export default class MultiImageUploader extends Component {
  render() {
    const fileInputChildren = <span>Choose Files</span>;

    return <Gallery fileInput-children={fileInputChildren} uploader={uploader} />;
  }
}
