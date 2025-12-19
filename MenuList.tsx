import {useEffect, useState } from 'react';
import {MenuItem} from './type';
import axios from 'axios';

const MenuList: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get<MenuItem[]>('https://api.example.com/menu')
         .then(response => {
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
        setLoading(false);
      }); 
        
    },[]);

    if (loading) return <p>Loading menu...</p>
    return(
        <div>
            <h2>Resturant Menu</h2>
           <ul>
            {menuItems.map(item => (
                <li key={item.id}>
                    <strong>{item.name}</strong> ({item.category}) - ₹{item.price};
                </li>
            ))}
           </ul>
        </div>
    )
}

export default MenuList;