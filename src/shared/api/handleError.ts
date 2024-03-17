export function handleError(err: number): boolean {

    let repeatFetch = false;

    if (err == 401) {
        console.log(`Произошла ошибка: 401`);
        console.log('Проверьте правильность пароля');
        repeatFetch = true;
    }
    else if (err !== 200) {
        console.log(`Произошла ошибка: ${err}`);
        console.log('Повторяем запрос');
        repeatFetch = true;
    }

    return repeatFetch
}