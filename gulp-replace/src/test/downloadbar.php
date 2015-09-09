<?php

use common\helpers\Cdn;
$this->title = "下载条测试...";

$this->params["appAsset"] = 'frontend\assets\promotion\pre150720\TreasureAsset';
?>

    <style>

        .item {
            margin: 1rem auto;
        }

        .item img {
            width: 100%;
        }

    </style>

    <script>document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 10 + 'px';</script>

    <main>
        <nav>
            <div class="nav-container swiper-container">
                <div class="nav-wrapper swiper-wrapper"></div>
            </div>
        </nav>

        <section>

            <div class="item">
                <img data-src="./statics/img/test/1.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/2.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/3.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/4.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/5.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/6.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/7.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/8.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/9.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/10.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/11.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/12.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img data-src="./statics/img/test/13.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img src="./statics/img/test/15.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <div class="item">
                <img src="__CDN__/statics/img/test/180.jpg" alt="" class="lazyImg" data-webp="1">
            </div>

            <!--build-->
            <div class="item">
                <img src="__CDN__/statics/img/test/7.jpg" alt="" class="lazyImg" data-webp="1">
            </div>
            <!--endbuild-->

            <div class="item">
                <img data-src="__CDN__/statics/img/test/3.jpg" alt="" class="lazyImg">
            </div>

            <img src="__CDN__/statics/img/test/1.jpg" alt="" class="lazyImg">

            <img src='__CDN__/statics/img/test/2.jpg?xxx=xxx' alt="" class="lazyImg">

        </section>
    </main>

<?php $this->beginBlock("script");?>

    <script>

        wx.config({
            debug: false,
            appId: common.weixin.appId,
            timestamp: common.weixin.timestamp,
            nonceStr: common.weixin.nonceStr,
            signature: common.weixin.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        });

        require(["mains/promotion/pre150720/test"]);

    </script>
<?php $this->endBlock("script");?>
