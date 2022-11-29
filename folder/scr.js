function reset(){
    location.reload();
}

////////////////////////////////////////DIRECT MAPPED FUNCTIONS/////////////////////////////////////////////////////

let dir_arr = [];
let dir_arr_search = [];
let dir_count = 0;
let dir_miss = 0;
function dir_map_final_call(){
    let dir_ret_val = document.getElementById("my_input").value;
    if(isNaN(dir_ret_val) || (dir_ret_val % 1 != 0)){
        alert("PLEASE INPUT A VALID AND WHOLE NUMBER");
        return;
    }
    if((typeof dir_ret_val == 'string')&&(dir_ret_val.length === 0)){
        alert("PLEASE ENTER A NUMBER");
        return;
    }
    else{
        let dir_ret_col = dir_ret_val % 8;
        let dir_last_val = document.getElementById("dir_table").rows[dir_ret_col + 1].cells[1].innerHTML;
        let dir_insert_val = document.getElementById("dir_table").rows[dir_ret_col + 1].cells[1].innerHTML = dir_ret_val;
        dir_arr.push(dir_insert_val);
        dir_arr_search.push(dir_insert_val);
        if(dir_last_val != "EMPTY"){
            const foo = (element) => element == dir_last_val;
            let value = dir_arr_search.findIndex(foo); 
            dir_arr_search.splice(value, 1);
        }
       
             
    }

}

function dir_search(){
    
    var val =  document.getElementById("search_input").value;
    if(isNaN(val) || (val % 1 != 0)){
        alert("PLEASE INPUT A VALID AND WHOLE NUMBER");
        return;
    }
    if((typeof val == 'string')&&(val.length === 0)){
        alert("PLEASE ENTER A NUMBER");
        return;
    }
    let hit = dir_arr_search.find(num => {
        if(num == val) return true;
        else return false;    
    });

    if(hit != undefined){
        dir_count++;
        alert("CACHE HITS: " + dir_count);
    }
    else{
        dir_miss++;
        alert("CACHE MISSES: " + dir_miss);
    }
    
}

////////////////////////////////////////////2-WAY SET ASSOCIATIVE FUNCTIONS//////////////////////////////////////////////////////////

let tw_arr = [];
let tw_lru_arr = [];
let more_than_two = false;
let bool_recache = false;
let empty_counter = 0;
let tw_count = 0;
let tw_hit = 0;
let tw_miss = 0;
let modZero = 0;
let modOne = 0;
let modTwo = 0;
let modThree = 0;
let intS0 = 0;
let intS1 = 0;
let intS2 = 0;
let intS3 = 0;
let temp_test = 0;
let copy_of_cv0 = 0;
let copy_of_cv1 = 0;
function str_values(num){
    let str1 = "";
    let str2 = "";
    switch(num){
        case 0:
            str1 = "s0cell0";
            str2 = "s0cell1";
        break;
        case 1:
            str1 = "s1cell0";
            str2 = "s1cell1";
        break;
        case 2:
            str1 = "s2cell0";
            str2 = "s2cell1";
        break;
        case 3:
            str1 = "s3cell0";
            str2 = "s3cell1";
        break;
        default:
            console.log("value out of reach");    
    }
    return [str1, str2];
}
function funky(num){
    switch(num){
        case 0:
            modZero++;
            if(modZero > 2){return false;}
            else{return true;}
        break;
        case 1:
            modOne++;
            if(modOne > 2){return false;}
            else{return true;}
        break;
        case 2:
            modTwo++;
            if(modTwo > 2){return false;}
            else{return true;}
        break;
        case 3:
            modThree++;
            if(modThree > 2){return false;}
            else{return true;}
        break;
        default:
            console.log("BROKEN");
    }
}
function cache_counter(num){
    let _boolean = true;

    switch(num){
        case 0:
            if(intS0 > 0)_boolean = false; 
        break;
        case 1:
            if(intS1 > 0)_boolean = false
        break;
        case 2:
            if(intS2 > 0)_boolean = false;
        break;
        case 3:
            if(intS3 > 0 )_boolean = false;
        break;
        default:
            _boolean = true;
               
    }
    return _boolean;
}
function recache(num,arr){
    const grault = (element) => element == num;
    const garply = arr.findIndex(grault);
    arr.splice(garply,1);
    arr.push(num);
}
let alternator = 0;
function two_way_final_call(){
    let tw_ret_val = document.getElementById("tw_input").value;
    let c_val0 = "";
    let c_val1 = "";
    let my_string = 0;
    //console.log(tw_ret_val);
    let mod_ret_val = 0;
    if(isNaN(tw_ret_val) || (tw_ret_val % 1 != 0)){
        alert("PLEASE INPUT A VALID AND WHOLE NUMBER");
        return;
    }
    if((typeof tw_ret_val == 'string')&&(tw_ret_val.length === 0)){
        alert("PLEASE ENTER A NUMBER");
        return;
    }
    mod_ret_val = tw_ret_val % 4;
    my_string = str_values(mod_ret_val);
    c_val0 = document.getElementById(my_string[0]).innerHTML;
    c_val1 = document.getElementById(my_string[1]).innerHTML;
    const alpha = (element) => element == tw_ret_val;
    if(c_val0 == "EMPTY" || c_val1 == "EMPTY"){
        let ret_html = (c_val1 == "EMPTY" || c_val1 == tw_ret_val) ? c_val1 = document.getElementById(my_string[1]).innerHTML = tw_ret_val : c_val0 = document.getElementById(my_string[0]).innerHTML = tw_ret_val;
        const qux = tw_arr.find(element => element == tw_ret_val);
        let pusher = (qux == undefined) ? tw_arr.push(tw_ret_val) : console.log("DUPLICATE VALUE");
    }
    temp_test = funky(mod_ret_val);
    if(temp_test == false){
        const search = tw_arr.find(element => element == tw_ret_val);
        let bar = cache_counter(mod_ret_val);
        if((search == undefined)&&(bar == true)){
            alternator = alternator + 1;
            tw_arr.push(tw_ret_val);
            let return_html = (alternator % 2 == 1) ? c_val1 = document.getElementById(my_string[1]).innerHTML = tw_ret_val : c_val0 = document.getElementById(my_string[0]).innerHTML = tw_ret_val;   
        }
        if((search == undefined) && (bar==false)){
            let baz = (element) => element == c_val0;
            let foobar = (element) => element == c_val1;
            const qux = tw_arr.findIndex(baz);
            const quux = tw_arr.findIndex(foobar);
            let fum = (qux > quux) ?  c_val1 = document.getElementById(my_string[1]).innerHTML = tw_ret_val : c_val0 = document.getElementById(my_string[0]).innerHTML = tw_ret_val;
            tw_arr.push(tw_ret_val); 
        }
        if(search != undefined){
            recache(tw_ret_val, tw_arr);
            let temp_num = (mod_ret_val == 0) ? intS0 = 1 : (mod_ret_val == 1) ? intS1 = 1 : (mod_ret_val == 2) ? intS2 = 1 : (mod_ret_val == 3) ? intS3 = 1 : console.log("NOT FOUND");
            let baz = (element) => element == c_val0;
            let foobar = (element) => element == c_val1;
            const qux = tw_arr.findIndex(baz);
            const quux = tw_arr.findIndex(foobar);
            if((tw_ret_val != c_val0) && (tw_ret_val != c_val1)){
                let fum = (qux > quux) ?  c_val1 = document.getElementById(my_string[1]).innerHTML = tw_ret_val : c_val0 = document.getElementById(my_string[0]).innerHTML = tw_ret_val;   
            } 
            bar = cache_counter(mod_ret_val); 
        }
    }
    
}

function tw_search(){ 
    let tw_srch_val = document.getElementById("tw_search").value;
    if(isNaN(tw_srch_val) || (tw_srch_val % 1 != 0)){
        alert("PLEASE INPUT A VALID AND WHOLE NUMBER");
        return;
    }
    if((typeof tw_srch_val == 'string')&&(tw_srch_val.length === 0)){
        alert("PLEASE ENTER A NUMBER");
        return;
    }
    let mod_srch_val = tw_srch_val % 4;
    let index_val = str_values(mod_srch_val);
    let cell_0_value = document.getElementById(index_val[0]).innerHTML;
    let cell_1_value = document.getElementById(index_val[1]).innerHTML;
    if((tw_srch_val == cell_0_value) || (tw_srch_val == cell_1_value)){
        tw_hit++;
        alert("HITS: " + tw_hit);
    }
    else{
        tw_miss++;
        alert("MISSES: " + tw_miss);
    }    
}

///////////////////////////////////////////////////////////FULLY ASSOCIATIVE/////////////////////////////////////////////////////////////////////
let full_assoc_arr = [];
let initial_fill = true;
let table_counter = 7;
let unit_map = new Map();
let all_num_arr = [];
let curr_num_arr = [];
let LRU = 0;
let fac_hits = 0;
let fac_misses = 0;
const STATUS = {
    FILLED : 'FILLED',
    EMPTY : 'EMPTY'
};
function fa_recache(num,arr){
    const grault = (element) => element == num;
    const garply = arr.findIndex(grault);
    arr.splice(garply,1);
    arr.push(num);
    console.log(arr);
}
function cache_chopper(num,arr){
    const grault = (element) => element == num;
    const garply = arr.findIndex(grault);
    arr.splice(garply,1);
    console.log(arr);
}
function map_quest(data,map){
    let str = "";
    for (const [key, value] of map.entries(map)) {
        let val = `${key}`;
        let num = `${value}`;
        if(data == num){
            str = val;
            break;
        }
    }
    return str;
}
let first_fill = ['unit0','unit1','unit2','unit3','unit4','unit5','unit6','unit7'];
function full_assoc_final_call(){
    let full_assoc_input = document.getElementById("full_assoc_input").value;
    console.log(full_assoc_input);
    if(isNaN(full_assoc_input) || (full_assoc_input % 1 != 0)){
        alert("PLEASE INPUT A VALID AND WHOLE NUMBER");
        return;
    }
    if((typeof full_assoc_input == 'string')&&(full_assoc_input.length === 0)){
        alert("PLEASE ENTER A NUMBER");
        return;
    }
    let fac_val = full_assoc_input;
    let temp = 1;
    if(table_counter >= 0){
        first_fill[table_counter];
        const search = full_assoc_arr.find(element => element == fac_val);
       if(search == undefined){  
            let return_val = document.getElementById(first_fill[table_counter]).innerHTML = fac_val;
            full_assoc_arr.push(fac_val);
            unit_map.set(first_fill[table_counter],fac_val);
            table_counter--;
        }
        else{
            fa_recache(fac_val,full_assoc_arr);
        } 
    }
    const quuux = full_assoc_arr.find(element => element == fac_val);
    if(quuux != undefined) fa_recache(fac_val, full_assoc_arr);
    else if(quuux == undefined){
        LRU = full_assoc_arr[0];
        let tempString = map_quest(LRU, unit_map);
        cache_chopper(LRU,full_assoc_arr);
        let retVal = document.getElementById(tempString).innerHTML = fac_val;
        full_assoc_arr.push(fac_val);
        unit_map.set(tempString,fac_val);
    }

}

function full_assoc_search(){
    let full_assoc_search = document.getElementById("full_assoc_search").value;
    if(isNaN(full_assoc_search) || (full_assoc_search % 1 != 0)){
        alert("PLEASE INPUT A VALID AND WHOLE NUMBER");
        return;
    }
    if((typeof full_assoc_search == 'string')&&(full_assoc_search.length === 0)){
        alert("PLEASE ENTER A NUMBER");
        return;
    }
    let search = full_assoc_arr.find(element => element == full_assoc_search);
    if(search != undefined){
        fac_hits++;
        alert("HITS: " + fac_hits);
    }
    else if(search == undefined){
        fac_misses++;
        alert("MISSES: " + fac_misses);
    }

}
