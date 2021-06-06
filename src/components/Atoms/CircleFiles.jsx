import withFileUpload from "../HOC/withFileUpload";

const CircleFiles = (props) => (
    <div className="ed-grid m-grid-9">
        <form>
            <input type="file" onChange={props.addFile} />
        </form>
        {props.files.map((file, index) => (
            <div className="circle img-container ed-grid m-grid-2" key={index}>
                <img src={file} alt="circle"/>
            </div>
        ))}
    </div>
)

export default withFileUpload(CircleFiles)