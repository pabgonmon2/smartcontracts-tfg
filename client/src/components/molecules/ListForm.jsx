import axios from 'axios';
import {TiDeleteOutline} from 'react-icons/ti';

const ListForm = ({ data, type, reload, setReload}) => {

    const handleDelete = (id) => {
        axios.delete(`/server/${type}/${id}`).then((res) => {
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setReload(reload + 1 );
        });
    }
    return (
        <div className="box"> 
            {data ? data.map((item) => {
                return (
                    <div className="list-form-item" key={item.id}>
                        {item.name}
                        <TiDeleteOutline className='itemIcon' onClick={() => handleDelete(item.id)} size={20} />
                    </div>
                )
            }): "No results"}
        </div>
    );

}

export default ListForm;