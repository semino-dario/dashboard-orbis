"use client"

import React from 'react';
import ReactQuill from 'react-quill';
import './editor.css'
import styles from '../../page.module.scss'


interface EditorProps {
    textContent: string;
    onChange: ((value: string) => void);
    onDelete?: (e:any) => void;

}

const  Editor:React.FC<EditorProps> = ({textContent, onChange}) => {
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
      ]

    const modules = {toolbar: toolbarOptions}

  return <div className={`${styles.containerEditor} ${styles.marginArticleElements}` }>
  <ReactQuill modules={modules} className={styles.editor} theme="snow" value={textContent}  onChange={onChange }  />
  </div>
}

export default Editor