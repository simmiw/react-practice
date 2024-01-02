import Home from "./concepts/home/Home";
import CapturingClick from "./concepts/capturing-clicks/CapturingClick.js";
import CharacterCounter from "./concepts/character-counter/CharacterCounter.js";
import ColorSwitcher from "./concepts/color-switcher/ColorSwitcher.js";
import InputForm from "./concepts/input-form/inputform.js";
import ToDo from "./concepts/todo-app/ToDo.js";
import Toggle from "./concepts/toggle-app/Toggle.js";
import TemperatureConverter from "./concepts/temperature-converter/temperatureConverter.js";
import PromiseAll from "./concepts/promise-all/PromiseAll.js";
import List from "./concepts/userdetails-list/List.js";
import Products from "./concepts/props/productBrand.js";
import ProductBrand from "./concepts/props/productBrand.js";


const listOfConcepts = [
    {
        title: "Home",
        link: "/",
        component: Home
    },

    {
        title: "Click Capturing",
        link: "/click-capturing",
        component: CapturingClick
    },
    {
        title: "Character counter",
        link: "/character-counter",
        component: CharacterCounter
    },
    {
        title: "Color switcher",
        link: "/color-switcher",
        component: ColorSwitcher
    },
    {
        title: "Form",
        link: "/form",
        component: InputForm
    },
    {
        title: "ToDo App",
        link: "/todo-app",
        component: ToDo
    },
    {
        title: "Toggle App",
        link: "/toggle-app",
        component: Toggle
    },
    {
        title: "Temperture converter",
        link: "/temperature-converter",
        component: TemperatureConverter
    },
    {
        title: "User Details",
        link: "/userdetails",
        component: List
    },
    {
        title: "Promise.All",
        link: "/promise-all",
        component: PromiseAll
    },
    {
        title: "Props",
        link: "/productBrand",
        component: ProductBrand
    }
]

const useRoutes = () => { return listOfConcepts }

export default useRoutes;