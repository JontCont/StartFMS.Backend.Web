/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Options, Vue} from 'vue-class-component';
import Header from './Header/Index.vue';

@Options({
    components: {
        'app-header': Header,
        // 'menu-sidebar': MenuSidebar,
        // 'control-sidebar': ControlSidebar,
        // 'app-footer': Footer
    },
    watch: {
        watchLayoutChanges: (_) => {}
    }
})
export default class Main extends Vue {

}