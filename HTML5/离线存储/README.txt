
搭建离线存储服务器

1.服务器设置头信息
    text/cache-manifest.manifest

2. html标签添加
    manifest="xxxx.manifest"

3. 写manifest文件：离线清单列表
    先写： CACHE MANIFEST
    FALLBACK 第一个网络地址没有获取到，就走第二个缓存
    NETWORK 无论缓存中存在与否，均中网络中获取

