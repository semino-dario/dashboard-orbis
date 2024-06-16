import dynamic from "next/dynamic"
const Preview = dynamic(() => import("../../components/Preview"), {ssr: false}
)


export default function PreviewPage () {
  return(
<Preview />
  )
}