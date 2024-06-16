import Divider from "./article-elements/Divider";
import Image from "./article-elements/Image";
import styles from "../page.module.css"
import Editor from "./article-elements/Editor";
import Title from "./article-elements/Title";

interface DynamicContentProps {
    blockStates: any[]
    setBlockStates: React.Dispatch<React.SetStateAction<any[]>>
}

const DynamicContent:React.FC<DynamicContentProps> = ({blockStates, setBlockStates}) => {

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

  return (
    <div className={styles.containerMandatoryContent}>
      {blockStates.map( (blockState, index) => (
        <div key={index}>   
          {
           blockState.titleContent !== undefined ? (
              <Title
                subTitle={true}
                titleContent={blockState.titleContent}
                onChange={(value:string) => handleChangeBlock(index, { ...blockState, titleContent: value })}
                onDelete={(e:any) => eliminateBlock(e, index)}
                maxCharacters={90}
              />
            )
            :
            blockState.imageContent !== undefined ? (
              <Image
              imageContent={blockState.imageContent}
              onChange={(value) => handleChangeBlock(index, { ...blockState, imageContent: value})}
              onDelete={(e:any) => eliminateBlock(e, index)}
              mainImage={false}
              />
            )
            :
            blockState.textContent !== undefined ? (
              <Editor
              textContent={blockState.textContent}
              onChange={(value) => handleChangeBlock(index, { ...blockState, textContent: value })}
              onDelete={(e:any) => eliminateBlock(e, index)}
              />
            )
            :
            <Divider /> 
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