import React, { useEffect, useRef, useState } from 'react';
import styles from './itemslist.css';
import { useDispatch, useSelector } from 'react-redux';
import { Filters, RootState, saveFiltering, saveFilters } from '../../store/reducer';
import { GetIds } from '../api/GetIds';
import { GetItems } from '../api/GetItems';

const md5 = require('md5');
const todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

export function ItemsListM() {
    // если filtering = true переходим в компоненту itemsListF для работы с фильтрами
    const filtering = useSelector<RootState, boolean>(state => state.filtering);

    const filters = useSelector<RootState, Filters>(state => state.filters);
    const dispatch = useDispatch();

    // после первого прохода делаем init = false
    const [init, setInit] = useState(true);

    const filterProduct = useRef<HTMLInputElement>(null);
    const filterPrice = useRef<HTMLInputElement>(null);
    const filterBrand = useRef<HTMLInputElement>(null);

    // включение-выключение сообщения об ожидании ответа API
    const [loading, setLoading] = useState(true);

    // включение-выключение кнопок: следующие 50 и предыдущие 50
    const [loadingButtonDown, setLoadingButtonDown] = useState(false);
    const [loadingButtonUp, setLoadingButtonUp] = useState(false);    

    // если loadMore = true, то загружаем порцию данных по API
    const [loadMore, setLoadMore] = useState(true);

    // loadMoreN это (номер показываемой страницы) - 1
    const [loadMoreN, setLoadMoreN] = useState(0);

    // lastPageN это номер самой последней страницы, когда абсолютно все данные уже загружены
    const [lastPageN, setLastPageN] = useState(-1);

    const password = md5(`Valantis_${todayDate}`);
    const itemsOnPage = 50;

    type Item = { id: string; product: string; price: number; brand: string; }

    // данные из items рендерятся на текущую страницу
    const [items, setItems] = useState<Array<Item>>([]);

    // в postItems накапливаем загруженные в items данные
    const [postItems, setPostItems] = useState<Array<Item>>([]);

    // номер записи, с которой нужно подгружать следующую порцию данных, если 
    // в текущей порции оказалось меньше 50 записей
    const [lastReadItem, setLastReadItem] = useState(0);

    // обработка нажатия на кнопку следующие 50
    function clickLoadDown() {
        setLoadMoreN(loadMoreN + 1);

        // если нужно загружать следующую порцию данных
        if (((loadMoreN + 1) * itemsOnPage) === postItems.length) {
            setLoadMore(true);
            setLoading(true);
            setLoadingButtonDown(false);
            setLoadingButtonUp(false);
            setItems([]);
        }
        // если пользуемся массивом postItems (ранее загруженными данными)
        else {
            setLoadMore(false);
            setItems(postItems.slice((loadMoreN + 1) * itemsOnPage, ((loadMoreN + 1) * itemsOnPage) + itemsOnPage));
            scroll(0, 0);
        }
    }

    function clickLoadUp() {
        setLoadMore(false);
        setLoadMoreN(loadMoreN - 1);
        setItems(postItems.slice((loadMoreN - 1) * itemsOnPage, ((loadMoreN - 1) * itemsOnPage) + itemsOnPage));
    }

    // переключение на компоненту itemsListF для работы с фильтрами
    function switchComponent() {
        if (filterProduct.current?.value.trim() !== '' ||
            filterPrice.current?.value !== '' ||
            filterBrand.current?.value.trim() !== '') {
            const filters: Filters = {
                product: filterProduct.current?.value.trim(),
                price: filterPrice.current?.value,
                brand: filterBrand.current?.value.trim()
            }
            dispatch(saveFiltering(true));
            dispatch(saveFilters(filters));
        }
    }

    useEffect(() => {
       
       // обработчики изменения фильтров устанавливаем только один раз в самом начале 
        if (init) {
            setInit(false);
            filterProduct.current?.addEventListener('change', switchComponent);
            filterPrice.current?.addEventListener('change', switchComponent);
            filterBrand.current?.addEventListener('change', switchComponent);
        };

        async function load() {
            const itemsTemp: Item[] = [];
            let lastReadItemPlus = 0;
            if (loadMore) {
                setLoadMore(false);

                while (itemsTemp.length < itemsOnPage) {
                    const listIds = await GetIds(password, lastReadItem + lastReadItemPlus, itemsOnPage - itemsTemp.length);
                    lastReadItemPlus = lastReadItemPlus + itemsOnPage - itemsTemp.length;
                    const listItems = await GetItems(password, listIds);
                    itemsTemp.push(listItems[0]);
                    for (let i = 1; i < listItems.length; i++) {
                        if (listItems[i].id !== listItems[i - 1].id) {
                            itemsTemp.push(listItems[i])
                        }
                    };

                    // если уже вообще все данные прочитаны
                    if (listIds.length < itemsOnPage - itemsTemp.length) { setLastPageN(loadMoreN); break };
                };

                setItems(itemsTemp);
                setPostItems(postItems.concat(itemsTemp));
                setLastReadItem(lastReadItem + lastReadItemPlus);
                setLoadingButtonDown(true);
                setLoadingButtonUp(true);
                setLoading(false);
                scroll(0, 0);
            }
        };

        load();

    }, [loadMoreN]);

    return (
        <div className={styles.itemsList}>
            <div className={styles.titleList}>
                <p className={styles.num}>▼</p>
                <input type="text" name="" className={styles.id} disabled />
                <input type="text" name="" className={styles.prod} ref={filterProduct} />
                <input type="number" name="" min="0" className={styles.price} ref={filterPrice} />
                <input type="text" name="" className={styles.brand} ref={filterBrand} />
            </div>
            <div className={styles.titleList}>
                <h3 className={styles.num}>N</h3>
                <h3 className={styles.id}>ID</h3>
                <h3 className={styles.prod}>PRODUCT</h3>
                <h3 className={styles.price}>PRICE</h3>
                <h3 className={styles.brand}>BRAND</h3>
            </div>
            {loadingButtonUp && loadMoreN !== 0 && <div style={{ textAlign: 'center' }}>
                <button style={{ padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }}
                    onClick={clickLoadUp}>Previous page</button>
            </div>}
            <ul>
                {items.length === 0 && !loading &&
                    <div style={{ textAlign: 'center' }}>Нет ни одного товара</div>}
                {items.map((item, index) => <li className={styles.itemsLine} key={index}>
                    <p className={styles.num}>{index + 1 + itemsOnPage * loadMoreN}</p>
                    <p className={styles.id}>{item.id}</p>
                    <p className={styles.prod}>{item.product}</p>
                    <p className={styles.price}>{item.price}</p>
                    <p className={styles.brand}>{item.brand}</p>
                </li>
                )}

                <div></div>
                {loading && <div className={styles.preloader}></div>}
                {loadingButtonDown && loadMoreN !== lastPageN && <div style={{ textAlign: 'center' }}>
                    <button style={{ padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }}
                        onClick={clickLoadDown}>Next page</button>
                </div>}

            </ul> </div>
    );
}