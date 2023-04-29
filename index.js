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
     * @public
     * @return {any}
     */
    this.safe = function(element){
        return _safe(element);
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
            return (!!element);
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
            }else{
                let out = {};
                for(let i in element)
                    out[i] = _faster(
                        element[i]
                    );
                return out;
            }
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
        }
    };
    /*
     *
     * @param {bool}
     * @private
     * @return {bool}
     */
    const _safe_boolean = function(element){
        if(element !== false)
            return true;
        return false;
    };
    /*
     *
     * @param {integer}
     * @private
     * @return {integer}
     */
    const _safe_integer = function(element){
        return parseInt(element + 0);
    };
    /*
     *
     * @param {float}
     * @private
     * @return {float}
     */
    const _safe_float = function(element){
        return parseFloat(element + 0);
    };
    /*
     *
     * @param {number}
     * @private
     * @return {number}
     */
    const _safe_number = function(element){
        if(Number.isNaN(element))
            return NaN;
        if(element === Infinity)
            return Infinity;
        if(Number.isSafeInteger(element))
            return _safe_integer(element);
        return _safe_float(element);
    };
    /*
     *
     * @param {string}
     * @private
     * @return {string}
     */
    const _safe_string = function(element){
        return element.toString();
    };
    /*
     *
     * @param {array}
     * @private
     * @return {array}
     */
    const _safe_array = function(element){
        let out = [];
        for (let i in element)
            out[i] = _safe(element[i]);
        return out;
    };
    /*
     *
     * @param {objeck}
     * @private
     * @return {object}
     */
    const _safe_json = function(element){
        let out = {};
        for (let i in element)
            out[i] = _safe(element[i]);
        return out;
    };
    /*
     *
     * @param {objeck}
     * @private
     * @return {object}
     */
    const _safe_object = function(element){
        if(element === null)
            return null;
        if(Array.isArray(element))
            return _safe_array(element);
        if(element.constructor === ({}).constructor)
            return _safe_json(element);
        throw Error(
            'Unsupported object type "'+
            (element.constructor)+
            '"'
        );
    };
    /*
     * @param {any}
     * @private
     * @return {any}
     */
    const _safe = function(element){
        const type = (typeof element);
        if(type === 'boolean')
            return _safe_boolean(element);
        if(type === 'number')
            return _safe_number(element);
        if(type === 'string')
            return _safe_string(element);
        if(type === 'object')
            return _safe_object(element);
        throw Error('Unsupported type "'+(typeof element)+'"');
    };
};

exports.base = cloneBase;
