import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import CategoryItem from '../../components/CategoryItem';
import api from '../../api';

import Header from '../../components/Header';

import {
    Container,
    CategoryArea,
    CategoryList
} from './styled';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if (cat.error == '') {
                setCategories(cat.result)
            }
        };
        getCategories()

    }, []);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&


                <CategoryArea>
                    Selecione uma Categoria
                    <CategoryList>
                        <CategoryItem title="Todas as categoria" image="/assets/food-and-restaurant.png">


                        </CategoryItem>

                    </CategoryList>
                </CategoryArea>
            }
        </Container>
    );
}