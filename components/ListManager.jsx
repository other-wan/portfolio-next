
const ListManager = ({ data, renderer, className }) => {
    
    return ( 
        <ul className={className.list}>
            {data.map((_item, _index) => (
                <li key={_index} className={className.item}>
                    {renderer(_item, _index)}
                </li>
            ))}
        </ul>
     );
}
 
export default ListManager;
