import Vue from "vue";
import VueI18n from 'vue-i18n'
import en from "@/plugins/lang/en";
import sv from "@/plugins/lang/sv";
import ko from "@/plugins/lang/ko";

Vue.use(VueI18n)

const messages = {
    en,
    sv,
    ko,
}

const i18n = new VueI18n({
    locale: 'ko',
    messages,
})

export default i18n

