(function () {
    const theme = getQuery('theme');
    if (!theme) {
        window.location.href = window.location.href + "?theme=light"
    }
    initTheme(`theme-${theme}`)
})()

function getQuery(key) {
    const search = window.location.search.substr(1);
    const map = search.substr(0).split("&");
    for (let i = 0; i < map.length; i++) {
        const element = map[i];
        const query = element.split('=');
        if (query[0] == key) {
            return query[1];
        }
    }
    // return 'light'
}

function initTheme(theme = $themeList[0], firstFlag) {
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
    $themeList.forEach(t => {
        body.classList.remove(t.id);
    })
    body.classList.add(theme);
}

function handleTheme(theme = $themeList[0], firstFlag) {
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
        if (t.id === theme) {
            replaceParamVal('theme', t.param)
        }
        body.classList.remove(t.id);
    }
    body.classList.add(theme);
}

//替换指定传入参数的值,paramName为参数,replaceWith为新值
function replaceParamVal(paramName, replaceWith) {
    var oUrl = this.location.href.toString();
    var re = eval('/(' + paramName + '=)([^&]*)/gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    window.location.href = nUrl
}

function handleJump(path) {
    const theme = getQuery('theme');
    window.location.href = `/${path}.html?theme=${theme}`
}