import {Component,Pipe,PipeTransform  } from '@angular/core';
     
@Component ({
    selector:'validaters',
    template:``
})
export class validaters  {

    public V_name:RegExp =/^[a-zA-Z][a-zA-Z ]{2,30}$/;
    public V_email:RegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    public V_mob:RegExp =/^\d{10,12}$/;
    

}