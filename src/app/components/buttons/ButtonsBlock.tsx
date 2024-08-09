import styles from "../../page.module.css"

interface ButtonsBlockProps {
    index: number
    blockStates: any[]
    setBlockStates: React.Dispatch<React.SetStateAction<any[]>>
    eliminateBlock: (e:React.FormEvent,index: number) => void
}

const ButtonsBlock:React.FC<ButtonsBlockProps> = ({index, blockStates, setBlockStates, eliminateBlock}) => {
   


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
    )
}


export default ButtonsBlock