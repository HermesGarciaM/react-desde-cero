import withFileUpload from "../HOC/withFileUpload";

const SquareFiles = (props) => (
     <div className="ed-grid m-grid-9">
         <form>
             <input type="file" onChange={props.addFile}/>
         </form>
         {props.files.map( (file,index) => (
             <div className="s-ratio-4-3 img-container" key={index}>
                 <img src={file} alt="Avatar"/>
             </div>
         ))}
     </div>
 )

 export default withFileUpload(SquareFiles)