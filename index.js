/*
 *  @Soldy\clonerc\2021.02.07\GPL3
 */
'use strict';

/*
 * @prototype
 */
const cloneBase = function(){
    /*
     * @param {any}
     * @public
     * @return {any}
     */
    this.clone = function(element){
        return _one(element);
    };
    /*
     * @param {any}
     * @private
     * @return {any}
     */
    const _one = function(element){
        if(Buffer.isBuffer(element))
            return Buffer.from(element);
        const type = (typeof element);
        if(type === 'boolean'){
            if(element)
                return true;
            return false;
        }
        if(type === 'number')
            return _number(element);
        if(type === 'string')
            return element.toString();
        if(Array.isArray(element)){
            let out = [];
            for(let i of element)
                out.push(_one(i));
            return out;
        }
        let out = {};
        for(let i in element)
            out[i] = _one(
                element[i]
            );
        return out;

    };
    /*
     * @param {number}
     * @private
     * @return {number}
     */
    const _number = function(element){
        if(Number.isNaN(element))
            return NaN;
        if(Number.isSsfeInteger(element))
            return parseInt(element);
        parseFloat(element);
    };
};

exports.base = cloneBase();
