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
    this.fast = function(element){
        return _fast(element);
    };
    /*
     * @param {any}
     * @public
     * @return {any}
     */
    this.faster = function(element){
        return _faster(element);
    };
    /*
     * @param {any}
     * @public
     * @return {any}
     */
    this.clone = function(element){
        return _normal(element);
    };
    /*
     * @param {any}
     * @public
     * @return {any}
     */
    this.normal = function(element){
        return _normal(element);
    };
    /*
     * @param {any}
     * @private
     * @return {any}
     */
    const _normal = function(element){
        if(Buffer.isBuffer(element))
            return Buffer.from(element);
        if(element===null)
            return null;
        if(Number.isNaN(element))
            return NaN;
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
                out.push(_normal(i));
            return out;
        }
        let out = {};
        for(let i in element)
            out[i] = _normal(
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
        if(Number.isSafeInteger(element))
            return parseInt(element);
        return parseFloat(element);
    };
    /*
     * @param {any}
     * @private
     * @return {any}
     */
    const _faster = function(element){
        switch(typeof element){
            case 'boolean':
                if(element)
                    return true;
                return false;
            case 'number':
                if(Number.isSafeInteger(element))
                    return parseInt(element);
                return parseFloat(element);
            case 'string':
                return element.toString();
            case 'object':
                if(element.constructor === [].constructor){
                    let out = [];
                    for(let i of element)
                        out.push(_faster(i));
                    return out;
                }
                let out = {};
                for(let i in element)
                    out[i] = _faster(
                        element[i]
                    );
                return out;
        }
    };
    /*
     * @param {any}
     * @private
     * @return {any}
     */
    const _fast = function(element){
        switch(typeof element){
            case 'boolean':
                if(element)
                    return true;
                return false;
            case 'number':
                if(Number.isSafeInteger(element))
                    return parseInt(element);
                return parseFloat(element);
            case 'string':
                return element.toString();
            case 'object':
                if(element.constructor === ({}).constructor)
                    return {...element};
                return [...element];
        };
    };
};

exports.base = cloneBase;
