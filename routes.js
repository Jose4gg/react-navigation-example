import { ScreenTwo as ScreenOne } from './screen_one'
import { ScreenTwo } from './screen_two'


export default {
    Home: {
        screen: ScreenOne
    },
    'Modal': {
        screen: ScreenTwo,
        mode: "modal"
    },
    'Fade': {
        screen: ScreenTwo,
        mode: "fade-in"
    }, 
    'Pop': {
        screen: ScreenTwo,
        mode: "pop-in"
    },
    'Normal': {
        screen: ScreenTwo,
    }
}