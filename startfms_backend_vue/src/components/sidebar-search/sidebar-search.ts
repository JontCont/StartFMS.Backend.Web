// import {MENU} from '@/modules/main/menu-sidebar/menu-sidebar';

import {PfDropdown} from '@profabric/vue-components';
import {Options, Vue} from 'vue-class-component';
import {getUsersMenus} from '@/services/auth'

@Options({
    name: 'app-sidebar-search',
    components: {
        'pf-dropdown': PfDropdown
    }
})
export default class SidebarSearch extends Vue {
    public searchText: string = '';
    public foundMenuItems: any[] = [];
    public isDropdownOpen: boolean = false;
    // public  MENU = getUsersMenus();
    public MENU: any = []; // 設置為空數組，直到 Promise 解決為止

    public handleSearchTextChange(event: any) {
        this.foundMenuItems = [];

        if (event.target.value) {
            this.searchText = event.target.value;
            this.findMenuItems(this.MENU);
            return;
        } else {
            this.searchText = '';
            this.isDropdownOpen = false;
        }
    }

    public handleIconClick() {
        this.searchText = '';
        this.isDropdownOpen = false;
    }

    public handleMenuItemClick() {
        this.searchText = '';
        this.isDropdownOpen = false;
    }

    public findMenuItems(menu: any) {
        if (!this.searchText) {
            return;
        }

        menu.forEach((menuItem: any) => {
            if (
                menuItem.name
                    .toLowerCase()
                    .includes(this.searchText.toLowerCase()) &&
                menuItem.path
            ) {
                this.foundMenuItems.push(menuItem);
            }
            if (menuItem.children) {
                return this.findMenuItems(menuItem.children);
            }
        });

        if (this.foundMenuItems.length > 0) {
            this.isDropdownOpen = true;
        }
    }

    public boldString(str: string, substr: string) {
        return str.replaceAll(
            this.capitalizeFirstLetter(substr),
            `<strong class="text-light">${this.capitalizeFirstLetter(
                substr
            )}</strong>`
        );
    }

    private capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async created() { // 確保 Promise 解決後，再繼續創建組件
        this.MENU = await getUsersMenus();
    }
}
