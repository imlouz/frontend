import React from "react"
import MainLayout from "../components/layout/MainLayout"

interface IProps {}

export default function IndexPage(props: IProps): JSX.Element {
    return (
        <MainLayout pageTitle={"Loyiha haqida"}>
            <h2>Loyiha haqida</h2>

            <p>Oʻzbek tilidagi matnlarni imlo qoidasi boʻyicha tekshirishga moʻljallangan tizim loyihasi</p>

            <p>Ushbu loyiha bir guruh tashabbuskorlar tomonidan ishlab chiqilmoqda. Loyiha oʻzida tijoriy maqsadlarni koʻzlamagan, yaʼni oʻzbek tilidagi matnlarni imlo qoidasi boʻyicha tekshirishga moʻljallangan ushbu tizimdan foydalanish bepul (Open Source) boʻladi va umrbod shunday boʻlib qoladi. Kelgusida ushbu tizim uchun API ishlab chiqilib, uning asosida oʻzlarining boshqa loyihalarini yaratmoqchi boʻlganlarga ham bepul taqdim etiladi.</p>

            <p>Shuningdek, loyiha natijasida yaratiladigan sayt, tizim hamda soʻzlar bazasi va dasturiy kutubxonalar Github, Gitlab kabi ochiq kodli dasturiy mahsulotlar repozitoriyasiga chiqariladi. Yaʼni nafaqat servisdan foydalanish bepul, balki servis dasturining kodi va bazasi ham ochiq boʻladi.</p>

            <p>Maqsad – xalq orasida savodxonlikni keng targʻib qilish, jamoatchilikka imlo qoidasi boʻyicha toʻgʻri yoza olish uchun zamonaviy imkoniyatlardan foydalanib koʻmak berish.</p>

            <p>Loyiha bosqichma-bosqich amalga oshiriladi. Tayyor boʻlgan bosqich eʼlon qilinib, keyingi bosqichlarda qilingan ishlar orqali doimiy yangilanib borilaveradi.</p>

        </MainLayout>
    )
}
