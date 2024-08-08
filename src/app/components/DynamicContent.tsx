"use client"

import Divider from "./article-elements/Divider";
import styles from "../page.module.css"
import Editor from "./article-elements/Editor";
import Title from "./article-elements/Title";
import ImageLoader from "./ImageLoader";
import { useDispatch, useSelector } from "react-redux";
import {  setDynamicContent } from "../store/slice";
import { useEffect, useState } from "react";

interface DynamicContentProps {
    blockStates: any[]
    setBlockStates: React.Dispatch<React.SetStateAction<any[]>>
}

const DynamicContent:React.FC<DynamicContentProps> = ({blockStates, setBlockStates}) => {
const dispatch = useDispatch()

const eliminateBlock = (e:React.FormEvent,index: number) => {
  e.preventDefault()  
  const updatedBlockStates = blockStates.filter((_, i) => i !== index);
  setBlockStates(updatedBlockStates);
  };



const handleChangeBlock = (index: number, newState:any[]) => {
    const updatedBlockStates = [...blockStates];
    updatedBlockStates[index] = newState;
    setBlockStates(updatedBlockStates);
    localStorage.setItem('blockStates', JSON.stringify(updatedBlockStates));
  };

  const moveBlock = (e:React.FormEvent, currentIndex: number, direction: "up" | "down") => {
    e.preventDefault()
    const newIndex =
      direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < blockStates.length) {
      const updatedBlocks = [...blockStates];
      const temp = updatedBlocks[currentIndex];
      updatedBlocks[currentIndex] = updatedBlocks[newIndex];
      updatedBlocks[newIndex] = temp;
      setBlockStates(updatedBlocks);
    }
  };

  useEffect(() => {

    dispatch(setDynamicContent(blockStates))

  }, [blockStates, dispatch]);


  return (
    <div className={styles.containerMandatoryContent}>
      {blockStates.map( (blockState, index) => (
        <div key={blockState.id}>   
          {
           blockState.titleContent !== undefined ? (
              <Title
              key={`subtitle-${blockState.id}`}
                subTitle={true}
                titleContent={blockState.titleContent}
                onChange={(value:string) => handleChangeBlock(index, { ...blockState, titleContent: value })}
                onDelete={(e:any) => eliminateBlock(e, index)}
                maxCharacters={90}
              />
            )
            :
            blockState.imageContent !== undefined ? (
             <ImageLoader
              key={`image-loader-${blockState.id}`}
               imageContent={blockState.imageContent}
               onDelete={(e:any) => {eliminateBlock(e, index)}}
               onChange={(value:string) => handleChangeBlock(index, { ...blockState, imageContent: value })}
             />
              )
            :
            blockState.textContent !== undefined ? (
              <Editor
              key={`editor-${blockState.id}`}
              textContent={blockState.textContent}
              onChange={(value) => handleChangeBlock(index, { ...blockState, textContent: value })}
              onDelete={(e:any) => eliminateBlock(e, index)}
              />
            )
            :
            <Divider
            key={`divider-${blockState.id}`}
            /> 
             }
              <div className={styles.containerBlockButtons}>
              <button className={styles.blockButton} onClick={(e:any) => {eliminateBlock(e, index)}}>🗑</button>
           {blockStates.length === 1 && index === 0 ?
          <></>
          :
          blockStates.length > 1 && index === 0 ?
            <button className={styles.blockButton}  onClick={(e:any) => moveBlock(e, index, "down")}>↓</button>
            :
          index === blockStates.length - 1
          ?
          <button className={styles.blockButton}  onClick={(e) => moveBlock(e, index, "up")}>↑</button>
            :
            <div className="flex flex-row gap-2">
            <button className={styles.blockButton} onClick={(e) => moveBlock(e, index, "up")}>↑</button>
            <button className={styles.blockButton}  onClick={(e) => moveBlock(e, index, "down")}>↓</button>
            </div>}
            </div>
        </div>
      ))
}  </div> 
  )
}

export default DynamicContent