1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552
553
554
555
556
557
558
559
560
561
562
563
564
565
566
567
568
569
570
571
572
573
574
575
576
577
578
579
580
581
582
583
584
585
586
587
588
589
590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614
615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638
639
640
641
642
643
644
645
646
647
648
649
650
651
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */ (function(jQuery, undefined) {

    var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

        // plusequals test for += 100 -= 100
        rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
        // a set of RE's that can match strings and generate color tuples.
        stringParsers = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [
                execResult[1],
                execResult[2],
                execResult[3],
                execResult[4]];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [
                execResult[1] * 2.55,
                execResult[2] * 2.55,
                execResult[3] * 2.55,
                execResult[4]];
            }
        }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(execResult) {
                return [
                parseInt(execResult[1], 16),
                parseInt(execResult[2], 16),
                parseInt(execResult[3], 16)];
            }
        }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(execResult) {
                return [
                parseInt(execResult[1] + execResult[1], 16),
                parseInt(execResult[2] + execResult[2], 16),
                parseInt(execResult[3] + execResult[3], 16)];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(execResult) {
                return [
                execResult[1],
                execResult[2] / 100,
                execResult[3] / 100,
                execResult[4]];
            }
        }],

        // jQuery.Color( )
        color = jQuery.Color = function(color, green, blue, alpha) {
            return new jQuery.Color.fn.parse(color, green, blue, alpha);
        },
        spaces = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },

            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        propTypes = {
            "byte": {
                floor: true,
                max: 255
            },
            "percent": {
                max: 1
            },
            "degrees": {
                mod: 360,
                floor: true
            }
        },
        support = color.support = {},

        // element for support tests
        supportElem = jQuery("<p>")[0],

        // colors = jQuery.Color.names
        colors,

        // local aliases of functions called often
        each = jQuery.each;

    // determine rgba support immediately
    supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
    support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;

    // define cache name and alpha properties
    // for rgba and hsla spaces
    each(spaces, function(spaceName, space) {
        space.cache = "_" + spaceName;
        space.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        };
    });

    function clamp(value, prop, allowEmpty) {
        var type = propTypes[prop.type] || {};

        if (value == null) {
            return (allowEmpty || !prop.def) ? null : prop.def;
        }

        // ~~ is an short way of doing floor for positive numbers
        value = type.floor ? ~~value : parseFloat(value);

        // IE will pass in empty strings as value for alpha,
        // which will hit this case
        if (isNaN(value)) {
            return prop.def;
        }

        if (type.mod) {
            // we add mod before modding to make sure that negatives values
            // get converted properly: -10 -> 350
            return (value + type.mod) % type.mod;
        }

        // for now all property types without mod have min and max
        return 0 > value ? 0 : type.max < value ? type.max : value;
    }

    function stringParse(string) {
        var inst = color(),
            rgba = inst._rgba = [];

        string = string.toLowerCase();

        each(stringParsers, function(i, parser) {
            var parsed,
            match = parser.re.exec(string),
                values = match && parser.parse(match),
                spaceName = parser.space || "rgba";

            if (values) {
                parsed = inst[spaceName](values);

                // if this was an rgba parse the assignment might happen twice
                // oh well....
                inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                rgba = inst._rgba = parsed._rgba;

                // exit each( stringParsers ) here because we matched
                return false;
            }
        });

        // Found a stringParser that handled it
        if (rgba.length) {

            // if this came from a parsed string, force "transparent" when alpha is 0
            // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
            if (rgba.join() === "0,0,0,0") {
                jQuery.extend(rgba, colors.transparent);
            }
            return inst;
        }

        // named colors
        return colors[string];
    }

    color.fn = jQuery.extend(color.prototype, {
        parse: function(red, green, blue, alpha) {
            if (red === undefined) {
                this._rgba = [null, null, null, null];
                return this;
            }
            if (red.jquery || red.nodeType) {
                red = jQuery(red).css(green);
                green = undefined;
            }

            var inst = this,
                type = jQuery.type(red),
                rgba = this._rgba = [];

            // more than 1 argument specified - assume ( red, green, blue, alpha )
            if (green !== undefined) {
                red = [red, green, blue, alpha];
                type = "array";
            }

            if (type === "string") {
                return this.parse(stringParse(red) || colors._default);
            }

            if (type === "array") {
                each(spaces.rgba.props, function(key, prop) {
                    rgba[prop.idx] = clamp(red[prop.idx], prop);
                });
                return this;
            }

            if (type === "object") {
                if (red instanceof color) {
                    each(spaces, function(spaceName, space) {
                        if (red[space.cache]) {
                            inst[space.cache] = red[space.cache].slice();
                        }
                    });
                } else {
                    each(spaces, function(spaceName, space) {
                        var cache = space.cache;
                        each(space.props, function(key, prop) {

                            // if the cache doesn't exist, and we know how to convert
                            if (!inst[cache] && space.to) {

                                // if the value was null, we don't need to copy it
                                // if the key was alpha, we don't need to copy it either
                                if (key === "alpha" || red[key] == null) {
                                    return;
                                }
                                inst[cache] = space.to(inst._rgba);
                            }

                            // this is the only case where we allow nulls for ALL properties.
                            // call clamp with alwaysAllowEmpty
                            inst[cache][prop.idx] = clamp(red[key], prop, true);
                        });

                        // everything defined but alpha?
                        if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
                            // use the default of 1
                            inst[cache][3] = 1;
                            if (space.from) {
                                inst._rgba = space.from(inst[cache]);
                            }
                        }
                    });
                }
                return this;
            }
        },
        is: function(compare) {
            var is = color(compare),
                same = true,
                inst = this;

            each(spaces, function(_, space) {
                var localCache,
                isCache = is[space.cache];
                if (isCache) {
                    localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                    each(space.props, function(_, prop) {
                        if (isCache[prop.idx] != null) {
                            same = (isCache[prop.idx] === localCache[prop.idx]);
                            return same;
                        }
                    });
                }
                return same;
            });
            return same;
        },
        _space: function() {
            var used = [],
                inst = this;
            each(spaces, function(spaceName, space) {
                if (inst[space.cache]) {
                    used.push(spaceName);
                }
            });
            return used.pop();
        },
        transition: function(other, distance) {
            var end = color(other),
                spaceName = end._space(),
                space = spaces[spaceName],
                startColor = this.alpha() === 0 ? color("transparent") : this,
                start = startColor[space.cache] || space.to(startColor._rgba),
                result = start.slice();

            end = end[space.cache];
            each(space.props, function(key, prop) {
                var index = prop.idx,
                    startValue = start[index],
                    endValue = end[index],
                    type = propTypes[prop.type] || {};

                // if null, don't override start value
                if (endValue === null) {
                    return;
                }
                // if null - use end
                if (startValue === null) {
                    result[index] = endValue;
                } else {
                    if (type.mod) {
                        if (endValue - startValue > type.mod / 2) {
                            startValue += type.mod;
                        } else if (startValue - endValue > type.mod / 2) {
                            startValue -= type.mod;
                        }
                    }
                    result[index] = clamp((endValue - startValue) * distance + startValue, prop);
                }
            });
            return this[spaceName](result);
        },
        blend: function(opaque) {
            // if we are already opaque - return ourself
            if (this._rgba[3] === 1) {
                return this;
            }

            var rgb = this._rgba.slice(),
                a = rgb.pop(),
                blend = color(opaque)._rgba;

            return color(jQuery.map(rgb, function(v, i) {
                return (1 - a) * blend[i] + a * v;
            }));
        },
        toRgbaString: function() {
            var prefix = "rgba(",
                rgba = jQuery.map(this._rgba, function(v, i) {
                    return v == null ? (i > 2 ? 1 : 0) : v;
                });

            if (rgba[3] === 1) {
                rgba.pop();
                prefix = "rgb(";
            }

            return prefix + rgba.join() + ")";
        },
        toHslaString: function() {
            var prefix = "hsla(",
                hsla = jQuery.map(this.hsla(), function(v, i) {
                    if (v == null) {
                        v = i > 2 ? 1 : 0;
                    }

                    // catch 1 and 2
                    if (i && i < 3) {
                        v = Math.round(v * 100) + "%";
                    }
                    return v;
                });

            if (hsla[3] === 1) {
                hsla.pop();
                prefix = "hsl(";
            }
            return prefix + hsla.join() + ")";
        },
        toHexString: function(includeAlpha) {
            var rgba = this._rgba.slice(),
                alpha = rgba.pop();

            if (includeAlpha) {
                rgba.push(~~ (alpha * 255));
            }

            return "#" + jQuery.map(rgba, function(v) {

                // default to 0 when nulls exist
                v = (v || 0).toString(16);
                return v.length === 1 ? "0" + v : v;
            }).join("");
        },
        toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
        }
    });
    color.fn.parse.prototype = color.fn;

    // hsla conversions adapted from:
    // https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

    function hue2rgb(p, q, h) {
        h = (h + 1) % 1;
        if (h * 6 < 1) {
            return p + (q - p) * h * 6;
        }
        if (h * 2 < 1) {
            return q;
        }
        if (h * 3 < 2) {
            return p + (q - p) * ((2 / 3) - h) * 6;
        }
        return p;
    }

    spaces.hsla.to = function(rgba) {
        if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
            return [null, null, null, rgba[3]];
        }
        var r = rgba[0] / 255,
            g = rgba[1] / 255,
            b = rgba[2] / 255,
            a = rgba[3],
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            diff = max - min,
            add = max + min,
            l = add * 0.5,
            h, s;

        if (min === max) {
            h = 0;
        } else if (r === max) {
            h = (60 * (g - b) / diff) + 360;
        } else if (g === max) {
            h = (60 * (b - r) / diff) + 120;
        } else {
            h = (60 * (r - g) / diff) + 240;
        }

        // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
        // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
        if (diff === 0) {
            s = 0;
        } else if (l <= 0.5) {
            s = diff / add;
        } else {
            s = diff / (2 - add);
        }
        return [Math.round(h) % 360, s, l, a == null ? 1 : a];
    };

    spaces.hsla.from = function(hsla) {
        if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
            return [null, null, null, hsla[3]];
        }
        var h = hsla[0] / 360,
            s = hsla[1],
            l = hsla[2],
            a = hsla[3],
            q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
            p = 2 * l - q;

        return [
        Math.round(hue2rgb(p, q, h + (1 / 3)) * 255),
        Math.round(hue2rgb(p, q, h) * 255),
        Math.round(hue2rgb(p, q, h - (1 / 3)) * 255),
        a];
    };


    each(spaces, function(spaceName, space) {
        var props = space.props,
            cache = space.cache,
            to = space.to,
            from = space.from;

        // makes rgba() and hsla()
        color.fn[spaceName] = function(value) {

            // generate a cache for this space if it doesn't exist
            if (to && !this[cache]) {
                this[cache] = to(this._rgba);
            }
            if (value === undefined) {
                return this[cache].slice();
            }

            var ret,
            type = jQuery.type(value),
                arr = (type === "array" || type === "object") ? value : arguments,
                local = this[cache].slice();

            each(props, function(key, prop) {
                var val = arr[type === "object" ? key : prop.idx];
                if (val == null) {
                    val = local[prop.idx];
                }
                local[prop.idx] = clamp(val, prop);
            });

            if (from) {
                ret = color(from(local));
                ret[cache] = local;
                return ret;
            } else {
                return color(local);
            }
        };

        // makes red() green() blue() alpha() hue() saturation() lightness()
        each(props, function(key, prop) {
            // alpha is included in more than one space
            if (color.fn[key]) {
                return;
            }
            color.fn[key] = function(value) {
                var vtype = jQuery.type(value),
                    fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName),
                    local = this[fn](),
                    cur = local[prop.idx],
                    match;

                if (vtype === "undefined") {
                    return cur;
                }

                if (vtype === "function") {
                    value = value.call(this, cur);
                    vtype = jQuery.type(value);
                }
                if (value == null && prop.empty) {
                    return this;
                }
                if (vtype === "string") {
                    match = rplusequals.exec(value);
                    if (match) {
                        value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
                    }
                }
                local[prop.idx] = value;
                return this[fn](local);
            };
        });
    });

    // add cssHook and .fx.step function for each named hook.
    // accept a space separated string of properties
    color.hook = function(hook) {
        var hooks = hook.split(" ");
        each(hooks, function(i, hook) {
            jQuery.cssHooks[hook] = {
                set: function(elem, value) {
                    var parsed, curElem,
                    backgroundColor = "";

                    if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
                        value = color(parsed || value);
                        if (!support.rgba && value._rgba[3] !== 1) {
                            curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                            while (
                            (backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
                                try {
                                    backgroundColor = jQuery.css(curElem, "backgroundColor");
                                    curElem = curElem.parentNode;
                                } catch (e) {}
                            }

                            value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
                        }

                        value = value.toRgbaString();
                    }
                    try {
                        elem.style[hook] = value;
                    } catch (e) {
                        // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
                    }
                }
            };
            jQuery.fx.step[hook] = function(fx) {
                if (!fx.colorInit) {
                    fx.start = color(fx.elem, hook);
                    fx.end = color(fx.end);
                    fx.colorInit = true;
                }
                jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
            };
        });

    };

    color.hook(stepHooks);

    jQuery.cssHooks.borderColor = {
        expand: function(value) {
            var expanded = {};

            each(["Top", "Right", "Bottom", "Left"], function(i, part) {
                expanded["border" + part + "Color"] = value;
            });
            return expanded;
        }
    };

    // Basic color names only.
    // Usage of any of the other color names requires adding yourself or including
    // jquery.color.svg-names.js.
    colors = jQuery.Color.names = {
        // 4.1. Basic color keywords
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",

        // 4.2.3. "transparent" color keyword
        transparent: [null, null, null, 0],

        _default: "#ffffff"
    };

})(jQuery);
