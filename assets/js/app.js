import './global.js'

import * as Helper from './classes/Helpers'

$(document).ready(function($){
    Helper.MobileNav();
    Helper.OpenClose();
    Helper.Tabs();
    Helper.MatchHeight();
    Helper.ImgReveal();
    Helper.SlickCarousel();
    Helper.Help();
    Helper.Modal();
});