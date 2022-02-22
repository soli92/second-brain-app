import { SidemenuConfigModel } from "src/app/shared/side-menu/models/side-menu.models";

export const navSideMenuConfig: SidemenuConfigModel = {
    direction: 'right',
    items: [
        {
            nameI18n: 'Books',
            isActive: false,
            matIcon: 'library_books',
            onClickFn: {
                name: 'navigateTo',
                args: ['books']
            }
        },
        {
            nameI18n: 'About Me',
            isActive: false,
            matIcon: 'filter'
        },
        {
            nameI18n: 'Jokes',
            isActive: false,
            matIcon: 'flare',
            onClickFn: {
                name: 'navigateTo',
                args: ['jokes']
            }
        }
    ]
}