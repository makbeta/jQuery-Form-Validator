/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.2.191
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){"use strict";var b=function(b){b.find("[data-validation-depends-on]").on("beforeValidation",function(){var c=a(this),d=c.valAttr("depends-on")||c.valAttr("if-checked");if(d){var e=a.formUtils.getValue('input[name="'+d+'"]',b),f=c.valAttr("depends-on-value"),g=!f||f===e;g||c.valAttr("skipped",!0)}})},c=function(){};a.formUtils.$win.bind("validatorsLoaded formValidationSetup",function(d,e){e||(e=a("form")),b(e),c(e)})}(a)});