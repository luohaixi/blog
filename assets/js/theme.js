const $themeList = [{
    id: 'theme-dark',
    param: 'dark',
    name: '暗黑主题Î'
}, {
    id: 'theme-light',
    param: 'light',
    name: '默认主题Î'
}]

function handleTheme(theme = $themeList[0]) {

    const body = document.querySelector('body');
    $themeList.forEach(t => {
        body.classList.remove(t.id);
    })
    body.classList.add(theme);

}