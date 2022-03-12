(function () {
    const theme = getItem('theme');
    handleTheme(theme)
})()

/**
 * 获取localstorage参数
 * @param {*} key 
 * @returns 
 */
function getItem(key) {
    return localStorage.getItem(key);
}

/**
 * 设置localstorage参数
 * @param {*} key 
 * @param {*} value 
 */
function setItem(key, value) {
    localStorage.setItem(key, value);
}

// 改变主题
function handleTheme(theme) {
    setItem('theme', theme)
    var $themeList = [{
        id: 'theme-dark',
        param: 'dark',
        name: '暗黑主题Î'
    }, {
        id: 'theme-light',
        param: 'light',
        name: '默认主题Î'
    }]
    const body = document.querySelector('body');
    for (let i = 0; i < $themeList.length; i++) {
        const t = $themeList[i];
        body.classList.remove(t.id);
    }
    body.classList.add(theme);
}

function handleJump(path) {
    if (location.hostname == '127.0.0.1') {
        window.location.href = `${path}.html`
    } else if (location.hostname == 'luohaixi.github.io') {
        window.location.href = `/blog/${path}.html`

    }
}