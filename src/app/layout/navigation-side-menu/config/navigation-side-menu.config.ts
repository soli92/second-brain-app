import { SidemenuConfigModel } from "src/app/shared/side-menu/models/side-menu.models";

export const navSideMenuConfig: SidemenuConfigModel = {
    direction: 'right',
    items: [
        {
            nameI18n: 'Personal Projects',
            isActive: false,
            matIcon: 'verified'
        },
        {
            nameI18n: 'About Me',
            isActive: false,
            matIcon: 'pregnant_woman'
        }
    ]
}