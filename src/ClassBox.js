import useApiLista from "./useApiLista";
import DataList from "./DataList";

const ClassBox = (props) => {
    const { error, isPending, data} = useApiLista(props.url)

    return ( 
        <div>
            <h2>{props.titulo}</h2>

            <div>

            </div>

            <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { data && <DataList data={data} /> }
            </div>
        </div>
     );
}
 
export default ClassBox;