# Imlo.uz loyihasi
Oʻzbek tilidagi matnlarni imlo qoidasi boʻyicha tekshirishga moʻljallangan tizim loyihasi

Ushbu loyiha bir guruh tashabbuskorlar tomonidan ishlab chiqilmoqda. Loyiha oʻzida tijoriy maqsadlarni koʻzlamagan, yaʼni oʻzbek tilidagi matnlarni imlo qoidasi boʻyicha tekshirishga moʻljallangan ushbu tizimdan foydalanish bepul (Open Source) boʻladi va umrbod shunday boʻlib qoladi. Kelgusida ushbu tizim uchun API ishlab chiqilib, uning asosida oʻzlarining boshqa loyihalarini yaratmoqchi boʻlganlarga ham bepul taqdim etiladi.

Shuningdek, loyiha natijasida yaratiladigan sayt, tizim hamda soʻzlar bazasi va dasturiy kutubxonalar Github, Gitlab kabi ochiq kodli dasturiy mahsulotlar repozitoriyasiga chiqariladi. Yaʼni nafaqat servisdan foydalanish bepul, balki servis dasturining kodi va bazasi ham ochiq boʻladi.

Maqsad – xalq orasida savodxonlikni keng targʻib qilish, jamoatchilikka imlo qoidasi boʻyicha toʻgʻri yoza olish uchun zamonaviy imkoniyatlardan foydalanib koʻmak berish. 

Loyiha bosqichma-bosqich amalga oshiriladi. Tayyor boʻlgan bosqich eʼlon qilinib, keyingi bosqichlarda qilingan ishlar orqali doimiy yangilanib borilaveradi.

Ushbu repository loyihaning UI(front-end) qismi uchun mo'ljallangan.

##  Dasturlash jarayoni uchun

Ushbu loyiha `React` orqali qilingan. 
1) [node.js](https://nodejs.org/en/) ning o'rnatasiz. 
2) [yarn](https://yarnpkg.com/lang/en/docs/install) paket menejeri ni o'rnatasiz


## Ko'chirib ishlatish tartibi

1) `git clone https://github.com/imlouz/frontend.git`\
2) `cd frontend` 
3) Kerak li kutubxonalar o'rnatiladi va run qilinadi: 
    
     - yarn bilan:
    
    ```
    yarn install
    yarn dev
    ```
    - npm bilan:
    
    `npm install`\
    `npm run dev` 

4) keyin http://location:3000 ni browserda ochasiz.

## Kerakli Buyruqlar

    `yarn dev` - development mode uchun run qilish
    `yarn start` - production mode uchun run qilish
    `yarn build` - production mode bilan build qilish
    
## Loyihaga hissa qo'shish uchun
    
1) Ushbu repository ni o'zizga fork qilib olasiz
2) O'zizga fork qilgan repo dan clone ovolasiz.
3) Qilingan o'zgarishlarni fork izga push qilib borasiz.
4) Upstream repository uchun Pull request yaratasiz.
