
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')



export default {
    plugins: [vue()],

    resolve: {
        alias: {
            "@": resolve(__dirname, 'src')
        }
    }
}