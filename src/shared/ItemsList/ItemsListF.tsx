import React, { useEffect, useRef, useState } from 'react';
import styles from './itemslist.css';
import { GetItems } from '../api/GetItems';
import { GetFilter } from '../api/GetFilter';
import { useDispatch, useSelector } from 'react-redux';
import { Filters, RootState, saveFiltering, saveFilters } from '../../store/reducer';

const md5 = require('md5');
const eventChange = new Event('change');

export function ItemsListF() {
     // если filtering = false переходим в компоненту itemsListM для работы без фильтров
    const filtering = useSelector<RootState, boolean>(state => state.filtering);

    const filters = useSelector<RootState, Filters>(state => state.filters);
    const dispatch = useDispatch();

     // после первого прохода делаем init = false
    const [init, setInit] = useState(true);

    // включение-выключение сообщения об ожидании ответа API
    const [loading, setLoading] = useState(false);

     // включение-выключение кнопок: следующие 50 и предыдущие 50
    const [loadingButtonDown, setLoadingButtonDown] = useState(false);
    const [loadingButtonUp, setLoadingButtonUp] = useState(false);

    const filterProduct = useRef<HTMLInputElement>(null);
    const filterPrice = useRef<HTMLInputElement>(null);
    const filterBrand = useRef<HTMLInputElement>(null);

    // если loadMore = true, то загружаем порцию данных по API
    const [loadMore, setLoadMore] = useState(true);

     // loadMoreN это (номер показываемой страницы) - 1
    const [loadMoreN, setLoadMoreN] = useState(0);

    // общее число страниц
    const [numberOfPages, setNumberOfPages] = useState(1);

    const todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const password = md5(`Valantis_${todayDate}`);
    const itemsOnPage = 50;

    type Item = { id: string; product: string; price: number; brand: string; }

    // данные из items рендерятся на текущую страницу
    const [items, setItems] = useState<Array<Item>>([]);

     // в postItems накапливаем загруженные в items данные
    const [postItems, setPostItems] = useState<Array<Item>>([]);

    let productF: string | undefined = filters.product;
    let priceF: string | undefined = filters.price;
    let brandF: string | undefined = filters.brand;

    let listFilter: string[] = [];
    let listFilterProduct: string[] = [];
    let listFilterPrice: string[] = [];
    let listFilterBrand: string[] = [];

    function clickLoadDown() {
        if (loadMoreN + 1 < numberOfPages) {
            setLoadMoreN(loadMoreN + 1);
            setItems(postItems.slice((loadMoreN + 1) * itemsOnPage, ((loadMoreN + 1) * itemsOnPage) + itemsOnPage));
            scroll(0, 0);
            if (loadMoreN + 1 === numberOfPages - 1) { setLoadingButtonDown(false) }
        }
    }

    function clickLoadUp() {
        setLoadMoreN(loadMoreN - 1);
        setItems(postItems.slice((loadMoreN - 1) * itemsOnPage, ((loadMoreN - 1) * itemsOnPage) + itemsOnPage));
        setLoadingButtonDown(true);
    }

    // переключение на компоненту itemsListM для работы без фильтров
    function switchComponent() {
        if (filterProduct.current?.value.trim() === '' &&
            filterPrice.current?.value === '' &&
            filterBrand.current?.value.trim() === '') {
            dispatch(saveFilters({ product: '', price: '', brand: '' }));
            dispatch(saveFiltering(false));
            return true
        }
        else return false
    }

    useEffect(() => {
        let temp: HTMLInputElement | null = filterProduct.current;
        if (temp && productF) { temp.value = productF };
        temp = filterPrice.current;
        if (temp && priceF) { temp.value = priceF };
        temp = filterBrand.current;
        if (temp && brandF) { temp.value = brandF };

        // при первом проходе имитируем ввод полученных через redux store фильтров
        if (init && productF !== '') {
            filterProduct.current?.dispatchEvent(eventChange);
        }
        if (init && priceF !== '') {
            filterPrice.current?.dispatchEvent(eventChange);
        }
        if (init && brandF !== '') {
            filterBrand.current?.dispatchEvent(eventChange);
        }

    }, [productF, priceF, brandF]);

    useEffect(() => {
        // если изменился product
        async function filterProductFunc() {
            if (!switchComponent()) {
                productF = filterProduct.current?.value.trim();
                listFilterProduct = await GetFilter(password, { "product": productF });
                setLoadMore(true);
                loadF();
                setInit(false);
            }
        }

        // если изменился price
        async function filterPriceFunc() {
            if (!switchComponent()) {
                priceF = filterPrice.current?.value;
                listFilterPrice = await GetFilter(password, { "price": Number(priceF) });
                setLoadMore(true);
                loadF();
                setInit(false);
            }
        }

        // если изменился brand
        async function filterBrandFunc() {
            if (!switchComponent()) {
                brandF = filterBrand.current?.value.trim();
                listFilterBrand = await GetFilter(password, { "brand": brandF });
                setLoadMore(true);
                loadF();
                setInit(false);
            }
        }

        filterProduct.current?.addEventListener('change', filterProductFunc);
        filterPrice.current?.addEventListener('change', filterPriceFunc);
        filterBrand.current?.addEventListener('change', filterBrandFunc);

        async function loadF() {
            const itemsTemp: Item[] = [];
            listFilter = [];
            setLoadMoreN(0);
            setItems([]);
            setLoadingButtonDown(false);
            setLoadingButtonUp(false);

            if (loadMore && (productF !== '' || priceF !== '' || brandF !== '')) {
                setLoading(true);
                setLoadMore(false);

                // формируем массив данных с учетом всех фильтров
                if (productF !== "") { listFilter = listFilterProduct };
                if (priceF !== '') { listFilter = listFilterPrice };
                if (brandF !== "") { listFilter = listFilterBrand };

                if (productF !== "") { listFilter = listFilter.filter(x => listFilterProduct.includes(x)); }
                if (priceF !== '') { listFilter = listFilter.filter(x => listFilterPrice.includes(x)); }
                if (brandF !== "") { listFilter = listFilter.filter(x => listFilterBrand.includes(x)); }

                if (listFilter.length > 0) {
                    const listItemsFilter = await GetItems(password, listFilter);
                    let j = 0;
                    for (let i = 0; i < listItemsFilter.length; i++) {
                        if ((listItemsFilter[i].product.includes(productF) || productF === "") &&
                            (listItemsFilter[i].price === Number(priceF) || priceF === '') &&
                            (listItemsFilter[i].brand === brandF || brandF === "")) {
                            j = i;
                            break;
                        }
                    };
                    itemsTemp.push(listItemsFilter[j]);
                    for (let i = j + 1; i < listItemsFilter.length; i++) {
                        if (
                            (listItemsFilter[i].product.includes(productF) || productF === "") &&
                            (listItemsFilter[i].price === Number(priceF) || priceF === '') &&
                            (listItemsFilter[i].brand === brandF || brandF === "")) {
                            if (listItemsFilter[i].id !== listItemsFilter[i - 1].id) {
                                itemsTemp.push(listItemsFilter[i])
                            }
                        }
                    };
                };
                setLoading(false);
                setItems(itemsTemp.slice(0, itemsOnPage));
                setPostItems(itemsTemp);
                setNumberOfPages(Math.ceil(itemsTemp.length / itemsOnPage));
                if (itemsTemp.length > itemsOnPage) {
                    setLoadingButtonDown(true);
                    setLoadingButtonUp(true);
                }
            }
        };

    }, []);

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
                {items.length === 0 && !loading && !init &&
                    <div style={{ textAlign: 'center' }}>Нет ни одного товара</div>}
                {items.map((item, index) => <li className={styles.itemsLine} key={index}>
                    <p className={styles.num}>{index + 1 + itemsOnPage * loadMoreN}</p>
                    <p className={styles.id}>{item.id}</p>
                    <p className={styles.prod}>{item.product}</p>
                    <p className={styles.price}>{item.price}</p>
                    <p className={styles.brand}>{item.brand}</p>
                </li>
                )}

                {loading && <div className={styles.preloader}></div>}
                {loadingButtonDown && <div style={{ textAlign: 'center' }}>
                    <button style={{ padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }}
                        onClick={clickLoadDown}>Next page</button>
                </div>}

            </ul> </div>
    );
}