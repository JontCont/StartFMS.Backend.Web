import {Options, Vue} from 'vue-class-component';

@Options({
    watch: {
        currentWindowSize: (value) => {
            console.log(value);
        }
    }
})
export default class App extends Vue {

}