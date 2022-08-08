import { modalComponent } from './modalComponent.js';
import { stateComponent } from './stateComponent.js';
import { moviesComponent } from './moviesComponent.js';


const movies = new moviesComponent();
const state = new stateComponent();
const modal = new modalComponent();
movies.init();
state.init();
modal.init();


