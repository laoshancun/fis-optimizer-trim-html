# fis-optimizer-trim-html

A optimizer for fis to compress html.

## 使用

npm install -g fis-optimizer-trim-html

## 配置

在项目配置文件（默认fis-conf.js）配置

```javascript
fis.match('**.html', {
        optimizer: fis.plugin('trim-html')
    })
```

