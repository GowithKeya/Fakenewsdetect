(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.3/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}

function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}



// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{tail: tail, nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\u000A    ',
		A2($elm$core$String$split, '\u000A', str));
};
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\u000A\u000A(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\u0027' + (f + '\u0027]'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\u000A\u000A',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\u000A\u000A';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\u000A\u000A    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\u000A\u000A' + msg));
			}
		}
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $krisajenkins$remotedata$RemoteData$NotAsked = {$: 'NotAsked'};
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					url: r.url,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					method: r.method,
					headers: r.headers,
					timeout: r.timeout,
					tracker: r.tracker,
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{url: r.url, body: r.body, expect: r.expect, method: r.method, headers: r.headers, timeout: r.timeout, tracker: r.tracker, allowCookiesFromOtherDomains: false}));
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{url: r.url, body: $elm$http$Http$emptyBody, expect: r.expect, method: 'GET', headers: _List_Nil, timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing});
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {$: 'Failure', a: a};
};
var $krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {$: 'Success', a: a};
};
var $krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	if (result.$ === 'Err') {
		var e = result.a;
		return $krisajenkins$remotedata$RemoteData$Failure(e);
	} else {
		var x = result.a;
		return $krisajenkins$remotedata$RemoteData$Success(x);
	}
};
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $author$project$Data$Category$Satire = {$: 'Satire'};
var $author$project$Data$Category$NotNews = {$: 'NotNews'};
var $author$project$Data$Category$FakeNews = {$: 'FakeNews'};
var $author$project$Data$Category$Clickbait = {$: 'Clickbait'};
var $author$project$Data$Category$Legitimate = {$: 'Legitimate'};
var $author$project$Data$Category$ExtremelyBiased = {$: 'ExtremelyBiased'};
var $author$project$Data$Category$fromId = function (id) {
	switch (id) {
		case 1:
			return $author$project$Data$Category$Legitimate;
		case 2:
			return $author$project$Data$Category$FakeNews;
		case 3:
			return $author$project$Data$Category$Clickbait;
		case 4:
			return $author$project$Data$Category$ExtremelyBiased;
		case 5:
			return $author$project$Data$Category$Satire;
		case 6:
			return $author$project$Data$Category$NotNews;
		default:
			return $author$project$Data$Category$Legitimate;
	}
};
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $author$project$Data$Votes$PeopleVotes = F2(
	function (content, title) {
		return {title: title, content: content};
	});
var $author$project$Data$Votes$VerifiedVote = function (category) {
	return {category: category};
};
var $author$project$Data$Votes$VotesResponse = F3(
	function (domain, robot, people) {
		return {robot: robot, domain: domain, people: people};
	});
var $author$project$Data$Votes$PeopleTitleVotes = F2(
	function (clickbait, count) {
		return {count: count, clickbait: clickbait};
	});
var $author$project$Data$Votes$RobotPredictions = F3(
	function (fake_news, extremely_biased, clickbait) {
		return {clickbait: clickbait, fake_news: fake_news, extremely_biased: extremely_biased};
	});
var $author$project$Data$Votes$PeopleContentVote = F2(
	function (category, count) {
		return {count: count, category: category};
	});
var $author$project$Data$Votes$decodeVotesResponse = function () {
	var decodeRobotPredictions = A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'clickbait',
		$elm$json$Json$Decode$float,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'extremely_biased',
			$elm$json$Json$Decode$float,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'fake_news',
				$elm$json$Json$Decode$float,
				$elm$json$Json$Decode$succeed($author$project$Data$Votes$RobotPredictions))));
	var decodePeopleTitleVotes = A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'count',
		$elm$json$Json$Decode$int,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'clickbait',
			$elm$json$Json$Decode$bool,
			$elm$json$Json$Decode$succeed($author$project$Data$Votes$PeopleTitleVotes)));
	var decodeCategory = A2(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'category_id',
		A2($elm$json$Json$Decode$map, $author$project$Data$Category$fromId, $elm$json$Json$Decode$int));
	var decodeDomainCategory = decodeCategory(
		$elm$json$Json$Decode$succeed($author$project$Data$Votes$VerifiedVote));
	var decodeContentPeopleVote = A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'count',
		$elm$json$Json$Decode$int,
		decodeCategory(
			$elm$json$Json$Decode$succeed($author$project$Data$Votes$PeopleContentVote)));
	var decodePeopleVotes = A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'title',
		decodePeopleTitleVotes,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'content',
			$elm$json$Json$Decode$list(decodeContentPeopleVote),
			$elm$json$Json$Decode$succeed($author$project$Data$Votes$PeopleVotes)));
	return A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'people',
		decodePeopleVotes,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'robot',
			decodeRobotPredictions,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'domain',
				$elm$json$Json$Decode$nullable(decodeDomainCategory),
				$elm$json$Json$Decode$succeed($author$project$Data$Votes$VotesResponse))));
}();
var $author$project$Data$Votes$getVotes = F3(
	function (msg, url, title) {
		return $elm$http$Http$get(
			{
				url: 'https://api.fakenewsdetector.org/votes?url=' + ($elm$url$Url$percentEncode(url) + ('&title=' + $elm$url$Url$percentEncode(title))),
				expect: A2(
					$elm$http$Http$expectJson,
					A2($elm$core$Basics$composeR, $krisajenkins$remotedata$RemoteData$fromResult, msg),
					$author$project$Data$Votes$decodeVotesResponse)
			});
	});
var $author$project$StoryVotes$VotesResponse = function (a) {
	return {$: 'VotesResponse', a: a};
};
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Locale$Languages$English = {$: 'English'};
var $author$project$Locale$Languages$Spanish = {$: 'Spanish'};
var $author$project$Locale$Languages$Portuguese = {$: 'Portuguese'};
var $author$project$Locale$Locale$extractPreferredLanguage = function (codes) {
	var convertedCodes = A2(
		$elm$core$List$map,
		$elm$core$String$left(2),
		codes);
	if (A2($elm$core$List$member, 'pt', convertedCodes)) {
		return $author$project$Locale$Languages$Portuguese;
	} else {
		var _v0 = $elm$core$List$head(convertedCodes);
		if ((_v0.$ === 'Just') && (_v0.a === 'es')) {
			return $author$project$Locale$Languages$Spanish;
		} else {
			return $author$project$Locale$Languages$English;
		}
	}
};
var $author$project$Locale$Locale$fromCodeArray = function (codes) {
	return $author$project$Locale$Locale$extractPreferredLanguage(codes);
};
var $author$project$StoryVotes$init = function (flags) {
	return _Utils_Tuple2(
		{
			url: flags.url,
			title: flags.title,
			votes: $krisajenkins$remotedata$RemoteData$NotAsked,
			language: $author$project$Locale$Locale$fromCodeArray(flags.languages),
			isExtensionPopup: flags.isExtensionPopup
		},
		A3($author$project$Data$Votes$getVotes, $author$project$StoryVotes$VotesResponse, flags.url, flags.title));
};
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$style_elements$Element$Internal$Render$withFocus = '\u000A\u000A.style-elements em.el {\u000A    padding: 0;\u000A    padding-left: 0.2em;\u000A}\u000A\u000A.style-elements button.button-focus:focus {\u000A   outline: none;\u000A   box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\u000A   border-color: rgba(155,203,255,1.0);\u000A}\u000A\u000A.style-elements textarea:focus, .style-elements input:focus {\u000A   outline: none;\u000A   box-shadow: 0 0 2px 2px rgba(155,203,255,1.0);\u000A   border-color: rgba(155,203,255,1.0);\u000A}\u000A.style-elements input[type=\u0027checkbox\u0027] {\u000A    border-radius: 3px;\u000A}\u000A.style-elements input[type=\u0027radio\u0027] {\u000A    border-radius: 7px;\u000A}\u000A.style-elements input[type=\u0027radio\u0027]:focus {\u000A    border-radius: 7px;\u000A    box-shadow: 0 0 4px 4px rgba(155,203,255,1.0);\u000A}\u000A\u000A.style-elements select.focus-override:focus, .style-elements input.focus-override:focus {\u000A    outline: none;\u000A    box-shadow: none;\u000A    border-color:transparent;\u000A}\u000A.style-elements input.focus-override:focus ~ .alt-icon {\u000A    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\u000A    border-color: rgba(155,203,255,1.0);\u000A}\u000A.style-elements select.focus-override:focus ~ .alt-icon {\u000A    box-shadow: 0 0 3px 3px rgba(155,203,255,1.0);\u000A    border-color: rgba(155,203,255,1.0);\u000A}\u000A.style-elements .arrows {\u000A    display:block;\u000A    position: relative;\u000A    height: 10px;\u000A    width: 10px;\u000A}\u000A/*\u000A.style-elements .arrows::after {\u000A    content: \u0022 \u0022;\u000A    position:absolute;\u000A    top:-2px;\u000A    left:0;\u000A    width: 0;\u000A    height: 0;\u000A    border-left: 5px solid transparent;\u000A    border-right: 5px solid transparent;\u000A    border-bottom: 5px solid black;\u000A}\u000A*/\u000A\u000A.style-elements .arrows::before {\u000A    content: \u0022 \u0022;\u000A    position:absolute;\u000A    top:2px;\u000A    left:0;\u000A    width: 0;\u000A    height: 0;\u000A    border-left: 5px solid transparent;\u000A    border-right: 5px solid transparent;\u000A    border-top: 5px solid black;\u000A}\u000A\u000A\u000A';
var $mdgriffith$style_elements$Element$Internal$Render$miniNormalize = 'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;padding:0;border:0}body{margin:0}.style-elements{display:block;position:relative;margin:0;padding:0;border:0;font-size:100%;font:inherit;box-sizing:border-box;line-height:1.2}.el{display:block;position:relative;margin:0;padding:0;border:0;border-style:solid;font-size:100%;font:inherit;box-sizing:border-box}em.el{font-style:italic}b.el,strong.el{font-weight:bolder}strike.el{text-decoration:line-through}u.el{text-decoration:underline}a.el{text-decoration:none;color:inherit}img.el{border-style:none}sub.el,sup.el{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.el{bottom:-0.25em}sup.el{top:-0.5em}' + $mdgriffith$style_elements$Element$Internal$Render$withFocus;
var $mdgriffith$style_elements$Element$Internal$Render$embed = F2(
	function (full, stylesheet) {
		return _List_fromArray(
			[
				A3(
				$elm$html$Html$node,
				'style',
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						full ? ('html,body{width:100%;height:100%;}' + $mdgriffith$style_elements$Element$Internal$Render$miniNormalize) : $mdgriffith$style_elements$Element$Internal$Render$miniNormalize)
					])),
				A3(
				$elm$html$Html$node,
				'style',
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(stylesheet.css)
					]))
			]);
	});
var $mdgriffith$style_elements$Element$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Layout = function (a) {
	return {$: 'Layout', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Element = function (a) {
	return {$: 'Element', a: a};
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$style_elements$Element$Internal$Model$adjust = F3(
	function (fn, parent, elemen) {
		var maybeOnEmptyList = function (list) {
			return $elm$core$List$isEmpty(list) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(list);
		};
		var merge = F2(
			function (el, current) {
				if (el.$ === 'Nothing') {
					return current;
				} else {
					var something = el.a;
					if (current.$ === 'Nothing') {
						return el;
					} else {
						var cur = current.a;
						return $elm$core$Maybe$Just(
							_Utils_ap(something, cur));
					}
				}
			});
		switch (elemen.$) {
			case 'Element':
				var elm = elemen.a;
				var absolutelyPositioned = elm.absolutelyPositioned;
				var child = elm.child;
				var adjustAndMerge = F2(
					function (el, _v8) {
						var adjustedAggregate = _v8.a;
						var dataAggregate = _v8.b;
						var _v6 = A3($mdgriffith$style_elements$Element$Internal$Model$adjust, fn, $elm$core$Maybe$Nothing, el);
						var adjusted = _v6.a;
						var data = _v6.b;
						if (data.$ === 'Nothing') {
							return _Utils_Tuple2(
								A2($elm$core$List$cons, adjusted, adjustedAggregate),
								dataAggregate);
						} else {
							var d = data.a;
							return _Utils_Tuple2(
								A2($elm$core$List$cons, adjusted, adjustedAggregate),
								_Utils_ap(d, dataAggregate));
						}
					});
				var _v1 = function () {
					if (absolutelyPositioned.$ === 'Nothing') {
						return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
					} else {
						var others = absolutelyPositioned.a;
						return function (_v3) {
							var children = _v3.a;
							var onScreen = _v3.b;
							return _Utils_Tuple2(
								maybeOnEmptyList(children),
								maybeOnEmptyList(onScreen));
						}(
							A3(
								$elm$core$List$foldr,
								adjustAndMerge,
								_Utils_Tuple2(_List_Nil, _List_Nil),
								others));
					}
				}();
				var adjustedOthers = _v1.a;
				var otherChildrenData = _v1.b;
				var _v4 = A3($mdgriffith$style_elements$Element$Internal$Model$adjust, fn, $elm$core$Maybe$Nothing, child);
				var adjustedChild = _v4.a;
				var childData = _v4.b;
				var _v5 = A2(
					fn,
					parent,
					$mdgriffith$style_elements$Element$Internal$Model$Element(
						_Utils_update(
							elm,
							{child: adjustedChild, absolutelyPositioned: adjustedOthers})));
				var adjustedEl = _v5.a;
				var elData = _v5.b;
				return _Utils_Tuple2(
					adjustedEl,
					A3(
						$elm$core$List$foldr,
						merge,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[childData, otherChildrenData, elData])));
			case 'Layout':
				var elm = elemen.a;
				var adjustAndMergeKeyed = F3(
					function (usingParent, _v22, _v23) {
						var key = _v22.a;
						var el = _v22.b;
						var adjustedAggregate = _v23.a;
						var dataAggregate = _v23.b;
						var _v20 = A3($mdgriffith$style_elements$Element$Internal$Model$adjust, fn, usingParent, el);
						var adjusted = _v20.a;
						var data = _v20.b;
						if (data.$ === 'Nothing') {
							return _Utils_Tuple2(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(key, adjusted),
									adjustedAggregate),
								dataAggregate);
						} else {
							var d = data.a;
							return _Utils_Tuple2(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(key, adjusted),
									adjustedAggregate),
								_Utils_ap(d, dataAggregate));
						}
					});
				var adjustAndMerge = F3(
					function (usingParent, el, _v19) {
						var adjustedAggregate = _v19.a;
						var dataAggregate = _v19.b;
						var _v17 = A3($mdgriffith$style_elements$Element$Internal$Model$adjust, fn, usingParent, el);
						var adjusted = _v17.a;
						var data = _v17.b;
						if (data.$ === 'Nothing') {
							return _Utils_Tuple2(
								A2($elm$core$List$cons, adjusted, adjustedAggregate),
								dataAggregate);
						} else {
							var d = data.a;
							return _Utils_Tuple2(
								A2($elm$core$List$cons, adjusted, adjustedAggregate),
								_Utils_ap(d, dataAggregate));
						}
					});
				var _v9 = function () {
					var _v10 = elm.children;
					if (_v10.$ === 'Normal') {
						var normalChildren = _v10.a;
						var _v11 = A3(
							$elm$core$List$foldr,
							adjustAndMerge(
								$elm$core$Maybe$Just(elm.layout)),
							_Utils_Tuple2(_List_Nil, _List_Nil),
							normalChildren);
						var adjusted = _v11.a;
						var data = _v11.b;
						return _Utils_Tuple2(
							$mdgriffith$style_elements$Element$Internal$Model$Normal(adjusted),
							maybeOnEmptyList(data));
					} else {
						var keyedChildren = _v10.a;
						var _v12 = A3(
							$elm$core$List$foldr,
							adjustAndMergeKeyed(
								$elm$core$Maybe$Just(elm.layout)),
							_Utils_Tuple2(_List_Nil, _List_Nil),
							keyedChildren);
						var adjusted = _v12.a;
						var data = _v12.b;
						return _Utils_Tuple2(
							$mdgriffith$style_elements$Element$Internal$Model$Keyed(adjusted),
							maybeOnEmptyList(data));
					}
				}();
				var adjustedChildren = _v9.a;
				var childrenData = _v9.b;
				var _v13 = function () {
					var _v14 = elm.absolutelyPositioned;
					if (_v14.$ === 'Nothing') {
						return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
					} else {
						var others = _v14.a;
						return function (_v15) {
							var children = _v15.a;
							var onScreen = _v15.b;
							return _Utils_Tuple2(
								maybeOnEmptyList(children),
								maybeOnEmptyList(onScreen));
						}(
							A3(
								$elm$core$List$foldr,
								adjustAndMerge($elm$core$Maybe$Nothing),
								_Utils_Tuple2(_List_Nil, _List_Nil),
								others));
					}
				}();
				var adjustedOthers = _v13.a;
				var otherChildrenData = _v13.b;
				var _v16 = A2(
					fn,
					parent,
					$mdgriffith$style_elements$Element$Internal$Model$Layout(
						_Utils_update(
							elm,
							{children: adjustedChildren, absolutelyPositioned: adjustedOthers})));
				var adjustedLayout = _v16.a;
				var layoutData = _v16.b;
				return _Utils_Tuple2(
					adjustedLayout,
					A3(
						$elm$core$List$foldr,
						merge,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[layoutData, childrenData, otherChildrenData])));
			default:
				return A2(fn, $elm$core$Maybe$Nothing, elemen);
		}
	});
var $mdgriffith$style_elements$Style$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Top = {$: 'Top'};
var $elm$core$Basics$not = _Basics_not;
var $mdgriffith$style_elements$Element$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Adjustments$tagIntermediates = false;
var $mdgriffith$style_elements$Element$Internal$Adjustments$tag = function (str) {
	return $mdgriffith$style_elements$Element$Internal$Adjustments$tagIntermediates ? $mdgriffith$style_elements$Element$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(str)) : $mdgriffith$style_elements$Element$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(''));
};
var $mdgriffith$style_elements$Element$Internal$Model$Left = {$: 'Left'};
var $mdgriffith$style_elements$Element$Internal$Model$Above = {$: 'Above'};
var $mdgriffith$style_elements$Element$Internal$Model$Below = {$: 'Below'};
var $mdgriffith$style_elements$Element$Internal$Model$Right = {$: 'Right'};
var $mdgriffith$style_elements$Element$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Bottom = {$: 'Bottom'};
var $mdgriffith$style_elements$Element$Internal$Model$HAlign = function (a) {
	return {$: 'HAlign', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Nearby = function (a) {
	return {$: 'Nearby', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$VAlign = function (a) {
	return {$: 'VAlign', a: a};
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $mdgriffith$style_elements$Style$Internal$Model$GoRight = {$: 'GoRight'};
var $mdgriffith$style_elements$Element$Internal$Model$Padding = F4(
	function (a, b, c, d) {
		return {$: 'Padding', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$style_elements$Style$Internal$Model$Percent = function (a) {
	return {$: 'Percent', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$TopLeft = {$: 'TopLeft'};
var $mdgriffith$style_elements$Element$Internal$Model$Absolute = function (a) {
	return {$: 'Absolute', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Position = F3(
	function (a, b, c) {
		return {$: 'Position', a: a, b: b, c: c};
	});
var $mdgriffith$style_elements$Element$Internal$Model$Relative = {$: 'Relative'};
var $mdgriffith$style_elements$Element$Internal$Model$Raw = function (a) {
	return {$: 'Raw', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $mdgriffith$style_elements$Element$Internal$Model$Empty = {$: 'Empty'};
var $mdgriffith$style_elements$Element$Internal$Model$Spacer = function (a) {
	return {$: 'Spacer', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Modify$setAttrs = F2(
	function (props, el) {
		switch (el.$) {
			case 'Empty':
				return $mdgriffith$style_elements$Element$Internal$Model$Empty;
			case 'Spacer':
				var x = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
			case 'Raw':
				var h = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
			case 'Layout':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					_Utils_update(
						elm,
						{attrs: props}));
			case 'Element':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					_Utils_update(
						elm,
						{attrs: props}));
			default:
				var dec = el.a;
				var content = el.b;
				return A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content);
		}
	});
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $mdgriffith$style_elements$Element$Internal$Model$BottomLeft = {$: 'BottomLeft'};
var $mdgriffith$style_elements$Style$Internal$Model$FlexLayout = F2(
	function (a, b) {
		return {$: 'FlexLayout', a: a, b: b};
	});
var $mdgriffith$style_elements$Element$Internal$Modify$addAttrList = F2(
	function (props, el) {
		switch (el.$) {
			case 'Empty':
				return $mdgriffith$style_elements$Element$Internal$Model$Empty;
			case 'Spacer':
				var x = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
			case 'Raw':
				var h = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
			case 'Layout':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					_Utils_update(
						elm,
						{
							attrs: _Utils_ap(props, elm.attrs)
						}));
			case 'Element':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					_Utils_update(
						elm,
						{
							attrs: _Utils_ap(props, elm.attrs)
						}));
			default:
				var dec = el.a;
				var content = el.b;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: 'div',
						attrs: props,
						child: A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content),
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
		}
	});
var $mdgriffith$style_elements$Element$Internal$Model$PointerEvents = function (a) {
	return {$: 'PointerEvents', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Model$PositionFrame = function (a) {
	return {$: 'PositionFrame', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Calc = F2(
	function (a, b) {
		return {$: 'Calc', a: a, b: b};
	});
var $mdgriffith$style_elements$Element$Internal$Model$Center = {$: 'Center'};
var $mdgriffith$style_elements$Element$Internal$Model$Margin = F4(
	function (a, b, c, d) {
		return {$: 'Margin', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$style_elements$Element$Internal$Model$Shrink = function (a) {
	return {$: 'Shrink', a: a};
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mdgriffith$style_elements$Element$Internal$Model$Spacing = F2(
	function (a, b) {
		return {$: 'Spacing', a: a, b: b};
	});
var $mdgriffith$style_elements$Element$Internal$Modify$addAttr = F2(
	function (prop, el) {
		switch (el.$) {
			case 'Empty':
				return $mdgriffith$style_elements$Element$Internal$Model$Empty;
			case 'Raw':
				var h = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
			case 'Spacer':
				var x = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
			case 'Layout':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					_Utils_update(
						elm,
						{
							attrs: A2($elm$core$List$cons, prop, elm.attrs)
						}));
			case 'Element':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					_Utils_update(
						elm,
						{
							attrs: A2($elm$core$List$cons, prop, elm.attrs)
						}));
			default:
				var dec = el.a;
				var content = el.b;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: 'div',
						attrs: _List_fromArray(
							[prop]),
						child: A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content),
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
		}
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mdgriffith$style_elements$Element$Internal$Model$PhantomPadding = F4(
	function (a, b, c, d) {
		return {$: 'PhantomPadding', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$style_elements$Element$Internal$Model$VerticalCenter = {$: 'VerticalCenter'};
var $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing = function (elm) {
	if (elm.$ === 'Layout') {
		var layoutEl = elm.a;
		var absolutelyPositioned = layoutEl.absolutelyPositioned;
		var children = layoutEl.children;
		var attrs = layoutEl.attrs;
		var style = layoutEl.style;
		var layout = layoutEl.layout;
		var node = layoutEl.node;
		var forPhantomPadding = function (posAttr) {
			if (posAttr.$ === 'Padding') {
				var t = posAttr.a;
				var r = posAttr.b;
				var b = posAttr.c;
				var l = posAttr.d;
				return $elm$core$Maybe$Just(
					A4(
						$mdgriffith$style_elements$Element$Internal$Model$PhantomPadding,
						A2($elm$core$Maybe$withDefault, 0, t),
						A2($elm$core$Maybe$withDefault, 0, r),
						A2($elm$core$Maybe$withDefault, 0, b),
						A2($elm$core$Maybe$withDefault, 0, l)));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var phantomPadding = A2(
			$elm$core$Maybe$withDefault,
			A4($mdgriffith$style_elements$Element$Internal$Model$PhantomPadding, 0, 0, 0, 0),
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, forPhantomPadding, attrs))));
		var forSpacing = function (posAttr) {
			if (posAttr.$ === 'Spacing') {
				var x = posAttr.a;
				var y = posAttr.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(x, y));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var _v1 = A2(
			$elm$core$List$partition,
			function (attr) {
				return _Utils_eq(
					attr,
					$mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Center)) || _Utils_eq(
					attr,
					$mdgriffith$style_elements$Element$Internal$Model$VAlign($mdgriffith$style_elements$Element$Internal$Model$VerticalCenter));
			},
			attrs);
		var centeredProps = _v1.a;
		var others = _v1.b;
		var spacing = $elm$core$List$head(
			$elm$core$List$reverse(
				A2($elm$core$List$filterMap, forSpacing, attrs)));
		var hasSpacing = function () {
			if (spacing.$ === 'Nothing') {
				return false;
			} else {
				return true;
			}
		}();
		if (layout.$ === 'FlexLayout') {
			if (hasSpacing) {
				var _v3 = function () {
					if (spacing.$ === 'Nothing') {
						return _Utils_Tuple3(
							A4($mdgriffith$style_elements$Element$Internal$Model$Margin, 0, 0, 0, 0),
							A2($mdgriffith$style_elements$Element$Internal$Model$Spacing, 0, 0),
							0);
					} else {
						var _v5 = spacing.a;
						var x = _v5.a;
						var y = _v5.b;
						return _Utils_Tuple3(
							A4($mdgriffith$style_elements$Element$Internal$Model$Margin, (-1) * y, (-1) * x, (-1) * y, (-1) * x),
							A2($mdgriffith$style_elements$Element$Internal$Model$Spacing, x, y),
							x);
					}
				}();
				var negativeMargin = _v3.a;
				var spacingAttr = _v3.b;
				var totalHSpacing = _v3.c;
				var forAlignment = function (attr) {
					switch (attr.$) {
						case 'HAlign':
							return true;
						case 'VAlign':
							return true;
						default:
							return false;
					}
				};
				var _v6 = A2($elm$core$List$partition, forAlignment, attrs);
				var aligned = _v6.a;
				var unaligned = _v6.b;
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					{
						node: node,
						attrs: A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Internal$Adjustments$tag('counter-spacing-container'),
							A2(
								$elm$core$List$cons,
								$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true),
								unaligned)),
						style: style,
						layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
						children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Internal$Model$Layout(
									{
										node: 'div',
										attrs: A2(
											$elm$core$List$cons,
											$mdgriffith$style_elements$Element$Internal$Adjustments$tag('counter-spacing'),
											A2(
												$elm$core$List$cons,
												$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
												A2(
													$elm$core$List$cons,
													phantomPadding,
													A2(
														$elm$core$List$cons,
														negativeMargin,
														A2(
															$elm$core$List$cons,
															spacingAttr,
															A2(
																$elm$core$List$cons,
																$mdgriffith$style_elements$Element$Internal$Model$Width(
																	A2($mdgriffith$style_elements$Style$Internal$Model$Calc, 100, totalHSpacing)),
																A2(
																	$elm$core$List$cons,
																	$mdgriffith$style_elements$Element$Internal$Model$Shrink(1),
																	aligned))))))),
										style: $elm$core$Maybe$Nothing,
										layout: layout,
										children: function () {
											if (children.$ === 'Normal') {
												var childs = children.a;
												return $mdgriffith$style_elements$Element$Internal$Model$Normal(
													A2(
														$elm$core$List$map,
														$mdgriffith$style_elements$Element$Internal$Modify$addAttr(
															$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true)),
														childs));
											} else {
												var childs = children.a;
												return $mdgriffith$style_elements$Element$Internal$Model$Keyed(
													A2(
														$elm$core$List$map,
														$elm$core$Tuple$mapSecond(
															$mdgriffith$style_elements$Element$Internal$Modify$addAttr(
																$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true))),
														childs));
											}
										}(),
										absolutelyPositioned: $elm$core$Maybe$Nothing
									})
								])),
						absolutelyPositioned: absolutelyPositioned
					});
			} else {
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					_Utils_update(
						layoutEl,
						{
							attrs: A2(
								$elm$core$List$cons,
								$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true),
								attrs)
						}));
			}
		} else {
			return elm;
		}
	} else {
		return elm;
	}
};
var $mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority = F2(
	function (prop, el) {
		switch (el.$) {
			case 'Empty':
				return $mdgriffith$style_elements$Element$Internal$Model$Empty;
			case 'Raw':
				var h = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
			case 'Spacer':
				var x = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
			case 'Layout':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					_Utils_update(
						elm,
						{
							attrs: _Utils_ap(
								elm.attrs,
								_List_fromArray(
									[prop]))
						}));
			case 'Element':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					_Utils_update(
						elm,
						{
							attrs: _Utils_ap(
								elm.attrs,
								_List_fromArray(
									[prop]))
						}));
			default:
				var dec = el.a;
				var content = el.b;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: 'div',
						attrs: _List_fromArray(
							[prop]),
						child: A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content),
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
		}
	});
var $mdgriffith$style_elements$Element$Internal$Adjustments$positionNearby = F2(
	function (parent, elm) {
		var forAlignment = function (attr) {
			switch (attr.$) {
				case 'HAlign':
					return true;
				case 'VAlign':
					return true;
				default:
					return false;
			}
		};
		var separateAlignment = function (attrs) {
			return A2($elm$core$List$partition, forAlignment, attrs);
		};
		var setPosition = F3(
			function (nearbyPosition, _v23, el) {
				var aligned = _v23.a;
				var unaligned = _v23.b;
				var nearbyAlignment = function () {
					_v18$4:
					while (true) {
						if ((nearbyPosition.$ === 'Just') && (nearbyPosition.a.$ === 'Nearby')) {
							switch (nearbyPosition.a.a.$) {
								case 'Above':
									var _v19 = nearbyPosition.a.a;
									return _List_fromArray(
										[
											$mdgriffith$style_elements$Element$Internal$Model$VAlign($mdgriffith$style_elements$Element$Internal$Model$Top)
										]);
								case 'Below':
									var _v20 = nearbyPosition.a.a;
									return _List_fromArray(
										[
											$mdgriffith$style_elements$Element$Internal$Model$VAlign($mdgriffith$style_elements$Element$Internal$Model$Bottom)
										]);
								case 'OnRight':
									var _v21 = nearbyPosition.a.a;
									return _List_fromArray(
										[
											$mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Right)
										]);
								case 'OnLeft':
									var _v22 = nearbyPosition.a.a;
									return _List_fromArray(
										[
											$mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Left)
										]);
								default:
									break _v18$4;
							}
						} else {
							break _v18$4;
						}
					}
					return _List_Nil;
				}();
				var forHeight = function (prop) {
					if (prop.$ === 'Height') {
						return true;
					} else {
						return false;
					}
				};
				var isLayout = function () {
					if (elm.$ === 'Layout') {
						return true;
					} else {
						return false;
					}
				}();
				var forWidth = function (prop) {
					if (prop.$ === 'Width') {
						return true;
					} else {
						return false;
					}
				};
				var height = $elm$core$List$head(
					$elm$core$List$reverse(
						A2($elm$core$List$filter, forHeight, unaligned)));
				var framed = function () {
					if (nearbyPosition.$ === 'Nothing') {
						return false;
					} else {
						return true;
					}
				}();
				var width = $elm$core$List$head(
					$elm$core$List$reverse(
						A2($elm$core$List$filter, forWidth, unaligned)));
				var addWidthHeight = function (attrs) {
					var _v9 = _Utils_Tuple2(width, height);
					if (_v9.a.$ === 'Nothing') {
						if (_v9.b.$ === 'Nothing') {
							var _v10 = _v9.a;
							var _v11 = _v9.b;
							return attrs;
						} else {
							var _v12 = _v9.a;
							var h = _v9.b.a;
							return A2($elm$core$List$cons, h, attrs);
						}
					} else {
						if (_v9.b.$ === 'Just') {
							var w = _v9.a.a;
							var h = _v9.b.a;
							return A2(
								$elm$core$List$cons,
								w,
								A2($elm$core$List$cons, h, attrs));
						} else {
							var w = _v9.a.a;
							var _v13 = _v9.b;
							return A2($elm$core$List$cons, w, attrs);
						}
					}
				};
				var adjustWidthHeight = function (elem) {
					var adjustHeight = function (element) {
						if (height.$ === 'Nothing') {
							return element;
						} else {
							if ((height.a.$ === 'Height') && (height.a.a.$ === 'Percent')) {
								var percent = height.a.a.a;
								return A2(
									$mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority,
									$mdgriffith$style_elements$Element$Internal$Model$Width(
										$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
									element);
							} else {
								var x = height.a;
								return element;
							}
						}
					};
					var adjustWidth = function (element) {
						if (width.$ === 'Nothing') {
							return element;
						} else {
							if ((width.a.$ === 'Width') && (width.a.a.$ === 'Percent')) {
								var percent = width.a.a.a;
								return A2(
									$mdgriffith$style_elements$Element$Internal$Modify$addAttrPriority,
									$mdgriffith$style_elements$Element$Internal$Model$Width(
										$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
									element);
							} else {
								var x = width.a;
								return element;
							}
						}
					};
					return adjustHeight(
						adjustWidth(elem));
				};
				return (_Utils_eq(
					nearbyPosition,
					$elm$core$Maybe$Just(
						$mdgriffith$style_elements$Element$Internal$Model$Nearby($mdgriffith$style_elements$Element$Internal$Model$Above))) || _Utils_eq(
					nearbyPosition,
					$elm$core$Maybe$Just(
						$mdgriffith$style_elements$Element$Internal$Model$Nearby($mdgriffith$style_elements$Element$Internal$Model$Below)))) ? $mdgriffith$style_elements$Element$Internal$Model$Layout(
					{
						node: 'div',
						attrs: A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Internal$Adjustments$tag('above-below-intermediate-parent'),
							A2(
								$elm$core$List$cons,
								$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
								A2(
									$elm$core$List$cons,
									$mdgriffith$style_elements$Element$Internal$Model$Height(
										$mdgriffith$style_elements$Style$Internal$Model$Px(0)),
									A2(
										$elm$core$List$cons,
										$mdgriffith$style_elements$Element$Internal$Model$Width(
											$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
										A2(
											$elm$core$List$cons,
											$mdgriffith$style_elements$Element$Internal$Model$PositionFrame(
												$mdgriffith$style_elements$Element$Internal$Model$Absolute(
													_Utils_eq(
														nearbyPosition,
														$elm$core$Maybe$Just(
															$mdgriffith$style_elements$Element$Internal$Model$Nearby($mdgriffith$style_elements$Element$Internal$Model$Above))) ? $mdgriffith$style_elements$Element$Internal$Model$TopLeft : $mdgriffith$style_elements$Element$Internal$Model$BottomLeft)),
											A2(
												$elm$core$List$cons,
												A3(
													$mdgriffith$style_elements$Element$Internal$Model$Position,
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Nothing),
												isLayout ? nearbyAlignment : _Utils_ap(nearbyAlignment, aligned))))))),
						style: $elm$core$Maybe$Nothing,
						layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
						children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Internal$Model$Element(
									{
										node: 'div',
										attrs: function () {
											var addWidth = function (attrs) {
												return isLayout ? A2(
													$elm$core$List$cons,
													$mdgriffith$style_elements$Element$Internal$Model$Width(
														$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
													attrs) : attrs;
											};
											return addWidth(
												_List_fromArray(
													[
														$mdgriffith$style_elements$Element$Internal$Adjustments$tag('above-below-intermediate'),
														$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
														$mdgriffith$style_elements$Element$Internal$Model$PositionFrame(
														$mdgriffith$style_elements$Element$Internal$Model$Absolute(
															_Utils_eq(
																nearbyPosition,
																$elm$core$Maybe$Just(
																	$mdgriffith$style_elements$Element$Internal$Model$Nearby($mdgriffith$style_elements$Element$Internal$Model$Above))) ? $mdgriffith$style_elements$Element$Internal$Model$BottomLeft : $mdgriffith$style_elements$Element$Internal$Model$TopLeft)),
														A3(
														$mdgriffith$style_elements$Element$Internal$Model$Position,
														$elm$core$Maybe$Nothing,
														$elm$core$Maybe$Just(0),
														$elm$core$Maybe$Nothing),
														$mdgriffith$style_elements$Element$Internal$Model$VAlign($mdgriffith$style_elements$Element$Internal$Model$Bottom),
														$mdgriffith$style_elements$Element$Internal$Model$Attr(
														A2($elm$html$Html$Attributes$style, 'z-index', '10'))
													]));
										}(),
										child: $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(
											A2(
												$mdgriffith$style_elements$Element$Internal$Modify$setAttrs,
												A2(
													$elm$core$List$cons,
													$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true),
													A2(
														$elm$core$List$cons,
														$mdgriffith$style_elements$Element$Internal$Model$PositionFrame(
															$mdgriffith$style_elements$Element$Internal$Model$Absolute($mdgriffith$style_elements$Element$Internal$Model$TopLeft)),
														A2(
															$elm$core$List$cons,
															A3(
																$mdgriffith$style_elements$Element$Internal$Model$Position,
																$elm$core$Maybe$Just(0),
																$elm$core$Maybe$Just(0),
																$elm$core$Maybe$Nothing),
															unaligned))),
												el)),
										style: $elm$core$Maybe$Nothing,
										absolutelyPositioned: $elm$core$Maybe$Nothing
									})
								])),
						absolutelyPositioned: $elm$core$Maybe$Nothing
					}) : (framed ? $mdgriffith$style_elements$Element$Internal$Model$Layout(
					{
						node: 'div',
						attrs: A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Internal$Adjustments$tag('nearby-intermediate-parent'),
							A2(
								$elm$core$List$cons,
								$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
								A2(
									$elm$core$List$cons,
									$mdgriffith$style_elements$Element$Internal$Model$Height(
										$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
									A2(
										$elm$core$List$cons,
										$mdgriffith$style_elements$Element$Internal$Model$Width(
											$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
										A2(
											$elm$core$List$cons,
											$mdgriffith$style_elements$Element$Internal$Model$PositionFrame(
												$mdgriffith$style_elements$Element$Internal$Model$Absolute($mdgriffith$style_elements$Element$Internal$Model$TopLeft)),
											A2(
												$elm$core$List$cons,
												A3(
													$mdgriffith$style_elements$Element$Internal$Model$Position,
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Nothing),
												isLayout ? nearbyAlignment : _Utils_ap(nearbyAlignment, aligned))))))),
						style: $elm$core$Maybe$Nothing,
						layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
						children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Internal$Model$Element(
									{
										node: 'div',
										attrs: addWidthHeight(
											_List_fromArray(
												[
													$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
													$mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative),
													A3(
													$mdgriffith$style_elements$Element$Internal$Model$Position,
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Nothing),
													A4(
													$mdgriffith$style_elements$Element$Internal$Model$Padding,
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0)),
													$mdgriffith$style_elements$Element$Internal$Model$Attr(
													A2($elm$html$Html$Attributes$style, 'z-index', '10')),
													$mdgriffith$style_elements$Element$Internal$Adjustments$tag('nearby-intermediate')
												])),
										child: $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(
											adjustWidthHeight(
												A2(
													$mdgriffith$style_elements$Element$Internal$Modify$addAttrList,
													A2(
														$elm$core$List$cons,
														$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true),
														A2(
															$elm$core$List$cons,
															$mdgriffith$style_elements$Element$Internal$Model$PositionFrame(
																$mdgriffith$style_elements$Element$Internal$Model$Absolute($mdgriffith$style_elements$Element$Internal$Model$TopLeft)),
															A2(
																$elm$core$List$cons,
																A3(
																	$mdgriffith$style_elements$Element$Internal$Model$Position,
																	$elm$core$Maybe$Just(0),
																	$elm$core$Maybe$Just(0),
																	$elm$core$Maybe$Nothing),
																_List_Nil))),
													el))),
										style: $elm$core$Maybe$Nothing,
										absolutelyPositioned: $elm$core$Maybe$Nothing
									})
								])),
						absolutelyPositioned: $elm$core$Maybe$Nothing
					}) : ((!$elm$core$List$isEmpty(aligned)) ? $mdgriffith$style_elements$Element$Internal$Model$Layout(
					{
						node: 'div',
						attrs: A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Internal$Adjustments$tag('nearby-aligned-intermediate-parent'),
							A2(
								$elm$core$List$cons,
								$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
								A2(
									$elm$core$List$cons,
									$mdgriffith$style_elements$Element$Internal$Model$Height(
										$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
									A2(
										$elm$core$List$cons,
										$mdgriffith$style_elements$Element$Internal$Model$Width(
											$mdgriffith$style_elements$Style$Internal$Model$Percent(100)),
										A2(
											$elm$core$List$cons,
											$mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative),
											A2(
												$elm$core$List$cons,
												A3(
													$mdgriffith$style_elements$Element$Internal$Model$Position,
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Nothing),
												isLayout ? nearbyAlignment : _Utils_ap(nearbyAlignment, aligned))))))),
						style: $elm$core$Maybe$Nothing,
						layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
						children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Internal$Model$Element(
									{
										node: 'div',
										attrs: addWidthHeight(
											_List_fromArray(
												[
													$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
													$mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative),
													A3(
													$mdgriffith$style_elements$Element$Internal$Model$Position,
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Nothing),
													A4(
													$mdgriffith$style_elements$Element$Internal$Model$Padding,
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0),
													$elm$core$Maybe$Just(0)),
													$mdgriffith$style_elements$Element$Internal$Adjustments$tag('nearby-aligned-intermediate')
												])),
										child: $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(
											adjustWidthHeight(
												A2(
													$mdgriffith$style_elements$Element$Internal$Modify$addAttrList,
													A2(
														$elm$core$List$cons,
														$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true),
														A2(
															$elm$core$List$cons,
															$mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Relative),
															A2(
																$elm$core$List$cons,
																A3(
																	$mdgriffith$style_elements$Element$Internal$Model$Position,
																	$elm$core$Maybe$Just(0),
																	$elm$core$Maybe$Just(0),
																	$elm$core$Maybe$Nothing),
																_List_Nil))),
													el))),
										style: $elm$core$Maybe$Nothing,
										absolutelyPositioned: $elm$core$Maybe$Nothing
									})
								])),
						absolutelyPositioned: $elm$core$Maybe$Nothing
					}) : $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(elm)));
			});
		switch (elm.$) {
			case 'Element':
				var attrs = elm.a.attrs;
				var _v1 = separateAlignment(attrs);
				var aligned = _v1.a;
				var unaligned = _v1.b;
				var isFrame = function (attr) {
					if (attr.$ === 'PositionFrame') {
						var x = attr.a;
						return $elm$core$Maybe$Just(x);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				};
				var frame = $elm$core$List$head(
					A2($elm$core$List$filterMap, isFrame, attrs));
				if (parent.$ === 'Nothing') {
					return A3(
						setPosition,
						frame,
						_Utils_Tuple2(aligned, unaligned),
						elm);
				} else {
					return elm;
				}
			case 'Layout':
				var attrs = elm.a.attrs;
				var _v4 = separateAlignment(attrs);
				var aligned = _v4.a;
				var unaligned = _v4.b;
				var isFrame = function (attr) {
					if (attr.$ === 'PositionFrame') {
						var x = attr.a;
						return $elm$core$Maybe$Just(x);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				};
				var frame = $elm$core$List$head(
					A2($elm$core$List$filterMap, isFrame, attrs));
				if (parent.$ === 'Nothing') {
					return A3(
						setPosition,
						frame,
						_Utils_Tuple2(aligned, unaligned),
						elm);
				} else {
					return $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(elm);
				}
			default:
				return $mdgriffith$style_elements$Element$Internal$Adjustments$counterSpacing(elm);
		}
	});
var $mdgriffith$style_elements$Element$Internal$Adjustments$centerTextLayout = function (elm) {
	if (elm.$ === 'Layout') {
		var layoutEl = elm.a;
		var layout = layoutEl.layout;
		var attrs = layoutEl.attrs;
		var _v1 = A2(
			$elm$core$List$partition,
			function (attr) {
				return _Utils_eq(
					attr,
					$mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Center)) || _Utils_eq(
					attr,
					$mdgriffith$style_elements$Element$Internal$Model$VAlign($mdgriffith$style_elements$Element$Internal$Model$VerticalCenter));
			},
			attrs);
		var centeredProps = _v1.a;
		var others = _v1.b;
		if (layout.$ === 'TextLayout') {
			return (!$elm$core$List$isEmpty(centeredProps)) ? $mdgriffith$style_elements$Element$Internal$Model$Layout(
				{
					node: 'div',
					attrs: A2(
						$elm$core$List$cons,
						$mdgriffith$style_elements$Element$Internal$Adjustments$tag('center-text'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false),
							centeredProps)),
					style: $elm$core$Maybe$Nothing,
					layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
					children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
						_List_fromArray(
							[
								$mdgriffith$style_elements$Element$Internal$Model$Layout(
								_Utils_update(
									layoutEl,
									{
										attrs: A2(
											$elm$core$List$cons,
											$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(true),
											others)
									}))
							])),
					absolutelyPositioned: $elm$core$Maybe$Nothing
				}) : elm;
		} else {
			return elm;
		}
	} else {
		return elm;
	}
};
var $mdgriffith$style_elements$Element$Internal$Model$Screen = {$: 'Screen'};
var $mdgriffith$style_elements$Element$Internal$Adjustments$hoistFixedScreenElements = function (el) {
	var elementIsOnScreen = function (attrs) {
		return A2(
			$elm$core$List$any,
			function (attr) {
				return _Utils_eq(
					attr,
					$mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Screen));
			},
			attrs);
	};
	switch (el.$) {
		case 'Element':
			var attrs = el.a.attrs;
			return elementIsOnScreen(attrs) ? _Utils_Tuple2(
				$mdgriffith$style_elements$Element$Internal$Model$Empty,
				$elm$core$Maybe$Just(
					_List_fromArray(
						[el]))) : _Utils_Tuple2(el, $elm$core$Maybe$Nothing);
		case 'Layout':
			var attrs = el.a.attrs;
			return elementIsOnScreen(attrs) ? _Utils_Tuple2(
				$mdgriffith$style_elements$Element$Internal$Model$Empty,
				$elm$core$Maybe$Just(
					_List_fromArray(
						[el]))) : _Utils_Tuple2(el, $elm$core$Maybe$Nothing);
		default:
			return _Utils_Tuple2(el, $elm$core$Maybe$Nothing);
	}
};
var $mdgriffith$style_elements$Element$Internal$Adjustments$apply = function (root) {
	var stack = F2(
		function (parent, el) {
			return A3(
				$elm$core$Basics$composeR,
				$mdgriffith$style_elements$Element$Internal$Adjustments$centerTextLayout,
				A2(
					$elm$core$Basics$composeR,
					$mdgriffith$style_elements$Element$Internal$Adjustments$positionNearby(parent),
					$mdgriffith$style_elements$Element$Internal$Adjustments$hoistFixedScreenElements),
				el);
		});
	return A3($mdgriffith$style_elements$Element$Internal$Model$adjust, stack, $elm$core$Maybe$Nothing, root);
};
var $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast = {$: 'FirstAndLast'};
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $elm$html$Html$em = _VirtualDom_node('em');
var $mdgriffith$style_elements$Style$Internal$Model$Box = F4(
	function (a, b, c, d) {
		return {$: 'Box', a: a, b: b, c: c, d: d};
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$html$Html$sub = _VirtualDom_node('sub');
var $elm$html$Html$sup = _VirtualDom_node('sup');
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$html$Html$span = _VirtualDom_node('span');
var $mdgriffith$style_elements$Element$Internal$Model$Inline = {$: 'Inline'};
var $mdgriffith$style_elements$Element$Internal$Render$Single = {$: 'Single'};
var $mdgriffith$style_elements$Style$Internal$Render$Value$gridPosition = function (_v0) {
	var height = _v0.a.height;
	var width = _v0.a.width;
	var start = _v0.a.start;
	var _v1 = start;
	var x = _v1.a;
	var y = _v1.b;
	var _v2 = _Utils_Tuple2(y + 1, (y + 1) + height);
	var rowStart = _v2.a;
	var rowEnd = _v2.b;
	var _v3 = _Utils_Tuple2(x + 1, (x + 1) + width);
	var colStart = _v3.a;
	var colEnd = _v3.b;
	return ((!width) || (!height)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
		A2(
			$elm$core$String$join,
			' / ',
			_List_fromArray(
				[
					$elm$core$String$fromInt(rowStart),
					$elm$core$String$fromInt(colStart),
					$elm$core$String$fromInt(rowEnd),
					$elm$core$String$fromInt(colEnd)
				])));
};
var $mdgriffith$style_elements$Element$Internal$Render$makePositionable = F2(
	function (attribute, pos) {
		switch (attribute.$) {
			case 'Overflow':
				var x = attribute.a;
				return _Utils_update(
					pos,
					{
						overflow: $elm$core$Maybe$Just(x)
					});
			case 'Shrink':
				var i = attribute.a;
				return _Utils_update(
					pos,
					{
						shrink: $elm$core$Maybe$Just(i)
					});
			case 'Inline':
				return _Utils_update(
					pos,
					{inline: true});
			case 'Expand':
				return _Utils_update(
					pos,
					{expand: true});
			case 'Vary':
				var vary = attribute.a;
				var on = attribute.b;
				return _Utils_update(
					pos,
					{
						variations: A2(
							$elm$core$List$cons,
							_Utils_Tuple2(vary, on),
							pos.variations)
					});
			case 'Height':
				var len = attribute.a;
				return _Utils_update(
					pos,
					{
						height: $elm$core$Maybe$Just(len)
					});
			case 'Width':
				var len = attribute.a;
				return _Utils_update(
					pos,
					{
						width: $elm$core$Maybe$Just(len)
					});
			case 'Position':
				var x = attribute.a;
				var y = attribute.b;
				var z = attribute.c;
				var _v1 = pos.positioned;
				var currentX = _v1.a;
				var currentY = _v1.b;
				var currentZ = _v1.c;
				var newZ = function () {
					if (z.$ === 'Nothing') {
						return currentZ;
					} else {
						var a = z.a;
						return $elm$core$Maybe$Just(a);
					}
				}();
				var newY = function () {
					if (y.$ === 'Nothing') {
						return currentY;
					} else {
						var a = y.a;
						return $elm$core$Maybe$Just(a);
					}
				}();
				var newX = function () {
					if (x.$ === 'Nothing') {
						return currentX;
					} else {
						var a = x.a;
						return $elm$core$Maybe$Just(a);
					}
				}();
				return _Utils_update(
					pos,
					{
						positioned: _Utils_Tuple3(newX, newY, newZ)
					});
			case 'PositionFrame':
				var frame = attribute.a;
				return _Utils_update(
					pos,
					{
						frame: $elm$core$Maybe$Just(frame)
					});
			case 'HAlign':
				var alignment = attribute.a;
				return _Utils_update(
					pos,
					{
						horizontal: $elm$core$Maybe$Just(alignment)
					});
			case 'VAlign':
				var alignment = attribute.a;
				return _Utils_update(
					pos,
					{
						vertical: $elm$core$Maybe$Just(alignment)
					});
			case 'Spacing':
				var spaceX = attribute.a;
				var spaceY = attribute.b;
				return pos;
			case 'Margin':
				var t = attribute.a;
				var r = attribute.b;
				var b = attribute.c;
				var l = attribute.d;
				return _Utils_update(
					pos,
					{
						margin: $elm$core$Maybe$Just(
							A4($mdgriffith$style_elements$Style$Internal$Model$Box, t, r, b, l))
					});
			case 'PhantomPadding':
				return pos;
			case 'Padding':
				var top = attribute.a;
				var right = attribute.b;
				var bottom = attribute.c;
				var left = attribute.d;
				var _v5 = pos.padding;
				var currentTop = _v5.a;
				var currentRight = _v5.b;
				var currentBottom = _v5.c;
				var currentLeft = _v5.d;
				var newBottom = function () {
					if (bottom.$ === 'Nothing') {
						return currentBottom;
					} else {
						var a = bottom.a;
						return $elm$core$Maybe$Just(a);
					}
				}();
				var newRight = function () {
					if (right.$ === 'Nothing') {
						return currentRight;
					} else {
						var a = right.a;
						return $elm$core$Maybe$Just(a);
					}
				}();
				var newLeft = function () {
					if (left.$ === 'Nothing') {
						return currentLeft;
					} else {
						var a = left.a;
						return $elm$core$Maybe$Just(a);
					}
				}();
				var newTop = function () {
					if (top.$ === 'Nothing') {
						return currentTop;
					} else {
						var a = top.a;
						return $elm$core$Maybe$Just(a);
					}
				}();
				return _Utils_update(
					pos,
					{
						padding: A4($mdgriffith$style_elements$Style$Internal$Model$Box, newTop, newRight, newBottom, newLeft)
					});
			case 'Hidden':
				return _Utils_update(
					pos,
					{hidden: true});
			case 'Opacity':
				var t = attribute.a;
				return _Utils_update(
					pos,
					{
						opacity: $elm$core$Maybe$Just(t)
					});
			case 'Event':
				var ev = attribute.a;
				return _Utils_update(
					pos,
					{
						attrs: A2($elm$core$List$cons, ev, pos.attrs)
					});
			case 'InputEvent':
				var ev = attribute.a;
				return _Utils_update(
					pos,
					{
						attrs: A2($elm$core$List$cons, ev, pos.attrs)
					});
			case 'Attr':
				var attr = attribute.a;
				return _Utils_update(
					pos,
					{
						attrs: A2($elm$core$List$cons, attr, pos.attrs)
					});
			case 'PointerEvents':
				var on = attribute.a;
				return _Utils_update(
					pos,
					{
						pointerevents: $elm$core$Maybe$Just(on)
					});
			case 'GridArea':
				var name = attribute.a;
				return _Utils_update(
					pos,
					{
						gridPosition: $elm$core$Maybe$Just(name)
					});
			default:
				var coords = attribute.a;
				var _v10 = $mdgriffith$style_elements$Style$Internal$Render$Value$gridPosition(coords);
				if (_v10.$ === 'Nothing') {
					return _Utils_update(
						pos,
						{hidden: true});
				} else {
					var xy = _v10.a;
					return _Utils_update(
						pos,
						{
							gridPosition: $elm$core$Maybe$Just(xy)
						});
				}
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$emptyPositionable = {
	attrs: _List_Nil,
	frame: $elm$core$Maybe$Nothing,
	width: $elm$core$Maybe$Nothing,
	expand: false,
	height: $elm$core$Maybe$Nothing,
	hidden: false,
	inline: false,
	margin: $elm$core$Maybe$Nothing,
	shrink: $elm$core$Maybe$Nothing,
	opacity: $elm$core$Maybe$Nothing,
	padding: A4($mdgriffith$style_elements$Style$Internal$Model$Box, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
	overflow: $elm$core$Maybe$Nothing,
	vertical: $elm$core$Maybe$Nothing,
	horizontal: $elm$core$Maybe$Nothing,
	positioned: _Utils_Tuple3($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
	variations: _List_Nil,
	gridPosition: $elm$core$Maybe$Nothing,
	pointerevents: $elm$core$Maybe$Nothing
};
var $mdgriffith$style_elements$Element$Internal$Render$gather = function (attrs) {
	return A3($elm$core$List$foldl, $mdgriffith$style_elements$Element$Internal$Render$makePositionable, $mdgriffith$style_elements$Element$Internal$Render$emptyPositionable, attrs);
};
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$style_elements$Element$Internal$Render$Last = {$: 'Last'};
var $mdgriffith$style_elements$Element$Internal$Render$First = {$: 'First'};
var $mdgriffith$style_elements$Element$Internal$Render$Middle = function (a) {
	return {$: 'Middle', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Render$detectOrder = F2(
	function (list, i) {
		var len = $elm$core$List$length(list);
		return ((!i) && (len === 1)) ? $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast : ((!i) ? $mdgriffith$style_elements$Element$Internal$Render$First : (_Utils_eq(i, len - 1) ? $mdgriffith$style_elements$Element$Internal$Render$Last : $mdgriffith$style_elements$Element$Internal$Render$Middle(i)));
	});
var $mdgriffith$style_elements$Element$Internal$Render$LayoutElement = function (a) {
	return {$: 'LayoutElement', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Render$defaultPadding = F2(
	function (_v0, _v1) {
		var mW = _v0.a;
		var mX = _v0.b;
		var mY = _v0.c;
		var mZ = _v0.d;
		var w = _v1.a;
		var x = _v1.b;
		var y = _v1.c;
		var z = _v1.d;
		return A4(
			$mdgriffith$style_elements$Style$Internal$Model$Box,
			A2($elm$core$Maybe$withDefault, w, mW),
			A2($elm$core$Maybe$withDefault, x, mX),
			A2($elm$core$Maybe$withDefault, y, mY),
			A2($elm$core$Maybe$withDefault, z, mZ));
	});
var $mdgriffith$style_elements$Element$Internal$Render$spacingToMargin = function (attrs) {
	var spaceToMarg = function (a) {
		if (a.$ === 'Spacing') {
			var x = a.a;
			var y = a.b;
			return A4($mdgriffith$style_elements$Element$Internal$Model$Margin, y, x, y, x);
		} else {
			var other = a;
			return other;
		}
	};
	return A2($elm$core$List$map, spaceToMarg, attrs);
};
var $mdgriffith$style_elements$Style$Internal$Render$Value$box = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	var c = _v0.c;
	var d = _v0.d;
	return $elm$core$String$fromFloat(a) + ('px ' + ($elm$core$String$fromFloat(b) + ('px ' + ($elm$core$String$fromFloat(c) + ('px ' + ($elm$core$String$fromFloat(d) + 'px'))))));
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$flexbox = F2(
	function (dir, el) {
		switch (el.$) {
			case 'Wrap':
				var wrap = el.a;
				return wrap ? _Utils_Tuple2('flex-wrap', 'wrap') : _Utils_Tuple2('flex-wrap', 'nowrap');
			case 'Horz':
				var horizontal = el.a;
				switch (dir.$) {
					case 'GoRight':
						switch (horizontal.$) {
							case 'Other':
								if (horizontal.a.$ === 'Left') {
									var _v3 = horizontal.a;
									return _Utils_Tuple2('justify-content', 'flex-start');
								} else {
									var _v4 = horizontal.a;
									return _Utils_Tuple2('justify-content', 'flex-end');
								}
							case 'Center':
								return _Utils_Tuple2('justify-content', 'center');
							case 'Justify':
								return _Utils_Tuple2('justify-content', 'space-between');
							default:
								return _Utils_Tuple2('justify-content', 'space-between');
						}
					case 'GoLeft':
						switch (horizontal.$) {
							case 'Other':
								if (horizontal.a.$ === 'Left') {
									var _v6 = horizontal.a;
									return _Utils_Tuple2('justify-content', 'flex-end');
								} else {
									var _v7 = horizontal.a;
									return _Utils_Tuple2('justify-content', 'flex-start');
								}
							case 'Center':
								return _Utils_Tuple2('justify-content', 'center');
							case 'Justify':
								return _Utils_Tuple2('justify-content', 'space-between');
							default:
								return _Utils_Tuple2('justify-content', 'space-between');
						}
					case 'Down':
						switch (horizontal.$) {
							case 'Other':
								if (horizontal.a.$ === 'Left') {
									var _v9 = horizontal.a;
									return _Utils_Tuple2('align-items', 'flex-start');
								} else {
									var _v10 = horizontal.a;
									return _Utils_Tuple2('align-items', 'flex-end');
								}
							case 'Center':
								return _Utils_Tuple2('align-items', 'center');
							case 'Justify':
								return _Utils_Tuple2('align-items', 'Justify');
							default:
								return _Utils_Tuple2('align-items', 'Justify');
						}
					default:
						switch (horizontal.$) {
							case 'Other':
								if (horizontal.a.$ === 'Left') {
									var _v12 = horizontal.a;
									return _Utils_Tuple2('align-items', 'flex-start');
								} else {
									var _v13 = horizontal.a;
									return _Utils_Tuple2('align-items', 'flex-end');
								}
							case 'Center':
								return _Utils_Tuple2('align-items', 'center');
							case 'Justify':
								return _Utils_Tuple2('align-items', 'Justify');
							default:
								return _Utils_Tuple2('align-items', 'Justify');
						}
				}
			default:
				var vertical = el.a;
				switch (dir.$) {
					case 'GoRight':
						switch (vertical.$) {
							case 'Other':
								if (vertical.a.$ === 'Top') {
									var _v16 = vertical.a;
									return _Utils_Tuple2('align-items', 'flex-start');
								} else {
									var _v17 = vertical.a;
									return _Utils_Tuple2('align-items', 'flex-end');
								}
							case 'Center':
								return _Utils_Tuple2('align-items', 'center');
							case 'Justify':
								return _Utils_Tuple2('align-items', 'Justify');
							default:
								return _Utils_Tuple2('align-items', 'Justify');
						}
					case 'GoLeft':
						switch (vertical.$) {
							case 'Other':
								if (vertical.a.$ === 'Top') {
									var _v19 = vertical.a;
									return _Utils_Tuple2('align-items', 'flex-start');
								} else {
									var _v20 = vertical.a;
									return _Utils_Tuple2('align-items', 'flex-end');
								}
							case 'Center':
								return _Utils_Tuple2('align-items', 'center');
							case 'Justify':
								return _Utils_Tuple2('align-items', 'Justify');
							default:
								return _Utils_Tuple2('align-items', 'Justify');
						}
					case 'Down':
						switch (vertical.$) {
							case 'Other':
								if (vertical.a.$ === 'Top') {
									var _v22 = vertical.a;
									return _Utils_Tuple2('justify-content', 'flex-start');
								} else {
									var _v23 = vertical.a;
									return _Utils_Tuple2('justify-content', 'flex-end');
								}
							case 'Center':
								return _Utils_Tuple2('justify-content', 'center');
							case 'Justify':
								return _Utils_Tuple2('justify-content', 'space-between');
							default:
								return _Utils_Tuple2('align-items', 'Justify');
						}
					default:
						switch (vertical.$) {
							case 'Other':
								if (vertical.a.$ === 'Top') {
									var _v25 = vertical.a;
									return _Utils_Tuple2('justify-content', 'flex-end');
								} else {
									var _v26 = vertical.a;
									return _Utils_Tuple2('justify-content', 'flex-start');
								}
							case 'Center':
								return _Utils_Tuple2('justify-content', 'center');
							case 'Justify':
								return _Utils_Tuple2('justify-content', 'space-between');
							default:
								return _Utils_Tuple2('align-items', 'Justify');
						}
				}
		}
	});
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$style_elements$Style$Internal$Render$Property$direction = function (dir) {
	switch (dir.$) {
		case 'GoRight':
			return _Utils_Tuple2('flex-direction', 'row');
		case 'GoLeft':
			return _Utils_Tuple2('flex-direction', 'row-reverse');
		case 'Down':
			return _Utils_Tuple2('flex-direction', 'column');
		default:
			return _Utils_Tuple2('flex-direction', 'column-reverse');
	}
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$gridAlignment = function (align) {
	switch (align.$) {
		case 'GridGap':
			var row = align.a;
			var column = align.b;
			return _Utils_Tuple2(
				'grid-gap',
				$elm$core$String$fromFloat(row) + ('px ' + ($elm$core$String$fromFloat(column) + 'px')));
		case 'GridH':
			var horizontal = align.a;
			switch (horizontal.$) {
				case 'Other':
					if (horizontal.a.$ === 'Left') {
						var _v2 = horizontal.a;
						return _Utils_Tuple2('justify-content', 'start');
					} else {
						var _v3 = horizontal.a;
						return _Utils_Tuple2('justify-content', 'end');
					}
				case 'Center':
					return _Utils_Tuple2('justify-content', 'center');
				case 'Justify':
					return _Utils_Tuple2('justify-content', 'space-between');
				default:
					return _Utils_Tuple2('justify-content', 'space-between');
			}
		default:
			var vertical = align.a;
			switch (vertical.$) {
				case 'Other':
					if (vertical.a.$ === 'Top') {
						var _v5 = vertical.a;
						return _Utils_Tuple2('align-content', 'start');
					} else {
						var _v6 = vertical.a;
						return _Utils_Tuple2('align-content', 'end');
					}
				case 'Center':
					return _Utils_Tuple2('align-content', 'center');
				case 'Justify':
					return _Utils_Tuple2('align-content', 'space-between');
				default:
					return _Utils_Tuple2('align-content', 'space-between');
			}
	}
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$layout = F2(
	function (inline, lay) {
		switch (lay.$) {
			case 'TextLayout':
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'display',
						inline ? 'inline-block' : 'block')
					]);
			case 'FlexLayout':
				var dir = lay.a;
				var flexProps = lay.b;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						'display',
						inline ? 'inline-flex' : 'flex'),
					A2(
						$elm$core$List$cons,
						$mdgriffith$style_elements$Style$Internal$Render$Property$direction(dir),
						A2(
							$elm$core$List$map,
							$mdgriffith$style_elements$Style$Internal$Render$Property$flexbox(dir),
							flexProps)));
			default:
				if (lay.a.$ === 'NamedGridTemplate') {
					var columns = lay.a.a.columns;
					var rows = lay.a.a.rows;
					var options = lay.b;
					var renderLen = function (len) {
						switch (len.$) {
							case 'Px':
								var x = len.a;
								return $elm$core$String$fromFloat(x) + 'px';
							case 'Percent':
								var x = len.a;
								return $elm$core$String$fromFloat(x) + '%';
							case 'Auto':
								return 'auto';
							case 'Fill':
								var i = len.a;
								return $elm$core$String$fromFloat(i) + 'fr';
							default:
								var perc = len.a;
								var px = len.b;
								return 'calc(' + ($elm$core$String$fromFloat(perc) + ('% + ' + ($elm$core$String$fromFloat(px) + 'px)')));
						}
					};
					var alignment = A2($elm$core$List$map, $mdgriffith$style_elements$Style$Internal$Render$Property$gridAlignment, options);
					var areaSpan = function (_v3) {
						var span = _v3.a;
						var maybeName = _v3.b;
						var name = function () {
							if (maybeName.$ === 'Nothing') {
								return '.';
							} else {
								var str = maybeName.a;
								return str;
							}
						}();
						if (span.$ === 'SpanAll') {
							return A2(
								$elm$core$List$repeat,
								$elm$core$List$length(columns),
								name);
						} else {
							var i = span.a;
							return A2($elm$core$List$repeat, i, name);
						}
					};
					var areasInRow = function (areas) {
						var areaStrs = A2($elm$core$List$concatMap, areaSpan, areas);
						var quote = function (str) {
							return '\u0022' + (str + '\u0022');
						};
						return (_Utils_cmp(
							$elm$core$List$length(areaStrs),
							$elm$core$List$length(columns)) > 0) ? quote(
							A2($elm$core$String$join, ' ', areaStrs)) : ((_Utils_cmp(
							$elm$core$List$length(areaStrs),
							$elm$core$List$length(columns)) < 0) ? quote(
							A2($elm$core$String$join, ' ', areaStrs)) : quote(
							A2($elm$core$String$join, ' ', areaStrs)));
					};
					var grid = inline ? _Utils_Tuple2('display', 'inline-grid') : _Utils_Tuple2('display', 'grid');
					return A2(
						$elm$core$List$cons,
						grid,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'grid-template-rows',
								A2(
									$elm$core$String$join,
									' ',
									A2(
										$elm$core$List$map,
										A2($elm$core$Basics$composeL, renderLen, $elm$core$Tuple$first),
										rows))),
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									'grid-template-columns',
									A2(
										$elm$core$String$join,
										' ',
										A2($elm$core$List$map, renderLen, columns))),
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										'grid-template-areas',
										A2(
											$elm$core$String$join,
											'\u000A',
											A2(
												$elm$core$List$map,
												A2($elm$core$Basics$composeL, areasInRow, $elm$core$Tuple$second),
												rows))),
									alignment))));
				} else {
					var columns = lay.a.a.columns;
					var rows = lay.a.a.rows;
					var options = lay.b;
					var renderLen = function (len) {
						switch (len.$) {
							case 'Px':
								var x = len.a;
								return $elm$core$String$fromFloat(x) + 'px';
							case 'Percent':
								var x = len.a;
								return $elm$core$String$fromFloat(x) + '%';
							case 'Auto':
								return 'auto';
							case 'Fill':
								var i = len.a;
								return $elm$core$String$fromFloat(i) + 'fr';
							default:
								var perc = len.a;
								var px = len.b;
								return 'calc(' + ($elm$core$String$fromFloat(perc) + ('% + ' + ($elm$core$String$fromFloat(px) + 'px)')));
						}
					};
					var alignment = A2($elm$core$List$map, $mdgriffith$style_elements$Style$Internal$Render$Property$gridAlignment, options);
					var grid = inline ? _Utils_Tuple2('display', 'inline-grid') : _Utils_Tuple2('display', 'grid');
					return A2(
						$elm$core$List$cons,
						grid,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'grid-template-rows',
								A2(
									$elm$core$String$join,
									' ',
									A2($elm$core$List$map, renderLen, rows))),
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									'grid-template-columns',
									A2(
										$elm$core$String$join,
										' ',
										A2($elm$core$List$map, renderLen, columns))),
								alignment)));
				}
		}
	});
var $mdgriffith$style_elements$Style$Internal$Render$Value$length = function (l) {
	switch (l.$) {
		case 'Px':
			var x = l.a;
			return $elm$core$String$fromFloat(x) + 'px';
		case 'Percent':
			var x = l.a;
			return $elm$core$String$fromFloat(x) + '%';
		case 'Auto':
			return 'auto';
		case 'Fill':
			var i = l.a;
			return '100%';
		default:
			var perc = l.a;
			var px = l.b;
			return 'calc(' + ($elm$core$String$fromFloat(perc) + ('% + ' + ($elm$core$String$fromFloat(px) + 'px)')));
	}
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth = F2(
	function (len, adjustment) {
		switch (len.$) {
			case 'Px':
				var x = len.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'width',
						$elm$core$String$fromFloat(x) + 'px')
					]);
			case 'Percent':
				var x = len.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'width',
						'calc(' + ($elm$core$String$fromFloat(x) + ('% - ' + ($elm$core$String$fromFloat(adjustment) + 'px)'))))
					]);
			case 'Auto':
				return _List_fromArray(
					[
						_Utils_Tuple2('width', 'auto')
					]);
			case 'Fill':
				var i = len.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'flex-grow',
						$elm$core$String$fromFloat(i)),
						_Utils_Tuple2('flex-basis', '0')
					]);
			default:
				var perc = len.a;
				var px = len.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'width',
						'calc(' + ($elm$core$String$fromFloat(perc) + ('% + ' + ($elm$core$String$fromFloat(px) + 'px)'))))
					]);
		}
	});
var $mdgriffith$style_elements$Style$Internal$Render$Property$flexHeight = function (l) {
	switch (l.$) {
		case 'Px':
			var x = l.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'height',
					$elm$core$String$fromFloat(x) + 'px')
				]);
		case 'Percent':
			var x = l.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'height',
					$elm$core$String$fromFloat(x) + '%')
				]);
		case 'Auto':
			return _List_fromArray(
				[
					_Utils_Tuple2('height', 'auto')
				]);
		case 'Fill':
			var i = l.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'flex-grow',
					$elm$core$String$fromFloat(i)),
					_Utils_Tuple2('flex-basis', '0')
				]);
		default:
			var perc = l.a;
			var px = l.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'height',
					'calc(' + ($elm$core$String$fromFloat(perc) + ('% + ' + ($elm$core$String$fromFloat(px) + 'px)'))))
				]);
	}
};
var $mdgriffith$style_elements$Style$Internal$Model$Top = {$: 'Top'};
var $mdgriffith$style_elements$Style$Internal$Model$Grid = F2(
	function (a, b) {
		return {$: 'Grid', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$Internal$Model$Horz = function (a) {
	return {$: 'Horz', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Left = {$: 'Left'};
var $mdgriffith$style_elements$Style$Internal$Model$Vert = function (a) {
	return {$: 'Vert', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$GridH = function (a) {
	return {$: 'GridH', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$GridV = function (a) {
	return {$: 'GridV', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Other = function (a) {
	return {$: 'Other', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Right = {$: 'Right'};
var $mdgriffith$style_elements$Style$Internal$Model$Bottom = {$: 'Bottom'};
var $mdgriffith$style_elements$Style$Internal$Model$Center = {$: 'Center'};
var $mdgriffith$style_elements$Style$Internal$Model$Justify = {$: 'Justify'};
var $mdgriffith$style_elements$Style$Internal$Model$TextLayout = function (a) {
	return {$: 'TextLayout', a: a};
};
var $mdgriffith$style_elements$Element$Internal$Render$alignLayout = F3(
	function (maybeHorizontal, maybeVertical, layout) {
		var alignFlexboxHorizontal = function (align) {
			switch (align.$) {
				case 'Left':
					return $mdgriffith$style_elements$Style$Internal$Model$Horz(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Left));
				case 'Right':
					return $mdgriffith$style_elements$Style$Internal$Model$Horz(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Right));
				case 'Center':
					return $mdgriffith$style_elements$Style$Internal$Model$Horz($mdgriffith$style_elements$Style$Internal$Model$Center);
				default:
					return $mdgriffith$style_elements$Style$Internal$Model$Horz($mdgriffith$style_elements$Style$Internal$Model$Justify);
			}
		};
		var alignFlexboxVertical = function (align) {
			switch (align.$) {
				case 'Top':
					return $mdgriffith$style_elements$Style$Internal$Model$Vert(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Top));
				case 'Bottom':
					return $mdgriffith$style_elements$Style$Internal$Model$Vert(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Bottom));
				case 'VerticalCenter':
					return $mdgriffith$style_elements$Style$Internal$Model$Vert($mdgriffith$style_elements$Style$Internal$Model$Center);
				default:
					return $mdgriffith$style_elements$Style$Internal$Model$Vert($mdgriffith$style_elements$Style$Internal$Model$Justify);
			}
		};
		var alignGridHorizontal = function (align) {
			switch (align.$) {
				case 'Left':
					return $mdgriffith$style_elements$Style$Internal$Model$GridH(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Left));
				case 'Right':
					return $mdgriffith$style_elements$Style$Internal$Model$GridH(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Right));
				case 'Center':
					return $mdgriffith$style_elements$Style$Internal$Model$GridH($mdgriffith$style_elements$Style$Internal$Model$Center);
				default:
					return $mdgriffith$style_elements$Style$Internal$Model$GridH($mdgriffith$style_elements$Style$Internal$Model$Justify);
			}
		};
		var alignGridVertical = function (align) {
			switch (align.$) {
				case 'Top':
					return $mdgriffith$style_elements$Style$Internal$Model$GridV(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Top));
				case 'Bottom':
					return $mdgriffith$style_elements$Style$Internal$Model$GridV(
						$mdgriffith$style_elements$Style$Internal$Model$Other($mdgriffith$style_elements$Style$Internal$Model$Bottom));
				case 'VerticalCenter':
					return $mdgriffith$style_elements$Style$Internal$Model$GridV($mdgriffith$style_elements$Style$Internal$Model$Center);
				default:
					return $mdgriffith$style_elements$Style$Internal$Model$GridV($mdgriffith$style_elements$Style$Internal$Model$Justify);
			}
		};
		switch (layout.$) {
			case 'TextLayout':
				var clearfix = layout.a;
				return $mdgriffith$style_elements$Style$Internal$Model$TextLayout(clearfix);
			case 'FlexLayout':
				var dir = layout.a;
				var els = layout.b;
				var _v1 = _Utils_Tuple2(maybeHorizontal, maybeVertical);
				if (_v1.a.$ === 'Nothing') {
					if (_v1.b.$ === 'Nothing') {
						var _v2 = _v1.a;
						var _v3 = _v1.b;
						return A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, dir, els);
					} else {
						var _v5 = _v1.a;
						var v = _v1.b.a;
						return A2(
							$mdgriffith$style_elements$Style$Internal$Model$FlexLayout,
							dir,
							A2(
								$elm$core$List$cons,
								alignFlexboxVertical(v),
								els));
					}
				} else {
					if (_v1.b.$ === 'Nothing') {
						var h = _v1.a.a;
						var _v4 = _v1.b;
						return A2(
							$mdgriffith$style_elements$Style$Internal$Model$FlexLayout,
							dir,
							A2(
								$elm$core$List$cons,
								alignFlexboxHorizontal(h),
								els));
					} else {
						var h = _v1.a.a;
						var v = _v1.b.a;
						return A2(
							$mdgriffith$style_elements$Style$Internal$Model$FlexLayout,
							dir,
							A2(
								$elm$core$List$cons,
								alignFlexboxHorizontal(h),
								A2(
									$elm$core$List$cons,
									alignFlexboxVertical(v),
									els)));
					}
				}
			default:
				var template = layout.a;
				var els = layout.b;
				var _v6 = _Utils_Tuple2(maybeHorizontal, maybeVertical);
				if (_v6.a.$ === 'Nothing') {
					if (_v6.b.$ === 'Nothing') {
						var _v7 = _v6.a;
						var _v8 = _v6.b;
						return A2($mdgriffith$style_elements$Style$Internal$Model$Grid, template, els);
					} else {
						var _v10 = _v6.a;
						var v = _v6.b.a;
						return A2(
							$mdgriffith$style_elements$Style$Internal$Model$Grid,
							template,
							A2(
								$elm$core$List$cons,
								alignGridVertical(v),
								els));
					}
				} else {
					if (_v6.b.$ === 'Nothing') {
						var h = _v6.a.a;
						var _v9 = _v6.b;
						return A2(
							$mdgriffith$style_elements$Style$Internal$Model$Grid,
							template,
							A2(
								$elm$core$List$cons,
								alignGridHorizontal(h),
								els));
					} else {
						var h = _v6.a.a;
						var v = _v6.b.a;
						return A2(
							$mdgriffith$style_elements$Style$Internal$Model$Grid,
							template,
							A2(
								$elm$core$List$cons,
								alignGridHorizontal(h),
								A2(
									$elm$core$List$cons,
									alignGridVertical(v),
									els)));
					}
				}
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$calcPosition = F2(
	function (frame, _v0) {
		var mx = _v0.a;
		var my = _v0.b;
		var mz = _v0.c;
		var z = A2($elm$core$Maybe$withDefault, 0, mz);
		var y = A2($elm$core$Maybe$withDefault, 0, my);
		var x = A2($elm$core$Maybe$withDefault, 0, mx);
		switch (frame.$) {
			case 'Relative':
				return _List_fromArray(
					[
						_Utils_Tuple2('position', 'relative'),
						_Utils_Tuple2(
						'left',
						$elm$core$String$fromFloat(x) + 'px'),
						_Utils_Tuple2(
						'top',
						$elm$core$String$fromFloat(y) + 'px')
					]);
			case 'Screen':
				return _List_fromArray(
					[
						_Utils_Tuple2('position', 'fixed'),
						_Utils_Tuple2(
						'left',
						$elm$core$String$fromFloat(x) + 'px'),
						_Utils_Tuple2(
						'top',
						$elm$core$String$fromFloat(y) + 'px'),
						_Utils_Tuple2('z-index', '1000')
					]);
			case 'Absolute':
				if (frame.a.$ === 'TopLeft') {
					var _v2 = frame.a;
					return A2(
						$elm$core$List$filterMap,
						$elm$core$Basics$identity,
						_List_fromArray(
							[
								$elm$core$Maybe$Just(
								_Utils_Tuple2('position', 'absolute')),
								function () {
								if (mx.$ === 'Just') {
									var xVal = mx.a;
									return $elm$core$Maybe$Just(
										_Utils_Tuple2(
											'left',
											$elm$core$String$fromFloat(xVal) + 'px'));
								} else {
									return $elm$core$Maybe$Nothing;
								}
							}(),
								function () {
								if (my.$ === 'Just') {
									var yVal = my.a;
									return $elm$core$Maybe$Just(
										_Utils_Tuple2(
											'top',
											$elm$core$String$fromFloat(yVal) + 'px'));
								} else {
									return $elm$core$Maybe$Nothing;
								}
							}()
							]));
				} else {
					var _v5 = frame.a;
					return A2(
						$elm$core$List$filterMap,
						$elm$core$Basics$identity,
						_List_fromArray(
							[
								$elm$core$Maybe$Just(
								_Utils_Tuple2('position', 'absolute')),
								function () {
								if (mx.$ === 'Just') {
									var xVal = mx.a;
									return $elm$core$Maybe$Just(
										_Utils_Tuple2(
											'left',
											$elm$core$String$fromFloat(xVal) + 'px'));
								} else {
									return $elm$core$Maybe$Nothing;
								}
							}(),
								function () {
								if (my.$ === 'Just') {
									var yVal = my.a;
									return $elm$core$Maybe$Just(
										_Utils_Tuple2(
											'bottom',
											$elm$core$String$fromFloat(yVal) + 'px'));
								} else {
									return $elm$core$Maybe$Nothing;
								}
							}()
							]));
				}
			default:
				switch (frame.a.$) {
					case 'Within':
						var _v8 = frame.a;
						return _List_fromArray(
							[
								_Utils_Tuple2('position', 'relative'),
								_Utils_Tuple2(
								'top',
								$elm$core$String$fromFloat(y) + 'px'),
								_Utils_Tuple2(
								'left',
								$elm$core$String$fromFloat(x) + 'px')
							]);
					case 'Above':
						var _v9 = frame.a;
						return _List_fromArray(
							[
								_Utils_Tuple2('position', 'relative'),
								_Utils_Tuple2(
								'top',
								$elm$core$String$fromFloat(y) + 'px'),
								_Utils_Tuple2(
								'left',
								$elm$core$String$fromFloat(x) + 'px')
							]);
					case 'Below':
						var _v10 = frame.a;
						return _List_fromArray(
							[
								_Utils_Tuple2('position', 'relative'),
								_Utils_Tuple2(
								'top',
								'calc(100% + ' + ($elm$core$String$fromFloat(y) + 'px)')),
								_Utils_Tuple2(
								'left',
								$elm$core$String$fromFloat(x) + 'px')
							]);
					case 'OnLeft':
						var _v11 = frame.a;
						return _List_fromArray(
							[
								_Utils_Tuple2('position', 'relative'),
								_Utils_Tuple2(
								'right',
								'calc(100% - ' + ($elm$core$String$fromFloat(x) + 'px)')),
								_Utils_Tuple2(
								'top',
								$elm$core$String$fromFloat(y) + 'px')
							]);
					default:
						var _v12 = frame.a;
						return _List_fromArray(
							[
								_Utils_Tuple2('position', 'relative'),
								_Utils_Tuple2(
								'left',
								'calc(100% + ' + ($elm$core$String$fromFloat(x) + 'px)')),
								_Utils_Tuple2(
								'top',
								$elm$core$String$fromFloat(y) + 'px')
							]);
				}
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$renderPadding = function (_v0) {
	var top = _v0.a;
	var right = _v0.b;
	var bottom = _v0.c;
	var left = _v0.d;
	var format = F2(
		function (name, x) {
			return _Utils_Tuple2(
				name,
				$elm$core$String$fromFloat(x) + 'px');
		});
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		_List_fromArray(
			[
				A2(
				$elm$core$Maybe$map,
				format('padding-top'),
				top),
				A2(
				$elm$core$Maybe$map,
				format('padding-bottom'),
				bottom),
				A2(
				$elm$core$Maybe$map,
				format('padding-left'),
				left),
				A2(
				$elm$core$Maybe$map,
				format('padding-right'),
				right)
			]));
};
var $mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength = F2(
	function (len, adjustment) {
		switch (len.$) {
			case 'Px':
				var x = len.a;
				return $elm$core$String$fromFloat(x) + 'px';
			case 'Percent':
				var x = len.a;
				return 'calc(' + ($elm$core$String$fromFloat(x) + ('% - ' + ($elm$core$String$fromFloat(adjustment) + 'px)')));
			case 'Auto':
				return 'auto';
			case 'Fill':
				var i = len.a;
				return 'calc(100% - ' + ($elm$core$String$fromFloat(adjustment) + 'px)');
			default:
				var perc = len.a;
				var px = len.b;
				return 'calc(' + ($elm$core$String$fromFloat(perc) + ('% + ' + ($elm$core$String$fromFloat(px) + 'px)')));
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$flexboxVerticalIndividualAlignment = F2(
	function (direction, alignment) {
		switch (direction.$) {
			case 'GoRight':
				switch (alignment.$) {
					case 'Top':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-start'));
					case 'Bottom':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-end'));
					case 'VerticalCenter':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'center'));
					default:
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'center'));
				}
			case 'GoLeft':
				switch (alignment.$) {
					case 'Top':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-start'));
					case 'Bottom':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-end'));
					case 'VerticalCenter':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'center'));
					default:
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'center'));
				}
			case 'Down':
				switch (alignment.$) {
					case 'Top':
						return $elm$core$Maybe$Nothing;
					case 'Bottom':
						return $elm$core$Maybe$Nothing;
					case 'VerticalCenter':
						return $elm$core$Maybe$Nothing;
					default:
						return $elm$core$Maybe$Nothing;
				}
			default:
				switch (alignment.$) {
					case 'Top':
						return $elm$core$Maybe$Nothing;
					case 'Bottom':
						return $elm$core$Maybe$Nothing;
					case 'VerticalCenter':
						return $elm$core$Maybe$Nothing;
					default:
						return $elm$core$Maybe$Nothing;
				}
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$flexboxHorizontalIndividualAlignment = F2(
	function (direction, alignment) {
		switch (direction.$) {
			case 'GoRight':
				switch (alignment.$) {
					case 'Left':
						return $elm$core$Maybe$Nothing;
					case 'Right':
						return $elm$core$Maybe$Nothing;
					case 'Center':
						return $elm$core$Maybe$Nothing;
					default:
						return $elm$core$Maybe$Nothing;
				}
			case 'GoLeft':
				switch (alignment.$) {
					case 'Left':
						return $elm$core$Maybe$Nothing;
					case 'Right':
						return $elm$core$Maybe$Nothing;
					case 'Center':
						return $elm$core$Maybe$Nothing;
					default:
						return $elm$core$Maybe$Nothing;
				}
			case 'Down':
				switch (alignment.$) {
					case 'Left':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-start'));
					case 'Right':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-end'));
					case 'Center':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'center'));
					default:
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'stretch'));
				}
			default:
				switch (alignment.$) {
					case 'Left':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-start'));
					case 'Right':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'flex-end'));
					case 'Center':
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'center'));
					default:
						return $elm$core$Maybe$Just(
							_Utils_Tuple2('align-self', 'stretch'));
				}
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$renderAttributes = F6(
	function (elType, order, maybeElemID, parent, stylesheet, elem) {
		var adjustspacing = function (_v67) {
			var top = _v67.a;
			var right = _v67.b;
			var bottom = _v67.c;
			var left = _v67.d;
			var onScreen = function () {
				var _v65 = elem.frame;
				if ((_v65.$ === 'Just') && (_v65.a.$ === 'Screen')) {
					var _v66 = _v65.a;
					return true;
				} else {
					return false;
				}
			}();
			var halved = A4($mdgriffith$style_elements$Style$Internal$Model$Box, top / 2, right / 2, bottom / 2, left / 2);
			if (onScreen) {
				return A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0);
			} else {
				if (parent.$ === 'Nothing') {
					return A4($mdgriffith$style_elements$Style$Internal$Model$Box, top, right, bottom, left);
				} else {
					var parentEl = parent.a;
					var _v62 = parentEl.layout;
					if (_v62.$ === 'TextLayout') {
						var _v63 = elem.horizontal;
						if (_v63.$ === 'Nothing') {
							return (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0) : (elem.inline ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, right, 0, 0) : A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, bottom, 0));
						} else {
							var align = _v63.a;
							if ((!elem.inline) && _Utils_eq(elem.frame, $elm$core$Maybe$Nothing)) {
								switch (align.$) {
									case 'Left':
										return _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, right, bottom, 0) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, right, 0, 0) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, right, 0, 0) : A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, right, bottom, 0)));
									case 'Right':
										return _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, bottom, left) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, left) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, left) : A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, bottom, left)));
									default:
										return (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0) : A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, bottom, 0);
								}
							} else {
								return A4($mdgriffith$style_elements$Style$Internal$Model$Box, top, right, bottom, left);
							}
						}
					} else {
						return halved;
					}
				}
			}
		};
		var passthrough = function (attrs) {
			var _v60 = elem.pointerevents;
			if (_v60.$ === 'Nothing') {
				return attrs;
			} else {
				if (!_v60.a) {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2('pointer-events', 'none'),
						attrs);
				} else {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2('pointer-events', 'auto'),
						attrs);
				}
			}
		};
		var horizontal = function (attrs) {
			var _v52 = elem.horizontal;
			if (_v52.$ === 'Nothing') {
				return attrs;
			} else {
				var align = _v52.a;
				if (elem.inline && _Utils_eq(elType, $mdgriffith$style_elements$Element$Internal$Render$Single)) {
					switch (align.$) {
						case 'Left':
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2('z-index', '1'),
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2('float', 'left'),
									attrs));
						case 'Right':
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2('z-index', '1'),
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2('float', 'right'),
									attrs));
						case 'Center':
							return attrs;
						default:
							return attrs;
					}
				} else {
					if (elem.inline) {
						return attrs;
					} else {
						if (!_Utils_eq(elem.frame, $elm$core$Maybe$Nothing)) {
							switch (align.$) {
								case 'Left':
									return A2(
										$elm$core$List$cons,
										_Utils_Tuple2('left', '0'),
										attrs);
								case 'Right':
									return A2(
										$elm$core$List$cons,
										_Utils_Tuple2('right', '0'),
										attrs);
								case 'Center':
									return attrs;
								default:
									return attrs;
							}
						} else {
							if (elType.$ === 'LayoutElement') {
								return attrs;
							} else {
								if (parent.$ === 'Nothing') {
									return attrs;
								} else {
									var parentEl = parent.a;
									var _v57 = parentEl.layout;
									switch (_v57.$) {
										case 'TextLayout':
											switch (align.$) {
												case 'Left':
													return A2(
														$elm$core$List$cons,
														_Utils_Tuple2('z-index', '1'),
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2('float', 'left'),
															attrs));
												case 'Right':
													return A2(
														$elm$core$List$cons,
														_Utils_Tuple2('z-index', '1'),
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2('float', 'right'),
															attrs));
												case 'Center':
													return attrs;
												default:
													return attrs;
											}
										case 'FlexLayout':
											var dir = _v57.a;
											var _v59 = A2($mdgriffith$style_elements$Element$Internal$Render$flexboxHorizontalIndividualAlignment, dir, align);
											if (_v59.$ === 'Nothing') {
												return attrs;
											} else {
												var a = _v59.a;
												return A2($elm$core$List$cons, a, attrs);
											}
										default:
											return attrs;
									}
								}
							}
						}
					}
				}
			}
		};
		var attributes = function () {
			if (maybeElemID.$ === 'Nothing') {
				return elem.attrs;
			} else {
				var elemID = maybeElemID.a;
				return ($elm$core$List$length(elem.variations) > 0) ? A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$classList(
						A2(stylesheet.variations, elemID, elem.variations)),
					elem.attrs) : A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$class(
						stylesheet.style(elemID)),
					elem.attrs);
			}
		}();
		var vertical = function (attrs) {
			var _v46 = elem.vertical;
			if (_v46.$ === 'Nothing') {
				return attrs;
			} else {
				var align = _v46.a;
				if (elem.inline && _Utils_eq(elType, $mdgriffith$style_elements$Element$Internal$Render$Single)) {
					return attrs;
				} else {
					if (elem.inline) {
						return attrs;
					} else {
						if (!_Utils_eq(elem.frame, $elm$core$Maybe$Nothing)) {
							switch (align.$) {
								case 'Top':
									return A2(
										$elm$core$List$cons,
										_Utils_Tuple2('top', '0'),
										attrs);
								case 'Bottom':
									return A2(
										$elm$core$List$cons,
										_Utils_Tuple2('bottom', '0'),
										attrs);
								case 'VerticalCenter':
									return attrs;
								default:
									return attrs;
							}
						} else {
							if (parent.$ === 'Nothing') {
								return attrs;
							} else {
								var parentEl = parent.a;
								var _v49 = parentEl.layout;
								if (_v49.$ === 'FlexLayout') {
									var dir = _v49.a;
									var _v50 = A2($mdgriffith$style_elements$Element$Internal$Render$flexboxVerticalIndividualAlignment, dir, align);
									if (_v50.$ === 'Nothing') {
										return attrs;
									} else {
										var a = _v50.a;
										return A2($elm$core$List$cons, a, attrs);
									}
								} else {
									return attrs;
								}
							}
						}
					}
				}
			}
		};
		var position = function (attrs) {
			return _Utils_ap(
				A2(
					$mdgriffith$style_elements$Element$Internal$Render$calcPosition,
					A2($elm$core$Maybe$withDefault, $mdgriffith$style_elements$Element$Internal$Model$Relative, elem.frame),
					elem.positioned),
				attrs);
		};
		var overflow = function (attrs) {
			var _v44 = elem.overflow;
			if (_v44.$ === 'Nothing') {
				return attrs;
			} else {
				var o = _v44.a;
				switch (o.$) {
					case 'XAxis':
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2('overflow-x', 'auto'),
							attrs);
					case 'YAxis':
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2('overflow-y', 'auto'),
							attrs);
					default:
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2('overflow', 'auto'),
							attrs);
				}
			}
		};
		var defaults = _List_fromArray(
			[
				_Utils_Tuple2('box-sizing', 'border-box')
			]);
		var spacing = function (attrs) {
			var _v43 = elem.margin;
			if (_v43.$ === 'Nothing') {
				return attrs;
			} else {
				var space = _v43.a;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						'margin',
						$mdgriffith$style_elements$Style$Internal$Render$Value$box(
							adjustspacing(space))),
					attrs);
			}
		};
		var padding = function (attrs) {
			var paddings = $mdgriffith$style_elements$Element$Internal$Render$renderPadding(elem.padding);
			return ($elm$core$List$length(paddings) > 0) ? _Utils_ap(paddings, attrs) : attrs;
		};
		var opacity = function (attrs) {
			var _v42 = elem.opacity;
			if (_v42.$ === 'Nothing') {
				return attrs;
			} else {
				var o = _v42.a;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						'opacity',
						$elm$core$String$fromFloat(o)),
					attrs);
			}
		};
		var gridPos = function (attrs) {
			var _v41 = elem.gridPosition;
			if (_v41.$ === 'Nothing') {
				return attrs;
			} else {
				var area = _v41.a;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2('grid-area', area),
					attrs);
			}
		};
		var shrink = function (attrs) {
			var _v25 = elem.shrink;
			if (_v25.$ === 'Just') {
				var i = _v25.a;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						'flex-shrink',
						$elm$core$String$fromInt(i)),
					attrs);
			} else {
				if (parent.$ === 'Nothing') {
					return attrs;
				} else {
					var parentEl = parent.a;
					var horizontalOverflow = function () {
						var _v37 = elem.overflow;
						if (_v37.$ === 'Just') {
							switch (_v37.a.$) {
								case 'XAxis':
									var _v38 = _v37.a;
									return true;
								case 'YAxis':
									var _v39 = _v37.a;
									return false;
								default:
									var _v40 = _v37.a;
									return true;
							}
						} else {
							return false;
						}
					}();
					var verticalOverflow = function () {
						var _v33 = elem.overflow;
						if (_v33.$ === 'Just') {
							switch (_v33.a.$) {
								case 'XAxis':
									var _v34 = _v33.a;
									return false;
								case 'YAxis':
									var _v35 = _v33.a;
									return true;
								default:
									var _v36 = _v33.a;
									return true;
							}
						} else {
							return false;
						}
					}();
					var isHorizontal = function (dir) {
						switch (dir.$) {
							case 'GoRight':
								return true;
							case 'GoLeft':
								return true;
							default:
								return false;
						}
					};
					var isVertical = function (dir) {
						switch (dir.$) {
							case 'Up':
								return true;
							case 'Down':
								return true;
							default:
								return false;
						}
					};
					var isPercent = function (x) {
						if ((x.$ === 'Just') && (x.a.$ === 'Percent')) {
							return true;
						} else {
							return false;
						}
					};
					var isPx = function (x) {
						if ((x.$ === 'Just') && (x.a.$ === 'Px')) {
							return true;
						} else {
							return false;
						}
					};
					var _v27 = parentEl.layout;
					if (_v27.$ === 'FlexLayout') {
						var dir = _v27.a;
						if (isHorizontal(dir) && isPx(elem.width)) {
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2('flex-shrink', '0'),
								attrs);
						} else {
							if (isHorizontal(dir) && isPercent(elem.width)) {
								return A2(
									$elm$core$List$cons,
									_Utils_Tuple2('flex-shrink', '0'),
									attrs);
							} else {
								if (isHorizontal(dir) && (!_Utils_eq(elem.width, $elm$core$Maybe$Nothing))) {
									return A2(
										$elm$core$List$cons,
										_Utils_Tuple2('flex-shrink', '1'),
										attrs);
								} else {
									if (isHorizontal(dir) && horizontalOverflow) {
										return A2(
											$elm$core$List$cons,
											_Utils_Tuple2('flex-shrink', '1'),
											attrs);
									} else {
										if (isVertical(dir) && isPx(elem.height)) {
											return A2(
												$elm$core$List$cons,
												_Utils_Tuple2('flex-shrink', '0'),
												attrs);
										} else {
											if (isVertical(dir) && isPercent(elem.height)) {
												return A2(
													$elm$core$List$cons,
													_Utils_Tuple2('flex-shrink', '0'),
													attrs);
											} else {
												if (isVertical(dir) && (!_Utils_eq(elem.height, $elm$core$Maybe$Nothing))) {
													return A2(
														$elm$core$List$cons,
														_Utils_Tuple2('flex-shrink', '1'),
														attrs);
												} else {
													if (isVertical(dir) && verticalOverflow) {
														return A2(
															$elm$core$List$cons,
															_Utils_Tuple2('flex-shrink', '1'),
															attrs);
													} else {
														if (isHorizontal(dir) && _Utils_eq(elem.width, $elm$core$Maybe$Nothing)) {
															return A2(
																$elm$core$List$cons,
																_Utils_Tuple2('flex-shrink', '1'),
																attrs);
														} else {
															if (isVertical(dir) && _Utils_eq(elem.height, $elm$core$Maybe$Nothing)) {
																if (elType.$ === 'Single') {
																	return A2(
																		$elm$core$List$cons,
																		_Utils_Tuple2('flex-shrink', '1'),
																		attrs);
																} else {
																	var elLayout = elType.a;
																	return A2(
																		$elm$core$List$cons,
																		_Utils_Tuple2('flex-shrink', '0'),
																		attrs);
																}
															} else {
																return A2(
																	$elm$core$List$cons,
																	_Utils_Tuple2('flex-shrink', '0'),
																	attrs);
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					} else {
						return attrs;
					}
				}
			}
		};
		var layout = function (attrs) {
			if (elType.$ === 'Single') {
				return elem.inline ? A2(
					$elm$core$List$cons,
					_Utils_Tuple2('display', 'inline'),
					attrs) : A2(
					$elm$core$List$cons,
					_Utils_Tuple2('display', 'block'),
					attrs);
			} else {
				var lay = elType.a;
				return _Utils_ap(
					A2(
						$mdgriffith$style_elements$Style$Internal$Render$Property$layout,
						elem.inline,
						A3($mdgriffith$style_elements$Element$Internal$Render$alignLayout, elem.horizontal, elem.vertical, lay)),
					attrs);
			}
		};
		var height = function (attrs) {
			var _v15 = elem.height;
			if (_v15.$ === 'Nothing') {
				return attrs;
			} else {
				var len = _v15.a;
				if (parent.$ === 'Just') {
					var parentEl = parent.a;
					var hundredPercentOrFill = function (x) {
						switch (x.$) {
							case 'Percent':
								var p = x.a;
								return p === 100;
							case 'Fill':
								return true;
							case 'Calc':
								var perc = x.a;
								return perc === 100;
							default:
								return false;
						}
					};
					var _v17 = A2(
						$elm$core$Maybe$withDefault,
						A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0),
						parentEl.parentSpecifiedSpacing);
					var topPad = _v17.a;
					var bottomPad = _v17.c;
					var paddingAdjustment = (topPad + bottomPad) / 2;
					var _v18 = parentEl.layout;
					if (_v18.$ === 'FlexLayout') {
						switch (_v18.a.$) {
							case 'Down':
								var _v19 = _v18.a;
								return _Utils_ap(
									$mdgriffith$style_elements$Style$Internal$Render$Property$flexHeight(len),
									attrs);
							case 'Up':
								var _v20 = _v18.a;
								return _Utils_ap(
									$mdgriffith$style_elements$Style$Internal$Render$Property$flexHeight(len),
									attrs);
							case 'GoRight':
								var _v21 = _v18.a;
								return hundredPercentOrFill(len) ? A2(
									$elm$core$List$cons,
									_Utils_Tuple2('height', 'auto'),
									attrs) : A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										'height',
										A2($mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength, len, paddingAdjustment)),
									attrs);
							default:
								var _v22 = _v18.a;
								return hundredPercentOrFill(len) ? A2(
									$elm$core$List$cons,
									_Utils_Tuple2('height', 'auto'),
									attrs) : A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										'height',
										A2($mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength, len, paddingAdjustment)),
									attrs);
						}
					} else {
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'height',
								A2($mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength, len, paddingAdjustment)),
							attrs);
					}
				} else {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'height',
							$mdgriffith$style_elements$Style$Internal$Render$Value$length(len)),
						attrs);
				}
			}
		};
		var width = function (attrs) {
			var _v9 = elem.width;
			if (_v9.$ === 'Nothing') {
				return attrs;
			} else {
				var len = _v9.a;
				if (parent.$ === 'Just') {
					var parentEl = parent.a;
					var _v11 = A2(
						$elm$core$Maybe$withDefault,
						A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0),
						parentEl.parentSpecifiedSpacing);
					var rightPad = _v11.b;
					var leftPad = _v11.d;
					var paddingAdjustment = (rightPad + leftPad) / 2;
					var _v12 = parentEl.layout;
					_v12$2:
					while (true) {
						if (_v12.$ === 'FlexLayout') {
							switch (_v12.a.$) {
								case 'GoRight':
									var _v13 = _v12.a;
									return _Utils_ap(
										A2($mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth, len, paddingAdjustment),
										attrs);
								case 'GoLeft':
									var _v14 = _v12.a;
									return _Utils_ap(
										A2($mdgriffith$style_elements$Style$Internal$Render$Property$flexWidth, len, paddingAdjustment),
										attrs);
								default:
									break _v12$2;
							}
						} else {
							break _v12$2;
						}
					}
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'width',
							A2($mdgriffith$style_elements$Style$Internal$Render$Value$parentAdjustedLength, len, paddingAdjustment)),
						attrs);
				} else {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'width',
							$mdgriffith$style_elements$Style$Internal$Render$Value$length(len)),
						attrs);
				}
			}
		};
		if (elem.hidden) {
			return A2(
				$elm$core$List$cons,
				A2($elm$html$Html$Attributes$style, 'display', 'none'),
				attributes);
		} else {
			if (elem.expand) {
				var expandedProps = function () {
					if (parent.$ === 'Nothing') {
						return _List_fromArray(
							[
								_Utils_Tuple2('width', '100%'),
								_Utils_Tuple2('height', '100%'),
								_Utils_Tuple2('margin', '0')
							]);
					} else {
						var parentEl = parent.a;
						var _v2 = parentEl.layout;
						switch (_v2.$) {
							case 'TextLayout':
								var borders = $elm$core$List$concat(
									_List_fromArray(
										[
											_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) ? _List_fromArray(
											[
												_Utils_Tuple2('border-top-right-radius', '0'),
												_Utils_Tuple2('border-top-left-radius', '0')
											]) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) ? _List_fromArray(
											[
												_Utils_Tuple2('border-bottom-right-radius', '0'),
												_Utils_Tuple2('border-bottom-left-radius', '0')
											]) : (_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast) ? _List_fromArray(
											[
												_Utils_Tuple2('border-top-right-radius', '0'),
												_Utils_Tuple2('border-top-left-radius', '0'),
												_Utils_Tuple2('border-bottom-right-radius', '0'),
												_Utils_Tuple2('border-bottom-left-radius', '0')
											]) : _List_Nil))
										]));
								var _v3 = parentEl.parentPadding;
								var top = _v3.a;
								var right = _v3.b;
								var bottom = _v3.c;
								var left = _v3.d;
								return _Utils_ap(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'width',
											'calc(100% + ' + ($elm$core$String$fromFloat(right + left) + 'px')),
											_Utils_Tuple2('margin', '0'),
											_Utils_Tuple2(
											'margin-left',
											$elm$core$String$fromFloat((-1) * left) + 'px'),
											(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
											'margin-top',
											$elm$core$String$fromFloat((-1) * top) + 'px') : _Utils_Tuple2('margin-top', '0'),
											(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
											'margin-bottom',
											$elm$core$String$fromFloat((-1) * bottom) + 'px') : _Utils_Tuple2('margin-bottom', '0'),
											_Utils_Tuple2(
											'padding',
											$mdgriffith$style_elements$Style$Internal$Render$Value$box(
												A2($mdgriffith$style_elements$Element$Internal$Render$defaultPadding, elem.padding, parentEl.parentPadding)))
										]),
									borders);
							case 'FlexLayout':
								var dir = _v2.a;
								var flex = _v2.b;
								var _v4 = function () {
									var _v5 = parentEl.parentSpecifiedSpacing;
									if (_v5.$ === 'Nothing') {
										return A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0);
									} else {
										var p = _v5.a;
										return p;
									}
								}();
								var parentSpaceTop = _v4.a;
								var parentSpaceRight = _v4.b;
								var parentSpaceBottom = _v4.c;
								var parentSpaceLeft = _v4.d;
								var _v6 = parentEl.parentPadding;
								var top = _v6.a;
								var right = _v6.b;
								var bottom = _v6.c;
								var left = _v6.d;
								switch (dir.$) {
									case 'GoRight':
										return width(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'height',
													'calc(100% + ' + ($elm$core$String$fromFloat((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)) + 'px')),
													_Utils_Tuple2('margin', '0'),
													_Utils_Tuple2(
													'margin-top',
													$elm$core$String$fromFloat(((-1) * top) + (parentSpaceTop / 2)) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-left',
													$elm$core$String$fromFloat((-1) * left) + 'px') : _Utils_Tuple2(
													'margin-left',
													$elm$core$String$fromFloat(parentSpaceLeft / 2) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-right',
													$elm$core$String$fromFloat((-1) * right) + 'px') : _Utils_Tuple2(
													'margin-right',
													$elm$core$String$fromFloat(parentSpaceRight / 2) + 'px')
												]));
									case 'GoLeft':
										return width(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'height',
													'calc(100% + ' + ($elm$core$String$fromFloat((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)) + 'px')),
													_Utils_Tuple2('margin', '0'),
													_Utils_Tuple2(
													'margin-top',
													$elm$core$String$fromFloat(((-1) * top) + (parentSpaceTop / 2)) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-right',
													$elm$core$String$fromFloat((-1) * right) + 'px') : _Utils_Tuple2(
													'margin-right',
													$elm$core$String$fromFloat(parentSpaceRight / 2) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-left',
													$elm$core$String$fromFloat((-1) * left) + 'px') : _Utils_Tuple2(
													'margin-left',
													$elm$core$String$fromFloat(parentSpaceLeft / 2) + 'px')
												]));
									case 'Up':
										return height(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'width',
													'calc(100% + ' + ($elm$core$String$fromFloat((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)) + 'px')),
													_Utils_Tuple2('margin', '0'),
													_Utils_Tuple2(
													'margin-left',
													$elm$core$String$fromFloat(((-1) * left) + (parentSpaceLeft / 2)) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-bottom',
													$elm$core$String$fromFloat((-1) * top) + 'px') : _Utils_Tuple2(
													'margin-bottom',
													$elm$core$String$fromFloat(parentSpaceBottom / 2) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-top',
													$elm$core$String$fromFloat((-1) * bottom) + 'px') : _Utils_Tuple2(
													'margin-top',
													$elm$core$String$fromFloat(parentSpaceTop / 2) + 'px')
												]));
									default:
										return height(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'width',
													'calc(100% + ' + ($elm$core$String$fromFloat((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)) + 'px')),
													_Utils_Tuple2('margin', '0'),
													_Utils_Tuple2(
													'margin-left',
													$elm$core$String$fromFloat(((-1) * left) + (parentSpaceLeft / 2)) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$First) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-top',
													$elm$core$String$fromFloat((-1) * top) + 'px') : _Utils_Tuple2(
													'margin-top',
													$elm$core$String$fromFloat(parentSpaceTop / 2) + 'px'),
													(_Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$Last) || _Utils_eq(order, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast)) ? _Utils_Tuple2(
													'margin-bottom',
													$elm$core$String$fromFloat((-1) * bottom) + 'px') : _Utils_Tuple2(
													'margin-bottom',
													$elm$core$String$fromFloat(parentSpaceBottom / 2) + 'px')
												]));
								}
							default:
								return _List_Nil;
						}
					}
				}();
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (_v0) {
							var name = _v0.a;
							var val = _v0.b;
							return A2($elm$html$Html$Attributes$style, name, val);
						},
						_Utils_ap(
							defaults,
							A3(
								$elm$core$Basics$composeL,
								A2(
									$elm$core$Basics$composeL,
									A2(
										$elm$core$Basics$composeL,
										A2(
											$elm$core$Basics$composeL,
											A2(
												$elm$core$Basics$composeL,
												A2(
													$elm$core$Basics$composeL,
													A2(
														$elm$core$Basics$composeL,
														A2($elm$core$Basics$composeL, passthrough, gridPos),
														layout),
													spacing),
												opacity),
											shrink),
										padding),
									position),
								overflow,
								expandedProps))),
					attributes);
			} else {
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (_v8) {
							var name = _v8.a;
							var val = _v8.b;
							return A2($elm$html$Html$Attributes$style, name, val);
						},
						A3(
							$elm$core$Basics$composeL,
							A2(
								$elm$core$Basics$composeL,
								A2(
									$elm$core$Basics$composeL,
									A2(
										$elm$core$Basics$composeL,
										A2(
											$elm$core$Basics$composeL,
											A2(
												$elm$core$Basics$composeL,
												A2(
													$elm$core$Basics$composeL,
													A2(
														$elm$core$Basics$composeL,
														A2(
															$elm$core$Basics$composeL,
															A2(
																$elm$core$Basics$composeL,
																A2(
																	$elm$core$Basics$composeL,
																	A2($elm$core$Basics$composeL, passthrough, gridPos),
																	layout),
																spacing),
															opacity),
														shrink),
													width),
												height),
											padding),
										horizontal),
									vertical),
								position),
							overflow,
							defaults)),
					attributes);
			}
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes = function (styles) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return A2($elm$html$Html$Attributes$style, name, val);
		},
		styles);
};
var $mdgriffith$style_elements$Element$Internal$Render$renderElement = F4(
	function (parent, stylesheet, order, elm) {
		switch (elm.$) {
			case 'Empty':
				return $elm$html$Html$text('');
			case 'Raw':
				var html = elm.a;
				return html;
			case 'Spacer':
				var x = elm.a;
				var _v1 = function () {
					if (parent.$ === 'Just') {
						var ctxt = parent.a;
						return A2(
							$elm$core$Maybe$withDefault,
							A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0),
							ctxt.parentSpecifiedSpacing);
					} else {
						return A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0);
					}
				}();
				var spacingX = _v1.a;
				var spacingY = _v1.b;
				var forSpacing = function (posAttr) {
					if (posAttr.$ === 'Spacing') {
						var spaceX = posAttr.a;
						var spaceY = posAttr.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(spaceX, spaceY));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				};
				var inline = _List_fromArray(
					[
						_Utils_Tuple2(
						'width',
						$elm$core$String$fromFloat(x * spacingX) + 'px'),
						_Utils_Tuple2(
						'height',
						$elm$core$String$fromFloat(x * spacingY) + 'px'),
						_Utils_Tuple2('visibility', 'hidden')
					]);
				return A2(
					$elm$html$Html$div,
					$mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes(inline),
					_List_Nil);
			case 'Text':
				var inline = elm.a.inline;
				var decoration = elm.a.decoration;
				var str = elm.b;
				var attrs = inline ? $mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes(
					_List_fromArray(
						[
							_Utils_Tuple2('display', 'inline')
						])) : $mdgriffith$style_elements$Element$Internal$Render$renderSyleAttributes(
					_List_fromArray(
						[
							_Utils_Tuple2('white-space', 'pre'),
							_Utils_Tuple2('text-overflow', 'ellipsis'),
							_Utils_Tuple2('overflow', 'hidden'),
							_Utils_Tuple2('display', 'block')
						]));
				switch (decoration.$) {
					case 'NoDecoration':
						return A2(
							$elm$html$Html$span,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								attrs),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
					case 'RawText':
						return $elm$html$Html$text(str);
					case 'Bold':
						return A2(
							$elm$html$Html$strong,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								attrs),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
					case 'Italic':
						return A2(
							$elm$html$Html$em,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								attrs),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
					case 'Underline':
						return A2(
							$elm$html$Html$u,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								attrs),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
					case 'Strike':
						return A2(
							$elm$html$Html$s,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								attrs),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
					case 'Super':
						return A2(
							$elm$html$Html$sup,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								attrs),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
					default:
						return A2(
							$elm$html$Html$sub,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								attrs),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
				}
			case 'Element':
				var absolutelyPositioned = elm.a.absolutelyPositioned;
				var child = elm.a.child;
				var attrs = elm.a.attrs;
				var style = elm.a.style;
				var node = elm.a.node;
				var parentTextLayout = function (layout) {
					if (layout.$ === 'TextLayout') {
						return true;
					} else {
						return false;
					}
				};
				var attributes = function () {
					if (parent.$ === 'Nothing') {
						return $mdgriffith$style_elements$Element$Internal$Render$spacingToMargin(attrs);
					} else {
						var ctxt = parent.a;
						var _v7 = ctxt.parentSpecifiedSpacing;
						if (_v7.$ === 'Nothing') {
							return (parentTextLayout(ctxt.layout) || A2(
								$elm$core$List$any,
								$elm$core$Basics$eq($mdgriffith$style_elements$Element$Internal$Model$Inline),
								attrs)) ? $mdgriffith$style_elements$Element$Internal$Render$spacingToMargin(attrs) : attrs;
						} else {
							var _v8 = _v7.a;
							var top = _v8.a;
							var right = _v8.b;
							var bottom = _v8.c;
							var left = _v8.d;
							return (parentTextLayout(ctxt.layout) || A2(
								$elm$core$List$any,
								$elm$core$Basics$eq($mdgriffith$style_elements$Element$Internal$Model$Inline),
								attrs)) ? A2(
								$elm$core$List$cons,
								A4($mdgriffith$style_elements$Element$Internal$Model$Margin, top, right, bottom, left),
								$mdgriffith$style_elements$Element$Internal$Render$spacingToMargin(attrs)) : A2(
								$elm$core$List$cons,
								A4($mdgriffith$style_elements$Element$Internal$Model$Margin, top, right, bottom, left),
								attrs);
						}
					}
				}();
				var htmlAttrs = A6(
					$mdgriffith$style_elements$Element$Internal$Render$renderAttributes,
					$mdgriffith$style_elements$Element$Internal$Render$Single,
					order,
					style,
					parent,
					stylesheet,
					$mdgriffith$style_elements$Element$Internal$Render$gather(attributes));
				var childHtml = function () {
					if (absolutelyPositioned.$ === 'Nothing') {
						return _List_fromArray(
							[
								A4($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast, child)
							]);
					} else {
						var absol = absolutelyPositioned.a;
						return A2(
							$elm$core$List$map,
							A3($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast),
							A2($elm$core$List$cons, child, absol));
					}
				}();
				return A3(
					$elm$html$Html$node,
					node,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$class('el'),
						htmlAttrs),
					childHtml);
			default:
				var absolutelyPositioned = elm.a.absolutelyPositioned;
				var children = elm.a.children;
				var attrs = elm.a.attrs;
				var style = elm.a.style;
				var layout = elm.a.layout;
				var node = elm.a.node;
				var findSpacing = function (posAttr) {
					if (posAttr.$ === 'Spacing') {
						var x = posAttr.a;
						var y = posAttr.b;
						return $elm$core$Maybe$Just(
							A4($mdgriffith$style_elements$Style$Internal$Model$Box, y, x, y, x));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				};
				var forSpacing = A2(
					$elm$core$Basics$composeL,
					function (x) {
						return !_Utils_eq(x, $elm$core$Maybe$Nothing);
					},
					findSpacing);
				var _v10 = A2($elm$core$List$partition, forSpacing, attrs);
				var spacingAttr = _v10.a;
				var forPadding = function (posAttr) {
					switch (posAttr.$) {
						case 'Padding':
							var t = posAttr.a;
							var r = posAttr.b;
							var b = posAttr.c;
							var l = posAttr.d;
							return $elm$core$Maybe$Just(
								A2(
									$mdgriffith$style_elements$Element$Internal$Render$defaultPadding,
									A4($mdgriffith$style_elements$Style$Internal$Model$Box, t, r, b, l),
									A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0)));
						case 'PhantomPadding':
							var t = posAttr.a;
							var r = posAttr.b;
							var b = posAttr.c;
							var l = posAttr.d;
							return $elm$core$Maybe$Just(
								A4($mdgriffith$style_elements$Style$Internal$Model$Box, t, r, b, l));
						default:
							return $elm$core$Maybe$Nothing;
					}
				};
				var attributes = function () {
					if (parent.$ === 'Nothing') {
						return attrs;
					} else {
						var ctxt = parent.a;
						var _v20 = ctxt.parentSpecifiedSpacing;
						if (_v20.$ === 'Nothing') {
							return attrs;
						} else {
							var _v21 = _v20.a;
							var t = _v21.a;
							var r = _v21.b;
							var b = _v21.c;
							var l = _v21.d;
							return A2(
								$elm$core$List$cons,
								A4($mdgriffith$style_elements$Element$Internal$Model$Margin, t, r, b, l),
								attrs);
						}
					}
				}();
				var isFlexbox = function (layoutType) {
					if (layoutType.$ === 'FlexLayout') {
						return true;
					} else {
						return false;
					}
				};
				var adjacentFlexboxCorrection = function (htmlNode) {
					if (parent.$ === 'Nothing') {
						return htmlNode;
					} else {
						var p = parent.a;
						return (isFlexbox(p.layout) && isFlexbox(layout)) ? htmlNode : htmlNode;
					}
				};
				var _v11 = A2(
					$elm$core$List$partition,
					function (attr) {
						return _Utils_eq(
							attr,
							$mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Center)) || _Utils_eq(
							attr,
							$mdgriffith$style_elements$Element$Internal$Model$VAlign($mdgriffith$style_elements$Element$Internal$Model$VerticalCenter));
					},
					attrs);
				var centeredProps = _v11.a;
				var others = _v11.b;
				var clearfix = function (allAttrs) {
					if (layout.$ === 'TextLayout') {
						var fix = layout.a;
						return fix ? A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class('clearfix'),
							allAttrs) : allAttrs;
					} else {
						return allAttrs;
					}
				};
				var htmlAttrs = clearfix(
					A6(
						$mdgriffith$style_elements$Element$Internal$Render$renderAttributes,
						$mdgriffith$style_elements$Element$Internal$Render$LayoutElement(layout),
						order,
						style,
						parent,
						stylesheet,
						$mdgriffith$style_elements$Element$Internal$Render$gather(attributes)));
				var padding = function () {
					var _v15 = $elm$core$List$head(
						A2($elm$core$List$filterMap, forPadding, attributes));
					if (_v15.$ === 'Nothing') {
						return A4($mdgriffith$style_elements$Style$Internal$Model$Box, 0, 0, 0, 0);
					} else {
						var pad = _v15.a;
						return pad;
					}
				}();
				var inherit = {
					layout: layout,
					parentPadding: padding,
					parentSpecifiedSpacing: $elm$core$List$head(
						A2($elm$core$List$filterMap, findSpacing, attrs))
				};
				if (children.$ === 'Normal') {
					var childList = children.a;
					var childHtml = A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, child) {
								return A4(
									$mdgriffith$style_elements$Element$Internal$Render$renderElement,
									$elm$core$Maybe$Just(inherit),
									stylesheet,
									A2($mdgriffith$style_elements$Element$Internal$Render$detectOrder, childList, i),
									child);
							}),
						childList);
					var allChildren = function () {
						if (absolutelyPositioned.$ === 'Nothing') {
							return childHtml;
						} else {
							var absol = absolutelyPositioned.a;
							return _Utils_ap(
								childHtml,
								A2(
									$elm$core$List$map,
									A3($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast),
									absol));
						}
					}();
					return adjacentFlexboxCorrection(
						A3(
							$elm$html$Html$node,
							node,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								htmlAttrs),
							allChildren));
				} else {
					var keyed = children.a;
					var childHtml = A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, _v14) {
								var key = _v14.a;
								var child = _v14.b;
								return _Utils_Tuple2(
									key,
									A4(
										$mdgriffith$style_elements$Element$Internal$Render$renderElement,
										$elm$core$Maybe$Just(inherit),
										stylesheet,
										A2($mdgriffith$style_elements$Element$Internal$Render$detectOrder, keyed, i),
										child));
							}),
						keyed);
					return adjacentFlexboxCorrection(
						A3(
							$elm$html$Html$Keyed$node,
							node,
							A2(
								$elm$core$List$cons,
								$elm$html$Html$Attributes$class('el'),
								htmlAttrs),
							childHtml));
				}
		}
	});
var $mdgriffith$style_elements$Element$Internal$Render$render = F2(
	function (stylesheet, elm) {
		var _v0 = $mdgriffith$style_elements$Element$Internal$Adjustments$apply(elm);
		var adjusted = _v0.a;
		var onScreen = _v0.b;
		var fixedScreenElements = function () {
			if (onScreen.$ === 'Nothing') {
				return _List_Nil;
			} else {
				var screenEls = onScreen.a;
				return A2(
					$elm$core$List$map,
					A3($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast),
					screenEls);
			}
		}();
		return A2(
			$elm$core$List$cons,
			A4($mdgriffith$style_elements$Element$Internal$Render$renderElement, $elm$core$Maybe$Nothing, stylesheet, $mdgriffith$style_elements$Element$Internal$Render$FirstAndLast, adjusted),
			fixedScreenElements);
	});
var $mdgriffith$style_elements$Element$Internal$Render$root = F2(
	function (stylesheet, elm) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('style-elements')
				]),
			_Utils_ap(
				A2($mdgriffith$style_elements$Element$Internal$Render$embed, false, stylesheet),
				A2($mdgriffith$style_elements$Element$Internal$Render$render, stylesheet, elm)));
	});
var $mdgriffith$style_elements$Element$layout = $mdgriffith$style_elements$Element$Internal$Render$root;
var $mdgriffith$style_elements$Style$Internal$Model$Exact = F2(
	function (a, b) {
		return {$: 'Exact', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$Border$all = function (v) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Model$Exact,
		'border-width',
		$mdgriffith$style_elements$Style$Internal$Render$Value$box(
			A4($mdgriffith$style_elements$Style$Internal$Model$Box, v, v, v, v)));
};
var $mdgriffith$style_elements$Style$Internal$Model$Shadows = function (a) {
	return {$: 'Shadows', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$ShadowModel = function (a) {
	return {$: 'ShadowModel', a: a};
};
var $mdgriffith$style_elements$Style$Shadow$boxHelper = function (_v0) {
	var color = _v0.color;
	var blur = _v0.blur;
	var size = _v0.size;
	var offset = _v0.offset;
	return $mdgriffith$style_elements$Style$Internal$Model$ShadowModel(
		{blur: blur, kind: 'box', size: size, color: color, offset: offset});
};
var $mdgriffith$style_elements$Style$Shadow$box = function (shadow) {
	return $mdgriffith$style_elements$Style$Internal$Model$Shadows(
		_List_fromArray(
			[
				$mdgriffith$style_elements$Style$Shadow$boxHelper(shadow)
			]));
};
var $mdgriffith$style_elements$Style$Internal$Model$RGBA = F4(
	function (a, b, c, d) {
		return {$: 'RGBA', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$style_elements$Style$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$style_elements$Style$Internal$Model$RGBA, r, g, b, 1);
	});
var $author$project$Stylesheet$rgb = F3(
	function (a, b, c) {
		return A3($mdgriffith$style_elements$Style$rgb, a / 255, b / 255, c / 255);
	});
var $mdgriffith$style_elements$Style$Internal$Model$FontName = function (a) {
	return {$: 'FontName', a: a};
};
var $mdgriffith$style_elements$Style$Font$font = $mdgriffith$style_elements$Style$Internal$Model$FontName;
var $author$project$Stylesheet$grey = A3($author$project$Stylesheet$rgb, 211, 215, 207);
var $mdgriffith$style_elements$Style$rgba = $mdgriffith$style_elements$Style$Internal$Model$RGBA;
var $mdgriffith$style_elements$Style$Internal$Model$Font = F2(
	function (a, b) {
		return {$: 'Font', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$Font$size = function (i) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Model$Font,
		'font-size',
		$elm$core$String$fromFloat(i) + 'px');
};
var $mdgriffith$style_elements$Style$Internal$Model$TextColor = function (a) {
	return {$: 'TextColor', a: a};
};
var $mdgriffith$style_elements$Style$Color$text = $mdgriffith$style_elements$Style$Internal$Model$TextColor;
var $author$project$Stylesheet$Popup = {$: 'Popup'};
var $author$project$Stylesheet$Title = {$: 'Title'};
var $mdgriffith$style_elements$Style$Internal$Model$PseudoElement = F2(
	function (a, b) {
		return {$: 'PseudoElement', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$hover = function (props) {
	return A2($mdgriffith$style_elements$Style$Internal$Model$PseudoElement, ':hover', props);
};
var $mdgriffith$style_elements$Style$Internal$Batchable$One = function (a) {
	return {$: 'One', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Batchable$one = $mdgriffith$style_elements$Style$Internal$Batchable$One;
var $mdgriffith$style_elements$Style$prop = F2(
	function (name, val) {
		return A2($mdgriffith$style_elements$Style$Internal$Model$Exact, name, val);
	});
var $mdgriffith$style_elements$Style$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$style = F2(
	function (cls, props) {
		return $mdgriffith$style_elements$Style$Internal$Batchable$one(
			A2(
				$mdgriffith$style_elements$Style$Internal$Model$Style,
				cls,
				A2(
					$elm$core$List$cons,
					A2($mdgriffith$style_elements$Style$prop, 'border-style', 'solid'),
					props)));
	});
var $author$project$Stylesheet$white = A3($author$project$Stylesheet$rgb, 255, 255, 255);
var $author$project$Stylesheet$Button = {$: 'Button'};
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$style_elements$Style$Internal$Render$Value$color = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return ('rgba(' + $elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')'))));
};
var $mdgriffith$style_elements$Style$Color$border = function (clr) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Model$Exact,
		'border-color',
		$mdgriffith$style_elements$Style$Internal$Render$Value$color(clr));
};
var $mdgriffith$style_elements$Style$pseudo = F2(
	function (psu, props) {
		return A2($mdgriffith$style_elements$Style$Internal$Model$PseudoElement, ':' + psu, props);
	});
var $mdgriffith$style_elements$Style$Font$weight = function (fontWeight) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Model$Font,
		'font-weight',
		$elm$core$String$fromInt(fontWeight));
};
var $author$project$Stylesheet$General = {$: 'General'};
var $author$project$Stylesheet$Overlay = {$: 'Overlay'};
var $mdgriffith$style_elements$Style$Border$rounded = function (box) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Model$Exact,
		'border-radius',
		$elm$core$String$fromFloat(box) + 'px');
};
var $author$project$Stylesheet$darkGrey = A3($author$project$Stylesheet$rgb, 186, 189, 182);
var $mdgriffith$style_elements$Style$Internal$Model$FontFamily = function (a) {
	return {$: 'FontFamily', a: a};
};
var $mdgriffith$style_elements$Style$Font$typeface = function (families) {
	return $mdgriffith$style_elements$Style$Internal$Model$FontFamily(families);
};
var $author$project$Stylesheet$VoteEmoji = {$: 'VoteEmoji'};
var $author$project$Stylesheet$BlueButton = {$: 'BlueButton'};
var $mdgriffith$style_elements$Style$Color$background = function (clr) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Model$Exact,
		'background-color',
		$mdgriffith$style_elements$Style$Internal$Render$Value$color(clr));
};
var $mdgriffith$style_elements$Style$Unguarded = {$: 'Unguarded'};
var $mdgriffith$style_elements$Style$Internal$Batchable$toList = function (batchables) {
	var flatten = function (batchToFlatten) {
		switch (batchToFlatten.$) {
			case 'One':
				var thing = batchToFlatten.a;
				return _List_fromArray(
					[thing]);
			case 'Many':
				var things = batchToFlatten.a;
				return things;
			default:
				var embedded = batchToFlatten.a;
				return $mdgriffith$style_elements$Style$Internal$Batchable$toList(embedded);
		}
	};
	return A2($elm$core$List$concatMap, flatten, batchables);
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $mdgriffith$style_elements$Style$Internal$Render$Css$prop = F2(
	function (i, _v0) {
		var name = _v0.a;
		var value = _v0.b;
		return A2($elm$core$String$repeat, i, ' ') + (name + (': ' + (value + ';')));
	});
var $mdgriffith$style_elements$Style$Internal$Render$Css$brace = F2(
	function (i, str) {
		return ' {\u000A' + (str + ('\u000A' + (A2($elm$core$String$repeat, i, ' ') + '}')));
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$render = function (renderable) {
	switch (renderable.$) {
		case 'RenderableClass':
			var selector = renderable.a;
			var styleProps = renderable.b;
			return selector + (A2(
				$mdgriffith$style_elements$Style$Internal$Render$Css$brace,
				0,
				A2(
					$elm$core$String$join,
					'\u000A',
					A2(
						$elm$core$List$map,
						$mdgriffith$style_elements$Style$Internal$Render$Css$prop(2),
						styleProps))) + '\u000A');
		case 'RenderableMedia':
			var query = renderable.a;
			var selector = renderable.b;
			var styleProps = renderable.c;
			return _Utils_ap(
				query,
				A2(
					$mdgriffith$style_elements$Style$Internal$Render$Css$brace,
					0,
					'  ' + (selector + A2(
						$mdgriffith$style_elements$Style$Internal$Render$Css$brace,
						2,
						A2(
							$elm$core$String$join,
							'\u000A',
							A2(
								$elm$core$List$map,
								$mdgriffith$style_elements$Style$Internal$Render$Css$prop(4),
								styleProps))))));
		default:
			var str = renderable.a;
			return str;
	}
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$Rendered = function (a) {
	return {$: 'Rendered', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Selector$getFindable = function (find) {
	getFindable:
	while (true) {
		switch (find.$) {
			case 'Select':
				var findable = find.b;
				return _List_fromArray(
					[findable]);
			case 'SelectChild':
				var selector = find.a;
				var $temp$find = selector;
				find = $temp$find;
				continue getFindable;
			case 'Stack':
				var selectors = find.a;
				return A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						function (x) {
							return _List_fromArray(
								[x]);
						},
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$concatMap, $mdgriffith$style_elements$Style$Internal$Selector$getFindable, selectors)))));
			default:
				return _List_Nil;
		}
	}
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$asFindable = function (intermediate) {
	var findableProp = function (prop) {
		switch (prop.$) {
			case 'SubClass':
				var cls = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$asFindable(cls);
			case 'PropsAndSub':
				var cls = prop.b;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$asFindable(cls);
			default:
				return _List_Nil;
		}
	};
	if (intermediate.$ === 'Class') {
		var classRule = intermediate.a;
		return _Utils_ap(
			$mdgriffith$style_elements$Style$Internal$Selector$getFindable(classRule.selector),
			A2($elm$core$List$concatMap, findableProp, classRule.props));
	} else {
		return _List_Nil;
	}
};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$style_elements$Style$Internal$Selector$render = F2(
	function (maybeGuard, selector) {
		var applyGuard = function (str) {
			if (maybeGuard.$ === 'Nothing') {
				return str;
			} else {
				var g = maybeGuard.a;
				return str + ('--' + g);
			}
		};
		var spacer = function (sel) {
			if (sel.$ === 'Pseudo') {
				return '';
			} else {
				return ' ';
			}
		};
		var renderAndSpace = F2(
			function (i, sel) {
				return (!i) ? A2($mdgriffith$style_elements$Style$Internal$Selector$render, maybeGuard, sel) : _Utils_ap(
					spacer(sel),
					A2($mdgriffith$style_elements$Style$Internal$Selector$render, maybeGuard, sel));
			});
		switch (selector.$) {
			case 'Select':
				var single = selector.a;
				return '.style-elements .' + applyGuard(single);
			case 'SelectChild':
				var selectChild = selector.a;
				return '> ' + A2($mdgriffith$style_elements$Style$Internal$Selector$render, maybeGuard, selectChild);
			case 'Free':
				var single = selector.a;
				return single;
			case 'Pseudo':
				var psu = selector.a;
				return psu;
			default:
				var sels = selector.a;
				return $elm$core$String$concat(
					A2($elm$core$List$indexedMap, renderAndSpace, sels));
		}
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableFree = function (a) {
	return {$: 'RenderableFree', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableClass = F2(
	function (a, b) {
		return {$: 'RenderableClass', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$RenderableMedia = F3(
	function (a, b, c) {
		return {$: 'RenderableMedia', a: a, b: b, c: c};
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable = function (cls) {
	var renderableProps = F2(
		function (prop, _v4) {
			var rendered = _v4.a;
			var subEls = _v4.b;
			switch (prop.$) {
				case 'Props':
					var ps = prop.a;
					return _Utils_Tuple2(
						_Utils_ap(rendered, ps),
						subEls);
				case 'SubClass':
					var embedded = prop.a;
					return _Utils_Tuple2(
						rendered,
						_Utils_ap(
							subEls,
							$mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable(embedded)));
				case 'PropsAndSub':
					var ps = prop.a;
					var embedded = prop.b;
					return _Utils_Tuple2(
						_Utils_ap(rendered, ps),
						_Utils_ap(
							subEls,
							$mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable(embedded)));
				default:
					return _Utils_Tuple2(rendered, subEls);
			}
		});
	switch (cls.$) {
		case 'Class':
			var classRule = cls.a;
			var _v1 = A3(
				$elm$core$List$foldl,
				renderableProps,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				classRule.props);
			var rendered = _v1.a;
			var subelements = _v1.b;
			return A2(
				$elm$core$List$cons,
				A2(
					$mdgriffith$style_elements$Style$Internal$Intermediate$RenderableClass,
					A2($mdgriffith$style_elements$Style$Internal$Selector$render, $elm$core$Maybe$Nothing, classRule.selector),
					rendered),
				subelements);
		case 'Media':
			var mediaRule = cls.a;
			var _v2 = A3(
				$elm$core$List$foldl,
				renderableProps,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				mediaRule.props);
			var rendered = _v2.a;
			var subelements = _v2.b;
			return A2(
				$elm$core$List$cons,
				A3(
					$mdgriffith$style_elements$Style$Internal$Intermediate$RenderableMedia,
					mediaRule.query,
					A2($mdgriffith$style_elements$Style$Internal$Selector$render, $elm$core$Maybe$Nothing, mediaRule.selector),
					rendered),
				subelements);
		default:
			var str = cls.a;
			return _List_fromArray(
				[
					$mdgriffith$style_elements$Style$Internal$Intermediate$RenderableFree(str)
				]);
	}
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$finalize = function (intermediates) {
	var finalizeCss = function (cls) {
		return A2(
			$elm$core$String$join,
			'\u000A',
			A2(
				$elm$core$List$map,
				$mdgriffith$style_elements$Style$Internal$Intermediate$render,
				$mdgriffith$style_elements$Style$Internal$Intermediate$makeRenderable(cls)));
	};
	return $mdgriffith$style_elements$Style$Internal$Intermediate$Rendered(
		{
			css: A2(
				$elm$core$String$join,
				'\u000A',
				A2($elm$core$List$map, finalizeCss, intermediates)),
			findable: A2($elm$core$List$concatMap, $mdgriffith$style_elements$Style$Internal$Intermediate$asFindable, intermediates)
		});
};
var $mdgriffith$style_elements$Style$Internal$Model$Scale = F3(
	function (a, b, c) {
		return {$: 'Scale', a: a, b: b, c: c};
	});
var $mdgriffith$style_elements$Style$Internal$Model$Rotate = function (a) {
	return {$: 'Rotate', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Filters = function (a) {
	return {$: 'Filters', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Translate = F3(
	function (a, b, c) {
		return {$: 'Translate', a: a, b: b, c: c};
	});
var $mdgriffith$style_elements$Style$Internal$Model$RotateAround = F4(
	function (a, b, c, d) {
		return {$: 'RotateAround', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$style_elements$Style$Internal$Render$preprocess = function (style) {
	if (style.$ === 'Style') {
		var className = style.a;
		var styleProps = style.b;
		var mergeShadowsAndFilters = function (shadowsAndFilters) {
			var combine = function (combineable) {
				return A2(
					$elm$core$List$cons,
					$mdgriffith$style_elements$Style$Internal$Model$Filters(combineable.filters),
					A2(
						$elm$core$List$cons,
						$mdgriffith$style_elements$Style$Internal$Model$Shadows(combineable.shadows),
						combineable.others));
			};
			var gather = F2(
				function (prop, existing) {
					switch (prop.$) {
						case 'Filters':
							var fs = prop.a;
							return _Utils_update(
								existing,
								{
									filters: _Utils_ap(fs, existing.filters)
								});
						case 'Shadows':
							var ss = prop.a;
							return _Utils_update(
								existing,
								{
									shadows: _Utils_ap(ss, existing.shadows)
								});
						default:
							return _Utils_update(
								existing,
								{
									others: A2($elm$core$List$cons, prop, existing.others)
								});
					}
				});
			return combine(
				A3(
					$elm$core$List$foldr,
					gather,
					{others: _List_Nil, filters: _List_Nil, shadows: _List_Nil},
					shadowsAndFilters));
		};
		var overridePrevious = F2(
			function (overridable, overrideProps) {
				var eliminatePrevious = F2(
					function (prop, _v10) {
						var existing = _v10.a;
						var overridden = _v10.b;
						return (overridable(prop) && overridden) ? _Utils_Tuple2(existing, overridden) : ((overridable(prop) && (!overridden)) ? _Utils_Tuple2(
							A2($elm$core$List$cons, prop, existing),
							true) : _Utils_Tuple2(
							A2($elm$core$List$cons, prop, existing),
							overridden));
					});
				return A3(
					$elm$core$List$foldr,
					eliminatePrevious,
					_Utils_Tuple2(_List_Nil, false),
					overrideProps).a;
			});
		var mergeTransforms = function (mergeableProps) {
			var applyTransforms = function (_v9) {
				var translate = _v9.a.translate;
				var scale = _v9.a.scale;
				var rotate = _v9.a.rotate;
				var gathered = _v9.b;
				var transformations = A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[translate, rotate, scale]));
				return $elm$core$List$isEmpty(transformations) ? gathered : A2(
					$elm$core$List$cons,
					$mdgriffith$style_elements$Style$Internal$Model$Transform(transformations),
					gathered);
			};
			var setIfNothing = F2(
				function (x, maybeX) {
					if (maybeX.$ === 'Nothing') {
						return $elm$core$Maybe$Just(x);
					} else {
						var a = maybeX;
						return a;
					}
				});
			var gatherTransformStack = F2(
				function (transformation, gathered) {
					switch (transformation.$) {
						case 'Translate':
							var x = transformation.a;
							var y = transformation.b;
							var z = transformation.c;
							return _Utils_update(
								gathered,
								{
									translate: A2(
										setIfNothing,
										A3($mdgriffith$style_elements$Style$Internal$Model$Translate, x, y, z),
										gathered.translate)
								});
						case 'Rotate':
							var a = transformation.a;
							return _Utils_update(
								gathered,
								{
									rotate: A2(
										setIfNothing,
										$mdgriffith$style_elements$Style$Internal$Model$Rotate(a),
										gathered.rotate)
								});
						case 'RotateAround':
							var x = transformation.a;
							var y = transformation.b;
							var z = transformation.c;
							var angle = transformation.d;
							return _Utils_update(
								gathered,
								{
									rotate: A2(
										setIfNothing,
										A4($mdgriffith$style_elements$Style$Internal$Model$RotateAround, x, y, z, angle),
										gathered.rotate)
								});
						default:
							var x = transformation.a;
							var y = transformation.b;
							var z = transformation.c;
							return _Utils_update(
								gathered,
								{
									scale: A2(
										setIfNothing,
										A3($mdgriffith$style_elements$Style$Internal$Model$Scale, x, y, z),
										gathered.scale)
								});
					}
				});
			var gatherTransforms = F2(
				function (prop, _v6) {
					var transforms = _v6.a;
					var gatheredProps = _v6.b;
					if (prop.$ === 'Transform') {
						var stack = prop.a;
						return _Utils_Tuple2(
							A3($elm$core$List$foldr, gatherTransformStack, transforms, stack),
							gatheredProps);
					} else {
						return _Utils_Tuple2(
							transforms,
							A2($elm$core$List$cons, prop, gatheredProps));
					}
				});
			return applyTransforms(
				A3(
					$elm$core$List$foldr,
					gatherTransforms,
					_Utils_Tuple2(
						{scale: $elm$core$Maybe$Nothing, rotate: $elm$core$Maybe$Nothing, translate: $elm$core$Maybe$Nothing},
						_List_Nil),
					mergeableProps));
		};
		var prioritize = F2(
			function (isPriority, priorityProps) {
				var _v4 = A2($elm$core$List$partition, isPriority, priorityProps);
				var high = _v4.a;
				var low = _v4.b;
				return _Utils_ap(low, high);
			});
		var dropShadow = function (_v3) {
			var shade = _v3.a;
			return shade.kind === 'drop';
		};
		var visible = function (prop) {
			if (prop.$ === 'Visibility') {
				return true;
			} else {
				return false;
			}
		};
		var shadows = function (prop) {
			if (prop.$ === 'Shadows') {
				return true;
			} else {
				return false;
			}
		};
		var processed = mergeTransforms(
			mergeShadowsAndFilters(
				A2(
					overridePrevious,
					shadows,
					A2(
						prioritize,
						shadows,
						A2(
							overridePrevious,
							visible,
							A2(prioritize, visible, styleProps))))));
		return A2($mdgriffith$style_elements$Style$Internal$Model$Style, className, processed);
	} else {
		return style;
	}
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$Free = function (a) {
	return {$: 'Free', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$Class = function (a) {
	return {$: 'Class', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Render$class = F2(
	function (name, props) {
		var renderedProps = A2(
			$elm$core$String$join,
			'\u000A',
			A2(
				$elm$core$List$map,
				$mdgriffith$style_elements$Style$Internal$Render$Css$prop(2),
				props));
		return '.' + (name + A2($mdgriffith$style_elements$Style$Internal$Render$Css$brace, 0, renderedProps));
	});
var $elm$core$String$foldl = _String_foldl;
var $Skinney$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {hash: hash, seed: seed, shift: shift, charsProcessed: charsProcessed};
	});
var $Skinney$murmur3$Murmur3$c1 = 3432918353;
var $Skinney$murmur3$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $Skinney$murmur3$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $Skinney$murmur3$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = (!(!data.hash)) ? (data.seed ^ A2(
		$Skinney$murmur3$Murmur3$multiplyBy,
		$Skinney$murmur3$Murmur3$c2,
		A2(
			$Skinney$murmur3$Murmur3$rotlBy,
			15,
			A2($Skinney$murmur3$Murmur3$multiplyBy, $Skinney$murmur3$Murmur3$c1, data.hash)))) : data.seed;
	var h0 = acc ^ data.charsProcessed;
	var h1 = A2($Skinney$murmur3$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($Skinney$murmur3$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $Skinney$murmur3$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$Skinney$murmur3$Murmur3$multiplyBy,
			5,
			A2(
				$Skinney$murmur3$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$Skinney$murmur3$Murmur3$multiplyBy,
					$Skinney$murmur3$Murmur3$c2,
					A2(
						$Skinney$murmur3$Murmur3$rotlBy,
						15,
						A2($Skinney$murmur3$Murmur3$multiplyBy, $Skinney$murmur3$Murmur3$c1, k1))))) + 3864292196;
	});
var $Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.hash | ((255 & $elm$core$Char$toCode(c)) << data.shift);
		var _v0 = data.shift;
		if (_v0 === 24) {
			return {
				hash: 0,
				seed: A2($Skinney$murmur3$Murmur3$mix, data.seed, res),
				shift: 0,
				charsProcessed: data.charsProcessed + 1
			};
		} else {
			return {hash: res, seed: data.seed, shift: data.shift + 8, charsProcessed: data.charsProcessed + 1};
		}
	});
var $Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return $Skinney$murmur3$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$Skinney$murmur3$Murmur3$hashFold,
				A4($Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$hash = function (value) {
	return $elm$core$String$fromInt(
		A2($Skinney$murmur3$Murmur3$hashString, 8675309, value));
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$Media = function (a) {
	return {$: 'Media', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Selector$Stack = function (a) {
	return {$: 'Stack', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Find$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$Internal$Selector$Select = F2(
	function (a, b) {
		return {$: 'Select', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$Internal$Find$Variation = F3(
	function (a, b, c) {
		return {$: 'Variation', a: a, b: b, c: c};
	});
var $mdgriffith$style_elements$Style$Internal$Selector$SelectChild = function (a) {
	return {$: 'SelectChild', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Selector$guard = F2(
	function (guardingString, selector) {
		var addGuard = function (str) {
			return str + ('g' + guardingString);
		};
		var onFindable = function (findable) {
			if (findable.$ === 'Style') {
				var _class = findable.a;
				var name = findable.b;
				return A2(
					$mdgriffith$style_elements$Style$Internal$Find$Style,
					_class,
					addGuard(name));
			} else {
				var _class = findable.a;
				var variation = findable.b;
				var name = findable.c;
				return A3(
					$mdgriffith$style_elements$Style$Internal$Find$Variation,
					_class,
					variation,
					addGuard(name));
			}
		};
		var onSelector = function (sel) {
			switch (sel.$) {
				case 'Select':
					var rendered = sel.a;
					var findable = sel.b;
					return A2(
						$mdgriffith$style_elements$Style$Internal$Selector$Select,
						addGuard(rendered),
						onFindable(findable));
				case 'SelectChild':
					var selectChild = sel.a;
					return $mdgriffith$style_elements$Style$Internal$Selector$SelectChild(
						onSelector(selectChild));
				case 'Stack':
					var selectors = sel.a;
					return $mdgriffith$style_elements$Style$Internal$Selector$Stack(
						A2($elm$core$List$map, onSelector, selectors));
				default:
					var x = sel;
					return x;
			}
		};
		return onSelector(selector);
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass = function (a) {
	return {$: 'SubClass', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard = F2(
	function (guardString, _class) {
		var guardProp = function (prop) {
			if (prop.$ === 'SubClass') {
				var sc = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass(
					A2($mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard, guardString, sc));
			} else {
				var x = prop;
				return x;
			}
		};
		switch (_class.$) {
			case 'Class':
				var cls = _class.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$Class(
					{
						props: A2($elm$core$List$map, guardProp, cls.props),
						selector: A2($mdgriffith$style_elements$Style$Internal$Selector$guard, guardString, cls.selector)
					});
			case 'Media':
				var media = _class.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$Media(
					{
						props: A2($elm$core$List$map, guardProp, media.props),
						query: media.query,
						selector: A2($mdgriffith$style_elements$Style$Internal$Selector$guard, guardString, media.selector)
					});
			default:
				var x = _class;
				return x;
		}
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard = function (_class) {
	var propToString = function (_v2) {
		var x = _v2.a;
		var y = _v2.b;
		return _Utils_ap(x, y);
	};
	var asString = function (prop) {
		switch (prop.$) {
			case 'Props':
				var ps = prop.a;
				return $elm$core$String$concat(
					A2($elm$core$List$map, propToString, ps));
			case 'SubClass':
				var embedded = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard(embedded);
			case 'PropsAndSub':
				var ps = prop.a;
				var embedded = prop.b;
				return _Utils_ap(
					$elm$core$String$concat(
						A2($elm$core$List$map, propToString, ps)),
					$mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard(embedded));
			default:
				return '';
		}
	};
	switch (_class.$) {
		case 'Class':
			var classRule = _class.a;
			return $elm$core$String$concat(
				A2($elm$core$List$map, asString, classRule.props));
		case 'Media':
			var mediaRule = _class.a;
			return $elm$core$String$concat(
				A2($elm$core$List$map, asString, mediaRule.props));
		default:
			return '';
	}
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$guard = function (_class) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Intermediate$applyGuard,
		$mdgriffith$style_elements$Style$Internal$Intermediate$hash(
			$mdgriffith$style_elements$Style$Internal$Intermediate$calculateGuard(_class)),
		_class);
};
var $mdgriffith$style_elements$Style$Internal$Selector$select = function (_class) {
	return A2(
		$mdgriffith$style_elements$Style$Internal$Selector$Select,
		'',
		A2($mdgriffith$style_elements$Style$Internal$Find$Style, _class, ''));
};
var $mdgriffith$style_elements$Style$Internal$Selector$child = F2(
	function (parent, selector) {
		return $mdgriffith$style_elements$Style$Internal$Selector$Stack(
			_List_fromArray(
				[
					parent,
					$mdgriffith$style_elements$Style$Internal$Selector$SelectChild(selector)
				]));
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$Props = function (a) {
	return {$: 'Props', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$props = $mdgriffith$style_elements$Style$Internal$Intermediate$Props;
var $mdgriffith$style_elements$Style$Internal$Selector$Free = function (a) {
	return {$: 'Free', a: a};
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $mdgriffith$style_elements$Style$Internal$Selector$Pseudo = function (a) {
	return {$: 'Pseudo', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Selector$pseudo = F2(
	function (psu, sel) {
		switch (sel.$) {
			case 'Pseudo':
				var existing = sel.a;
				return $mdgriffith$style_elements$Style$Internal$Selector$Pseudo(
					_Utils_ap(existing, psu));
			case 'Select':
				var single = sel.a;
				var findable = sel.b;
				return $mdgriffith$style_elements$Style$Internal$Selector$Stack(
					_List_fromArray(
						[
							A2($mdgriffith$style_elements$Style$Internal$Selector$Select, single, findable),
							$mdgriffith$style_elements$Style$Internal$Selector$Pseudo(psu)
						]));
			case 'SelectChild':
				var selectChild = sel.a;
				return $mdgriffith$style_elements$Style$Internal$Selector$SelectChild(
					A2($mdgriffith$style_elements$Style$Internal$Selector$pseudo, psu, selectChild));
			case 'Free':
				var single = sel.a;
				return $mdgriffith$style_elements$Style$Internal$Selector$Free(single);
			default:
				var sels = sel.a;
				var lastElem = $elm$core$List$head(
					$elm$core$List$reverse(sels));
				var init = $elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						$elm$core$List$reverse(sels)));
				if (lastElem.$ === 'Nothing') {
					return $mdgriffith$style_elements$Style$Internal$Selector$Stack(sels);
				} else {
					var last = lastElem.a;
					return $mdgriffith$style_elements$Style$Internal$Selector$Stack(
						_Utils_ap(
							init,
							_List_fromArray(
								[
									A2($mdgriffith$style_elements$Style$Internal$Selector$pseudo, psu, last)
								])));
				}
		}
	});
var $mdgriffith$style_elements$Style$Internal$Render$Value$shadow = function (_v0) {
	var shadowModel = _v0.a;
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					(shadowModel.kind === 'inset') ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadowModel.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadowModel.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadowModel.blur) + 'px'),
					((shadowModel.kind === 'text') || (shadowModel.kind === 'drop')) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadowModel.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$style_elements$Style$Internal$Render$Value$color(shadowModel.color))
				])));
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$shadow = function (shadows) {
	var _v0 = A2(
		$elm$core$List$partition,
		function (_v1) {
			var s = _v1.a;
			return s.kind === 'text';
		},
		shadows);
	var text = _v0.a;
	var boxShadow = _v0.b;
	var renderedBox = A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $mdgriffith$style_elements$Style$Internal$Render$Value$shadow, boxShadow));
	var renderedText = A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $mdgriffith$style_elements$Style$Internal$Render$Value$shadow, text));
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		_List_fromArray(
			[
				(renderedBox === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				_Utils_Tuple2('box-shadow', renderedBox)),
				(renderedText === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				_Utils_Tuple2('text-shadow', renderedText))
			]));
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$filters = function (myFilters) {
	var filterName = function (filtr) {
		switch (filtr.$) {
			case 'FilterUrl':
				var url = filtr.a;
				return 'url(' + (url + ')');
			case 'Blur':
				var x = filtr.a;
				return 'blur(' + ($elm$core$String$fromFloat(x) + 'px)');
			case 'Brightness':
				var x = filtr.a;
				return 'brightness(' + ($elm$core$String$fromFloat(x) + '%)');
			case 'Contrast':
				var x = filtr.a;
				return 'contrast(' + ($elm$core$String$fromFloat(x) + '%)');
			case 'Grayscale':
				var x = filtr.a;
				return 'grayscale(' + ($elm$core$String$fromFloat(x) + '%)');
			case 'HueRotate':
				var x = filtr.a;
				return 'hueRotate(' + ($elm$core$String$fromFloat(x) + 'deg)');
			case 'Invert':
				var x = filtr.a;
				return 'invert(' + ($elm$core$String$fromFloat(x) + '%)');
			case 'OpacityFilter':
				var x = filtr.a;
				return 'opacity(' + ($elm$core$String$fromFloat(x) + '%)');
			case 'Saturate':
				var x = filtr.a;
				return 'saturate(' + ($elm$core$String$fromFloat(x) + '%)');
			case 'Sepia':
				var x = filtr.a;
				return 'sepia(' + ($elm$core$String$fromFloat(x) + '%)');
			default:
				var dropShadow = filtr.a;
				var shadowModel = $mdgriffith$style_elements$Style$Internal$Model$ShadowModel(
					{blur: dropShadow.blur, kind: 'drop', size: dropShadow.size, color: dropShadow.color, offset: dropShadow.offset});
				return 'drop-shadow(' + ($mdgriffith$style_elements$Style$Internal$Render$Value$shadow(shadowModel) + ')');
		}
	};
	return (!$elm$core$List$length(myFilters)) ? _List_Nil : _List_fromArray(
		[
			_Utils_Tuple2(
			'filter',
			A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, filterName, myFilters)))
		]);
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$never = _Regex_never;
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $elm$core$String$toLower = _String_toLower;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{multiline: false, caseInsensitive: false},
		string);
};
var $elm$core$String$length = _String_length;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $mdgriffith$style_elements$Style$Internal$Selector$uncapitalize = function (str) {
	var tail = A2($elm$core$String$dropLeft, 1, str);
	var head = $elm$core$String$toLower(
		A2($elm$core$String$left, 1, str));
	return _Utils_ap(head, tail);
};
var $mdgriffith$style_elements$Style$Internal$Selector$formatName = function (x) {
	return A3(
		$elm$regex$Regex$replace,
		A2(
			$elm$core$Maybe$withDefault,
			$elm$regex$Regex$never,
			$elm$regex$Regex$fromString('[\u005Cs+]')),
		function (_v2) {
			return '-';
		},
		A3(
			$elm$regex$Regex$replace,
			A2(
				$elm$core$Maybe$withDefault,
				$elm$regex$Regex$never,
				$elm$regex$Regex$fromString('[A-Z0-9]+')),
			function (_v1) {
				var match = _v1.match;
				return ' ' + $elm$core$String$toLower(match);
			},
			A3(
				$elm$regex$Regex$replace,
				A2(
					$elm$core$Maybe$withDefault,
					$elm$regex$Regex$never,
					$elm$regex$Regex$fromString('[^a-zA-Z0-9_-]')),
				function (_v0) {
					return '';
				},
				$mdgriffith$style_elements$Style$Internal$Selector$uncapitalize(x))));
};
var $mdgriffith$style_elements$Style$Internal$Find$toVariation = F3(
	function (_var, newName, element) {
		if (element.$ === 'Style') {
			var _class = element.a;
			var name = element.b;
			return A3($mdgriffith$style_elements$Style$Internal$Find$Variation, _class, _var, newName);
		} else {
			var _class = element.a;
			var name = element.c;
			return A3($mdgriffith$style_elements$Style$Internal$Find$Variation, _class, _var, newName);
		}
	});
var $mdgriffith$style_elements$Style$Internal$Selector$variant = F3(
	function (sel, _var, name) {
		switch (sel.$) {
			case 'Pseudo':
				var psu = sel.a;
				return $mdgriffith$style_elements$Style$Internal$Selector$Pseudo(psu);
			case 'Select':
				var single = sel.a;
				var findable = sel.b;
				return A2(
					$mdgriffith$style_elements$Style$Internal$Selector$Select,
					single + ('-' + $mdgriffith$style_elements$Style$Internal$Selector$formatName(name)),
					A3(
						$mdgriffith$style_elements$Style$Internal$Find$toVariation,
						_var,
						single + ('-' + $mdgriffith$style_elements$Style$Internal$Selector$formatName(name)),
						findable));
			case 'SelectChild':
				var selectChild = sel.a;
				return $mdgriffith$style_elements$Style$Internal$Selector$SelectChild(
					A3($mdgriffith$style_elements$Style$Internal$Selector$variant, selectChild, _var, name));
			case 'Free':
				var single = sel.a;
				return $mdgriffith$style_elements$Style$Internal$Selector$Free(single);
			default:
				var sels = sel.a;
				var lastElem = $elm$core$List$head(
					$elm$core$List$reverse(sels));
				var init = $elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						$elm$core$List$reverse(sels)));
				if (lastElem.$ === 'Nothing') {
					return $mdgriffith$style_elements$Style$Internal$Selector$Stack(sels);
				} else {
					var last = lastElem.a;
					return $mdgriffith$style_elements$Style$Internal$Selector$Stack(
						_Utils_ap(
							init,
							_List_fromArray(
								[
									A3($mdgriffith$style_elements$Style$Internal$Selector$variant, last, _var, name)
								])));
				}
		}
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$getProps = function (prop) {
	_v0$4:
	while (true) {
		switch (prop.$) {
			case 'Props':
				var rendered = prop.a;
				return rendered;
			case 'SubClass':
				if (prop.a.$ === 'Class') {
					var myClass = prop.a.a;
					return A2($elm$core$List$concatMap, $mdgriffith$style_elements$Style$Internal$Intermediate$getProps, myClass.props);
				} else {
					break _v0$4;
				}
			case 'PropsAndSub':
				if (prop.b.$ === 'Class') {
					var rendered = prop.a;
					var myClass = prop.b.a;
					return _Utils_ap(
						rendered,
						A2($elm$core$List$concatMap, $mdgriffith$style_elements$Style$Internal$Intermediate$getProps, myClass.props));
				} else {
					break _v0$4;
				}
			default:
				return _List_Nil;
		}
	}
	return _List_Nil;
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$position = function (posEls) {
	var renderPos = function (pos) {
		switch (pos.$) {
			case 'RelativeTo':
				switch (pos.a.$) {
					case 'Screen':
						var _v1 = pos.a;
						return _Utils_Tuple2('position', 'fixed');
					case 'Parent':
						var _v2 = pos.a;
						return _Utils_Tuple2('position', 'absolute');
					default:
						var _v3 = pos.a;
						return _Utils_Tuple2('position', 'relative');
				}
			case 'PosLeft':
				var x = pos.a;
				return _Utils_Tuple2(
					'left',
					$elm$core$String$fromFloat(x) + 'px');
			case 'PosRight':
				var x = pos.a;
				return _Utils_Tuple2(
					'right',
					$elm$core$String$fromFloat(x) + 'px');
			case 'PosTop':
				var x = pos.a;
				return _Utils_Tuple2(
					'top',
					$elm$core$String$fromFloat(x) + 'px');
			case 'PosBottom':
				var x = pos.a;
				return _Utils_Tuple2(
					'bottom',
					$elm$core$String$fromFloat(x) + 'px');
			case 'ZIndex':
				var i = pos.a;
				return _Utils_Tuple2(
					'z-index',
					$elm$core$String$fromInt(i));
			case 'Inline':
				return _Utils_Tuple2('display', 'inline-block');
			default:
				switch (pos.a.$) {
					case 'FloatLeft':
						var _v4 = pos.a;
						return _Utils_Tuple2('float', 'left');
					case 'FloatRight':
						var _v5 = pos.a;
						return _Utils_Tuple2('float', 'right');
					case 'FloatTopLeft':
						var _v6 = pos.a;
						return _Utils_Tuple2('float', 'left');
					default:
						var _v7 = pos.a;
						return _Utils_Tuple2('float', 'right');
				}
		}
	};
	return A2($elm$core$List$map, renderPos, posEls);
};
var $mdgriffith$style_elements$Style$Internal$Render$Value$typeface = function (families) {
	var renderFont = function (font) {
		switch (font.$) {
			case 'Serif':
				return 'serif';
			case 'SansSerif':
				return 'sans-serif';
			case 'Cursive':
				return 'cursive';
			case 'Fantasy':
				return 'fantasy';
			case 'Monospace':
				return 'monospace';
			case 'FontName':
				var name = font.a;
				return '\u0022' + (name + '\u0022');
			default:
				var name = font.a;
				var url = font.b;
				return '\u0022' + (name + '\u0022');
		}
	};
	return A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, renderFont, families));
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$background = function (prop) {
	var directionName = function (dir) {
		switch (dir.$) {
			case 'ToUp':
				return 'to top';
			case 'ToDown':
				return 'to bottom';
			case 'ToRight':
				return 'to right';
			case 'ToTopRight':
				return 'to top right';
			case 'ToBottomRight':
				return 'to bottom right';
			case 'ToLeft':
				return 'to left';
			case 'ToTopLeft':
				return 'to top left';
			case 'ToBottomLeft':
				return 'to bottom left';
			default:
				var angle = dir.a;
				return $elm$core$String$fromFloat(angle) + 'rad';
		}
	};
	var renderStep = function (step) {
		switch (step.$) {
			case 'ColorStep':
				var color = step.a;
				return $mdgriffith$style_elements$Style$Internal$Render$Value$color(color);
			case 'PercentStep':
				var color = step.a;
				var percent = step.b;
				return $mdgriffith$style_elements$Style$Internal$Render$Value$color(color) + (' ' + ($elm$core$String$fromFloat(percent) + '%'));
			default:
				var color = step.a;
				var percent = step.b;
				return $mdgriffith$style_elements$Style$Internal$Render$Value$color(color) + (' ' + ($elm$core$String$fromFloat(percent) + 'px'));
		}
	};
	switch (prop.$) {
		case 'BackgroundElement':
			var name = prop.a;
			var val = prop.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(name, val)
				]);
		case 'BackgroundImage':
			var image = prop.a;
			return _List_fromArray(
				[
					_Utils_Tuple2('background-image', 'url(' + (image.src + ')')),
					_Utils_Tuple2(
					'background-position',
					$elm$core$String$fromFloat(image.position.a) + ('px ' + ($elm$core$String$fromFloat(image.position.b) + 'px'))),
					_Utils_Tuple2(
					'background-repeat',
					function () {
						var _v1 = image.repeat;
						switch (_v1.$) {
							case 'RepeatX':
								return 'repeat-x';
							case 'RepeatY':
								return 'repeat-y';
							case 'Repeat':
								return 'repeat';
							case 'Space':
								return 'space';
							case 'Round':
								return 'round';
							default:
								return 'no-repeat';
						}
					}()),
					_Utils_Tuple2(
					'background-size',
					function () {
						var _v2 = image.size;
						switch (_v2.$) {
							case 'Contain':
								return 'contain';
							case 'Cover':
								return 'cover';
							case 'BackgroundWidth':
								var width = _v2.a;
								return $mdgriffith$style_elements$Style$Internal$Render$Value$length(width) + ' auto';
							case 'BackgroundHeight':
								var height = _v2.a;
								return 'auto ' + $mdgriffith$style_elements$Style$Internal$Render$Value$length(height);
							default:
								var height = _v2.a.height;
								var width = _v2.a.width;
								return $mdgriffith$style_elements$Style$Internal$Render$Value$length(width) + (' ' + $mdgriffith$style_elements$Style$Internal$Render$Value$length(height));
						}
					}())
				]);
		default:
			var dir = prop.a;
			var steps = prop.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'background-image',
					'linear-gradient(' + (A2(
						$elm$core$String$join,
						', ',
						A2(
							$elm$core$List$cons,
							directionName(dir),
							A2($elm$core$List$map, renderStep, steps))) + ')'))
				]);
	}
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$transition = function (_v0) {
	var props = _v0.a.props;
	var easing = _v0.a.easing;
	var duration = _v0.a.duration;
	var delay = _v0.a.delay;
	var formatTrans = function (prop) {
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					prop,
					$elm$core$String$fromFloat(duration) + 'ms',
					easing,
					$elm$core$String$fromFloat(delay) + 'ms'
				]));
	};
	return A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, formatTrans, props));
};
var $mdgriffith$style_elements$Style$Internal$Render$Property$visibility = function (vis) {
	switch (vis.$) {
		case 'Hidden':
			return _List_fromArray(
				[
					_Utils_Tuple2('display', 'none')
				]);
		case 'Invisible':
			return _List_fromArray(
				[
					_Utils_Tuple2('visibility', 'hidden')
				]);
		default:
			var x = vis.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'opacity',
					$elm$core$String$fromFloat(x))
				]);
	}
};
var $mdgriffith$style_elements$Style$Internal$Intermediate$PropsAndSub = F2(
	function (a, b) {
		return {$: 'PropsAndSub', a: a, b: b};
	});
var $mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery = F2(
	function (query, prop) {
		var classAsMediaQuery = function (cls) {
			if (cls.$ === 'Class') {
				var classRule = cls.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$Media(
					{props: classRule.props, query: query, selector: classRule.selector});
			} else {
				var x = cls;
				return x;
			}
		};
		switch (prop.$) {
			case 'SubClass':
				var cls = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass(
					classAsMediaQuery(cls));
			case 'PropsAndSub':
				var x = prop.a;
				var cls = prop.b;
				return A2(
					$mdgriffith$style_elements$Style$Internal$Intermediate$PropsAndSub,
					x,
					classAsMediaQuery(cls));
			default:
				var x = prop;
				return x;
		}
	});
var $mdgriffith$style_elements$Style$Internal$Render$Property$transformations = function (transforms) {
	var transformToString = function (transform) {
		switch (transform.$) {
			case 'Translate':
				var x = transform.a;
				var y = transform.b;
				var z = transform.c;
				return 'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)')))));
			case 'RotateAround':
				var x = transform.a;
				var y = transform.b;
				var z = transform.c;
				var angle = transform.d;
				return 'rotate3d(' + ($elm$core$String$fromFloat(x) + (',' + ($elm$core$String$fromFloat(y) + (',' + ($elm$core$String$fromFloat(z) + (',' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			case 'Rotate':
				var x = transform.a;
				return 'rotate(' + ($elm$core$String$fromFloat(x) + 'rad)');
			default:
				var x = transform.a;
				var y = transform.b;
				var z = transform.c;
				return 'scale3d(' + ($elm$core$String$fromFloat(x) + (', ' + ($elm$core$String$fromFloat(y) + (', ' + ($elm$core$String$fromFloat(z) + ')')))));
		}
	};
	var transformString = A2(
		$elm$core$String$join,
		' ',
		A2($elm$core$List$map, transformToString, transforms));
	var renderedTransforms = ($elm$core$String$length(transformString) > 0) ? _List_fromArray(
		[
			_Utils_Tuple2('transform', transformString)
		]) : _List_Nil;
	return (!$elm$core$List$length(transforms)) ? _List_Nil : renderedTransforms;
};
var $mdgriffith$style_elements$Style$Internal$Render$renderVariationProp = F2(
	function (parentClass, prop) {
		switch (prop.$) {
			case 'Child':
				return $elm$core$Maybe$Nothing;
			case 'Variation':
				return $elm$core$Maybe$Nothing;
			case 'PseudoElement':
				var cls = prop.a;
				var styleProps = prop.b;
				return A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass),
					$mdgriffith$style_elements$Style$Internal$Intermediate$Class)(
					{
						props: A2(
							$elm$core$List$filterMap,
							$mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(parentClass),
							styleProps),
						selector: A2($mdgriffith$style_elements$Style$Internal$Selector$pseudo, cls, parentClass)
					});
			case 'MediaQuery':
				var query = prop.a;
				var styleProps = prop.b;
				return A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass),
					$mdgriffith$style_elements$Style$Internal$Intermediate$Media)(
					{
						props: A2(
							$elm$core$List$map,
							$mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery(query),
							A2(
								$elm$core$List$filterMap,
								$mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(parentClass),
								styleProps)),
						query: '@media ' + query,
						selector: parentClass
					});
			case 'Exact':
				var name = prop.a;
				var val = prop.b;
				return A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props)(
					_List_fromArray(
						[
							_Utils_Tuple2(name, val)
						]));
			case 'Visibility':
				var vis = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					$mdgriffith$style_elements$Style$Internal$Render$Property$visibility(vis));
			case 'Position':
				var pos = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					$mdgriffith$style_elements$Style$Internal$Render$Property$position(pos));
			case 'Font':
				var name = prop.a;
				var val = prop.b;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					_List_fromArray(
						[
							_Utils_Tuple2(name, val)
						]));
			case 'FontFamily':
				var fam = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'font-family',
							$mdgriffith$style_elements$Style$Internal$Render$Value$typeface(fam))
						]));
			case 'Layout':
				var lay = prop.a;
				return A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$props)(
					A2($mdgriffith$style_elements$Style$Internal$Render$Property$layout, false, lay));
			case 'Background':
				var props = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					$mdgriffith$style_elements$Style$Internal$Render$Property$background(props));
			case 'Shadows':
				var shadows = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					$mdgriffith$style_elements$Style$Internal$Render$Property$shadow(shadows));
			case 'Transform':
				var transformations = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					$mdgriffith$style_elements$Style$Internal$Render$Property$transformations(transformations));
			case 'Filters':
				var filters = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					$mdgriffith$style_elements$Style$Internal$Render$Property$filters(filters));
			case 'TextColor':
				var color = prop.a;
				return A3(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					$mdgriffith$style_elements$Style$Internal$Intermediate$props,
					_List_fromArray(
						[
							_Utils_Tuple2(
							'color',
							$mdgriffith$style_elements$Style$Internal$Render$Value$color(color))
						]));
			case 'SelectionColor':
				var color = prop.a;
				return A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass),
					$mdgriffith$style_elements$Style$Internal$Intermediate$Class)(
					{
						props: _List_fromArray(
							[
								$mdgriffith$style_elements$Style$Internal$Intermediate$props(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'background-color',
										$mdgriffith$style_elements$Style$Internal$Render$Value$color(color))
									]))
							]),
						selector: A2($mdgriffith$style_elements$Style$Internal$Selector$pseudo, '::selection', parentClass)
					});
			default:
				var trans = prop.a;
				return $elm$core$Maybe$Just(
					$mdgriffith$style_elements$Style$Internal$Intermediate$props(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'transition',
								A2(
									$elm$core$String$join,
									', ',
									A2($elm$core$List$map, $mdgriffith$style_elements$Style$Internal$Render$Property$transition, trans)))
							])));
		}
	});
var $mdgriffith$style_elements$Style$Internal$Render$renderProp = F2(
	function (parentClass, prop) {
		switch (prop.$) {
			case 'Child':
				var cls = prop.a;
				var styleProps = prop.b;
				return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)(
					{
						props: A2(
							$elm$core$List$map,
							$mdgriffith$style_elements$Style$Internal$Render$renderProp(parentClass),
							styleProps),
						selector: A2(
							$mdgriffith$style_elements$Style$Internal$Selector$child,
							parentClass,
							$mdgriffith$style_elements$Style$Internal$Selector$select(cls))
					});
			case 'Variation':
				var _var = prop.a;
				var styleProps = prop.b;
				var variationName = function () {
					var _v1 = A2(
						$elm$core$List$filterMap,
						$mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(parentClass),
						styleProps);
					if (!_v1.b) {
						return 'v';
					} else {
						var intermediates = _v1;
						return $elm$core$String$concat(
							A2(
								$elm$core$List$map,
								function (_v2) {
									var x = _v2.a;
									var y = _v2.b;
									return _Utils_ap(x, y);
								},
								A2($elm$core$List$concatMap, $mdgriffith$style_elements$Style$Internal$Intermediate$getProps, intermediates)));
					}
				}();
				var selectVariation = A3($mdgriffith$style_elements$Style$Internal$Selector$variant, parentClass, _var, variationName);
				return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)(
					{
						props: A2(
							$elm$core$List$filterMap,
							$mdgriffith$style_elements$Style$Internal$Render$renderVariationProp(selectVariation),
							styleProps),
						selector: selectVariation
					});
			case 'PseudoElement':
				var cls = prop.a;
				var styleProps = prop.b;
				return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)(
					{
						props: A2(
							$elm$core$List$map,
							$mdgriffith$style_elements$Style$Internal$Render$renderProp(parentClass),
							styleProps),
						selector: A2($mdgriffith$style_elements$Style$Internal$Selector$pseudo, cls, parentClass)
					});
			case 'MediaQuery':
				var query = prop.a;
				var styleProps = prop.b;
				return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Media)(
					{
						props: A2(
							$elm$core$List$map,
							$mdgriffith$style_elements$Style$Internal$Intermediate$asMediaQuery(query),
							A2(
								$elm$core$List$map,
								$mdgriffith$style_elements$Style$Internal$Render$renderProp(parentClass),
								styleProps)),
						query: '@media ' + query,
						selector: parentClass
					});
			case 'Exact':
				var name = prop.a;
				var val = prop.b;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					_List_fromArray(
						[
							_Utils_Tuple2(name, val)
						]));
			case 'Visibility':
				var vis = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					$mdgriffith$style_elements$Style$Internal$Render$Property$visibility(vis));
			case 'Position':
				var pos = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					$mdgriffith$style_elements$Style$Internal$Render$Property$position(pos));
			case 'Font':
				var name = prop.a;
				var val = prop.b;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					_List_fromArray(
						[
							_Utils_Tuple2(name, val)
						]));
			case 'Layout':
				var lay = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					A2($mdgriffith$style_elements$Style$Internal$Render$Property$layout, false, lay));
			case 'Background':
				var props = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					$mdgriffith$style_elements$Style$Internal$Render$Property$background(props));
			case 'Shadows':
				var shadows = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					$mdgriffith$style_elements$Style$Internal$Render$Property$shadow(shadows));
			case 'Transform':
				var transformations = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					$mdgriffith$style_elements$Style$Internal$Render$Property$transformations(transformations));
			case 'Filters':
				var filters = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					$mdgriffith$style_elements$Style$Internal$Render$Property$filters(filters));
			case 'SelectionColor':
				var color = prop.a;
				return A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Style$Internal$Intermediate$SubClass, $mdgriffith$style_elements$Style$Internal$Intermediate$Class)(
					{
						props: _List_fromArray(
							[
								$mdgriffith$style_elements$Style$Internal$Intermediate$props(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'background-color',
										$mdgriffith$style_elements$Style$Internal$Render$Value$color(color))
									]))
							]),
						selector: A2($mdgriffith$style_elements$Style$Internal$Selector$pseudo, '::selection', parentClass)
					});
			case 'TextColor':
				var color = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'color',
							$mdgriffith$style_elements$Style$Internal$Render$Value$color(color))
						]));
			case 'Transitions':
				var trans = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'transition',
							A2(
								$elm$core$String$join,
								', ',
								A2($elm$core$List$map, $mdgriffith$style_elements$Style$Internal$Render$Property$transition, trans)))
						]));
			default:
				var fam = prop.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$props(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'font-family',
							$mdgriffith$style_elements$Style$Internal$Render$Value$typeface(fam))
						]));
		}
	});
var $mdgriffith$style_elements$Style$Internal$Render$renderStyle = F2(
	function (guarded, style) {
		switch (style.$) {
			case 'Reset':
				var reset = style.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$Free(reset);
			case 'Import':
				var str = style.a;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$Free('@import ' + (str + ';'));
			case 'RawStyle':
				var cls = style.a;
				var styleProps = style.b;
				return $mdgriffith$style_elements$Style$Internal$Intermediate$Free(
					A2($mdgriffith$style_elements$Style$Internal$Render$class, cls, styleProps));
			default:
				var cls = style.a;
				var styleProps = style.b;
				var selector = $mdgriffith$style_elements$Style$Internal$Selector$select(cls);
				var inter = $mdgriffith$style_elements$Style$Internal$Intermediate$Class(
					{
						props: A2(
							$elm$core$List$map,
							$mdgriffith$style_elements$Style$Internal$Render$renderProp(selector),
							styleProps),
						selector: selector
					});
				var guard = function (i) {
					return guarded ? $mdgriffith$style_elements$Style$Internal$Intermediate$guard(i) : i;
				};
				return guard(inter);
		}
	});
var $mdgriffith$style_elements$Style$Internal$Model$Reset = function (a) {
	return {$: 'Reset', a: a};
};
var $mdgriffith$style_elements$Style$Internal$Model$Import = function (a) {
	return {$: 'Import', a: a};
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $mdgriffith$style_elements$Style$Internal$Render$reorderImportAddReset = F2(
	function (reset, styles) {
		var getFontStyle = function (style) {
			if (style.$ === 'Style') {
				var props = style.b;
				var forFont = function (prop) {
					if (prop.$ === 'FontFamily') {
						var fams = prop.a;
						var forImport = function (font) {
							if (font.$ === 'ImportFont') {
								var url = font.b;
								return $elm$core$Maybe$Just(url);
							} else {
								return $elm$core$Maybe$Nothing;
							}
						};
						return A2($elm$core$List$filterMap, forImport, fams);
					} else {
						return _List_Nil;
					}
				};
				return A2($elm$core$List$concatMap, forFont, props);
			} else {
				return _List_Nil;
			}
		};
		var importedFonts = A2(
			$elm$core$List$map,
			function (uri) {
				return $mdgriffith$style_elements$Style$Internal$Model$Import('url(\u0027' + (uri + '\u0027)'));
			},
			A3(
				$elm$core$Basics$composeL,
				$elm$core$Set$toList,
				$elm$core$Set$fromList,
				A2($elm$core$List$concatMap, getFontStyle, styles)));
		var reorder = F2(
			function (style, _v2) {
				var importStatements = _v2.a;
				var remainingStyles = _v2.b;
				if (style.$ === 'Import') {
					return _Utils_Tuple2(
						A2($elm$core$List$cons, style, importStatements),
						remainingStyles);
				} else {
					var x = style;
					return _Utils_Tuple2(
						importStatements,
						A2($elm$core$List$cons, style, remainingStyles));
				}
			});
		var _v0 = A3(
			$elm$core$List$foldr,
			reorder,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			styles);
		var imports = _v0.a;
		var allStyles = _v0.b;
		return _Utils_ap(
			imports,
			_Utils_ap(
				importedFonts,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$style_elements$Style$Internal$Model$Reset(reset)
						]),
					allStyles)));
	});
var $mdgriffith$style_elements$Style$Internal$Render$stylesheet = F3(
	function (reset, guard, batched) {
		return $mdgriffith$style_elements$Style$Internal$Intermediate$finalize(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeL,
					$mdgriffith$style_elements$Style$Internal$Render$renderStyle(guard),
					$mdgriffith$style_elements$Style$Internal$Render$preprocess),
				A2(
					$mdgriffith$style_elements$Style$Internal$Render$reorderImportAddReset,
					reset,
					$mdgriffith$style_elements$Style$Internal$Batchable$toList(batched))));
	});
var $mdgriffith$style_elements$Style$Internal$Find$style = F2(
	function (_class, elements) {
		var find = function (el) {
			if (el.$ === 'Style') {
				var cls = el.a;
				var name = el.b;
				return _Utils_eq(cls, _class) ? $elm$core$Maybe$Just(name) : $elm$core$Maybe$Nothing;
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var found = $elm$core$List$head(
			A2($elm$core$List$filterMap, find, elements));
		if (found.$ === 'Nothing') {
			return '';
		} else {
			var cls = found.a;
			return cls;
		}
	});
var $mdgriffith$style_elements$Style$Internal$Find$variation = F3(
	function (_class, vary, elements) {
		var find = function (el) {
			if (el.$ === 'Variation') {
				var cls = el.a;
				var _var = el.b;
				var name = el.c;
				return (_Utils_eq(_class, cls) && _Utils_eq(_var, vary)) ? $elm$core$Maybe$Just(name) : $elm$core$Maybe$Nothing;
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var found = $elm$core$List$head(
			A2($elm$core$List$filterMap, find, elements));
		if (found.$ === 'Nothing') {
			return '';
		} else {
			var cls = found.a;
			return cls;
		}
	});
var $mdgriffith$style_elements$Style$prepareSheet = function (_v0) {
	var findable = _v0.a.findable;
	var css = _v0.a.css;
	var variations = F2(
		function (_class, vs) {
			var parent = A2($mdgriffith$style_elements$Style$Internal$Find$style, _class, findable);
			var varys = A2(
				$elm$core$List$map,
				function (cls) {
					return _Utils_Tuple2(cls, true);
				},
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						function (vary) {
							return A3($mdgriffith$style_elements$Style$Internal$Find$variation, _class, vary, findable);
						},
						$elm$core$Tuple$first),
					A2($elm$core$List$filter, $elm$core$Tuple$second, vs)));
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(parent, true),
				varys);
		});
	return {
		css: css,
		style: function (_class) {
			return A2($mdgriffith$style_elements$Style$Internal$Find$style, _class, findable);
		},
		variations: F2(
			function (_class, varys) {
				return A2(variations, _class, varys);
			})
	};
};
var $mdgriffith$style_elements$Style$styleSheetWith = F2(
	function (options, styles) {
		var unguard = A2(
			$elm$core$List$any,
			$elm$core$Basics$eq($mdgriffith$style_elements$Style$Unguarded),
			options);
		return $mdgriffith$style_elements$Style$prepareSheet(
			A3($mdgriffith$style_elements$Style$Internal$Render$stylesheet, '', !unguard, styles));
	});
var $mdgriffith$style_elements$Style$styleSheet = function (styles) {
	return A2($mdgriffith$style_elements$Style$styleSheetWith, _List_Nil, styles);
};
var $author$project$Stylesheet$CloseButton = {$: 'CloseButton'};
var $author$project$Stylesheet$ErrorMessage = {$: 'ErrorMessage'};
var $author$project$Stylesheet$VoteCountItem = {$: 'VoteCountItem'};
var $author$project$Stylesheet$stylesheet = $mdgriffith$style_elements$Style$styleSheet(
	_List_fromArray(
		[
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$General,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Font$typeface(
					A2(
						$elm$core$List$map,
						$mdgriffith$style_elements$Style$Font$font,
						_List_fromArray(
							['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif']))),
					$mdgriffith$style_elements$Style$Font$size(12)
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$Button,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Color$text(
					A3($author$project$Stylesheet$rgb, 75, 79, 86)),
					$mdgriffith$style_elements$Style$Border$all(1),
					$mdgriffith$style_elements$Style$Color$background(
					A3($author$project$Stylesheet$rgb, 246, 247, 249)),
					$mdgriffith$style_elements$Style$Color$border(
					A3($author$project$Stylesheet$rgb, 206, 208, 212)),
					$mdgriffith$style_elements$Style$hover(
					_List_fromArray(
						[
							$mdgriffith$style_elements$Style$Color$background(
							A3($author$project$Stylesheet$rgb, 233, 235, 238)),
							$mdgriffith$style_elements$Style$Color$border(
							A3($author$project$Stylesheet$rgb, 75, 79, 86))
						]))
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$BlueButton,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Color$text($author$project$Stylesheet$white),
					$mdgriffith$style_elements$Style$Color$background(
					A3($author$project$Stylesheet$rgb, 66, 103, 178)),
					$mdgriffith$style_elements$Style$Border$rounded(2),
					A2(
					$mdgriffith$style_elements$Style$pseudo,
					'active',
					_List_fromArray(
						[
							$mdgriffith$style_elements$Style$Color$background(
							A3($author$project$Stylesheet$rgb, 46, 83, 158))
						]))
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$VoteCountItem,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Color$text($author$project$Stylesheet$white),
					$mdgriffith$style_elements$Style$Color$background(
					A4($mdgriffith$style_elements$Style$rgba, 0, 0, 0, 0.6)),
					$mdgriffith$style_elements$Style$Border$rounded(6)
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$Overlay,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Color$background(
					A4($mdgriffith$style_elements$Style$rgba, 0, 0, 0, 0.2))
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$Popup,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Color$background($author$project$Stylesheet$white),
					$mdgriffith$style_elements$Style$Border$all(1),
					$mdgriffith$style_elements$Style$Border$rounded(3),
					$mdgriffith$style_elements$Style$Color$border(
					A3($author$project$Stylesheet$rgb, 229, 229, 229)),
					$mdgriffith$style_elements$Style$Shadow$box(
					{
						blur: 26,
						size: 2,
						color: A4($mdgriffith$style_elements$Style$rgba, 0, 0, 0, 0.3),
						offset: _Utils_Tuple2(0, 0)
					})
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$Title,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Font$size(24)
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$CloseButton,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Font$size(18),
					$mdgriffith$style_elements$Style$Color$text($author$project$Stylesheet$grey),
					$mdgriffith$style_elements$Style$Font$weight(300),
					$mdgriffith$style_elements$Style$Color$background($author$project$Stylesheet$white),
					$mdgriffith$style_elements$Style$hover(
					_List_fromArray(
						[
							$mdgriffith$style_elements$Style$Color$text($author$project$Stylesheet$darkGrey)
						]))
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$VoteEmoji,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Font$size(20)
				])),
			A2(
			$mdgriffith$style_elements$Style$style,
			$author$project$Stylesheet$ErrorMessage,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Style$Color$border(
					A3($author$project$Stylesheet$rgb, 245, 198, 203)),
					$mdgriffith$style_elements$Style$Color$background(
					A3($author$project$Stylesheet$rgb, 248, 215, 218)),
					$mdgriffith$style_elements$Style$Color$text(
					A3($author$project$Stylesheet$rgb, 114, 28, 36)),
					$mdgriffith$style_elements$Style$Border$all(1),
					$mdgriffith$style_elements$Style$Border$rounded(3)
				]))
		]));
var $mdgriffith$style_elements$Element$el = F3(
	function (style, attrs, child) {
		return $mdgriffith$style_elements$Element$Internal$Model$Element(
			{
				node: 'div',
				attrs: attrs,
				child: child,
				style: $elm$core$Maybe$Just(style),
				absolutelyPositioned: $elm$core$Maybe$Nothing
			});
	});
var $mdgriffith$style_elements$Element$Attributes$px = $mdgriffith$style_elements$Style$Internal$Model$Px;
var $mdgriffith$style_elements$Element$Internal$Model$NoDecoration = {$: 'NoDecoration'};
var $mdgriffith$style_elements$Element$text = $mdgriffith$style_elements$Element$Internal$Model$Text(
	{inline: false, decoration: $mdgriffith$style_elements$Element$Internal$Model$NoDecoration});
var $mdgriffith$style_elements$Element$empty = $mdgriffith$style_elements$Element$Internal$Model$Empty;
var $mdgriffith$style_elements$Style$Internal$Model$Down = {$: 'Down'};
var $mdgriffith$style_elements$Element$column = F3(
	function (style, attrs, children) {
		return $mdgriffith$style_elements$Element$Internal$Model$Layout(
			{
				node: 'div',
				attrs: attrs,
				style: $elm$core$Maybe$Just(style),
				layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$Down, _List_Nil),
				children: $mdgriffith$style_elements$Element$Internal$Model$Normal(children),
				absolutelyPositioned: $elm$core$Maybe$Nothing
			});
	});
var $mdgriffith$style_elements$Element$Attributes$padding = function (x) {
	return A4(
		$mdgriffith$style_elements$Element$Internal$Model$Padding,
		$elm$core$Maybe$Just(x),
		$elm$core$Maybe$Just(x),
		$elm$core$Maybe$Just(x),
		$elm$core$Maybe$Just(x));
};
var $mdgriffith$style_elements$Element$Attributes$spacing = function (x) {
	return A2($mdgriffith$style_elements$Element$Internal$Model$Spacing, x, x);
};
var $author$project$Data$Category$toEmoji = function (category) {
	switch (category.$) {
		case 'Legitimate':
			return '✅';
		case 'FakeNews':
			return '💀';
		case 'Clickbait':
			return '🐟';
		case 'ExtremelyBiased':
			return '🙉';
		case 'Satire':
			return '\uD83E\uDD21';
		default:
			return '🏳️';
	}
};
var $author$project$Locale$Words$Verified = {$: 'Verified'};
var $mdgriffith$style_elements$Element$Attributes$minWidth = function (len) {
	return $mdgriffith$style_elements$Element$Internal$Model$Attr(
		A2(
			$elm$html$Html$Attributes$style,
			'min-width',
			$mdgriffith$style_elements$Style$Internal$Render$Value$length(len)));
};
var $mdgriffith$style_elements$Element$row = F3(
	function (style, attrs, children) {
		return $mdgriffith$style_elements$Element$Internal$Model$Layout(
			{
				node: 'div',
				attrs: attrs,
				style: $elm$core$Maybe$Just(style),
				layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
				children: $mdgriffith$style_elements$Element$Internal$Model$Normal(children),
				absolutelyPositioned: $elm$core$Maybe$Nothing
			});
	});
var $mdgriffith$style_elements$Element$Attributes$height = $mdgriffith$style_elements$Element$Internal$Model$Height;
var $mdgriffith$style_elements$Element$Attributes$moveUp = function (y) {
	return A3(
		$mdgriffith$style_elements$Element$Internal$Model$Position,
		$elm$core$Maybe$Nothing,
		$elm$core$Maybe$Just(-y),
		$elm$core$Maybe$Nothing);
};
var $author$project$Locale$Words$Biased = {$: 'Biased'};
var $author$project$Locale$Words$Satire = {$: 'Satire'};
var $author$project$Locale$Words$NotNews = {$: 'NotNews'};
var $author$project$Locale$Words$FakeNews = {$: 'FakeNews'};
var $author$project$Locale$Words$Clickbait = {$: 'Clickbait'};
var $author$project$Locale$Words$Legitimate = {$: 'Legitimate'};
var $author$project$Data$Category$toName = function (category) {
	switch (category.$) {
		case 'Legitimate':
			return $author$project$Locale$Words$Legitimate;
		case 'FakeNews':
			return $author$project$Locale$Words$FakeNews;
		case 'Clickbait':
			return $author$project$Locale$Words$Clickbait;
		case 'ExtremelyBiased':
			return $author$project$Locale$Words$Biased;
		case 'Satire':
			return $author$project$Locale$Words$Satire;
		default:
			return $author$project$Locale$Words$NotNews;
	}
};
var $author$project$Locale$English$translate = function (localeValue) {
	switch (localeValue.$) {
		case 'Loading':
			return 'Loading...';
		case 'FlagContent':
			return 'Flag Content';
		case 'FlagQuestion':
			return 'Which of the following options best defines this content?';
		case 'FlagSubmitButton':
			return 'Submit';
		case 'Legitimate':
			return 'Legitimate';
		case 'LegitimateDescription':
			return 'Honest content, does not try to fool anyone';
		case 'FakeNews':
			return 'Fake News';
		case 'FakeNewsDescription':
			return 'Tries to fool the reader and spreads rumors';
		case 'Biased':
			return 'Biased';
		case 'ExtremelyBiased':
			return 'Extremely Biased';
		case 'ExtremelyBiasedDescription':
			return 'Shows only one side of the story, some points of the news are exaggerated';
		case 'Satire':
			return 'Satire';
		case 'SatireDescription':
			return 'Fake content on purpose, just to make humor';
		case 'NotNews':
			return 'Not News';
		case 'NotNewsDescription':
			return 'Meme, personal content or anything that is not news';
		case 'Clickbait':
			return 'Clickbait';
		case 'ClickbaitQuestion':
			return 'Is the title Clickbait?';
		case 'ClickbaitDescription':
			return 'Eye-catching title, intentionally hides informations about the content just to trigger your curiosity to click';
		case 'Yes':
			return 'Yes';
		case 'No':
			return 'No';
		case 'DontKnow':
			return 'I don\u0027t know';
		case 'Verified':
			return '(verified)';
		case 'FlagButton':
			return '🏴 Flag';
		case 'InvalidUrlError':
			return 'Invalid Url: ';
		case 'LoadingError':
			return 'loading error';
		case 'TimeoutError':
			return 'Timeout: the operation took too long to execute';
		case 'NetworkError':
			return 'Network error: check your internet connection';
		case 'LooksLike':
			return 'Looks like';
		case 'LooksALotLike':
			return 'Looks a lot like';
		case 'AlmostCertain':
			return 'I\u0027m almost certain it is';
		default:
			return 'Fill all the fields';
	}
};
var $author$project$Locale$Spanish$translate = function (localeValue) {
	switch (localeValue.$) {
		case 'Loading':
			return 'Cargando...';
		case 'FlagContent':
			return 'Señalar contenido';
		case 'FlagQuestion':
			return '¿Cuál de las siguientes opciones define mejor este contenido?';
		case 'FlagSubmitButton':
			return 'Señalar';
		case 'Legitimate':
			return 'Auténtico';
		case 'LegitimateDescription':
			return 'Contenido verdadero, no intenta engañar a nadie, de ninguna manera';
		case 'FakeNews':
			return 'Fake News';
		case 'FakeNewsDescription':
			return 'Noticia falsa, engaña al lector, difunde rumores';
		case 'Biased':
			return 'Sesgado';
		case 'ExtremelyBiased':
			return 'Extremadamente Sesgado';
		case 'ExtremelyBiasedDescription':
			return 'Sólo muestra un lado de la historia, interpreta de forma exagerada algunos puntos, sin ponderación con otros';
		case 'Satire':
			return 'Sátira';
		case 'SatireDescription':
			return 'Contenido intencionalmente falso, con fines humorísticos';
		case 'NotNews':
			return 'No es noticia';
		case 'NotNewsDescription':
			return 'Meme, contenido personal o cualquier otra cosa no periodística';
		case 'Clickbait':
			return 'Clickbait';
		case 'ClickbaitQuestion':
			return 'El título es clickbait?';
		case 'ClickbaitDescription':
			return 'El título no explica la noticia completa de propósito, sólo para te dejar curioso y ganar más clics';
		case 'Yes':
			return 'Sí';
		case 'No':
			return 'No';
		case 'DontKnow':
			return 'Yo no sé';
		case 'Verified':
			return '(verificado)';
		case 'FlagButton':
			return '🏴 Señalar';
		case 'InvalidUrlError':
			return 'Url inválida: ';
		case 'LoadingError':
			return 'error al cargar';
		case 'TimeoutError':
			return 'Timeout: operación tomó demasiado tiempo';
		case 'NetworkError':
			return 'Error de red: compruebe su conexión a Internet';
		case 'LooksLike':
			return 'Parece';
		case 'LooksALotLike':
			return 'Parece mucho';
		case 'AlmostCertain':
			return 'Estoy casi seguro que es';
		default:
			return 'Rellene todos los campos';
	}
};
var $author$project$Locale$Portuguese$translate = function (localeValue) {
	switch (localeValue.$) {
		case 'Loading':
			return 'Carregando...';
		case 'FlagContent':
			return 'Sinalizar conteúdo';
		case 'FlagQuestion':
			return 'Qual das opções abaixo define melhor este conteúdo?';
		case 'FlagSubmitButton':
			return 'Sinalizar';
		case 'Legitimate':
			return 'Legítimo';
		case 'LegitimateDescription':
			return 'Conteúdo honesto, não tenta enganar ninguém, de forma alguma';
		case 'FakeNews':
			return 'Fake News';
		case 'FakeNewsDescription':
			return 'Notícia falsa, engana o leitor, espalha boatos';
		case 'Biased':
			return 'Tendencioso';
		case 'ExtremelyBiased':
			return 'Extremamente Tendencioso';
		case 'ExtremelyBiasedDescription':
			return 'Mostra apenas um lado da história, interpreta de forma exagerada alguns pontos, sem ponderamento com outros';
		case 'Satire':
			return 'Sátira';
		case 'SatireDescription':
			return 'Conteúdo propositalmente falso, para fins humorísticos';
		case 'NotNews':
			return 'Não é notícia';
		case 'NotNewsDescription':
			return 'Meme, conteúdo pessoal ou qualquer outra coisa não jornalística';
		case 'Clickbait':
			return 'Clickbait';
		case 'ClickbaitQuestion':
			return 'O título é clickbait?';
		case 'ClickbaitDescription':
			return 'Título apelativo, não explica a notícia completa de propósito apenas para ganhar cliques';
		case 'Yes':
			return 'Sim';
		case 'No':
			return 'Não';
		case 'DontKnow':
			return 'Não sei';
		case 'Verified':
			return '(verificado)';
		case 'FlagButton':
			return '🏴 Sinalizar';
		case 'InvalidUrlError':
			return 'Url inválida: ';
		case 'LoadingError':
			return 'erro ao carregar';
		case 'TimeoutError':
			return 'Timeout: operação demorou tempo demais';
		case 'NetworkError':
			return 'Erro de rede: verifique sua conexão à internet';
		case 'LooksLike':
			return 'Parece';
		case 'LooksALotLike':
			return 'Parece muito';
		case 'AlmostCertain':
			return 'Tenho quase certeza que é';
		default:
			return 'Preencha todos os campos';
	}
};
var $author$project$Locale$Locale$translate = F2(
	function (language, localeValue) {
		switch (language.$) {
			case 'English':
				return $author$project$Locale$English$translate(localeValue);
			case 'Portuguese':
				return $author$project$Locale$Portuguese$translate(localeValue);
			default:
				return $author$project$Locale$Spanish$translate(localeValue);
		}
	});
var $author$project$StoryVotes$viewVote = F5(
	function (model, icon, preText, category, postText) {
		return A3(
			$mdgriffith$style_elements$Element$row,
			$author$project$Stylesheet$VoteCountItem,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Element$Attributes$padding(6),
					$mdgriffith$style_elements$Element$Attributes$spacing(5),
					$mdgriffith$style_elements$Element$Attributes$height(
					$mdgriffith$style_elements$Element$Attributes$px(26))
				]),
			_List_fromArray(
				[
					A3(
					$mdgriffith$style_elements$Element$el,
					$author$project$Stylesheet$VoteEmoji,
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$Attributes$moveUp(4)
						]),
					$mdgriffith$style_elements$Element$text(icon)),
					$mdgriffith$style_elements$Element$text(
					preText + (' ' + $elm$core$String$toLower(
						A2(
							$author$project$Locale$Locale$translate,
							model.language,
							$author$project$Data$Category$toName(category))))),
					$mdgriffith$style_elements$Element$text(postText)
				]));
	});
var $author$project$Stylesheet$NoStyle = {$: 'NoStyle'};
var $elm$core$List$sortBy = _List_sortBy;
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$Locale$Words$LooksLike = {$: 'LooksLike'};
var $author$project$Locale$Words$AlmostCertain = {$: 'AlmostCertain'};
var $author$project$Locale$Words$LooksALotLike = {$: 'LooksALotLike'};
var $author$project$Data$Votes$chanceToText = function (chance) {
	var rebalancedChance = ((chance * 100) - 50) * 2;
	return (rebalancedChance >= 66) ? $author$project$Locale$Words$AlmostCertain : ((rebalancedChance >= 33) ? $author$project$Locale$Words$LooksALotLike : $author$project$Locale$Words$LooksLike);
};
var $author$project$Data$Votes$predictionsToText = function (predictions) {
	return A2(
		$elm$core$List$map,
		function (_v1) {
			var word = _v1.a;
			var chance = _v1.b;
			return _Utils_Tuple2(
				$author$project$Data$Votes$chanceToText(chance),
				word);
		},
		A2(
			$elm$core$List$sortBy,
			function (_v0) {
				var chance = _v0.b;
				return chance * (-1);
			},
			A2(
				$elm$core$List$filter,
				function (prediction) {
					return prediction.b > 0.6;
				},
				_List_fromArray(
					[
						_Utils_Tuple2($author$project$Data$Category$FakeNews, predictions.fake_news),
						_Utils_Tuple2($author$project$Data$Category$ExtremelyBiased, predictions.extremely_biased),
						_Utils_Tuple2($author$project$Data$Category$Clickbait, predictions.clickbait)
					]))));
};
var $author$project$Data$Votes$joinClickbaitCategory = function (peopleVotes) {
	var allCategories = peopleVotes.title.clickbait ? _Utils_ap(
		peopleVotes.content,
		_List_fromArray(
			[
				{count: peopleVotes.title.count, category: $author$project$Data$Category$Clickbait}
			])) : peopleVotes.content;
	return A2(
		$elm$core$List$sortBy,
		function (vote) {
			return vote.count * (-1);
		},
		allCategories);
};
var $author$project$StoryVotes$viewVotes = F2(
	function (model, votes) {
		var robotPredictions = $author$project$Data$Votes$predictionsToText(votes.robot);
		var viewPeopleVote = function (vote) {
			return A5(
				$author$project$StoryVotes$viewVote,
				model,
				$author$project$Data$Category$toEmoji(vote.category),
				$elm$core$String$fromInt(vote.count),
				vote.category,
				'');
		};
		var viewRobotVote = function (_v0) {
			var chanceText = _v0.a;
			var category = _v0.b;
			return A5(
				$author$project$StoryVotes$viewVote,
				model,
				'\uD83E\uDD16',
				A2($author$project$Locale$Locale$translate, model.language, chanceText),
				category,
				'');
		};
		var peopleVotes = $author$project$Data$Votes$joinClickbaitCategory(votes.people);
		return A3(
			$mdgriffith$style_elements$Element$column,
			$author$project$Stylesheet$NoStyle,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Element$Attributes$spacing(5)
				]),
			_Utils_ap(
				A2($elm$core$List$map, viewRobotVote, robotPredictions),
				A2($elm$core$List$map, viewPeopleVote, peopleVotes)));
	});
var $mdgriffith$style_elements$Element$Attributes$class = function (cls) {
	return $mdgriffith$style_elements$Element$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$style_elements$Element$Attributes$toAttr = $mdgriffith$style_elements$Element$Internal$Model$Attr;
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$style_elements$Element$Attributes$inlineStyle = F2(
	function (name, val) {
		return $mdgriffith$style_elements$Element$Internal$Model$Attr(
			A2($elm$virtual_dom$VirtualDom$style, name, val));
	});
var $mdgriffith$style_elements$Element$button = F3(
	function (style, attrs, child) {
		return $mdgriffith$style_elements$Element$Internal$Model$Element(
			{
				node: 'button',
				attrs: A2(
					$elm$core$List$cons,
					$mdgriffith$style_elements$Element$Attributes$class('button-focus'),
					A2(
						$elm$core$List$cons,
						A2($mdgriffith$style_elements$Element$Attributes$inlineStyle, 'cursor', 'pointer'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Attributes$toAttr(
								$elm$html$Html$Attributes$tabindex(0)),
							attrs))),
				child: child,
				style: $elm$core$Maybe$Just(style),
				absolutelyPositioned: $elm$core$Maybe$Nothing
			});
	});
var $author$project$Locale$Words$FlagButton = {$: 'FlagButton'};
var $author$project$StoryVotes$OpenFlagPopup = {$: 'OpenFlagPopup'};
var $mdgriffith$style_elements$Element$Internal$Model$Event = function (a) {
	return {$: 'Event', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $mdgriffith$style_elements$Element$Events$custom = F2(
	function (ev, decode) {
		return $mdgriffith$style_elements$Element$Internal$Model$Event(
			A2($elm$html$Html$Events$custom, ev, decode));
	});
var $author$project$Helpers$onClickStopPropagation = function (message) {
	return A2(
		$mdgriffith$style_elements$Element$Events$custom,
		'click',
		$elm$json$Json$Decode$succeed(
			{message: message, preventDefault: true, stopPropagation: true}));
};
var $author$project$StoryVotes$flagButton = function (model) {
	return A3(
		$mdgriffith$style_elements$Element$button,
		$author$project$Stylesheet$Button,
		_List_fromArray(
			[
				$mdgriffith$style_elements$Element$Attributes$padding(4),
				$author$project$Helpers$onClickStopPropagation($author$project$StoryVotes$OpenFlagPopup)
			]),
		$mdgriffith$style_elements$Element$text(
			A2($author$project$Locale$Locale$translate, model.language, $author$project$Locale$Words$FlagButton)));
};
var $elm$core$String$startsWith = _String_startsWith;
var $author$project$Locale$Words$LoadingError = {$: 'LoadingError'};
var $author$project$Locale$Words$InvalidUrlError = {$: 'InvalidUrlError'};
var $author$project$StoryVotes$flagButtonAndVotes = function (model) {
	var isValidUrl = $elm$core$String$startsWith('http');
	var translate = $author$project$Locale$Locale$translate(model.language);
	var viewVerifiedVote = function (vote) {
		return A5(
			$author$project$StoryVotes$viewVote,
			model,
			$author$project$Data$Category$toEmoji(vote.category),
			'',
			vote.category,
			translate($author$project$Locale$Words$Verified));
	};
	return isValidUrl(model.url) ? A3(
		$mdgriffith$style_elements$Element$column,
		$author$project$Stylesheet$General,
		_List_fromArray(
			[
				$mdgriffith$style_elements$Element$Attributes$spacing(5),
				$mdgriffith$style_elements$Element$Attributes$padding(5),
				$mdgriffith$style_elements$Element$Attributes$minWidth(
				$mdgriffith$style_elements$Element$Attributes$px(130))
			]),
		_List_fromArray(
			[
				$author$project$StoryVotes$flagButton(model),
				function () {
				var _v0 = model.votes;
				switch (_v0.$) {
					case 'Success':
						var votes = _v0.a;
						var _v1 = votes.domain;
						if (_v1.$ === 'Just') {
							var vote = _v1.a;
							return viewVerifiedVote(vote);
						} else {
							return A2($author$project$StoryVotes$viewVotes, model, votes);
						}
					case 'Failure':
						return A3(
							$mdgriffith$style_elements$Element$el,
							$author$project$Stylesheet$VoteCountItem,
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Attributes$padding(6)
								]),
							$mdgriffith$style_elements$Element$text(
								translate($author$project$Locale$Words$LoadingError)));
					default:
						return $mdgriffith$style_elements$Element$empty;
				}
			}()
			])) : A3(
		$mdgriffith$style_elements$Element$el,
		$author$project$Stylesheet$General,
		_List_fromArray(
			[
				$mdgriffith$style_elements$Element$Attributes$padding(5)
			]),
		$mdgriffith$style_elements$Element$text(
			_Utils_ap(
				translate($author$project$Locale$Words$InvalidUrlError),
				model.url)));
};
var $author$project$StoryVotes$view = function (model) {
	return A2(
		$elm$html$Html$div,
		model.isExtensionPopup ? _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'float', 'right')
			]) : _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
				A2($elm$html$Html$Attributes$style, 'right', '0'),
				A2($elm$html$Html$Attributes$style, 'z-index', '1')
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$style_elements$Element$layout,
				$author$project$Stylesheet$stylesheet,
				$author$project$StoryVotes$flagButtonAndVotes(model))
			]));
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $krisajenkins$remotedata$RemoteData$Loading = {$: 'Loading'};
var $krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		switch (data.$) {
			case 'Success':
				var value = data.a;
				return $krisajenkins$remotedata$RemoteData$Success(
					f(value));
			case 'Loading':
				return $krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return $krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				var error = data.a;
				return $krisajenkins$remotedata$RemoteData$Failure(error);
		}
	});
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $krisajenkins$remotedata$RemoteData$withDefault = F2(
	function (_default, data) {
		if (data.$ === 'Success') {
			var x = data.a;
			return x;
		} else {
			return _default;
		}
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$StoryVotes$openFlagPopup = _Platform_outgoingPort(
	'openFlagPopup',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'url',
					$elm$json$Json$Encode$string($.url)),
					_Utils_Tuple2(
					'title',
					$elm$json$Json$Encode$string($.title))
				]));
	});
var $author$project$StoryVotes$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'OpenFlagPopup':
				return _Utils_Tuple2(
					model,
					$author$project$StoryVotes$openFlagPopup(
						{url: model.url, title: model.title}));
			case 'VotesResponse':
				var response = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{votes: response}),
					$elm$core$Platform$Cmd$none);
			default:
				var categoryId = msg.a.categoryId;
				var category = $author$project$Data$Category$fromId(categoryId);
				var isCategory = function (voteCount) {
					return _Utils_eq(voteCount.category, category);
				};
				var peopleVotes = function () {
					var _v1 = model.votes;
					if (_v1.$ === 'Success') {
						var votes = _v1.a;
						return _Utils_eq(
							A2($elm_community$list_extra$List$Extra$find, isCategory, votes.people.content),
							$elm$core$Maybe$Nothing) ? A2(
							$elm$core$List$cons,
							{count: 1, category: category},
							votes.people.content) : A3(
							$elm_community$list_extra$List$Extra$updateIf,
							isCategory,
							function (voteCount) {
								return _Utils_update(
									voteCount,
									{count: voteCount.count + 1});
							},
							votes.people.content);
					} else {
						return _List_fromArray(
							[
								{count: 1, category: category}
							]);
					}
				}();
				var updatedVotes = A2(
					$krisajenkins$remotedata$RemoteData$withDefault,
					{
						robot: {clickbait: 0, fake_news: 0, extremely_biased: 0},
						domain: $elm$core$Maybe$Nothing,
						people: {
							title: {count: 0, clickbait: false},
							content: peopleVotes
						}
					},
					A2(
						$krisajenkins$remotedata$RemoteData$map,
						function (votes) {
							var people = votes.people;
							return _Utils_update(
								votes,
								{
									people: _Utils_update(
										people,
										{content: peopleVotes})
								});
						},
						model.votes));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							votes: $krisajenkins$remotedata$RemoteData$Success(updatedVotes)
						}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {host: host, path: path, port_: port_, query: query, fragment: fragment, protocol: protocol};
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$core$String$contains = _String_contains;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$browser$Browser$element = _Browser_element;
var $author$project$StoryVotes$AddVote = function (a) {
	return {$: 'AddVote', a: a};
};
var $author$project$StoryVotes$addVote = _Platform_incomingPort(
	'addVote',
	A2(
		$elm$json$Json$Decode$andThen,
		function (categoryId) {
			return $elm$json$Json$Decode$succeed(
				{categoryId: categoryId});
		},
		A2($elm$json$Json$Decode$field, 'categoryId', $elm$json$Json$Decode$int)));
var $author$project$StoryVotes$subscriptions = function (model) {
	return $author$project$StoryVotes$addVote($author$project$StoryVotes$AddVote);
};
var $author$project$StoryVotes$main = $elm$browser$Browser$element(
	{init: $author$project$StoryVotes$init, view: $author$project$StoryVotes$view, update: $author$project$StoryVotes$update, subscriptions: $author$project$StoryVotes$subscriptions});
var $author$project$FlagPopup$init = function (flags) {
	return _Utils_Tuple2(
		{
			url: '',
			uuid: flags.uuid,
			title: '',
			isOpen: false,
			language: $author$project$Locale$Locale$fromCodeArray(flags.languages),
			submitResponse: $krisajenkins$remotedata$RemoteData$NotAsked,
			isExtensionPopup: flags.isExtensionPopup,
			selectedCategory: $elm$core$Maybe$Nothing,
			selectedClickbaitTitle: $elm$core$Maybe$Nothing
		},
		$elm$core$Platform$Cmd$none);
};
var $mdgriffith$style_elements$Element$when = F2(
	function (bool, elm) {
		return bool ? elm : $mdgriffith$style_elements$Element$empty;
	});
var $mdgriffith$style_elements$Element$Internal$Model$Within = {$: 'Within'};
var $mdgriffith$style_elements$Element$Internal$Modify$addChild = F2(
	function (parent, el) {
		switch (parent.$) {
			case 'Empty':
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: 'div',
						attrs: _List_Nil,
						child: $mdgriffith$style_elements$Element$Internal$Model$Empty,
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Just(
							_List_fromArray(
								[el]))
					});
			case 'Spacer':
				var x = parent.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
			case 'Raw':
				var h = parent.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
			case 'Layout':
				var elm = parent.a;
				var absolutelyPositioned = elm.absolutelyPositioned;
				if (absolutelyPositioned.$ === 'Nothing') {
					return $mdgriffith$style_elements$Element$Internal$Model$Layout(
						_Utils_update(
							elm,
							{
								absolutelyPositioned: $elm$core$Maybe$Just(
									_List_fromArray(
										[el]))
							}));
				} else {
					var others = absolutelyPositioned.a;
					return $mdgriffith$style_elements$Element$Internal$Model$Layout(
						_Utils_update(
							elm,
							{
								absolutelyPositioned: $elm$core$Maybe$Just(
									A2($elm$core$List$cons, el, others))
							}));
				}
			case 'Element':
				var elm = parent.a;
				var absolutelyPositioned = elm.absolutelyPositioned;
				if (absolutelyPositioned.$ === 'Nothing') {
					return $mdgriffith$style_elements$Element$Internal$Model$Element(
						_Utils_update(
							elm,
							{
								absolutelyPositioned: $elm$core$Maybe$Just(
									_List_fromArray(
										[el]))
							}));
				} else {
					var others = absolutelyPositioned.a;
					return $mdgriffith$style_elements$Element$Internal$Model$Element(
						_Utils_update(
							elm,
							{
								absolutelyPositioned: $elm$core$Maybe$Just(
									A2($elm$core$List$cons, el, others))
							}));
				}
			default:
				var dec = parent.a;
				var content = parent.b;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: 'div',
						attrs: _List_Nil,
						child: A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content),
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Just(
							_List_fromArray(
								[el]))
					});
		}
	});
var $mdgriffith$style_elements$Element$Internal$Modify$wrapHtml = function (el) {
	if (el.$ === 'Raw') {
		var h = el.a;
		return $mdgriffith$style_elements$Element$Internal$Model$Element(
			{
				node: 'div',
				attrs: _List_Nil,
				child: $mdgriffith$style_elements$Element$Internal$Model$Raw(h),
				style: $elm$core$Maybe$Nothing,
				absolutelyPositioned: $elm$core$Maybe$Nothing
			});
	} else {
		var x = el;
		return x;
	}
};
var $mdgriffith$style_elements$Element$within = F2(
	function (nearbys, parent) {
		var position = F2(
			function (elem, p) {
				return A2(
					$mdgriffith$style_elements$Element$Internal$Modify$addChild,
					p,
					A2(
						$mdgriffith$style_elements$Element$Internal$Modify$addAttr,
						$mdgriffith$style_elements$Element$Internal$Model$PositionFrame(
							$mdgriffith$style_elements$Element$Internal$Model$Nearby($mdgriffith$style_elements$Element$Internal$Model$Within)),
						$mdgriffith$style_elements$Element$Internal$Modify$wrapHtml(elem)));
			});
		return A3($elm$core$List$foldr, position, parent, nearbys);
	});
var $mdgriffith$style_elements$Element$screen = function (elem) {
	return A2(
		$mdgriffith$style_elements$Element$within,
		_List_fromArray(
			[elem]),
		$mdgriffith$style_elements$Element$Internal$Model$Element(
			{
				node: 'div',
				attrs: _List_fromArray(
					[
						$mdgriffith$style_elements$Element$Internal$Model$PositionFrame($mdgriffith$style_elements$Element$Internal$Model$Screen),
						$mdgriffith$style_elements$Element$Internal$Model$Width(
						A2($mdgriffith$style_elements$Style$Internal$Model$Calc, 100, 0)),
						$mdgriffith$style_elements$Element$Internal$Model$Height(
						A2($mdgriffith$style_elements$Style$Internal$Model$Calc, 100, 0)),
						$mdgriffith$style_elements$Element$Internal$Model$PointerEvents(false)
					]),
				child: $mdgriffith$style_elements$Element$empty,
				style: $elm$core$Maybe$Nothing,
				absolutelyPositioned: $elm$core$Maybe$Nothing
			}));
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$style_elements$Element$Attributes$attribute = F2(
	function (name, val) {
		return $mdgriffith$style_elements$Element$Internal$Model$Attr(
			A2($elm$html$Html$Attributes$attribute, name, val));
	});
var $mdgriffith$style_elements$Element$modal = F3(
	function (style, attrs, child) {
		return $mdgriffith$style_elements$Element$screen(
			$mdgriffith$style_elements$Element$Internal$Model$Element(
				{
					node: 'div',
					attrs: A2(
						$elm$core$List$cons,
						A2($mdgriffith$style_elements$Element$Attributes$attribute, 'role', 'alertdialog'),
						A2(
							$elm$core$List$cons,
							A2($mdgriffith$style_elements$Element$Attributes$attribute, 'aria-modal', 'true'),
							attrs)),
					child: child,
					style: $elm$core$Maybe$Just(style),
					absolutelyPositioned: $elm$core$Maybe$Nothing
				}));
	});
var $mdgriffith$style_elements$Element$Attributes$width = $mdgriffith$style_elements$Element$Internal$Model$Width;
var $mdgriffith$style_elements$Element$Attributes$center = $mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Center);
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$style_elements$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Internal$Model$Event, $elm$html$Html$Events$onClick);
var $mdgriffith$style_elements$Element$Attributes$percent = $mdgriffith$style_elements$Style$Internal$Model$Percent;
var $author$project$FlagPopup$ClosePopup = {$: 'ClosePopup'};
var $mdgriffith$style_elements$Element$h1 = F3(
	function (style, attrs, child) {
		return $mdgriffith$style_elements$Element$Internal$Model$Element(
			{
				node: 'h1',
				attrs: attrs,
				child: child,
				style: $elm$core$Maybe$Just(style),
				absolutelyPositioned: $elm$core$Maybe$Nothing
			});
	});
var $mdgriffith$style_elements$Element$Internal$Model$OnRight = {$: 'OnRight'};
var $mdgriffith$style_elements$Element$Internal$Modify$removeAttrs = F2(
	function (props, el) {
		var match = function (p) {
			return !A2($elm$core$List$member, p, props);
		};
		switch (el.$) {
			case 'Empty':
				return $mdgriffith$style_elements$Element$Internal$Model$Empty;
			case 'Raw':
				var h = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
			case 'Spacer':
				var x = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
			case 'Layout':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					_Utils_update(
						elm,
						{
							attrs: A2($elm$core$List$filter, match, elm.attrs)
						}));
			case 'Element':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					_Utils_update(
						elm,
						{
							attrs: A2($elm$core$List$filter, match, elm.attrs)
						}));
			default:
				var dec = el.a;
				var content = el.b;
				return A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content);
		}
	});
var $mdgriffith$style_elements$Element$onRight = F2(
	function (nearbys, parent) {
		var position = F2(
			function (elem, p) {
				return A2(
					$mdgriffith$style_elements$Element$Internal$Modify$addChild,
					p,
					A2(
						$mdgriffith$style_elements$Element$Internal$Modify$removeAttrs,
						_List_fromArray(
							[
								$mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Right),
								$mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Left)
							]),
						A2(
							$mdgriffith$style_elements$Element$Internal$Modify$addAttr,
							$mdgriffith$style_elements$Element$Internal$Model$PositionFrame(
								$mdgriffith$style_elements$Element$Internal$Model$Nearby($mdgriffith$style_elements$Element$Internal$Model$OnRight)),
							$mdgriffith$style_elements$Element$Internal$Modify$wrapHtml(elem))));
			});
		return A3($elm$core$List$foldr, position, parent, nearbys);
	});
var $author$project$Data$Votes$No = {$: 'No'};
var $author$project$Locale$Words$No = {$: 'No'};
var $author$project$Data$Votes$Yes = {$: 'Yes'};
var $author$project$Locale$Words$Yes = {$: 'Yes'};
var $mdgriffith$style_elements$Element$Internal$Model$Bold = {$: 'Bold'};
var $mdgriffith$style_elements$Element$bold = $mdgriffith$style_elements$Element$Internal$Model$Text(
	{inline: false, decoration: $mdgriffith$style_elements$Element$Internal$Model$Bold});
var $mdgriffith$style_elements$Style$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$style_elements$Element$Attributes$fill = $mdgriffith$style_elements$Style$Internal$Model$Fill(1);
var $mdgriffith$style_elements$Element$Internal$Modify$setNode = F2(
	function (node, el) {
		switch (el.$) {
			case 'Empty':
				return $mdgriffith$style_elements$Element$Internal$Model$Empty;
			case 'Raw':
				var h = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
			case 'Spacer':
				var x = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
			case 'Layout':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					_Utils_update(
						elm,
						{node: node}));
			case 'Element':
				var elm = el.a;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					_Utils_update(
						elm,
						{node: node}));
			default:
				var dec = el.a;
				var content = el.b;
				return $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: node,
						attrs: _List_Nil,
						child: A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content),
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
		}
	});
var $mdgriffith$style_elements$Element$node = function (str) {
	return $mdgriffith$style_elements$Element$Internal$Modify$setNode(str);
};
var $mdgriffith$style_elements$Element$Input$Single = function (a) {
	return {$: 'Single', a: a};
};
var $mdgriffith$style_elements$Element$Input$Disabled = {$: 'Disabled'};
var $mdgriffith$style_elements$Element$Input$Vertical = {$: 'Vertical'};
var $mdgriffith$style_elements$Element$Input$pointer = A2($mdgriffith$style_elements$Element$Attributes$inlineStyle, 'cursor', 'pointer');
var $mdgriffith$style_elements$Element$Input$ErrorAllAbove = function (a) {
	return {$: 'ErrorAllAbove', a: a};
};
var $mdgriffith$style_elements$Element$Input$ErrorAllBelow = function (a) {
	return {$: 'ErrorAllBelow', a: a};
};
var $mdgriffith$style_elements$Element$Input$ErrorAboveBelow = F2(
	function (a, b) {
		return {$: 'ErrorAboveBelow', a: a, b: b};
	});
var $mdgriffith$style_elements$Element$Input$applyLabel = F8(
	function (maybeKey, style, attrs, label, errors, isDisabled, hasPointer, input) {
		applyLabel:
		while (true) {
			var orientedErrors = A3(
				$elm$core$List$foldl,
				F2(
					function (currentError, oriented) {
						if (oriented.$ === 'Nothing') {
							return $elm$core$Maybe$Just(
								function () {
									if (currentError.$ === 'ErrorAbove') {
										var err = currentError.a;
										return $mdgriffith$style_elements$Element$Input$ErrorAllAbove(
											_List_fromArray(
												[err]));
									} else {
										var err = currentError.a;
										return $mdgriffith$style_elements$Element$Input$ErrorAllBelow(
											_List_fromArray(
												[err]));
									}
								}());
						} else {
							var orientation = oriented.a;
							return $elm$core$Maybe$Just(
								function () {
									switch (orientation.$) {
										case 'ErrorAllAbove':
											var above = orientation.a;
											if (currentError.$ === 'ErrorAbove') {
												var err = currentError.a;
												return $mdgriffith$style_elements$Element$Input$ErrorAllAbove(
													A2($elm$core$List$cons, err, above));
											} else {
												var err = currentError.a;
												return A2(
													$mdgriffith$style_elements$Element$Input$ErrorAboveBelow,
													_List_fromArray(
														[err]),
													above);
											}
										case 'ErrorAllBelow':
											var below = orientation.a;
											if (currentError.$ === 'ErrorAbove') {
												var err = currentError.a;
												return A2(
													$mdgriffith$style_elements$Element$Input$ErrorAboveBelow,
													_List_fromArray(
														[err]),
													below);
											} else {
												var err = currentError.a;
												return $mdgriffith$style_elements$Element$Input$ErrorAllBelow(
													A2($elm$core$List$cons, err, below));
											}
										default:
											var above = orientation.a;
											var below = orientation.b;
											if (currentError.$ === 'ErrorAbove') {
												var err = currentError.a;
												return A2(
													$mdgriffith$style_elements$Element$Input$ErrorAboveBelow,
													A2($elm$core$List$cons, err, above),
													below);
											} else {
												var err = currentError.a;
												return A2(
													$mdgriffith$style_elements$Element$Input$ErrorAboveBelow,
													above,
													A2($elm$core$List$cons, err, below));
											}
									}
								}());
						}
					}),
				$elm$core$Maybe$Nothing,
				errors);
			var labelContainer = F2(
				function (direction, children) {
					if (maybeKey.$ === 'Nothing') {
						return $mdgriffith$style_elements$Element$Internal$Model$Layout(
							{
								node: 'label',
								attrs: hasPointer ? A2(
									$elm$core$List$cons,
									$mdgriffith$style_elements$Element$Internal$Model$Width(
										$mdgriffith$style_elements$Style$Internal$Model$Fill(1)),
									A2($elm$core$List$cons, $mdgriffith$style_elements$Element$Input$pointer, attrs)) : A2(
									$elm$core$List$cons,
									$mdgriffith$style_elements$Element$Internal$Model$Width(
										$mdgriffith$style_elements$Style$Internal$Model$Fill(1)),
									attrs),
								style: style,
								layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, direction, _List_Nil),
								children: $mdgriffith$style_elements$Element$Internal$Model$Normal(children),
								absolutelyPositioned: $elm$core$Maybe$Nothing
							});
					} else {
						var key = maybeKey.a;
						return $mdgriffith$style_elements$Element$Internal$Model$Layout(
							{
								node: 'label',
								attrs: hasPointer ? A2(
									$elm$core$List$cons,
									$mdgriffith$style_elements$Element$Internal$Model$Width(
										$mdgriffith$style_elements$Style$Internal$Model$Fill(1)),
									A2($elm$core$List$cons, $mdgriffith$style_elements$Element$Input$pointer, attrs)) : A2(
									$elm$core$List$cons,
									$mdgriffith$style_elements$Element$Internal$Model$Width(
										$mdgriffith$style_elements$Style$Internal$Model$Fill(1)),
									attrs),
								style: style,
								layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, direction, _List_Nil),
								children: $mdgriffith$style_elements$Element$Internal$Model$Keyed(
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, child) {
												return _Utils_Tuple2(
													key + ('-' + $elm$core$String$fromInt(i)),
													child);
											}),
										children)),
								absolutelyPositioned: $elm$core$Maybe$Nothing
							});
					}
				});
			var forSpacing = function (attr) {
				if (attr.$ === 'Spacing') {
					var x = attr.a;
					var y = attr.b;
					return $elm$core$Maybe$Just(attr);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			};
			var spacing = A2(
				$elm$core$Maybe$withDefault,
				A2($mdgriffith$style_elements$Element$Internal$Model$Spacing, 0, 0),
				$elm$core$List$head(
					$elm$core$List$reverse(
						A2($elm$core$List$filterMap, forSpacing, attrs))));
			var orient = F2(
				function (direction, children) {
					return $mdgriffith$style_elements$Element$Internal$Model$Layout(
						{
							node: 'div',
							attrs: hasPointer ? _List_fromArray(
								[$mdgriffith$style_elements$Element$Input$pointer, spacing]) : _List_fromArray(
								[spacing]),
							style: $elm$core$Maybe$Nothing,
							layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, direction, _List_Nil),
							children: $mdgriffith$style_elements$Element$Internal$Model$Normal(children),
							absolutelyPositioned: $elm$core$Maybe$Nothing
						});
				});
			switch (label.$) {
				case 'PlaceHolder':
					var newLabel = label.b;
					var $temp$maybeKey = maybeKey,
						$temp$style = style,
						$temp$attrs = attrs,
						$temp$label = newLabel,
						$temp$errors = errors,
						$temp$isDisabled = isDisabled,
						$temp$hasPointer = hasPointer,
						$temp$input = input;
					maybeKey = $temp$maybeKey;
					style = $temp$style;
					attrs = $temp$attrs;
					label = $temp$label;
					errors = $temp$errors;
					isDisabled = $temp$isDisabled;
					hasPointer = $temp$hasPointer;
					input = $temp$input;
					continue applyLabel;
				case 'HiddenLabel':
					var title = label.a;
					var labeledInput = A2(
						$elm$core$List$map,
						$mdgriffith$style_elements$Element$Internal$Modify$addAttr(
							A2($mdgriffith$style_elements$Element$Attributes$attribute, 'title', title)),
						input);
					if (orientedErrors.$ === 'Nothing') {
						return A2(labelContainer, $mdgriffith$style_elements$Style$Internal$Model$Down, labeledInput);
					} else {
						switch (orientedErrors.a.$) {
							case 'ErrorAllAbove':
								var above = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, above),
										labeledInput));
							case 'ErrorAllBelow':
								var below = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									_Utils_ap(
										labeledInput,
										_List_fromArray(
											[
												A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, below)
											])));
							default:
								var _v2 = orientedErrors.a;
								var above = _v2.a;
								var below = _v2.b;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, above),
										_Utils_ap(
											labeledInput,
											_List_fromArray(
												[
													A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, below)
												]))));
						}
					}
				case 'LabelAbove':
					var lab = label.a;
					if (orientedErrors.$ === 'Nothing') {
						return A2(
							labelContainer,
							$mdgriffith$style_elements$Style$Internal$Model$Down,
							A2($elm$core$List$cons, lab, input));
					} else {
						switch (orientedErrors.a.$) {
							case 'ErrorAllAbove':
								var above = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(
											orient,
											$mdgriffith$style_elements$Style$Internal$Model$GoRight,
											A2($elm$core$List$cons, lab, above)),
										input));
							case 'ErrorAllBelow':
								var below = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										lab,
										_Utils_ap(
											input,
											_List_fromArray(
												[
													A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, below)
												]))));
							default:
								var _v4 = orientedErrors.a;
								var above = _v4.a;
								var below = _v4.b;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(
											orient,
											$mdgriffith$style_elements$Style$Internal$Model$GoRight,
											A2($elm$core$List$cons, lab, above)),
										_Utils_ap(
											input,
											_List_fromArray(
												[
													A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, below)
												]))));
						}
					}
				case 'LabelBelow':
					var lab = label.a;
					if (orientedErrors.$ === 'Nothing') {
						return A2(
							labelContainer,
							$mdgriffith$style_elements$Style$Internal$Model$Down,
							_Utils_ap(
								input,
								_List_fromArray(
									[lab])));
					} else {
						switch (orientedErrors.a.$) {
							case 'ErrorAllAbove':
								var above = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, above),
										_Utils_ap(
											input,
											_List_fromArray(
												[lab]))));
							case 'ErrorAllBelow':
								var below = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									_Utils_ap(
										input,
										_List_fromArray(
											[
												A2(
												orient,
												$mdgriffith$style_elements$Style$Internal$Model$GoRight,
												A2($elm$core$List$cons, lab, below))
											])));
							default:
								var _v6 = orientedErrors.a;
								var above = _v6.a;
								var below = _v6.b;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(orient, $mdgriffith$style_elements$Style$Internal$Model$GoRight, above),
										_Utils_ap(
											input,
											_List_fromArray(
												[
													A2(
													orient,
													$mdgriffith$style_elements$Style$Internal$Model$GoRight,
													A2($elm$core$List$cons, lab, below))
												]))));
						}
					}
				case 'LabelOnRight':
					var lab = label.a;
					if (orientedErrors.$ === 'Nothing') {
						return A2(
							labelContainer,
							$mdgriffith$style_elements$Style$Internal$Model$GoRight,
							_Utils_ap(
								input,
								_List_fromArray(
									[lab])));
					} else {
						switch (orientedErrors.a.$) {
							case 'ErrorAllAbove':
								var above = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									_Utils_ap(
										above,
										_List_fromArray(
											[
												A2(
												orient,
												$mdgriffith$style_elements$Style$Internal$Model$GoRight,
												_Utils_ap(
													input,
													_List_fromArray(
														[lab])))
											])));
							case 'ErrorAllBelow':
								var below = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(
											orient,
											$mdgriffith$style_elements$Style$Internal$Model$GoRight,
											_Utils_ap(
												input,
												_List_fromArray(
													[lab]))),
										below));
							default:
								var _v8 = orientedErrors.a;
								var above = _v8.a;
								var below = _v8.b;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									_Utils_ap(
										above,
										_Utils_ap(
											_List_fromArray(
												[
													A2(
													orient,
													$mdgriffith$style_elements$Style$Internal$Model$GoRight,
													_Utils_ap(
														input,
														_List_fromArray(
															[lab])))
												]),
											below)));
						}
					}
				default:
					var lab = label.a;
					if (orientedErrors.$ === 'Nothing') {
						return A2(
							labelContainer,
							$mdgriffith$style_elements$Style$Internal$Model$GoRight,
							A2($elm$core$List$cons, lab, input));
					} else {
						switch (orientedErrors.a.$) {
							case 'ErrorAllAbove':
								var above = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									_Utils_ap(
										above,
										_List_fromArray(
											[
												A2(
												orient,
												$mdgriffith$style_elements$Style$Internal$Model$GoRight,
												A2($elm$core$List$cons, lab, input))
											])));
							case 'ErrorAllBelow':
								var below = orientedErrors.a.a;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									A2(
										$elm$core$List$cons,
										A2(
											orient,
											$mdgriffith$style_elements$Style$Internal$Model$GoRight,
											A2($elm$core$List$cons, lab, input)),
										below));
							default:
								var _v10 = orientedErrors.a;
								var above = _v10.a;
								var below = _v10.b;
								return A2(
									labelContainer,
									$mdgriffith$style_elements$Style$Internal$Model$Down,
									_Utils_ap(
										above,
										_Utils_ap(
											_List_fromArray(
												[
													A2(
													orient,
													$mdgriffith$style_elements$Style$Internal$Model$GoRight,
													A2($elm$core$List$cons, lab, input))
												]),
											below)));
						}
					}
			}
		}
	});
var $mdgriffith$style_elements$Element$Input$Idle = {$: 'Idle'};
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $mdgriffith$style_elements$Element$Input$name = A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Attributes$toAttr, $elm$html$Html$Attributes$name);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $mdgriffith$style_elements$Element$Input$type_ = A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Attributes$toAttr, $elm$html$Html$Attributes$type_);
var $mdgriffith$style_elements$Element$Input$hidden = A2($mdgriffith$style_elements$Element$Attributes$inlineStyle, 'opacity', '0');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $mdgriffith$style_elements$Element$Input$checked = A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Attributes$toAttr, $elm$html$Html$Attributes$checked);
var $mdgriffith$style_elements$Element$Internal$Modify$getText = function (el) {
	getText:
	while (true) {
		switch (el.$) {
			case 'Empty':
				return '';
			case 'Spacer':
				var x = el.a;
				return '';
			case 'Raw':
				var h = el.a;
				return '';
			case 'Layout':
				var children = el.a.children;
				if (children.$ === 'Normal') {
					var childs = children.a;
					return A2(
						$elm$core$String$join,
						'-',
						A2($elm$core$List$map, $mdgriffith$style_elements$Element$Internal$Modify$getText, childs));
				} else {
					var childs = children.a;
					return A2(
						$elm$core$String$join,
						'-',
						A2(
							$elm$core$List$map,
							A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Internal$Modify$getText, $elm$core$Tuple$second),
							childs));
				}
			case 'Element':
				var child = el.a.child;
				var $temp$el = child;
				el = $temp$el;
				continue getText;
			default:
				var dec = el.a;
				var content = el.b;
				return content;
		}
	}
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetChecked = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	$elm$json$Json$Decode$bool);
var $elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetChecked));
};
var $mdgriffith$style_elements$Element$Internal$Model$InputEvent = function (a) {
	return {$: 'InputEvent', a: a};
};
var $mdgriffith$style_elements$Element$Events$onCheck = A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Internal$Model$InputEvent, $elm$html$Html$Events$onCheck);
var $mdgriffith$style_elements$Element$Input$Selected = {$: 'Selected'};
var $mdgriffith$style_elements$Element$Internal$Modify$getAttrs = function (el) {
	switch (el.$) {
		case 'Empty':
			return _List_Nil;
		case 'Spacer':
			var x = el.a;
			return _List_Nil;
		case 'Raw':
			var h = el.a;
			return _List_Nil;
		case 'Layout':
			var attrs = el.a.attrs;
			return attrs;
		case 'Element':
			var attrs = el.a.attrs;
			return attrs;
		default:
			var dec = el.a;
			var content = el.b;
			return _List_Nil;
	}
};
var $mdgriffith$style_elements$Element$Internal$Modify$getChild = function (el) {
	switch (el.$) {
		case 'Empty':
			return $mdgriffith$style_elements$Element$Internal$Model$Empty;
		case 'Spacer':
			var x = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
		case 'Raw':
			var h = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
		case 'Layout':
			return el;
		case 'Element':
			var child = el.a.child;
			return child;
		default:
			var dec = el.a;
			var content = el.b;
			return A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content);
	}
};
var $mdgriffith$style_elements$Element$Internal$Modify$getStyle = function (el) {
	switch (el.$) {
		case 'Empty':
			return $elm$core$Maybe$Nothing;
		case 'Raw':
			var h = el.a;
			return $elm$core$Maybe$Nothing;
		case 'Spacer':
			var x = el.a;
			return $elm$core$Maybe$Nothing;
		case 'Layout':
			var style = el.a.style;
			return style;
		case 'Element':
			var style = el.a.style;
			return style;
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$style_elements$Element$Input$valueAttr = A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Attributes$toAttr, $elm$html$Html$Attributes$value);
var $mdgriffith$style_elements$Element$Internal$Modify$removeStyle = function (el) {
	switch (el.$) {
		case 'Empty':
			return $mdgriffith$style_elements$Element$Internal$Model$Empty;
		case 'Spacer':
			var x = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
		case 'Raw':
			var h = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
		case 'Layout':
			var elm = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Layout(
				_Utils_update(
					elm,
					{style: $elm$core$Maybe$Nothing}));
		case 'Element':
			var elm = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Element(
				_Utils_update(
					elm,
					{style: $elm$core$Maybe$Nothing}));
		default:
			var dec = el.a;
			var content = el.b;
			return A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content);
	}
};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$style_elements$Element$Input$disabledAttr = A2($elm$core$Basics$composeL, $mdgriffith$style_elements$Element$Attributes$toAttr, $elm$html$Html$Attributes$disabled);
var $mdgriffith$style_elements$Element$Input$getLabelText = function (myLabel) {
	getLabelText:
	while (true) {
		switch (myLabel.$) {
			case 'LabelBelow':
				var el = myLabel.a;
				return $mdgriffith$style_elements$Element$Internal$Modify$getText(el);
			case 'LabelAbove':
				var el = myLabel.a;
				return $mdgriffith$style_elements$Element$Internal$Modify$getText(el);
			case 'LabelOnRight':
				var el = myLabel.a;
				return $mdgriffith$style_elements$Element$Internal$Modify$getText(el);
			case 'LabelOnLeft':
				var el = myLabel.a;
				return $mdgriffith$style_elements$Element$Internal$Modify$getText(el);
			case 'HiddenLabel':
				var str = myLabel.a;
				return str;
			default:
				var str = myLabel.a;
				var placeholderLabel = myLabel.b;
				var $temp$myLabel = placeholderLabel;
				myLabel = $temp$myLabel;
				continue getLabelText;
		}
	}
};
var $mdgriffith$style_elements$Element$Internal$Modify$removeAllAttrs = function (el) {
	switch (el.$) {
		case 'Empty':
			return $mdgriffith$style_elements$Element$Internal$Model$Empty;
		case 'Spacer':
			var x = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
		case 'Raw':
			var h = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
		case 'Layout':
			var elm = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Layout(
				_Utils_update(
					elm,
					{attrs: _List_Nil}));
		case 'Element':
			var elm = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Element(
				_Utils_update(
					elm,
					{attrs: _List_Nil}));
		default:
			var dec = el.a;
			var content = el.b;
			return A2($mdgriffith$style_elements$Element$Internal$Model$Text, dec, content);
	}
};
var $mdgriffith$style_elements$Element$Input$radioHelper = F4(
	function (orientation, style, attributes, config) {
		var valueIsSelected = function (val) {
			var _v9 = config.selection;
			if (_v9.$ === 'Single') {
				var single = _v9.a;
				return _Utils_eq(
					$elm$core$Maybe$Just(val),
					single.selected);
			} else {
				var multi = _v9.a;
				return A2($elm$core$List$member, val, multi.selected);
			}
		};
		var withDisabled = function (attrs) {
			return config.disabled ? A2(
				$elm$core$List$cons,
				$mdgriffith$style_elements$Element$Input$disabledAttr(true),
				attrs) : A2($elm$core$List$cons, $mdgriffith$style_elements$Element$Input$pointer, attrs);
		};
		var isSelected = function (val) {
			var _v5 = config.selection;
			if (_v5.$ === 'Single') {
				var single = _v5.a;
				var singleIsSelected = _Utils_eq(
					$elm$core$Maybe$Just(val),
					single.selected);
				return singleIsSelected ? _List_fromArray(
					[
						$mdgriffith$style_elements$Element$Input$checked(true)
					]) : _List_fromArray(
					[
						$mdgriffith$style_elements$Element$Input$checked(false),
						$mdgriffith$style_elements$Element$Events$onCheck(
						function (_v6) {
							return single.onChange(val);
						})
					]);
			} else {
				var multi = _v5.a;
				var multiIsSelected = A2($elm$core$List$member, val, multi.selected);
				return _List_fromArray(
					[
						$mdgriffith$style_elements$Element$Input$checked(multiIsSelected),
						multiIsSelected ? $mdgriffith$style_elements$Element$Events$onCheck(
						function (_v7) {
							return multi.onChange(
								A2(
									$elm$core$List$filter,
									function (item) {
										return !_Utils_eq(item, val);
									},
									multi.selected));
						}) : $mdgriffith$style_elements$Element$Events$onCheck(
						function (_v8) {
							return multi.onChange(
								A2($elm$core$List$cons, val, multi.selected));
						})
					]);
			}
		};
		var addSelection = F2(
			function (val, attrs) {
				return _Utils_ap(
					attrs,
					isSelected(val));
			});
		var group = function () {
			var _v4 = config.key;
			if (_v4.$ === 'Nothing') {
				return $mdgriffith$style_elements$Element$Input$getLabelText(config.label);
			} else {
				var key = _v4.a;
				return key;
			}
		}();
		var renderOption = function (option) {
			if (option.$ === 'Choice') {
				var val = option.a;
				var el = option.b;
				var literalLabel = $mdgriffith$style_elements$Element$Internal$Modify$removeStyle(
					$mdgriffith$style_elements$Element$Internal$Modify$removeAllAttrs(
						$mdgriffith$style_elements$Element$Internal$Modify$getChild(el)));
				var textValue = function () {
					var _v2 = config.key;
					if (_v2.$ === 'Nothing') {
						return $mdgriffith$style_elements$Element$Internal$Modify$getText(el);
					} else {
						var key = _v2.a;
						return key + ('-' + $mdgriffith$style_elements$Element$Internal$Modify$getText(el));
					}
				}();
				var input = $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: 'input',
						attrs: A2(
							$elm$core$Basics$composeL,
							withDisabled,
							addSelection(val))(
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Input$type_('radio'),
									$mdgriffith$style_elements$Element$Input$name(group),
									$mdgriffith$style_elements$Element$Input$valueAttr(textValue)
								])),
						child: $mdgriffith$style_elements$Element$Internal$Model$Empty,
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					{
						node: 'label',
						attrs: config.disabled ? A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Attributes$spacing(5),
							$mdgriffith$style_elements$Element$Internal$Modify$getAttrs(el)) : A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Input$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$style_elements$Element$Attributes$spacing(5),
								$mdgriffith$style_elements$Element$Internal$Modify$getAttrs(el))),
						style: $mdgriffith$style_elements$Element$Internal$Modify$getStyle(el),
						layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
						children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
							_List_fromArray(
								[input, literalLabel])),
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
			} else {
				var val = option.a;
				var view = option.b;
				var textValue = function () {
					var _v3 = config.key;
					if (_v3.$ === 'Nothing') {
						return $mdgriffith$style_elements$Element$Internal$Modify$getText(
							view($mdgriffith$style_elements$Element$Input$Selected));
					} else {
						var key = _v3.a;
						return key + ('-' + $mdgriffith$style_elements$Element$Internal$Modify$getText(
							view($mdgriffith$style_elements$Element$Input$Selected)));
					}
				}();
				var hiddenInput = $mdgriffith$style_elements$Element$Internal$Model$Element(
					{
						node: 'input',
						attrs: A2(
							$elm$core$Basics$composeL,
							withDisabled,
							addSelection(val))(
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Input$type_('radio'),
									$mdgriffith$style_elements$Element$Input$hidden,
									$mdgriffith$style_elements$Element$Input$name(group),
									$mdgriffith$style_elements$Element$Input$valueAttr(textValue),
									$mdgriffith$style_elements$Element$Attributes$toAttr(
									$elm$html$Html$Attributes$class('focus-override'))
								])),
						child: $mdgriffith$style_elements$Element$Internal$Model$Empty,
						style: $elm$core$Maybe$Nothing,
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
				var viewed = view(
					valueIsSelected(val) ? $mdgriffith$style_elements$Element$Input$Selected : $mdgriffith$style_elements$Element$Input$Idle);
				return $mdgriffith$style_elements$Element$Internal$Model$Layout(
					{
						node: 'label',
						attrs: config.disabled ? A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Attributes$spacing(5),
							$mdgriffith$style_elements$Element$Internal$Modify$getAttrs(viewed)) : A2(
							$elm$core$List$cons,
							$mdgriffith$style_elements$Element$Input$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$style_elements$Element$Attributes$spacing(5),
								$mdgriffith$style_elements$Element$Internal$Modify$getAttrs(viewed))),
						style: $mdgriffith$style_elements$Element$Internal$Modify$getStyle(viewed),
						layout: A2($mdgriffith$style_elements$Style$Internal$Model$FlexLayout, $mdgriffith$style_elements$Style$Internal$Model$GoRight, _List_Nil),
						children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
							_List_fromArray(
								[
									hiddenInput,
									$mdgriffith$style_elements$Element$Internal$Modify$removeStyle(
									A2(
										$mdgriffith$style_elements$Element$Internal$Modify$addAttr,
										$mdgriffith$style_elements$Element$Attributes$toAttr(
											$elm$html$Html$Attributes$class('alt-icon')),
										$mdgriffith$style_elements$Element$Internal$Modify$removeAllAttrs(viewed)))
								])),
						absolutelyPositioned: $elm$core$Maybe$Nothing
					});
			}
		};
		if (orientation.$ === 'Horizontal') {
			return A3(
				$mdgriffith$style_elements$Element$row,
				style,
				A2(
					$elm$core$List$cons,
					$mdgriffith$style_elements$Element$Attributes$spacing(10),
					attributes),
				A2($elm$core$List$map, renderOption, config.choices));
		} else {
			return A3(
				$mdgriffith$style_elements$Element$column,
				style,
				A2(
					$elm$core$List$cons,
					$mdgriffith$style_elements$Element$Attributes$spacing(10),
					attributes),
				A2($elm$core$List$map, renderOption, config.choices));
		}
	});
var $mdgriffith$style_elements$Element$Input$radio = F3(
	function (style, attrs, input) {
		var isDisabled = A2(
			$elm$core$List$any,
			$elm$core$Basics$eq($mdgriffith$style_elements$Element$Input$Disabled),
			input.options);
		var forErrors = function (opt) {
			if (opt.$ === 'ErrorOpt') {
				var err = opt.a;
				return $elm$core$Maybe$Just(err);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var forKeys = function (opt) {
			if (opt.$ === 'Key') {
				var k = opt.a;
				return $elm$core$Maybe$Just(k);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var errs = A2($elm$core$List$filterMap, forErrors, input.options);
		var key = A2(
			$elm$core$String$join,
			'-',
			A2($elm$core$List$filterMap, forKeys, input.options));
		var inputElem = A4(
			$mdgriffith$style_elements$Element$Input$radioHelper,
			$mdgriffith$style_elements$Element$Input$Vertical,
			style,
			attrs,
			{
				key: (key === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(key),
				label: input.label,
				errors: errs,
				choices: input.choices,
				disabled: isDisabled,
				selection: $mdgriffith$style_elements$Element$Input$Single(
					{onChange: input.onChange, selected: input.selected})
			});
		return A8(
			$mdgriffith$style_elements$Element$Input$applyLabel,
			$elm$core$Maybe$Nothing,
			$elm$core$Maybe$Nothing,
			_List_Nil,
			input.label,
			errs,
			isDisabled,
			!isDisabled,
			_List_fromArray(
				[inputElem]));
	});
var $mdgriffith$style_elements$Element$Input$Choice = F2(
	function (a, b) {
		return {$: 'Choice', a: a, b: b};
	});
var $mdgriffith$style_elements$Element$Input$choice = $mdgriffith$style_elements$Element$Input$Choice;
var $mdgriffith$style_elements$Element$Internal$Model$Italic = {$: 'Italic'};
var $mdgriffith$style_elements$Element$italic = $mdgriffith$style_elements$Element$Internal$Model$Text(
	{inline: false, decoration: $mdgriffith$style_elements$Element$Internal$Model$Italic});
var $mdgriffith$style_elements$Element$Internal$Model$Justify = {$: 'Justify'};
var $mdgriffith$style_elements$Element$Attributes$spread = $mdgriffith$style_elements$Element$Internal$Model$HAlign($mdgriffith$style_elements$Element$Internal$Model$Justify);
var $author$project$Locale$Words$Loading = {$: 'Loading'};
var $author$project$Data$Votes$DontKnow = {$: 'DontKnow'};
var $author$project$Locale$Words$DontKnow = {$: 'DontKnow'};
var $mdgriffith$style_elements$Element$Input$Horizontal = {$: 'Horizontal'};
var $mdgriffith$style_elements$Element$Input$radioRow = F3(
	function (style, attrs, config) {
		var isDisabled = A2(
			$elm$core$List$any,
			$elm$core$Basics$eq($mdgriffith$style_elements$Element$Input$Disabled),
			config.options);
		var forErrors = function (opt) {
			if (opt.$ === 'ErrorOpt') {
				var err = opt.a;
				return $elm$core$Maybe$Just(err);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var forKeys = function (opt) {
			if (opt.$ === 'Key') {
				var k = opt.a;
				return $elm$core$Maybe$Just(k);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var errs = A2($elm$core$List$filterMap, forErrors, config.options);
		var key = A2(
			$elm$core$String$join,
			'-',
			A2($elm$core$List$filterMap, forKeys, config.options));
		var input = A4(
			$mdgriffith$style_elements$Element$Input$radioHelper,
			$mdgriffith$style_elements$Element$Input$Horizontal,
			style,
			attrs,
			{
				key: (key === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(key),
				label: config.label,
				errors: errs,
				choices: config.choices,
				disabled: isDisabled,
				selection: $mdgriffith$style_elements$Element$Input$Single(
					{onChange: config.onChange, selected: config.selected})
			});
		return A8(
			$mdgriffith$style_elements$Element$Input$applyLabel,
			$elm$core$Maybe$Nothing,
			$elm$core$Maybe$Nothing,
			_List_Nil,
			config.label,
			errs,
			isDisabled,
			!isDisabled,
			_List_fromArray(
				[input]));
	});
var $krisajenkins$remotedata$RemoteData$isLoading = function (data) {
	if (data.$ === 'Loading') {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$style_elements$Element$Internal$Modify$makeInline = function (el) {
	switch (el.$) {
		case 'Empty':
			return $mdgriffith$style_elements$Element$Internal$Model$Empty;
		case 'Raw':
			var h = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Raw(h);
		case 'Spacer':
			var x = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Spacer(x);
		case 'Layout':
			var elm = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Layout(
				_Utils_update(
					elm,
					{
						attrs: A2($elm$core$List$cons, $mdgriffith$style_elements$Element$Internal$Model$Inline, elm.attrs)
					}));
		case 'Element':
			var elm = el.a;
			return $mdgriffith$style_elements$Element$Internal$Model$Element(
				_Utils_update(
					elm,
					{
						attrs: A2($elm$core$List$cons, $mdgriffith$style_elements$Element$Internal$Model$Inline, elm.attrs),
						child: $mdgriffith$style_elements$Element$Internal$Modify$makeInline(elm.child)
					}));
		default:
			var decoration = el.a;
			var content = el.b;
			return A2(
				$mdgriffith$style_elements$Element$Internal$Model$Text,
				_Utils_update(
					decoration,
					{inline: true}),
				content);
	}
};
var $mdgriffith$style_elements$Element$paragraph = F3(
	function (style, attrs, children) {
		return $mdgriffith$style_elements$Element$Internal$Model$Layout(
			{
				node: 'p',
				attrs: attrs,
				style: $elm$core$Maybe$Just(style),
				layout: $mdgriffith$style_elements$Style$Internal$Model$TextLayout(false),
				children: $mdgriffith$style_elements$Element$Internal$Model$Normal(
					A2($elm$core$List$map, $mdgriffith$style_elements$Element$Internal$Modify$makeInline, children)),
				absolutelyPositioned: $elm$core$Maybe$Nothing
			});
	});
var $author$project$FlagPopup$SubmitFlag = {$: 'SubmitFlag'};
var $author$project$FlagPopup$flagChoice = F3(
	function (category, title, description) {
		return A2(
			$mdgriffith$style_elements$Element$Input$choice,
			category,
			A3(
				$mdgriffith$style_elements$Element$column,
				$author$project$Stylesheet$NoStyle,
				_List_fromArray(
					[
						$mdgriffith$style_elements$Element$Attributes$spacing(12)
					]),
				_List_fromArray(
					[
						$mdgriffith$style_elements$Element$bold(title),
						A3(
						$mdgriffith$style_elements$Element$paragraph,
						$author$project$Stylesheet$NoStyle,
						_List_Nil,
						_List_fromArray(
							[
								$mdgriffith$style_elements$Element$text(description)
							]))
					])));
	});
var $mdgriffith$style_elements$Element$Input$LabelAbove = function (a) {
	return {$: 'LabelAbove', a: a};
};
var $mdgriffith$style_elements$Element$Input$labelAbove = $mdgriffith$style_elements$Element$Input$LabelAbove;
var $mdgriffith$style_elements$Element$Attributes$paddingTop = function (x) {
	return A4(
		$mdgriffith$style_elements$Element$Internal$Model$Padding,
		$elm$core$Maybe$Just(x),
		$elm$core$Maybe$Nothing,
		$elm$core$Maybe$Nothing,
		$elm$core$Maybe$Nothing);
};
var $author$project$Locale$Words$FlagQuestion = {$: 'FlagQuestion'};
var $author$project$Locale$Words$NetworkError = {$: 'NetworkError'};
var $author$project$Locale$Words$TimeoutError = {$: 'TimeoutError'};
var $author$project$Helpers$humanizeError = F2(
	function (language, error) {
		switch (error.$) {
			case 'Timeout':
				return A2($author$project$Locale$Locale$translate, language, $author$project$Locale$Words$TimeoutError);
			case 'NetworkError':
				return A2($author$project$Locale$Locale$translate, language, $author$project$Locale$Words$NetworkError);
			case 'BadBody':
				var err = error.a;
				return 'BadBody ' + err;
			case 'BadUrl':
				var err = error.a;
				return 'BadUrl ' + err;
			default:
				var code = error.a;
				return 'BadStatus ' + $elm$core$String$fromInt(code);
		}
	});
var $author$project$FlagPopup$SelectCategory = function (a) {
	return {$: 'SelectCategory', a: a};
};
var $mdgriffith$style_elements$Element$Attributes$verticalCenter = $mdgriffith$style_elements$Element$Internal$Model$VAlign($mdgriffith$style_elements$Element$Internal$Model$VerticalCenter);
var $author$project$Locale$Words$ExtremelyBiased = {$: 'ExtremelyBiased'};
var $author$project$Locale$Words$FlagSubmitButton = {$: 'FlagSubmitButton'};
var $author$project$Locale$Words$ClickbaitQuestion = {$: 'ClickbaitQuestion'};
var $author$project$Locale$Words$SatireDescription = {$: 'SatireDescription'};
var $author$project$Locale$Words$NotNewsDescription = {$: 'NotNewsDescription'};
var $author$project$Locale$Words$FakeNewsDescription = {$: 'FakeNewsDescription'};
var $author$project$Locale$Words$ClickbaitDescription = {$: 'ClickbaitDescription'};
var $author$project$FlagPopup$SelectClickbaitTitle = function (a) {
	return {$: 'SelectClickbaitTitle', a: a};
};
var $author$project$Locale$Words$LegitimateDescription = {$: 'LegitimateDescription'};
var $author$project$Locale$Words$ExtremelyBiasedDescription = {$: 'ExtremelyBiasedDescription'};
var $author$project$FlagPopup$flagForm = function (model) {
	var translate = $author$project$Locale$Locale$translate(model.language);
	return A2(
		$mdgriffith$style_elements$Element$node,
		'form',
		A3(
			$mdgriffith$style_elements$Element$column,
			$author$project$Stylesheet$NoStyle,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Element$Attributes$spacing(15)
				]),
			_List_fromArray(
				[
					A3(
					$mdgriffith$style_elements$Element$paragraph,
					$author$project$Stylesheet$NoStyle,
					_List_Nil,
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$bold(
							translate($author$project$Locale$Words$FlagQuestion))
						])),
					A3(
					$mdgriffith$style_elements$Element$Input$radio,
					$author$project$Stylesheet$NoStyle,
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$Attributes$spacing(15)
						]),
					{
						label: $mdgriffith$style_elements$Element$Input$labelAbove($mdgriffith$style_elements$Element$empty),
						choices: _List_fromArray(
							[
								A3(
								$author$project$FlagPopup$flagChoice,
								$author$project$Data$Category$Legitimate,
								translate($author$project$Locale$Words$Legitimate),
								translate($author$project$Locale$Words$LegitimateDescription)),
								A3(
								$author$project$FlagPopup$flagChoice,
								$author$project$Data$Category$FakeNews,
								translate($author$project$Locale$Words$FakeNews),
								translate($author$project$Locale$Words$FakeNewsDescription)),
								A3(
								$author$project$FlagPopup$flagChoice,
								$author$project$Data$Category$ExtremelyBiased,
								translate($author$project$Locale$Words$ExtremelyBiased),
								translate($author$project$Locale$Words$ExtremelyBiasedDescription)),
								A3(
								$author$project$FlagPopup$flagChoice,
								$author$project$Data$Category$Satire,
								translate($author$project$Locale$Words$Satire),
								translate($author$project$Locale$Words$SatireDescription)),
								A3(
								$author$project$FlagPopup$flagChoice,
								$author$project$Data$Category$NotNews,
								translate($author$project$Locale$Words$NotNews),
								translate($author$project$Locale$Words$NotNewsDescription))
							]),
						options: _List_Nil,
						onChange: $author$project$FlagPopup$SelectCategory,
						selected: model.selectedCategory
					}),
					A3(
					$mdgriffith$style_elements$Element$column,
					$author$project$Stylesheet$NoStyle,
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$Attributes$paddingTop(15),
							$mdgriffith$style_elements$Element$Attributes$spacing(4)
						]),
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$bold(
							translate($author$project$Locale$Words$ClickbaitQuestion)),
							A3(
							$mdgriffith$style_elements$Element$paragraph,
							$author$project$Stylesheet$NoStyle,
							_List_Nil,
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$text(
									translate($author$project$Locale$Words$ClickbaitDescription))
								]))
						])),
					A3(
					$mdgriffith$style_elements$Element$Input$radioRow,
					$author$project$Stylesheet$NoStyle,
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$Attributes$spacing(15),
							$mdgriffith$style_elements$Element$Attributes$paddingTop(4)
						]),
					{
						label: $mdgriffith$style_elements$Element$Input$labelAbove($mdgriffith$style_elements$Element$empty),
						choices: _List_fromArray(
							[
								A2(
								$mdgriffith$style_elements$Element$Input$choice,
								$author$project$Data$Votes$Yes,
								$mdgriffith$style_elements$Element$text(
									translate($author$project$Locale$Words$Yes))),
								A2(
								$mdgriffith$style_elements$Element$Input$choice,
								$author$project$Data$Votes$No,
								$mdgriffith$style_elements$Element$text(
									translate($author$project$Locale$Words$No))),
								A2(
								$mdgriffith$style_elements$Element$Input$choice,
								$author$project$Data$Votes$DontKnow,
								$mdgriffith$style_elements$Element$text(
									translate($author$project$Locale$Words$DontKnow)))
							]),
						options: _List_Nil,
						onChange: $author$project$FlagPopup$SelectClickbaitTitle,
						selected: model.selectedClickbaitTitle
					}),
					function () {
					var _v0 = model.submitResponse;
					if (_v0.$ === 'Failure') {
						var err = _v0.a;
						return A3(
							$mdgriffith$style_elements$Element$paragraph,
							$author$project$Stylesheet$ErrorMessage,
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Attributes$padding(6)
								]),
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$text(
									A2($author$project$Helpers$humanizeError, model.language, err))
								]));
					} else {
						return $mdgriffith$style_elements$Element$empty;
					}
				}(),
					A3(
					$mdgriffith$style_elements$Element$row,
					$author$project$Stylesheet$NoStyle,
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$Attributes$width($mdgriffith$style_elements$Element$Attributes$fill),
							$mdgriffith$style_elements$Element$Attributes$spread,
							$mdgriffith$style_elements$Element$Attributes$verticalCenter
						]),
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$italic('link: ' + model.url),
							A3(
							$mdgriffith$style_elements$Element$button,
							$author$project$Stylesheet$BlueButton,
							_List_fromArray(
								[
									$mdgriffith$style_elements$Element$Attributes$padding(5),
									$author$project$Helpers$onClickStopPropagation($author$project$FlagPopup$SubmitFlag)
								]),
							$krisajenkins$remotedata$RemoteData$isLoading(model.submitResponse) ? $mdgriffith$style_elements$Element$text(
								translate($author$project$Locale$Words$Loading)) : $mdgriffith$style_elements$Element$text(
								translate($author$project$Locale$Words$FlagSubmitButton)))
						]))
				])));
};
var $mdgriffith$style_elements$Element$Attributes$moveLeft = function (x) {
	return A3(
		$mdgriffith$style_elements$Element$Internal$Model$Position,
		$elm$core$Maybe$Just(-x),
		$elm$core$Maybe$Nothing,
		$elm$core$Maybe$Nothing);
};
var $author$project$Locale$Words$FlagContent = {$: 'FlagContent'};
var $author$project$FlagPopup$modalContents = function (model) {
	var translate = $author$project$Locale$Locale$translate(model.language);
	return A3(
		$mdgriffith$style_elements$Element$el,
		$author$project$Stylesheet$Popup,
		_List_fromArray(
			[
				$mdgriffith$style_elements$Element$Attributes$padding(20),
				$mdgriffith$style_elements$Element$Attributes$width(
				$mdgriffith$style_elements$Element$Attributes$px(450))
			]),
		A2(
			$mdgriffith$style_elements$Element$onRight,
			_List_fromArray(
				[
					A3(
					$mdgriffith$style_elements$Element$button,
					$author$project$Stylesheet$CloseButton,
					_List_fromArray(
						[
							$mdgriffith$style_elements$Element$Events$onClick($author$project$FlagPopup$ClosePopup),
							$mdgriffith$style_elements$Element$Attributes$padding(8),
							$mdgriffith$style_elements$Element$Attributes$moveLeft(8),
							$mdgriffith$style_elements$Element$Attributes$moveUp(20)
						]),
					$mdgriffith$style_elements$Element$text('x'))
				]),
			A3(
				$mdgriffith$style_elements$Element$column,
				$author$project$Stylesheet$General,
				_List_fromArray(
					[
						$mdgriffith$style_elements$Element$Attributes$spacing(15)
					]),
				_List_fromArray(
					[
						A3(
						$mdgriffith$style_elements$Element$h1,
						$author$project$Stylesheet$Title,
						_List_Nil,
						$mdgriffith$style_elements$Element$text(
							translate($author$project$Locale$Words$FlagContent))),
						$author$project$FlagPopup$flagForm(model)
					]))));
};
var $author$project$FlagPopup$popup = function (model) {
	return A2(
		$mdgriffith$style_elements$Element$when,
		model.isOpen,
		model.isExtensionPopup ? $author$project$FlagPopup$modalContents(model) : A3(
			$mdgriffith$style_elements$Element$row,
			$author$project$Stylesheet$NoStyle,
			_List_Nil,
			_List_fromArray(
				[
					$mdgriffith$style_elements$Element$screen(
					A3(
						$mdgriffith$style_elements$Element$el,
						$author$project$Stylesheet$Overlay,
						_List_fromArray(
							[
								$mdgriffith$style_elements$Element$Attributes$width(
								$mdgriffith$style_elements$Element$Attributes$percent(100)),
								$mdgriffith$style_elements$Element$Attributes$height(
								$mdgriffith$style_elements$Element$Attributes$percent(100)),
								$mdgriffith$style_elements$Element$Events$onClick($author$project$FlagPopup$ClosePopup)
							]),
						$mdgriffith$style_elements$Element$empty)),
					A3(
					$mdgriffith$style_elements$Element$modal,
					$author$project$Stylesheet$NoStyle,
					_List_fromArray(
						[$mdgriffith$style_elements$Element$Attributes$center, $mdgriffith$style_elements$Element$Attributes$verticalCenter]),
					$author$project$FlagPopup$modalContents(model))
				])));
};
var $author$project$FlagPopup$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'float', 'right')
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$style_elements$Element$layout,
				$author$project$Stylesheet$stylesheet,
				$author$project$FlagPopup$popup(model))
			]));
};
var $author$project$Data$Category$toId = function (category) {
	switch (category.$) {
		case 'Legitimate':
			return 1;
		case 'FakeNews':
			return 2;
		case 'Clickbait':
			return 3;
		case 'ExtremelyBiased':
			return 4;
		case 'Satire':
			return 5;
		default:
			return 6;
	}
};
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{url: r.url, body: r.body, expect: r.expect, method: 'POST', headers: _List_Nil, timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing});
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Data$Votes$encodeYesNoIdk = function (val) {
	switch (val.$) {
		case 'Yes':
			return $elm$json$Json$Encode$bool(true);
		case 'No':
			return $elm$json$Json$Encode$bool(false);
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $author$project$Data$Votes$encodeNewVote = function (_v0) {
	var clickbaitTitle = _v0.clickbaitTitle;
	var category = _v0.category;
	var title = _v0.title;
	var url = _v0.url;
	var uuid = _v0.uuid;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'uuid',
				$elm$json$Json$Encode$string(uuid)),
				_Utils_Tuple2(
				'url',
				$elm$json$Json$Encode$string(url)),
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(title)),
				_Utils_Tuple2(
				'category_id',
				$elm$json$Json$Encode$int(
					$author$project$Data$Category$toId(category))),
				_Utils_Tuple2(
				'clickbait_title',
				$author$project$Data$Votes$encodeYesNoIdk(clickbaitTitle))
			]));
};
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$expectWhatever = function (toMsg) {
	return A2(
		$elm$http$Http$expectBytesResponse,
		toMsg,
		$elm$http$Http$resolve(
			function (_v0) {
				return $elm$core$Result$Ok(_Utils_Tuple0);
			}));
};
var $author$project$Data$Votes$postVote = F2(
	function (msg, newVote) {
		return $elm$http$Http$post(
			{
				url: 'https://api.fakenewsdetector.org/vote',
				body: $elm$http$Http$jsonBody(
					$author$project$Data$Votes$encodeNewVote(newVote)),
				expect: $elm$http$Http$expectWhatever(
					A2($elm$core$Basics$composeR, $krisajenkins$remotedata$RemoteData$fromResult, msg))
			});
	});
var $krisajenkins$remotedata$RemoteData$isSuccess = function (data) {
	if (data.$ === 'Success') {
		var x = data.a;
		return true;
	} else {
		return false;
	}
};
var $author$project$Locale$Locale$toCodeArray = function (language) {
	switch (language.$) {
		case 'Portuguese':
			return _List_fromArray(
				['pt']);
		case 'English':
			return _List_fromArray(
				['en']);
		default:
			return _List_fromArray(
				['es']);
	}
};
var $author$project$Locale$Words$FillAllFields = {$: 'FillAllFields'};
var $author$project$FlagPopup$broadcastVote = _Platform_outgoingPort(
	'broadcastVote',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'url',
					$elm$json$Json$Encode$string($.url)),
					_Utils_Tuple2(
					'categoryId',
					$elm$json$Json$Encode$int($.categoryId))
				]));
	});
var $author$project$FlagPopup$SubmitResponse = function (a) {
	return {$: 'SubmitResponse', a: a};
};
var $author$project$FlagPopup$update = F2(
	function (msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'OpenPopup':
					var title = msg.a.title;
					var url = msg.a.url;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{url: url, title: title, isOpen: true}),
						$elm$core$Platform$Cmd$none);
				case 'ClosePopup':
					return $author$project$FlagPopup$init(
						{
							uuid: model.uuid,
							languages: $author$project$Locale$Locale$toCodeArray(model.language),
							isExtensionPopup: model.isExtensionPopup
						});
				case 'SelectCategory':
					var category = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								selectedCategory: $elm$core$Maybe$Just(category)
							}),
						$elm$core$Platform$Cmd$none);
				case 'SelectClickbaitTitle':
					var isClickbaitTitle = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								selectedClickbaitTitle: $elm$core$Maybe$Just(isClickbaitTitle)
							}),
						$elm$core$Platform$Cmd$none);
				case 'SubmitFlag':
					var _v1 = _Utils_Tuple2(model.selectedCategory, model.selectedClickbaitTitle);
					if ((_v1.a.$ === 'Just') && (_v1.b.$ === 'Just')) {
						var selectedCategory = _v1.a.a;
						var selectedClickbaitTitle = _v1.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{submitResponse: $krisajenkins$remotedata$RemoteData$Loading}),
							A2(
								$author$project$Data$Votes$postVote,
								$author$project$FlagPopup$SubmitResponse,
								{url: model.url, uuid: model.uuid, title: model.title, category: selectedCategory, clickbaitTitle: selectedClickbaitTitle}));
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									submitResponse: $krisajenkins$remotedata$RemoteData$Failure(
										$elm$http$Http$BadUrl(
											A2($author$project$Locale$Locale$translate, model.language, $author$project$Locale$Words$FillAllFields)))
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 'SubmitResponse':
					var response = msg.a;
					return $krisajenkins$remotedata$RemoteData$isSuccess(response) ? _Utils_Tuple2(
						A2($author$project$FlagPopup$update, $author$project$FlagPopup$ClosePopup, model).a,
						$author$project$FlagPopup$broadcastVote(
							{
								url: model.url,
								categoryId: A2(
									$elm$core$Maybe$withDefault,
									0,
									A2($elm$core$Maybe$map, $author$project$Data$Category$toId, model.selectedCategory))
							})) : _Utils_Tuple2(
						_Utils_update(
							model,
							{submitResponse: response}),
						$elm$core$Platform$Cmd$none);
				default:
					var code = msg.a;
					if (code === 'Escape') {
						var $temp$msg = $author$project$FlagPopup$ClosePopup,
							$temp$model = model;
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
			}
		}
	});
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$FlagPopup$OpenPopup = function (a) {
	return {$: 'OpenPopup', a: a};
};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {key: key, event: event};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var event = _v0.event;
		var key = _v0.key;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $author$project$FlagPopup$keyDecoder = A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string);
var $author$project$FlagPopup$KeyboardDown = function (a) {
	return {$: 'KeyboardDown', a: a};
};
var $author$project$FlagPopup$openFlagPopup = _Platform_incomingPort(
	'openFlagPopup',
	A2(
		$elm$json$Json$Decode$andThen,
		function (title) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (url) {
					return $elm$json$Json$Decode$succeed(
						{url: url, title: title});
				},
				A2($elm$json$Json$Decode$field, 'url', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string)));
var $author$project$FlagPopup$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$author$project$FlagPopup$openFlagPopup($author$project$FlagPopup$OpenPopup),
				$elm$browser$Browser$Events$onKeyDown(
				A2($elm$json$Json$Decode$map, $author$project$FlagPopup$KeyboardDown, $author$project$FlagPopup$keyDecoder))
			]));
};
var $author$project$FlagPopup$main = $elm$browser$Browser$element(
	{init: $author$project$FlagPopup$init, view: $author$project$FlagPopup$view, update: $author$project$FlagPopup$update, subscriptions: $author$project$FlagPopup$subscriptions});
_Platform_export({'FlagPopup':{'init':$author$project$FlagPopup$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (isExtensionPopup) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (languages) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (uuid) {
							return $elm$json$Json$Decode$succeed(
								{uuid: uuid, languages: languages, isExtensionPopup: isExtensionPopup});
						},
						A2($elm$json$Json$Decode$field, 'uuid', $elm$json$Json$Decode$string));
				},
				A2(
					$elm$json$Json$Decode$field,
					'languages',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
		},
		A2($elm$json$Json$Decode$field, 'isExtensionPopup', $elm$json$Json$Decode$bool)))(0)},'StoryVotes':{'init':$author$project$StoryVotes$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (isExtensionPopup) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (languages) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (title) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (url) {
									return $elm$json$Json$Decode$succeed(
										{url: url, title: title, languages: languages, isExtensionPopup: isExtensionPopup});
								},
								A2($elm$json$Json$Decode$field, 'url', $elm$json$Json$Decode$string));
						},
						A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
				},
				A2(
					$elm$json$Json$Decode$field,
					'languages',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
		},
		A2($elm$json$Json$Decode$field, 'isExtensionPopup', $elm$json$Json$Decode$bool)))(0)}});}(this));